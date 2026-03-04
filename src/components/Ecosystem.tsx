import { ECOSYSTEM, SITE } from '@/lib/constants';

const icons: Record<string, JSX.Element> = {
  wallet: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="17" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
  explorer: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  js: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
    </svg>
  ),
  cli: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M6 10l4 2-4 2M12 14h4" />
    </svg>
  ),
  contracts: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </svg>
  ),
  faucet: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6M12 12v2M12 18v4" />
      <circle cx="12" cy="12" r="2" />
      <path d="M8 8h8M6 18h12" />
    </svg>
  ),
  docs: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      <path d="M8 7h8M8 11h6" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
};

export default function Ecosystem() {
  return (
    <section className="py-24 px-6 border-t border-white/5" id="ecosystem">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ecosystem & Tools
          </h2>
          <p className="text-qfc-text/50 max-w-xl mx-auto">
            A complete suite of developer tools and infrastructure for building on QFC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ECOSYSTEM.map((item) => (
            <a
              key={item.repo}
              href={`${SITE.github}/${item.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center gap-4 p-5 rounded-xl bg-qfc-card border border-white/5"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-qfc-primary/10 text-qfc-primary flex items-center justify-center">
                {icons[item.icon]}
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold truncate">{item.name}</h3>
                <p className="text-xs text-qfc-text/40 truncate">{item.description}</p>
              </div>
              <svg className="ml-auto flex-shrink-0 w-4 h-4 text-qfc-text/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
