'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <nav className="bg-black/40 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10 shadow-2xl">
        <ul className="flex items-center justify-between gap-1">
          <li>
            <Link 
              href="/" 
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white/90 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="#about" 
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white/90 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#work" 
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white/90 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg"
            >
              Work
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white/90 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg flex items-center gap-1.5"
            >
              More
              <svg 
                className={`w-3.5 h-3.5 transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {moreOpen && (
              <div className="absolute top-full mt-3 right-0 bg-black/90 backdrop-blur-xl rounded-3xl border border-white/10 py-2 min-w-[180px] shadow-2xl">
                <Link 
                  href="#services" 
                  className="block px-6 py-3 text-sm font-medium text-white/90 hover:bg-white hover:text-black transition-all duration-300 first:rounded-t-3xl last:rounded-b-3xl"
                >
                  Services
                </Link>
                <Link 
                  href="#contact" 
                  className="block px-6 py-3 text-sm font-medium text-white/90 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Contact
                </Link>
                <Link 
                  href="#team" 
                  className="block px-6 py-3 text-sm font-medium text-white/90 hover:bg-white hover:text-black transition-all duration-300 first:rounded-t-3xl last:rounded-b-3xl"
                >
                  Team
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link 
              href="#book" 
              className="px-6 py-2.5 rounded-full text-sm font-medium bg-white text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl ml-1"
            >
              Book a Call
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
