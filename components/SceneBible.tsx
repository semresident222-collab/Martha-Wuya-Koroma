import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const DOORS = [
  {
    n: 'Door One',
    title: 'The Building',
    system: 'Corporate approval',
    body: 'Aduhelm, and what it means when a regulatory pathway bends toward the institution instead of the patient. A building you can walk into and not find the exit.',
    motif: 'building',
  },
  {
    n: 'Door Two',
    title: 'The Willow',
    system: 'Systemic harm',
    body: 'Regulatory failure as something that grows: slow, structural, rooted. The damage is not an event. It is a condition the system keeps watering.',
    motif: 'willow',
  },
  {
    n: 'Door Three',
    title: 'The Mask',
    system: 'Neurodivergent masking',
    body: 'What it costs to be legible to a system that was never calibrated for you. The performance of fitting, and the data that performance erases.',
    motif: 'mask',
  },
];

function Motif({ kind }: { kind: string }) {
  // Each door carries its own emblem, drawn in gilt line.
  if (kind === 'building') {
    return (
      <svg viewBox="0 0 64 80" fill="none" className="h-16 w-12 text-gilt" aria-hidden="true">
        <path d="M8 79V20L32 4l24 16v59" stroke="currentColor" strokeWidth="1.1" />
        <path d="M20 79V44h24v35" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <path d="M28 79V58h8v21" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <line x1="14" y1="33" x2="50" y2="33" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      </svg>
    );
  }
  if (kind === 'willow') {
    return (
      <svg viewBox="0 0 64 80" fill="none" className="h-16 w-12 text-gilt" aria-hidden="true">
        <path d="M32 79V34" stroke="currentColor" strokeWidth="1.1" />
        <path d="M32 34C32 20 22 14 14 10M32 34c0-14 10-20 18-24" stroke="currentColor" strokeWidth="0.9" />
        <path d="M16 12c-2 12-4 22-3 34M26 8c-1 14-2 28 0 40M38 8c1 14 2 28 0 40M48 12c2 12 4 22 3 34" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
      </svg>
    );
  }
  // mask
  return (
    <svg viewBox="0 0 64 80" fill="none" className="h-16 w-12 text-gilt" aria-hidden="true">
      <path d="M32 6c16 0 22 10 22 26 0 18-10 30-22 30S10 50 10 32C10 16 16 6 32 6Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M20 30c3-3 7-3 10 0M34 30c3-3 7-3 10 0" stroke="currentColor" strokeWidth="0.9" />
      <path d="M32 42v6" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

export default function SceneBible() {
  return (
    <section id="scene-bible" className="bg-parchment px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader
          index="02"
          eyebrow="Selected Work"
          title="The Scene Bible"
          intro="An interactive film in three parts, on pharmaceutical regulatory failure and the neurodivergent experience of being processed by systems. Three doors. Three systems. Built with Remotion."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {DOORS.map((d, i) => (
            <Reveal key={d.n} delay={i * 90}>
              <article tabIndex={0} className="door group relative h-full overflow-hidden rounded-[3px] border border-rule bg-parchment-deep/30 transition-all duration-500 hover:border-gilt hover:shadow-[0_24px_50px_-24px_rgba(166,124,61,0.5)] focus-within:border-gilt focus:border-gilt focus:outline-none">
                {/* The door panel: two leaves that part on hover, tap, or focus */}
                <span
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/2 bg-espresso transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-full group-focus:-translate-x-full group-active:-translate-x-full"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/2 bg-espresso transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full group-focus:translate-x-full group-active:translate-x-full"
                  aria-hidden="true"
                />
                {/* Seam + handle hint on the closed door */}
                <span
                  className="pointer-events-none absolute inset-y-0 left-1/2 z-20 -ml-px w-px bg-gilt/30 transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-[140%] -translate-y-1/2 font-mono text-[0.6rem] uppercase tracking-eyebrow text-gilt/70 transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0"
                  aria-hidden="true"
                >
                  Open
                </span>

                {/* The room behind the door */}
                <div className="relative z-0 flex h-full flex-col px-6 py-10 md:px-7 md:py-12">
                  <Motif kind={d.motif} />
                  <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-eyebrow text-ink-muted">
                    {d.n}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-eyebrow text-gilt">
                    {d.system}
                  </p>
                  <p className="mt-5 font-body text-sm leading-relaxed text-ink-soft">
                    {d.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
