import { getDictionary, Locale } from "@/lib/dictionary";
import { cookies } from "next/headers";
import { DayNightBackground } from "@/components/DayNightBackground";
import Header from "@/components/Header";
import BookForm from "@/components/BookForm";
import Footer from "@/components/Footer";

export default async function BookPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("NEXT_LOCALE")?.value || "en") as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <DayNightBackground />
      <Header lang={lang} dict={dict} />
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-32 font-sans ">
        <BookForm dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
