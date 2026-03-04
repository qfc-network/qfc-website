import { ARCHITECTURE_LAYERS } from '@/lib/constants';

export default function Architecture() {
  return (
    <section className="py-24 px-6 border-t border-white/5" id="architecture">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Layered Architecture
          </h2>
          <p className="text-qfc-text/50 max-w-xl mx-auto">
            A modular, layered design that separates concerns for maximum flexibility and performance.
          </p>
        </div>

        <div className="space-y-4">
          {ARCHITECTURE_LAYERS.map((layer, i) => (
            <div
              key={layer.name}
              className="card-hover relative overflow-hidden rounded-xl border border-white/5 bg-qfc-card p-6 flex items-center gap-6"
            >
              {/* Color bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: layer.color }}
              />

              {/* Layer number */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold"
                style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
              >
                L{ARCHITECTURE_LAYERS.length - i}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">{layer.name}</h3>
                <p className="text-sm text-qfc-text/50">{layer.description}</p>
              </div>

              {/* Connection line */}
              {i < ARCHITECTURE_LAYERS.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                  <svg width="2" height="16" viewBox="0 0 2 16">
                    <line x1="1" y1="0" x2="1" y2="16" stroke="rgba(79,195,247,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
