'use client';

import { useState, useEffect } from 'react';

interface CookieBannerProps {
  dict: {
    title: string;
    description: string;
    acceptAll: string;
    declineAll: string;
    learnMore: string;
  };
}

export default function CookieBanner({ dict }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Small delay so it slides in after the page loads
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={`
        fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-2xl px-4
        transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="
        bg-black/60 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.6)]
        px-6 py-5
        flex flex-col sm:flex-row items-start sm:items-center gap-4
      ">
        {/* Cookie icon */}
        <div className="text-3xl flex-shrink-0">🍪</div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm mb-1">{dict.title}</p>
          <p className="text-white/60 text-xs leading-relaxed">
            {dict.description}{' '}
            <a
              href="/privacy"
              className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
            >
              {dict.learnMore}
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="
              flex-1 sm:flex-none
              px-4 py-2 rounded-full text-xs font-medium
              text-white/70 border border-white/15
              hover:border-white/30 hover:text-white
              transition-all duration-200
            "
          >
            {dict.declineAll}
          </button>
          <button
            onClick={accept}
            className="
              flex-1 sm:flex-none
              px-5 py-2 rounded-full text-xs font-semibold
              bg-gradient-to-r from-purple-600 to-purple-400
              hover:from-purple-500 hover:to-purple-300
              text-white shadow-lg shadow-purple-900/40
              transition-all duration-200
            "
          >
            {dict.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
