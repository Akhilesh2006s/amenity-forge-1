import { NextRequest, NextResponse } from 'next/server';
import { getDb, COLLECTIONS } from '@/lib/db';
import { Application } from '@/lib/models';
import { isAuthenticated } from '@/lib/auth';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { google } from 'googleapis';
import { Readable } from 'stream';

// GET - Fetch all applications (admin only)
export async function GET(request: NextRequest) {
  try {
    const isAdmin = await isAuthenticated();
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized', applications: [] },
        { status: 401 }
      );
    }

    const db = await getDb();
    const searchParams = request.nextUrl.searchParams;
    const jobId = searchParams.get('jobId');

    let query: any = {};
    if (jobId) {
      query.jobId = jobId;
    }

    const applications = await db
      .collection<Application>(COLLECTIONS.APPLICATIONS)
      .find(query)
      .sort({ submittedAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, applications }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching applications:', error);
    
    // Check if it's a MongoDB connection error
    if (error?.message?.includes('Mongo URI') || error?.message?.includes('environment variables')) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Database connection not configured. Please add MONGO_URI to environment variables.',
          applications: [] 
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to fetch applications', applications: [] },
      { status: 500 }
    );
  }
}

// POST - Submit a new application (public)
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const resume = formData.get('resume') as File;

    if (!fullName || !email || !phone || !jobId || !resume) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        { success: false, message: 'Resume must be PDF, PNG, or JPEG' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'Resume file size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Convert uploaded file to Buffer
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    let resumeUrl: string;

    // Prefer Google Drive if credentials are configured
    const driveEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const driveKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
    const driveFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (driveEmail && driveKey && driveFolderId) {
      try {
        const auth = new google.auth.JWT(
          driveEmail,
          undefined,
          driveKey.replace(/\\n/g, '\n'),
          ['https://www.googleapis.com/auth/drive.file']
        );

        const drive = google.drive({ version: 'v3', auth });

        const fileMetadata = {
          name: resume.name,
          parents: [driveFolderId],
        };

        const media = {
          mimeType: resume.type,
          body: Readable.from(buffer),
        };

        const driveResponse = await drive.files.create({
          requestBody: fileMetadata,
          media,
          fields: 'id, webViewLink',
        });

        const fileId = driveResponse.data.id;
        const webViewLink = driveResponse.data.webViewLink;

        resumeUrl =
          webViewLink ||
          (fileId
            ? `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk`
            : '');
      } catch (driveError) {
        console.error('Error uploading resume to Google Drive:', driveError);
        // Fallback to local file system if Drive upload fails
        const fileExtension = resume.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(7)}.${fileExtension}`;

        try {
          const fs = require('fs');
          const uploadsDir = join(process.cwd(), 'public', 'uploads');
          if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
          }
          const uploadPath = join(uploadsDir, fileName);
          await writeFile(uploadPath, buffer);
          resumeUrl = `/uploads/${fileName}`;
        } catch (fileError) {
          const base64Data = buffer.toString('base64');
          resumeUrl = `data:${resume.type};base64,${base64Data}`;
        }
      }
    } else {
      // No Drive credentials: use local file system or base64 fallback
      const fileExtension = resume.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(7)}.${fileExtension}`;

      try {
        const fs = require('fs');
        const uploadsDir = join(process.cwd(), 'public', 'uploads');
        if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
        }
        const uploadPath = join(uploadsDir, fileName);
        await writeFile(uploadPath, buffer);
        resumeUrl = `/uploads/${fileName}`;
      } catch (fileError) {
        const base64Data = buffer.toString('base64');
        resumeUrl = `data:${resume.type};base64,${base64Data}`;
      }
    }

    const db = await getDb();
    const application: Application = {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      location: location || '',
      coverLetter: coverLetter || '',
      resumeUrl,
      resumeFileName: resume.name,
      status: 'pending',
      submittedAt: new Date(),
    };

    const result = await db.collection<Application>(COLLECTIONS.APPLICATIONS).insertOne(application);

    return NextResponse.json(
      { success: true, application: { ...application, _id: result.insertedId.toString() } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
