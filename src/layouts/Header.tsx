import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
] as const;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex  bg-white/90 backdrop-blur-sm py-4">
        <div className="flex w-full justify-between mx-auto max-w-6xl px-4">
          <a className="font-medium" href="#">
            vajutar
          </a>

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
      </header>
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
              className="text-2xl font-medium py-2 uppercase"
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
