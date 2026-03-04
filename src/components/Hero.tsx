import { SITE } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-qfc-primary/20 bg-qfc-primary/5 text-qfc-primary text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-qfc-primary animate-pulse" />
          Testnet Live
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 glow-text">
          The Future of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-qfc-primary to-qfc-accent">
            Decentralized Computing
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-qfc-text/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          {SITE.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${SITE.docsUrl}/getting-started/introduction`}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-qfc-primary to-qfc-accent text-qfc-bg font-semibold text-sm hover:opacity-90 transition-opacity glow"
          >
            Get Started
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-qfc-text/10 text-qfc-text/80 font-medium text-sm hover:border-qfc-primary/30 hover:text-qfc-primary transition-colors"
          >
            <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
