import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

const ADMIN_EMAIL = 'amenityforge@gmail.com';
const ADMIN_PASSWORD = 'Amenityjobs@2026';

export async function verifyAdmin(email: string, password: string): Promise<boolean> {
  if (email === ADMIN_EMAIL) {
    // Direct comparison for simplicity
    return password === ADMIN_PASSWORD;
  }
  return false;
}

export async function createSession() {
  const cookieStore = await cookies();
  cookieStore.set('admin-auth', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('admin-auth');
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin-auth');
  return authCookie?.value === 'authenticated';
}
