import { DayNightBackground } from "@/components/DayNightBackground";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { getDictionary, Locale } from "@/lib/dictionary";
import { cookies } from 'next/headers';

export default async function AboutPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('NEXT_LOCALE')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <DayNightBackground />
      <Header lang={lang} dict={dict} />
      <AboutSection lang={lang} dict={dict} />
      <Footer lang={lang} dict={dict} />
    </>
  );
}
