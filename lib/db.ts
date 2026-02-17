import clientPromise from './mongodb';
import { Db } from 'mongodb';

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db();
}

// Collections
export const COLLECTIONS = {
  JOBS: 'jobs',
  APPLICATIONS: 'applications',
  ADMIN: 'admin',
} as const;
