'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PhoneInput from './PhoneInput';

// ─────────────────────────────────────────────────────────────
// TO ACTIVATE EMAIL DELIVERY:
// 1. Go to https://formspree.io and create a FREE account
// 2. Create a new form → copy the Form ID (e.g. "xyzabcde")
// 3. Replace YOUR_FORM_ID below with that ID
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'xwvnzyln';

export default function BookForm({ dict }: { dict: any }) {
  const b = dict.booking;
  const router = useRouter();
  const [form, setForm] = useState({ phone: '', name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-3">{b.successTitle}</h2>
        <p className="text-gray-400 leading-relaxed mb-8">{b.successText}</p>
        <button
          onClick={() => router.push('/')}
          className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-200"
        >
          ← {dict.nav.home}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg">
      {/* Card */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/15 border border-green-500/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">{b.free}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">{b.title}</h1>
          <p className="text-gray-400 mt-2 leading-relaxed">{b.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Phone — priority */}
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">
              {b.phone} <span className="text-blue-400">*</span>
            </label>
            <PhoneInput
              value={form.phone}
              onChange={val => setForm(prev => ({ ...prev, phone: val }))}
              placeholder={b.phonePlaceholder}
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">
              {b.name} <span className="text-blue-400">*</span>
            </label>
            <input
              type="text" name="name" required
              value={form.name} onChange={handleChange}
              placeholder={b.namePlaceholder}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">
              {b.email} <span className="text-blue-400">*</span>
            </label>
            <input
              type="email" name="email" required
              value={form.email} onChange={handleChange}
              placeholder={b.emailPlaceholder}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">
              {b.message} <span className="text-blue-400">*</span>
            </label>
            <textarea
              name="message" required rows={4}
              value={form.message} onChange={handleChange}
              placeholder={b.messagePlaceholder}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 transition-all duration-200 resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-white/90 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:scale-100 text-base mt-1"
          >
            {status === 'submitting' ? b.submitting : b.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
