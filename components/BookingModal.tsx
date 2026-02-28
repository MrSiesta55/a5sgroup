'use client';

import { useState, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────
// TO ACTIVATE EMAIL DELIVERY:
// 1. Go to https://formspree.io and create a FREE account
// 2. Create a new form → copy the Form ID (e.g. "xyzabcde")
// 3. Replace YOUR_FORM_ID below with that ID
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORM_ID';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  dict: any;
}

export default function BookingModal({ open, onClose, dict }: BookingModalProps) {
  const b = dict.booking;

  const [form, setForm] = useState({ phone: '', name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          phone: form.phone,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ phone: '', name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className="relative z-10 w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-2xl p-8 font-sans"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200"
          aria-label={b.close}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          /* ── Success state ── */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{b.successTitle}</h3>
            <p className="text-gray-400 leading-relaxed">{b.successText}</p>
            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200"
            >
              {b.close}
            </button>
          </div>
        ) : (
          /* ── Form state ── */
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/15 border border-green-500/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">{b.free}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white leading-tight">{b.title}</h2>
              <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">{b.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Phone — priority field */}
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">
                  {b.phone} <span className="text-blue-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={b.phonePlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">
                  {b.name} <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={b.namePlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">
                  {b.email} <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={b.emailPlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">
                  {b.message} <span className="text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={b.messagePlaceholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-white text-black font-bold py-3.5 rounded-xl text-sm hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 mt-1"
              >
                {status === 'submitting' ? b.submitting : b.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
