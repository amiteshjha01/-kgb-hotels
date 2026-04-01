import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jose from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret';

export default async function proxy(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  const isLoginPage = request.nextUrl.pathname === '/admin/login';
  const isSeedPage = request.nextUrl.pathname === '/api/seed'; // Temporary seed route

  if (isLoginPage || isSeedPage) {
    if (token) {
        try {
            await jose.jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
            if (isLoginPage) return NextResponse.redirect(new URL('/admin', request.url));
        } catch (e) {
            // Token invalid or expired, continue to login page
        }
    }
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
      
      const role = payload.role as string;
      if (role !== 'admin' && role !== 'super_admin') {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error('Middleware JWT Error:', error);
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('auth-token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
