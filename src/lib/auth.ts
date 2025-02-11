import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export interface TokenPayload {
  userId: string;
  iat: number;
  exp: number;
}

export async function verifyAuth(token: string): Promise<TokenPayload> {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    ) as TokenPayload;
    
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export function getAuthToken(): string | null {
  const cookieStore = cookies();
  return cookieStore.get('token')?.value || null;
}

export async function getCurrentUser() {
  try {
    const token = getAuthToken();
    if (!token) return null;

    const decoded = await verifyAuth(token);
    return decoded.userId;
  } catch (error) {
    return null;
  }
}
