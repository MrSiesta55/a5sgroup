'use client';

import { useState, useRef } from 'react';
import { Locale } from '@/lib/dictionary';

type ServiceModal = 'web-dev' | 'hosting' | 'api' | null;

interface ServicesSectionProps {
  lang: Locale;
  dict: any;
}

export default function ServicesSection({ lang, dict }: ServicesSectionProps) {
  const [activeModal, setActiveModal] = useState<ServiceModal>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="relative z-10 flex items-start justify-center min-h-screen font-sans px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="max-w-7xl w-full">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5 sm:mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></div>
              <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide uppercase">
                {lang === 'sv' ? 'Vad vi erbjuder' : 'What we offer'}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight tracking-tight bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
              {dict.services.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4 leading-relaxed">
              {dict.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Web Development */}
            <div style={{animation: 'fade-slide-up 0.6s cubic-bezier(0.16,1,0.3,1) 0ms both'}} className="group bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 duration-500 transition-[transform,box-shadow,background-color,border-color] hover:bg-white/10 hover:border-purple-500/40 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-200 transition-colors duration-300">{dict.services.webDev.title}</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6">
                {dict.services.webDev.description}
              </p>
              <button
                onClick={() => setActiveModal('web-dev')}
                className="px-5 sm:px-6 py-2 sm:py-2.5 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/30 hover:border-purple-400/60 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                {dict.services.learnMore}
              </button>
            </div>

            {/* Hosting & Maintenance */}
            <div style={{animation: 'fade-slide-up 0.6s cubic-bezier(0.16,1,0.3,1) 150ms both'}} className="group bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 duration-500 transition-[transform,box-shadow,background-color,border-color] hover:bg-white/10 hover:border-blue-500/40 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-200 transition-colors duration-300">{dict.services.hosting.title}</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6">
                {dict.services.hosting.description}
              </p>
              <button
                onClick={() => setActiveModal('hosting')}
                className="px-5 sm:px-6 py-2 sm:py-2.5 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/30 hover:border-blue-400/60 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {dict.services.learnMore}
              </button>
            </div>

            {/* Backend Development */}
            <div style={{animation: 'fade-slide-up 0.6s cubic-bezier(0.16,1,0.3,1) 300ms both'}} className="group bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 duration-500 transition-[transform,box-shadow,background-color,border-color] hover:bg-white/10 hover:border-green-500/40 hover:scale-[1.03] hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-200 transition-colors duration-300">{dict.services.backend.title}</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-6">
                {dict.services.backend.description}
              </p>
              <button
                onClick={() => setActiveModal('api')}
                className="px-5 sm:px-6 py-2 sm:py-2.5 bg-green-500/20 hover:bg-green-500/40 border border-green-400/30 hover:border-green-400/60 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
              >
                {dict.services.learnMore}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 md:p-14 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Web Development Modal */}
            {activeModal === 'web-dev' && (
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">Web Development</h2>
                <p className="text-gray-400 mb-6 sm:mb-10">Choose the package that fits your business size.</p>
                
                <div className="grid md:grid-cols-2 gap-5 sm:gap-7 mb-8 sm:mb-10">
                  {/* Small Business */}
                  <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-300 transition-colors duration-300">Small Business</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 leading-relaxed">Perfect for small businesses looking to establish their online presence.</p>
                    
                    <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                      {['Lightning-fast loading speeds','Mobile-responsive design','SEO optimized for search engines','Delivered within one week','Easy content updates'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-gray-200">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-xs sm:text-sm text-gray-500 border-t border-white/10 pt-4">
                      Ideal for restaurants, salons, consultants, contractors, and local services.
                    </p>
                  </div>

                  {/* Big Business */}
                  <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors duration-300">Big Business</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 leading-relaxed">For businesses with unique requirements and advanced functionality.</p>
                    
                    <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                      {['User authentication & accounts','Database integration','Backend systems','Admin dashboards','Mobile apps (Android/iOS)','Third-party integrations'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-gray-200">
                          <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-xs sm:text-sm text-gray-500 border-t border-white/10 pt-4">
                      For e-commerce, booking systems, membership sites, and complex workflows.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="#contact"
                    className="group inline-flex items-center gap-3 w-full sm:w-auto justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                    onClick={() => setActiveModal(null)}
                  >
                    {dict.services.getStarted}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            )}

            {activeModal === 'hosting' && (
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">Hosting & Maintenance</h2>
                <p className="text-gray-400 mb-6 sm:mb-10">We keep your website fast, secure, and always online.</p>
                
                <div className="grid md:grid-cols-2 gap-5 sm:gap-7 mb-8 sm:mb-10">
                  {/* Small Business */}
                  <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300">Small Business</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 leading-relaxed">Hosted on our high-performance servers for maximum control.</p>
                    
                    <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                      {['Faster updates & changes','Direct server control','24/7 uptime monitoring','Regular backups','SSL certificates included'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-gray-200">
                          <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-xs sm:text-sm text-gray-500 border-t border-white/10 pt-4">
                      Best for clients who want quick updates and personalized support.
                    </p>
                  </div>

                  {/* Big Business */}
                  <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors duration-300">Big Business</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 leading-relaxed">Premium cloud platforms like AWS or similar providers.</p>
                    
                    <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                      {['Global reach & fast speeds','Automatic scaling','99.9% uptime guarantee','Enterprise-grade security','Handles high traffic'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-gray-200">
                          <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-xs sm:text-sm text-gray-500 border-t border-white/10 pt-4">
                      Best for businesses expecting high traffic or global audience.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="#contact"
                    className="group inline-flex items-center gap-3 w-full sm:w-auto justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
                    onClick={() => setActiveModal(null)}
                  >
                    {dict.services.getStarted}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            )}

            {activeModal === 'api' && (
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">Backend Development</h2>
                <p className="text-gray-400 mb-6 sm:mb-10">Powerful backend systems built to scale with your needs.</p>
                
                <div className="grid md:grid-cols-2 gap-5 sm:gap-7 mb-8 sm:mb-10">
                  {/* Standard Backend */}
                  <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-green-300 transition-colors duration-300">Small Business</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 leading-relaxed">I'll build your backend system based on your requirements.</p>
                    
                    <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                      {['Direct communication','Custom APIs & databases','You tell me your needs','Flexible & affordable','Ongoing support'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-gray-200">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-xs sm:text-sm text-gray-500 border-t border-white/10 pt-4">
                      Great for most projects with standard backend needs.
                    </p>
                  </div>

                  {/* Big Business */}
                  <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors duration-300">Big Business</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-6 leading-relaxed">We can hire specialized backend experts for complex projects.</p>
                    
                    <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                      {['Expert-level developers','Advanced architecture','Complex systems','Enterprise-grade solutions','Best practices & documentation'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-gray-200">
                          <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-xs sm:text-sm text-gray-500 border-t border-white/10 pt-4">
                      For large-scale or highly specialized backend requirements.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="#contact"
                    className="group inline-flex items-center gap-3 w-full sm:w-auto justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30"
                    onClick={() => setActiveModal(null)}
                  >
                    {dict.services.getStarted}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
