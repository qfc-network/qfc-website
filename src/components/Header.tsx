'use client';

import { useState } from 'react';
import { BASE_PATH, NAV_LINKS, SITE } from '@/lib/constants';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-qfc-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={`${BASE_PATH}/logo.svg`} alt="QFC" className="w-9 h-9 rounded-full" />
          <span className="text-lg font-bold text-qfc-text tracking-wide">QFC Network</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-qfc-text/70 hover:text-qfc-primary transition-colors"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${SITE.docsUrl}/getting-started/introduction`}
            className="text-sm px-4 py-2 rounded-lg bg-qfc-primary/10 text-qfc-primary border border-qfc-primary/20 hover:bg-qfc-primary/20 transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-qfc-text/70 hover:text-qfc-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-white/5 bg-qfc-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-qfc-text/70 hover:text-qfc-primary transition-colors"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${SITE.docsUrl}/getting-started/introduction`}
            className="text-sm px-4 py-2 rounded-lg bg-qfc-primary/10 text-qfc-primary border border-qfc-primary/20 text-center"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}
