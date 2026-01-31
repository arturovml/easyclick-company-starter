import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsStrip } from "./components/StatsStrip";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { ProcessSteps } from "./components/ProcessSteps";
import { CTABlock } from "./components/CTABlock";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <FeaturesGrid />
        <ProcessSteps />
        <CTABlock />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}