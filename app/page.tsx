import { DayNightBackground } from "@/components/DayNightBackground";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { getDictionary, Locale } from "@/lib/dictionary";
import { cookies } from 'next/headers';

export default async function Home() {
  // Get language from cookie
  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <DayNightBackground />
      <Header lang={lang} dict={dict} />
      
      {/* Section 1: Hero - Animated stars */}
      <div className="relative z-10 flex items-center justify-center min-h-screen font-sans px-4 sm:px-6">
        <div className="text-center max-w-5xl">
          {/* Subtle tag */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs sm:text-sm text-white/80 font-medium">{dict.hero.badge}</span>
          </div>
          
          {/* Main headline with gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight px-2">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
              {dict.hero.title1}
            </span>
            <span className="block bg-gradient-to-r from-purple-200 via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {dict.hero.title2}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            {dict.hero.subtitle}
            <span className="block mt-2 text-white/70">
              {dict.hero.subtitle2}
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a 
              href="/work" 
              className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-2"
            >
              {dict.hero.cta1}
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/book" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-base sm:text-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 text-center"
            >
              {dict.hero.cta2}
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="hidden sm:flex absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/50">
              <span className="text-sm font-medium">
                {lang === 'sv' ? 'Scrolla för att utforska' : 'Scroll to explore'}
              </span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Services - Shooting stars appear */}
      <ServicesSection lang={lang} dict={dict} />

      {/* Section 3: Tech Stack - Nebula clouds appear */}
      <div className="relative z-10 flex items-center justify-center py-16 sm:py-24 font-sans px-4 sm:px-6">
        <div className="max-w-7xl w-full">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
              {lang === 'sv' ? 'Teknologier Vi Behärskar' : 'Technologies We Master'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              {lang === 'sv' 
                ? 'Banbrytande verktyg och ramverk för att bygga exceptionella produkter'
                : 'Cutting-edge tools and frameworks to build exceptional products'}
            </p>
          </div>

          {/* ── Tech Marquee: two rows scrolling opposite directions ── */}
          {(() => {
            const row1 = [
              { name: 'React',      icon: <svg viewBox="0 0 24 24" fill="none" className="w-full h-full"><circle cx="12" cy="12" r="2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/></svg> },
              { name: 'Next.js',    icon: <span className="text-white text-4xl font-bold leading-none">▲</span> },
              { name: 'TypeScript', icon: <div className="w-full h-full bg-[#3178C6] rounded-xl flex items-center justify-center"><span className="text-white text-2xl font-bold">TS</span></div> },
              { name: 'Node.js',    icon: <svg viewBox="0 0 24 24" fill="#68A063" className="w-full h-full"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.5 16.5a.26.26 0 01-.12-.21V7.71c0-.09.04-.17.12-.21l7.44-4.29c.07-.04.16-.04.23 0l7.44 4.29c.08.04.12.12.12.21v8.58c0 .08-.04.17-.12.21l-7.44 4.29c-.07.04-.16.04-.23 0l-1.89-1.07c-.06-.03-.14-.03-.2 0-.5.28-.59.32-1.08.48-.13.04-.32.1.07.29l2.49 1.47c.25.14.52.21.79.21s.54-.07.79-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2z"/></svg> },
              { name: 'Python',     icon: <svg viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v.96H6.545S2 8.8 2 16.005s3.967 6.918 3.967 6.918h2.365v-3.32s-.13-3.967 3.904-3.967h6.675s3.772.06 3.772-3.645V5.784s.557-3.684-6.798-3.684zm-3.78 2.126c.7 0 1.27.57 1.27 1.27s-.57 1.27-1.27 1.27-1.27-.57-1.27-1.27.57-1.27 1.27-1.27z" fill="#3776ab"/><path d="M16.115 29.9c7.1 0 6.651-3.07 6.651-3.07v-3.19h-6.752v-.96h9.441S30 23.2 30 15.995s-3.967-6.918-3.967-6.918h-2.365v3.32s.13 3.967-3.904 3.967h-6.675s-3.772-.06-3.772 3.645v6.207s-.557 3.684 6.798 3.684zm3.78-2.126c-.7 0-1.27-.57-1.27-1.27s.57-1.27 1.27-1.27 1.27.57 1.27 1.27-.57 1.27-1.27 1.27z" fill="#ffda4b"/></svg> },
              { name: 'Docker',     icon: <svg viewBox="0 0 24 24" fill="#2496ED" className="w-full h-full"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.072-.329-.462-.739-.878-1.219-1.162-.18-.115-.39-.21-.61-.26a6.293 6.293 0 00-.752-.11.243.243 0 00-.23.11c-.44.49-.73 1.082-.845 1.702-.072.365-.094.746-.052 1.115-.015.005-.027.015-.04.02-.124.044-.275.085-.41.125-.63.19-1.463.415-2.356.415H.185C.05 11.407 0 11.494 0 11.607c.003.07.025.14.063.202.26.434.524.84.826 1.214.36.44.757.84 1.183 1.195.612.527 1.306.995 2.063 1.387.754.385 1.556.687 2.384.887.82.194 1.669.294 2.52.296 1.142.017 2.28-.134 3.38-.448.91-.257 1.783-.614 2.596-1.066.8-.448 1.546-.975 2.223-1.572.69-.622 1.293-1.334 1.794-2.12.424-.675.733-1.417.917-2.195l.008-.037c.099-.446.215-.89.348-1.326a4.36 4.36 0 00-.005-1.704 2.93 2.93 0 00-.39-.95 2.205 2.205 0 00-.683-.687l-.058-.04z"/></svg> },
            ];
            const row2 = [
              { name: 'MongoDB',    icon: <svg viewBox="0 0 32 32" className="w-full h-full"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#599636"/><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" fill="#6cac48"/><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></svg> },
              { name: 'Redis',      icon: <svg viewBox="0 0 32 32" className="w-full h-full"><path d="M29.71 13.5l-14.21 5.95-14.21-5.95 14.21-5.95z" fill="#a41e11"/><path d="M1.29 13.5l14.21 5.95v5.95l-14.21-5.95z" fill="#a41e11"/><path d="M29.71 13.5l-14.21 5.95v5.95l14.21-5.95z" fill="#7a0c00"/><path d="M29.71 10.5l-14.21 5.95-14.21-5.95 14.21-5.95z" fill="#d82c20"/><path d="M1.29 10.5l14.21 5.95v5.95l-14.21-5.95z" fill="#a41e11"/><path d="M29.71 10.5l-14.21 5.95v5.95l14.21-5.95z" fill="#7a0c00"/></svg> },
              { name: 'Tailwind',   icon: <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-full h-full"><path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg> },
              { name: 'Git',        icon: <svg viewBox="0 0 24 24" fill="#F05032" className="w-full h-full"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.924 3.039 1.837 1.837 0 01-2.6 0 1.838 1.838 0 01-.398-1.991l-2.48-2.48-.001 6.479a1.838 1.838 0 01.484 3.039 1.837 1.837 0 01-2.599 0 1.838 1.838 0 01.484-3.039V8.966a1.838 1.838 0 01-.997-2.408l-2.722-2.722L.455 10.913a1.55 1.55 0 000 2.188l10.478 10.478a1.55 1.55 0 002.188 0l10.425-10.425a1.55 1.55 0 000-2.188"/></svg> },
              { name: 'Nginx',      icon: <svg viewBox="0 0 32 32" className="w-full h-full"><path d="M15.948 2.463L2.43 10.496v11.43l13.518 7.611 13.518-7.611v-11.43L15.948 2.463zm10.626 18.104l-10.626 5.99-10.626-5.99V11.433l10.626-5.99 10.626 5.99v9.134z" fill="#009639"/><path d="M19.446 12.622v6.755l-7.048-6.755v6.755l-2.24-1.261v-6.755l7.048 6.755v-6.755l2.24 1.261z" fill="#009639"/></svg> },
              { name: 'MariaDB',    icon: <svg viewBox="0 0 32 32" className="w-full h-full"><circle cx="16" cy="16" r="14" fill="#003545"/><text x="16" y="21" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">DB</text></svg> },
            ];
            const card = (tech: {name: string; icon: React.ReactNode}, i: number) => (
              <div key={i} className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:bg-white/10 hover:border-white/30 transition-[background-color,border-color] duration-300 cursor-default">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">{tech.icon}</div>
                <span className="text-white font-semibold text-xs sm:text-sm">{tech.name}</span>
              </div>
            );
            return (
              <>
                {/* Row 1 — scrolls left */}
                <div className="marquee-track overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  <div className="flex gap-4 sm:gap-5 w-max" style={{animation: 'marquee 25s linear infinite'}}>
                    {[...row1, ...row1].map(card)}
                  </div>
                </div>
                {/* Row 2 — scrolls right */}
                <div className="marquee-track overflow-hidden mt-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  <div className="flex gap-4 sm:gap-5 w-max" style={{animation: 'marquee-reverse 30s linear infinite'}}>
                    {[...row2, ...row2].map(card)}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>

      <Footer lang={lang} dict={dict} />
    </>
  );
}
