export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10 text-center text-sm">
      <p className="font-[var(--font-heading)] tracking-wide">
        Made by Meiling & Damian
      </p>
      <p className="mt-2 opacity-70">
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
