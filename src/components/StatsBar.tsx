import { STATS } from '@/lib/constants';

export default function StatsBar() {
  return (
    <section className="py-12 px-6 border-y border-white/5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl sm:text-4xl font-bold text-qfc-primary glow-text">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-qfc-text/50 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
