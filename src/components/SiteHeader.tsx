import { useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience / Education", "#experience"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${profile.name}, home`} onClick={closeMenu}>
        <span className="brand-name">Jaber Khan Afrooz</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="button button-small button-outline header-resume" href={profile.resume} download>
          <span>Resume</span>
          <ArrowDownToLine size={14} aria-hidden="true" />
        </a>
        <button
          className="icon-button mobile-menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        inert={!menuOpen}
      >
        {navigation.map(([label, href], index) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            style={{ transitionDelay: menuOpen ? `${index * 35}ms` : "0ms" }}
          >
            {label}
          </a>
        ))}
        <a className="mobile-resume-link" href={profile.resume} download onClick={closeMenu}>
          Download resume <ArrowDownToLine size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
