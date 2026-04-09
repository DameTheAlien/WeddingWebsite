"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/details", label: "Details" },
  { href: "/faq", label: "FAQ" },
  { href: "/travel", label: "Travel" },
  { href: "/registry", label: "Registry" },
  { href: "/photos", label: "Our Story" },
  { href: "/parties", label: "Wedding Party" },
  { href: "/rsvp", label: "RSVP" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#faf7f2]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-[var(--font-heading)] text-xl tracking-tight transition hover:opacity-70"
          onClick={() => setMenuOpen(false)}
        >
          Meiling & Damian
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-black/15 bg-white/50 px-4 py-2 text-sm font-medium transition hover:border-black/25 hover:bg-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white/60 text-xl transition hover:border-black/25 hover:bg-white md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-[#faf7f2] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-black/15 bg-white/50 px-4 py-3 text-center text-sm font-medium transition hover:border-black/25 hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}