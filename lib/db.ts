import getClientPromise from './mongodb';
import { Db } from 'mongodb';

export async function getDb(): Promise<Db> {
  try {
    const client = await getClientPromise();
    return client.db();
  } catch (error) {
    if (error instanceof Error && error.message.includes('Mongo URI')) {
      throw new Error('MongoDB connection string is missing. Please add MONGO_URI to your environment variables in Vercel.');
    }
    throw error;
  }
}

// Collections
export const COLLECTIONS = {
  JOBS: 'jobs',
  APPLICATIONS: 'applications',
  ADMIN: 'admin',
} as const;
