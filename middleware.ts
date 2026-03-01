import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'sv'];

export function middleware(request: NextRequest) {
  // Check if user already has a language cookie (set by language switcher)
  const cookieLang = request.cookies.get('NEXT_LOCALE')?.value;

  // If cookie exists and is valid, respect user's choice
  if (cookieLang && locales.includes(cookieLang)) {
    return NextResponse.next();
  }

  // No cookie = default to Swedish
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', 'sv', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
  });
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
