'use client';

import Link from 'next/link';

interface ContactSectionProps {
  lang: string;
  dict: any;
}

export default function ContactSection({ lang, dict }: ContactSectionProps) {
  const c = dict.contactSection;

  return (
    <section id="contact" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md p-10 sm:p-16 text-center">

          {/* Glow blobs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide uppercase">{c.eyebrow}</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              {c.title}
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
              {c.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-base hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-2xl shadow-white/10 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {c.bookCta}
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-xs text-white/40">{c.trust}</p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-white/25 mt-8">
          © {new Date().getFullYear()} A5S Group · Falköping, Sweden
        </p>
      </div>

    </section>
  );
}
