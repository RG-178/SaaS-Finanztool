'use client';

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const handleScroll = () => {
      document.body.classList.toggle("scrolling", window.scrollY > 100)
    };

    window.addEventListener("scroll", handleScroll);
    document.body.classList.toggle("scrolling", window.scrollY > 100);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  return (
    <div className="font-sans text-gray-800 ">
      {/* Scroll to Top Button */}
      <button onClick={() => {window.scrollTo({top: 0,behavior: "smooth"})}} className="scroll-to-top flex fixed justify-center items-center bottom-[40px] right-[40px] bg-white cursor-pointer rounded-[8px] hover:bg-gray-100 z-2 !border-none !outline-none" style={{ boxShadow: '0px 0px 24px rgba(0,0,0,0.3)' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-8 border-b bg-white shadow-sm h-[100px] fixed top-0 left-0 w-[100vw] z-1">
        <div className="text-xl font-bold">Florlix</div>
        <nav className="space-x-4 text-sm">
          <a href="#start" className="hover:underline">Start</a>
          <a href="#funktionen" className="hover:underline">Funktionen</a>
          <a href="#preise" className="hover:underline">Preise</a>
          <a href="#login" className="hover:underline">Login</a>
        </nav>
      </header>

      <section className="bg-blue-100 h-[100vh] w-full mt-[100px] overflow-hidden relative">
        <img src="./banner.png" alt="" className="w-full" />
        <div className="absolute top-0 left-0 text-center bg-[rgba(0,0,0,0.35)] w-full h-full flex justify-center items-center flex-col text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Einfach Rechnungen schreiben. Datenschutz inklusive.</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">Florlix ist das Schweizer Finanztool für Freelancer – modern, übersichtlich und auf deine Bedürfnisse zugeschnitten.</p>
          <div className="flex gap-[24px]">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm md:text-base hover:bg-blue-700 transition">Kostenlos starten</button>
          <button className="text-blue-600 border px-6 py-3 rounded-xl text-sm md:text-base hover:bg-blue-700 hover:text-white hover:border-blue-700 transition">App Preview</button>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-blue-100 text-center py-4 px-2 text-sm text-blue-900 font-medium">
        <p>
          🎉 <strong>Launch-Angebot:</strong> Die ersten <strong>100 Nutzer</strong> erhalten <strong>alle Funktionen 6 Monate kostenlos</strong> – inklusive Steuerprognose & CH-Datenspeicherung.
          <br className="hidden sm:block" />
          Schnell sichern – solange der Start-Boost noch läuft! 🚀
        </p>
      </section>

      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Du bist Freelancer – kein Buchhalter.</h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700">
        Darum gibt dir Florlix genau das, was du brauchst: Rechnungen, Einnahmen, ein klarer Überblick – ohne Schnickschnack.
        Einfach. Schnell. Und komplett auf deine Selbstständigkeit zugeschnitten.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-[48px]">
          <div className="text-center p-4">
            <div className="text-4xl mb-2">📄</div>
            <h3 className="font-semibold mb-1">Rechnungen erstellen (PDF)</h3>
            <p className="text-sm text-gray-600">Professionelle Rechnungen in wenigen Klicks generieren.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="font-semibold mb-1">Einnahmen/Ausgaben</h3>
            <p className="text-sm text-gray-600">Behalte deine Finanzen stets im Blick.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-2">🧮</div>
            <h3 className="font-semibold mb-1">Steuerprognose</h3>
            <p className="text-sm text-gray-600">Planungssicherheit dank smarter Berechnungen.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="font-semibold mb-1">Kundenverwaltung</h3>
            <p className="text-sm text-gray-600">Alle Kundendaten zentral verwalten.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl mb-2">🇨🇭</div>
            <h3 className="font-semibold mb-1">CH-Datenspeicherung</h3>
            <p className="text-sm text-gray-600">Deine Daten sicher auf Servern in der Schweiz.</p>
          </div>
        </div>
      </section>

      {/* Preise Section */}
      <section id="preise" className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Transparente Preise</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="border rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Free</h3>
            <p className="text-3xl font-bold mb-4">Kostenlos</p>
            <p className="text-sm">Ideal zum Kennenlernen. Basisfunktionen inklusive.</p>
          </div>
          <div className="border rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Pro</h3>
            <p className="text-3xl font-bold mb-4">9 CHF/Monat</p>
            <p className="text-sm">Erweiterte Funktionen und schneller Support.</p>
          </div>
          <div className="border rounded-xl p-6 text-center shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Trust</h3>
            <p className="text-3xl font-bold mb-4">49 CHF/Monat</p>
            <p className="text-sm">Maximale Sicherheit mit CH-Server & Datenschutz.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 py-8 px-4 text-center text-sm">
        <div className="space-x-4 mb-2">
          <a href="#" className="hover:underline">Impressum</a>
          <a href="#" className="hover:underline">Datenschutz</a>
          <a href="https://www.linkedin.com" className="hover:underline" target="_blank">LinkedIn</a>
        </div>
        <p className="text-gray-600">© 2025 Florlix AG – Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}
