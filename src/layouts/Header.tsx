import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
] as const;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="my-4 flex">
      <div className="flex w-full justify-between border-b px-4 pb-4">
        <a href="#">vajutar</a>

        {/* Desktop */}
        <nav className="hidden space-x-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className="sm:hidden" onClick={() => setIsMenuOpen(true)}>
          <LuMenu size={24} />
        </button>
      </div>

      {/* Mobile */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-100 sm:hidden">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <LuX size={24} />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
