import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'sv'];
const defaultLocale = 'en';

// Extend NextRequest type to include geo property (available on Vercel)
type NextRequestWithGeo = NextRequest & {
  geo?: {
    country?: string;
    region?: string;
    city?: string;
  };
};

export function middleware(request: NextRequest) {
  // Check if user already has a language cookie
  const cookieLang = request.cookies.get('NEXT_LOCALE')?.value;
  
  // If cookie exists and is valid, continue
  if (cookieLang && locales.includes(cookieLang)) {
    return NextResponse.next();
  }

  // Get country from Vercel's geo header (IP-based detection)
  const geo = (request as NextRequestWithGeo).geo;
  const country = geo?.country || 'US';
  
  // Determine locale based on country
  // Sweden (SE) -> Swedish, everything else -> English
  let locale = country === 'SE' ? 'sv' : 'en';
  
  // Optional: Also check browser language as fallback
  const browserLang = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0];
  if (!geo && browserLang === 'sv') {
    locale = 'sv';
  }

  // Set the language cookie
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', locale, {
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
