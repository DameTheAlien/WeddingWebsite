import Link from "next/link";

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
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#faf7f2]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-[var(--font-heading)] text-xl tracking-tight hover:opacity-70 transition"
        >
          Meiling & Damian
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full b order border-black/15 bg-white/50 px-4 py-2 text-sm font-medium hover:bg-white hover:border-black/25 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
