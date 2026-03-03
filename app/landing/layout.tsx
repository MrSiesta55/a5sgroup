import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Göteborg Afro Barber | Professionell Barbershop",
  description: "Göteborg Afro Barber – Haircut, Fade & Skäggtrimning. Boka tid idag.",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
