import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const ENTRIES = [
  {
    kind: 'Peer-reviewed publication',
    title:
      'Evaluating the global landscape of suicide helpline services: a global survey across 105 countries',
    meta: 'Vaghela G, et al., & Global Suicide Prevention Network Collaborators (incl. Koroma M.W.). The Lancet Psychiatry, 12, 100–110 (2025).',
    href: 'https://doi.org/10.1016/S2215-0366(24)00354-7',
    hrefLabel: 'View on DOI',
  },
  {
    kind: 'Patent · Named inventor',
    title: 'Candidate Culture-Calibrated Digital Biomarker System',
    meta: 'Gebrauchsmuster, DPMA · May 2026',
  },
  {
    kind: 'Patent · Named inventor',
    title: 'GlaceGrip',
    meta: 'Gebrauchsmuster, DPMA · May 2026',
  },
  {
    kind: 'Patent · Named inventor',
    title: 'Bed Device with Integrated Weighing Function for Immobile Patients',
    meta: 'Gebrauchsmuster, DPMA · May 2026',
  },
  {
    kind: 'Preprint',
    title:
      'Designing from the Inside: Design Rationale for a Culture-Calibrated Digital Biomarker System for Adult ADHD Diagnosis',
    meta: 'Koroma, M.W. · Zenodo, May 2026',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="bg-espresso px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader
          index="03"
          eyebrow="Publications, Patents & Research"
          title="Building for what the data leaves out"
          intro="A peer-reviewed credit, filed patents, and preprints, most of it pointed at one question: how do you measure an experience a system was never designed to register?"
          dark
        />

        <div className="space-y-px overflow-hidden rounded-[2px] border border-espresso-rule bg-espresso-rule">
          {ENTRIES.map((e, i) => (
            <Reveal key={e.title} delay={i * 50}>
              <article className="bg-espresso-soft px-6 py-7 md:px-10 md:py-8">
                <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-gilt">
                  {e.kind}
                </p>
                <h3 className="mt-2 max-w-[52ch] font-display text-lg leading-snug text-parchment md:text-xl">
                  {e.title}
                </h3>
                <p className="mt-2 max-w-[60ch] font-body text-sm leading-relaxed text-parchment/55">
                  {e.meta}
                </p>
                {e.href && (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block font-mono text-xs uppercase tracking-eyebrow text-parchment/80 underline decoration-espresso-rule underline-offset-4 transition-colors hover:text-gilt hover:decoration-gilt"
                  >
                    {e.hrefLabel} &rarr;
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <a
            href="https://orcid.org/0000-0003-4152-3863"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-eyebrow text-parchment/80 transition-colors hover:text-gilt"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gilt" />
            ORCID 0000-0003-4152-3863 &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
