'use client';

import { useState } from 'react';

type ServiceModal = 'web-dev' | 'hosting' | 'api' | 'design' | null;

export default function ServicesSection() {
  const [activeModal, setActiveModal] = useState<ServiceModal>(null);

  return (
    <>
      <div className="relative z-10 flex items-center justify-center min-h-screen font-sans px-6">
        <div className="max-w-7xl w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional solutions for businesses of all sizes
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Web Development */}
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Professional websites for small businesses and custom web applications for complex needs.
              </p>
              <button
                onClick={() => setActiveModal('web-dev')}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Learn More →
              </button>
            </div>

            {/* Hosting & Maintenance */}
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Hosting & Maintenance</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Fast, reliable hosting on our servers. We keep your website online, secure, and up-to-date.
              </p>
              <button
                onClick={() => setActiveModal('hosting')}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Learn More →
              </button>
            </div>

            {/* Backend Development */}
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Backend Development</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Custom server-side solutions, databases, and APIs for advanced functionality.
              </p>
              <button
                onClick={() => setActiveModal('api')}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Learn More →
              </button>
            </div>

            {/* UI/UX Design */}
            <div className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/10">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Beautiful, user-friendly designs that work perfectly on all devices.
              </p>
              <button
                onClick={() => setActiveModal('design')}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
              >
                Learn More →
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
            className="bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Web Development Modal */}
            {activeModal === 'web-dev' && (
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Web Development</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Small Business */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Small Business</h3>
                    <p className="text-gray-300 mb-6">Perfect for small businesses looking to establish their online presence.</p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Lightning-fast loading speeds</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Mobile-responsive design</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>SEO optimized for search engines</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Delivered within one week</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Easy content updates</span>
                      </li>
                    </ul>
                    
                    <p className="text-sm text-gray-400">
                      Ideal for restaurants, salons, consultants, contractors, and local services.
                    </p>
                  </div>

                  {/* Big Business */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Big Business</h3>
                    <p className="text-gray-300 mb-6">For businesses with unique requirements and advanced functionality.</p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>User authentication & accounts</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Database integration</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Backend systems</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Admin dashboards</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Mobile apps (Android/iOS)</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Third-party integrations</span>
                      </li>
                    </ul>
                    
                    <p className="text-sm text-gray-400">
                      For e-commerce, booking systems, membership sites, and complex workflows.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="#contact" 
                    className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => setActiveModal(null)}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )}

            {/* Add other modals here as needed */}
            {activeModal === 'hosting' && (
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Hosting & Maintenance</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Our Servers */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Servers</h3>
                    <p className="text-gray-300 mb-6">Hosted on our high-performance servers for maximum control.</p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Faster updates & changes</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Direct server control</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>24/7 uptime monitoring</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Regular backups</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>SSL certificates included</span>
                      </li>
                    </ul>
                    
                    <p className="text-sm text-gray-400">
                      Best for clients who want quick updates and personalized support.
                    </p>
                  </div>

                  {/* Cloud Hosting */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Cloud Hosting</h3>
                    <p className="text-gray-300 mb-6">Premium cloud platforms like AWS or similar providers.</p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Global reach & fast speeds</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Automatic scaling</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>99.9% uptime guarantee</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Enterprise-grade security</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Handles high traffic</span>
                      </li>
                    </ul>
                    
                    <p className="text-sm text-gray-400">
                      Best for businesses expecting high traffic or global audience.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="#contact" 
                    className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => setActiveModal(null)}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )}

            {/* Backend Development Modal */}
            {activeModal === 'api' && (
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Backend Development</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Standard Backend */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Work With Me</h3>
                    <p className="text-gray-300 mb-6">I'll build your backend system based on your requirements.</p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Direct communication</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Custom APIs & databases</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>You tell me your needs</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Flexible & affordable</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Ongoing support</span>
                      </li>
                    </ul>
                    
                    <p className="text-sm text-gray-400">
                      Great for most projects with standard backend needs.
                    </p>
                  </div>

                  {/* Professional Backend */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Professional Team</h3>
                    <p className="text-gray-300 mb-6">We can hire specialized backend experts for complex projects.</p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Expert-level developers</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Advanced architecture</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Complex systems</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Enterprise-grade solutions</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Best practices & documentation</span>
                      </li>
                    </ul>
                    
                    <p className="text-sm text-gray-400">
                      For large-scale or highly specialized backend requirements.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="#contact" 
                    className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => setActiveModal(null)}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )}

            {/* UI/UX Design Modal */}
            {activeModal === 'design' && (
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">UI/UX Design</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Standard Design */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Work With Me</h3>
                    <p className="text-gray-300 mb-6">I'll design your website based on your brand and preferences.</p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Direct collaboration</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Clean, modern designs</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>You guide the vision</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Mobile-friendly layouts</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-pink-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fast turnaround</span>
                      </li>
                    </ul>
                    
                    <p className="text-sm text-gray-400">
                      Perfect for most business websites and applications.
                    </p>
                  </div>

                  {/* Professional Design */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Professional Designer</h3>
                    <p className="text-gray-300 mb-6">We can hire expert UI/UX designers for premium results.</p>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Professional UX research</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Custom illustrations</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Brand identity design</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Interactive prototypes</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Design system creation</span>
                      </li>
                    </ul>
                    
                    <p className="text-sm text-gray-400">
                      For brands that need premium, custom design work.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <a 
                    href="#contact" 
                    className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => setActiveModal(null)}
                  >
                    Get Started
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
