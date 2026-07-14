import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex border-b bg-white/80 py-4 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl justify-between px-4">
          <a className="font-heading font-bold" href="#">
            vajutar
          </a>

          {/* Desktop */}
          <nav className="hidden space-x-8 sm:flex font-heading font-bold">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button aria-label="Open menu" className="sm:hidden" onClick={() => setIsMenuOpen(true)}>
            <LuMenu size={24} />
          </button>
        </div>
      </header>
      {/* Mobile */}
      {isMenuOpen && (
        <nav className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white sm:hidden">
          <button
            aria-label="Close menu"
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
              className="font-heading py-2 text-2xl font-bold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}

export default Header;
