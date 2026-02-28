'use client';

interface AboutSectionProps {
  lang: string;
  dict: any;
}

export default function AboutSection({ lang, dict }: AboutSectionProps) {
  const a = dict.about;
  return (
    <section id="about" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide uppercase">{a.eyebrow}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
            {a.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {a.subtitle}{' '}
            <span className="text-white font-semibold">{a.location}</span>{' '}
            {a.subtitleEnd}
          </p>
        </div>

        {/* Team cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-14 sm:mb-20">

          {/* Mustafe — Developer */}
          <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-purple-500/40 transition-[background-color,border-color] duration-500 flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-gray-900 rounded-full"></span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Mustafe</h3>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">{a.mustafe.role}</span>
            <p className="text-sm text-gray-400 leading-relaxed">{a.mustafe.bio}</p>
          </div>

          {/* Faster — Business */}
          <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-cyan-500/40 transition-[background-color,border-color] duration-500 flex flex-col items-center text-center">
            <div className="relative mb-5">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-gray-900 rounded-full"></span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Faster</h3>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">{a.faster.role}</span>
            <p className="text-sm text-gray-400 leading-relaxed">{a.faster.bio}</p>
          </div>
        </div>

        {/* Values strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
              title: a.value1.title,
              desc: a.value1.desc,
            },
            {
              icon: <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              title: a.value2.title,
              desc: a.value2.desc,
            },
            {
              icon: <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
              title: a.value3.title,
              desc: a.value3.desc,
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 flex gap-4 items-start hover:border-white/20 transition-[border-color] duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
