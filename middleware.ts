import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/logout',
  '/api/auth/me',
];

// Routes that should redirect to home if user is authenticated
const authRoutes = ['/login', '/register'];

// Routes that require authentication
const protectedRoutes = ['/account', '/checkout', '/orders'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth_token')?.value;

  // Check if the current route is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );

  // Check if the current route is an auth route (login/register)
  const isAuthRoute = authRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );

  // For API routes, check the authorization header
  if (pathname.startsWith('/api')) {
    if (pathname.startsWith('/api/auth/')) {
      return NextResponse.next();
    }

    try {
      if (!token) {
        return new NextResponse(
          JSON.stringify({ message: 'Unauthorized' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Verify the JWT token
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET!)
      );

      return NextResponse.next();
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: 'Invalid or expired token' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // If it's a protected route and no token exists, redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If user is logged in and tries to access auth routes, redirect to home
  if (isAuthRoute && token) {
    const from = request.nextUrl.searchParams.get('from') || '/';
    return NextResponse.redirect(new URL(from, request.url));
  }

  // For public routes or if user has a valid token, continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
};
