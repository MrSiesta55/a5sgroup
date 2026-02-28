import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  lang: string;
  dict: any;
}

export default function Footer({ lang, dict }: FooterProps) {
  const nav = dict.nav;
  return (
    <footer className="relative z-10 border-t border-white/8 mt-4">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-0.5">
          <Link href="/">
            <Image
              src="/Footer logo transparent.png"
              alt="A5S Group"
              width={90}
              height={32}
              className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-0.5 flex-wrap justify-center">
          <Link href="/" className="px-2.5 py-1 text-xs text-white/50 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/8">
            {nav.home}
          </Link>
          <Link href="/about" className="px-2.5 py-1 text-xs text-white/50 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/8">
            {nav.about}
          </Link>
          <Link href="/work" className="px-2.5 py-1 text-xs text-white/50 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/8">
            {nav.work}
          </Link>
          <Link href="/book" className="px-2.5 py-1 text-xs text-white/50 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/8">
            {nav.bookCall}
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-white/25 text-xs text-center sm:text-right">
          © {new Date().getFullYear()} A5S Group
        </p>

      </div>
    </footer>
  );
}
