import { CODE_SNIPPET, SITE } from '@/lib/constants';

function highlightCode(code: string): string {
  return code
    .replace(/(import|from|const|await|new)/g, '<span class="token-keyword">$1</span>')
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="token-string">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="token-comment">$1</span>')
    .replace(/\b(QFCProvider|QFCWallet)\b/g, '<span class="token-function">$1</span>')
    .replace(/\.(fromMnemonic|getBalance|sendTransaction|parseQFC|log)\b/g, '.<span class="token-function">$1</span>')
    .replace(/(\$\{[^}]+\})/g, '<span class="token-property">$1</span>');
}

export default function DevQuickStart() {
  return (
    <section className="py-24 px-6 border-t border-white/5" id="quickstart">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Building in Minutes
          </h2>
          <p className="text-qfc-text/50 max-w-xl mx-auto">
            Install the JavaScript SDK and start interacting with QFC in just a few lines of code.
          </p>
        </div>

        {/* Install command */}
        <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-qfc-card border border-white/5 font-mono text-sm">
          <span className="text-qfc-primary select-none">$</span>
          <code className="text-qfc-text/80">npm install @qfc/sdk</code>
          <button
            className="ml-auto text-qfc-text/30 hover:text-qfc-primary transition-colors"
            title="Copy to clipboard"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
          </button>
        </div>

        {/* Code block */}
        <div className="code-block">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-3 text-xs text-qfc-text/30 font-mono">quickstart.ts</span>
          </div>
          <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightCode(CODE_SNIPPET) }} />
          </pre>
        </div>

        <div className="mt-8 text-center">
          <a
            href={`${SITE.docsUrl}/sdk/javascript/overview`}
            className="inline-flex items-center gap-2 text-sm text-qfc-primary hover:underline"
          >
            Read the full SDK documentation
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
