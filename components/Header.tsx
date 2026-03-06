'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/lib/dictionary';

interface HeaderProps {
  lang: Locale;
  dict: any;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
        <nav className="bg-black/40 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10 shadow-2xl">

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-between gap-0.5">
            <li>
              <Link href="/" className="px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap text-white/90 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg">
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link href="/about" className="px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap text-white/90 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg">
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/work" className="px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap text-white/90 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg">
                {dict.nav.work}
              </Link>
            </li>
            <li>
                          <Link href="/book" className="px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap text-white/90 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg">
                {dict.nav.contact}
              </Link>
            </li>
            <li>
              <LanguageSwitcher currentLang={lang} />
            </li>
            <li className="relative">
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap bg-white text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl ml-1"
              >
                📞 {dict.nav.bookCall}
              </button>
              {showPhone && (
                <div className="absolute right-0 top-full mt-3 bg-black/80 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-4 shadow-2xl z-50 min-w-max">
                  <p className="text-white/50 text-xs mb-1">{lang === 'sv' ? 'Ring oss på' : 'Call us at'}</p>
                  <a
                    href="tel:+46738901521"
                    className="text-white font-semibold text-lg tracking-wide hover:text-purple-300 transition-colors"
                  >
                    +46 73 890 15 21
                  </a>
                </div>
              )}
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-white/90">
              {dict.nav.home}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-black/90 backdrop-blur-xl rounded-3xl border border-white/10 py-4 shadow-2xl">
            <Link href="/about" className="block px-6 py-3 text-sm font-medium text-white/90 hover:bg-white hover:text-black transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
              {dict.nav.about}
            </Link>
            <Link href="/work" className="block px-6 py-3 text-sm font-medium text-white/90 hover:bg-white hover:text-black transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
              {dict.nav.work}
            </Link>
            <Link href="/book" className="block px-6 py-3 text-sm font-medium text-white/90 hover:bg-white hover:text-black transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
              {dict.nav.contact}
            </Link>
            <div className="border-t border-white/10 my-2" />
            <div className="px-3 py-2">
              <LanguageSwitcher currentLang={lang} />
            </div>
            <div className="px-3 py-2 mt-2">
              <a
                href="tel:+46738901521"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 rounded-full text-sm font-medium bg-white text-black transition-all duration-300 hover:bg-white/90"
              >
                📞 {dict.nav.bookCall} — +46 73 890 15 21
              </a>
            </div>
          </div>
        )}
      </header>

    </>
  );
}
