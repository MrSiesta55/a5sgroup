import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from 'next/headers';
import { Locale, getDictionary } from "@/lib/dictionary";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'sv';
  const isSv = lang === 'sv';

  const title = isSv
    ? "A5S Group | Webbutveckling & Digitala Lösningar — Sverige"
    : "A5S Group | Web Development & Digital Solutions — Sweden";

  const description = isSv
    ? "A5S Group är ett litet webbutvecklingsbolag i Sverige som bygger webbplatser, webbappar, hosting och digitala lösningar. Snabb leverans, transparent prissättning och gratis konsultation."
    : "A5S Group is a Swedish web development studio building custom websites, web apps, hosting, and digital solutions. Fast delivery, transparent pricing, and a free first consultation.";

  const ogDescription = isSv
    ? "Anpassade webbplatser, webbappar, hosting och digitala lösningar. Litet team, riktigt arbete, transparenta resultat."
    : "Custom websites, web apps, hosting, and digital solutions. Small team, real work, transparent results.";

  return {
    title,
    description,
    keywords: isSv
      ? ["webbutveckling", "Sverige", "webbdesign", "Next.js", "React", "hosting", "digitala lösningar", "UI/UX design", "backendutveckling", "Falköping"]
      : ["web development", "Sweden", "web design", "Next.js", "React", "hosting", "digital solutions", "UI/UX design", "backend development", "Falköping"],
    authors: [{ name: "A5S Group", url: "https://www.a5sgroup.com" }],
    openGraph: {
      title,
      description: ogDescription,
      url: "https://www.a5sgroup.com",
      siteName: "A5S Group",
      type: "website",
      locale: isSv ? "sv_SE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get language from cookie
  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value || 'sv') as Locale;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieBanner dict={dict.cookies} />
      </body>
    </html>
  );
}
