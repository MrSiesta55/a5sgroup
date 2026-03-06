export default function BarberLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Göteborg <span className="text-amber-500">Afro</span> Barber
          </span>
          <a
            href="tel:0790784861"
            className="px-5 py-2 bg-amber-500 text-white rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors"
          >
            Boka Nu
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt="Barbershop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Professionell Barbershop · Göteborg
          </p>
          <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6">
            Göteborg<br />
            <span className="text-amber-400">Afro Barber</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Skarp klippning. Ren stil. Varje gång.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0790784861"
              className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold text-lg hover:bg-amber-600 transition-colors"
            >
              📞 Boka tid — 0790 78 48 61
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
            >
              Se tjänster
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce flex flex-col items-center gap-1">
          <span className="text-xs">Scrolla</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Vad vi erbjuder</p>
            <h2 className="text-4xl font-black text-gray-900">Tjänster & Priser</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Haircut */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80"
                  alt="Haircut"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Haircut</h3>
                  <span className="text-2xl font-black text-amber-500">140 kr</span>
                </div>
                <p className="text-gray-500 text-sm">Professionell klippning anpassad efter din stil.</p>
              </div>
            </div>

            {/* Fade */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=600&q=80"
                  alt="Fade"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Fade</h3>
                  <span className="text-2xl font-black text-amber-500">200 kr</span>
                </div>
                <p className="text-gray-500 text-sm">Skarp fade-klippning för ett rent och modernt utseende.</p>
              </div>
            </div>

            {/* Beard Trim */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
                  alt="Beard Trim"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Beard Trim</h3>
                  <span className="text-2xl font-black text-amber-500">100 kr</span>
                </div>
                <p className="text-gray-500 text-sm">Formning och trimning av skägg för ett välvårdat look.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Vårt arbete</p>
            <h2 className="text-4xl font-black text-gray-900">Galleri</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80" alt="Gallery 1" className="w-full h-48 object-cover rounded-2xl hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80" alt="Gallery 2" className="w-full h-48 object-cover rounded-2xl hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80" alt="Gallery 3" className="w-full h-48 object-cover rounded-2xl hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?w=400&q=80" alt="Gallery 4" className="w-full h-48 object-cover rounded-2xl hover:opacity-90 transition-opacity" />
          </div>
        </div>
      </section>

      {/* ── HOURS & LOCATION ── */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-16">
          {/* Hours */}
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Öppettider</p>
            <h2 className="text-3xl font-black mb-8">När vi är öppna</h2>
            <div className="space-y-4">
              {[
                { day: "Måndag", time: "09:00 – 19:00" },
                { day: "Tisdag", time: "09:00 – 19:00" },
                { day: "Onsdag", time: "09:00 – 19:00" },
                { day: "Torsdag", time: "09:00 – 19:00" },
                { day: "Fredag", time: "09:00 – 19:00" },
                { day: "Lördag", time: "09:00 – 19:00" },
                { day: "Söndag", time: "Stängt" },
              ].map(({ day, time }) => (
                <div key={day} className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white/70">{day}</span>
                  <span className={`font-semibold ${time === "Stängt" ? "text-red-400" : "text-amber-400"}`}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Hitta oss</p>
            <h2 className="text-3xl font-black mb-8">Kontakt & Adress</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-amber-400">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Adress</p>
                  <p className="text-white/60">Stallmästaregatan, Göteborg</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-amber-400">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Telefon</p>
                  <a href="tel:0790784861" className="text-amber-400 hover:underline">0790 78 48 61</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-amber-400">🕐</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Promentur</p>
                  <p className="text-white/60">Mån–Lör 09:00–19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6 bg-amber-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Redo för en ny look?</h2>
          <p className="text-white/80 text-lg mb-8">Ring oss och boka din tid idag. Inga väntetider, bara resultat.</p>
          <a
            href="tel:0790784861"
            className="inline-block px-10 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            📞 Ring nu — 0790 78 48 61
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 bg-gray-950 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Göteborg Afro Barber · Stallmästaregatan, Göteborg</p>
        <p className="mt-1 text-xs">Website made by <span className="text-amber-500">A5S Group</span></p>
      </footer>

    </div>
  );
}
