import { NextRequest, NextResponse } from 'next/server';
import { getDb, COLLECTIONS } from '@/lib/db';
import { Job } from '@/lib/models';
import { isAuthenticated } from '@/lib/auth';

// GET - Fetch all active jobs (public) or all jobs (admin)
export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
    const searchParams = request.nextUrl.searchParams;
    const isAdmin = await isAuthenticated();
    const activeOnly = searchParams.get('active') === 'true' || !isAdmin;

    let query: any = {};
    if (activeOnly) {
      query.isActive = true;
    }

    const jobs = await db
      .collection<Job>(COLLECTIONS.JOBS)
      .find(query)
      .sort({ postedDate: -1 })
      .toArray();

    return NextResponse.json({ success: true, jobs }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching jobs:', error);
    
    // Check if it's a MongoDB connection error
    if (error?.message?.includes('Mongo URI') || error?.message?.includes('environment variables')) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Database connection not configured. Please add MONGO_URI to environment variables.',
          jobs: [] 
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Failed to fetch jobs', jobs: [] },
      { status: 500 }
    );
  }
}

// POST - Create a new job (admin only)
export async function POST(request: NextRequest) {
  try {
    const isAdmin = await isAuthenticated();
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, description, requirements, location, type, salary, department, deadline } = body;

    if (!title || !description || !location || !type) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const db = await getDb();
    const now = new Date();
    
    const job: Job = {
      title,
      description,
      requirements: requirements || '',
      location,
      type,
      salary: salary || '',
      department: department || '',
      postedDate: now,
      deadline: deadline ? new Date(deadline) : undefined,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    const result = await db.collection<Job>(COLLECTIONS.JOBS).insertOne(job);

    return NextResponse.json(
      { success: true, job: { ...job, _id: result.insertedId.toString() } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create job' },
      { status: 500 }
    );
  }
}
