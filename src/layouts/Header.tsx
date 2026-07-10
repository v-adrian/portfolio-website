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
    <header className="flex my-4">
      <div className="flex w-full max-w-6xl mx-auto justify-between px-4">
        <a href="#">vajutar</a>

        {/* Desktop */}
        <nav className="hidden sm:flex space-x-8">
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
        <nav className="bg-slate-100 sm:hidden fixed inset-0 flex flex-col items-center justify-center z-50">
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