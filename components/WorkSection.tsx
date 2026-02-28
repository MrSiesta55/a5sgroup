'use client';

import Link from 'next/link';

interface WorkSectionProps {
  lang: string;
  dict: any;
}

export default function WorkSection({ lang, dict }: WorkSectionProps) {
  const w = dict.work;
  const projects: { title: string; description: string; tags: string[]; url: string; year: string; logo?: string }[] = w.projects;

  return (
    <section id="work" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide uppercase">{w.eyebrow}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
            {w.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            {w.subtitle}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} liveLabel={w.liveLink} />
          ))}

          {/* Coming soon placeholder cards */}
          {[1, 2].map(n => (
            <div
              key={`soon-${n}`}
              className="bg-white/3 border border-white/8 rounded-3xl p-7 flex flex-col items-center justify-center min-h-[280px] gap-3 opacity-40"
            >
              <div className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-sm text-white/40 font-medium">Coming soon</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 sm:mt-20 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{w.moreTitle}</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{w.moreText}</p>
          </div>
          <Link
            href="/book"
            className="flex-shrink-0 px-8 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-xl"
          >
            {w.moreCta}
          </Link>
        </div>

      </div>

    </section>
  );
}

/* ── Single project card ── */
function ProjectCard({ project, liveLabel }: { project: { title: string; description: string; tags: string[]; url: string; year: string; logo?: string }; liveLabel: string }) {
  const domain = new URL(project.url).hostname.replace('www.', '');

  return (
    <div className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col">

      {/* Visual header */}
      <div className="relative h-44 bg-gradient-to-br from-white/8 to-white/3 flex items-center justify-center">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 text-center flex flex-col items-center gap-2">
          {project.logo ? (
            <img
              src={project.logo}
              alt={project.title + ' logo'}
              className="w-16 h-16 object-contain drop-shadow-xl"
            />
          ) : (
            <span className="text-5xl font-black text-white drop-shadow-xl">{project.title[0].toUpperCase()}</span>
          )}
          <p className="text-sm font-semibold text-white/80">{domain}</p>
        </div>
        {/* Year badge */}
        <span className="absolute top-4 right-4 text-xs font-semibold text-white/70 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/8 text-white/60 border border-white/10 font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Live link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          {liveLabel}
        </a>
      </div>
    </div>
  );
}
