import { NextRequest, NextResponse } from 'next/server';
import { getDb, COLLECTIONS } from '@/lib/db';
import { Application } from '@/lib/models';
import { isAuthenticated } from '@/lib/auth';
import { writeFile } from 'fs/promises';
import { join } from 'path';

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

    // Save file to public/uploads directory
    // Note: For production (Vercel), consider using cloud storage (S3, Cloudinary, etc.)
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const fileExtension = resume.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`;
    
    let resumeUrl: string;
    try {
      // Try to save to file system (works in development)
      const fs = require('fs');
      const uploadsDir = join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }
      const uploadPath = join(uploadsDir, fileName);
      await writeFile(uploadPath, buffer);
      resumeUrl = `/uploads/${fileName}`;
    } catch (fileError) {
      // If file system write fails (e.g., on Vercel), store as base64 in DB
      // In production, you should use cloud storage instead
      const base64Data = buffer.toString('base64');
      resumeUrl = `data:${resume.type};base64,${base64Data}`;
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
