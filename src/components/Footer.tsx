import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="QFC" className="w-7 h-7 rounded-full" />
          <span className="text-sm font-semibold text-qfc-text/80">QFC Network</span>
        </div>

        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-qfc-text/40 hover:text-qfc-primary transition-colors"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-qfc-text/30">
          &copy; {new Date().getFullYear()} QFC Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
