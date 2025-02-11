import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAuth } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  // Paths that require authentication
  const authPaths = ['/dashboard'];
  
  // Check if the current path requires authentication
  const requiresAuth = authPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (requiresAuth) {
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    try {
      // Verify the token
      await verifyAuth(token);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/protected/:path*',
  ],
};
