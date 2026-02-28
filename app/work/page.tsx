import { DayNightBackground } from "@/components/DayNightBackground";
import Header from "@/components/Header";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";
import { getDictionary, Locale } from "@/lib/dictionary";
import { cookies } from "next/headers";

export default async function WorkPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <DayNightBackground />
      <Header lang={lang} dict={dict} />
      <main className="pt-32">
        <WorkSection lang={lang} dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
