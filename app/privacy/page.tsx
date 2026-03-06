import { cookies } from 'next/headers';
import { getDictionary, Locale } from '@/lib/dictionary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default async function PrivacyPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value || 'sv') as Locale;
  const dict = await getDictionary(lang);
  const p = dict.privacy;

  return (
    <>
      <Header lang={lang} dict={dict} />

      <main className="relative z-10 min-h-screen pt-36 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors"
          >
            ← {lang === 'sv' ? 'Tillbaka' : 'Back'}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4">
              {p.title}
            </h1>
            <p className="text-white/40 text-sm">{p.lastUpdated}</p>
          </div>

          {/* Intro */}
          <p className="text-white/70 text-base leading-relaxed mb-10 border-l-2 border-purple-500/40 pl-5">
            {p.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {p.sections.map((section, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
              >
                <h2 className="text-white font-semibold text-lg mb-3">{section.title}</h2>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-12 text-center text-white/30 text-xs">
            © {new Date().getFullYear()} A5S Group.{' '}
            {lang === 'sv' ? 'Alla rättigheter förbehållna.' : 'All rights reserved.'}
          </p>
        </div>
      </main>

      <Footer lang={lang} dict={dict} />
    </>
  );
}
