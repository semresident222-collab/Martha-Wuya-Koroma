import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import QuoteThreshold from '@/components/QuoteThreshold';
import About from '@/components/About';
import ClinicalResearch from '@/components/ClinicalResearch';
import SceneBible from '@/components/SceneBible';
import Publications from '@/components/Publications';
import Background from '@/components/Background';
import Writing from '@/components/Writing';
import Doorway from '@/components/Doorway';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative z-10">
      <Nav />
      <Hero />

      {/* Threshold: the operating principle, in her voice */}
      <QuoteThreshold
        dark
        attribution
        lines={['I think in systems.', 'I write in clarity.', 'I build for impact.']}
      />

      <About />
      <ClinicalResearch />
      <SceneBible />
      <Publications />
      <Background />
      <Writing />

      {/* Threshold: the why, right before the doorway out */}
      <QuoteThreshold
        lines={[
          'The human story always precedes the data.',
          'The why behind everything I build.',
        ]}
      />

      <Doorway />
      <Contact />
    </main>
  );
}
