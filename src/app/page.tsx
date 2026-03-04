import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Features from '@/components/Features';
import Architecture from '@/components/Architecture';
import Ecosystem from '@/components/Ecosystem';
import DevQuickStart from '@/components/DevQuickStart';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative z-10">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Architecture />
        <Ecosystem />
        <DevQuickStart />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
