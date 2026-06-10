import Image from 'next/image';
import Reveal from './Reveal';

const CREDENTIALS = [
  { label: 'MD candidate', value: 'November 2026' },
  { label: 'Good Clinical Practice', value: 'ICH-GCP · E6(R3)' },
  { label: 'Peer-reviewed', value: 'The Lancet Psychiatry, 2025' },
  { label: 'Trial experience', value: 'Phase 3 operations' },
  { label: 'Named inventor', value: 'Three filed patents (DPMA)' },
  { label: 'Founder', value: 'MetaVoxa & GlaceGrip' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_1.25fr] md:gap-16">
        {/* Portrait — the conference trench: a story, not a headshot */}
        <Reveal className="order-2 md:order-1">
          <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-[2px] border border-rule md:sticky md:top-28">
            <Image
              src="/images/martha-trench.jpg"
              alt="Martha Wuya Koroma at a conference"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 80vw, 30vw"
            />
          </div>
        </Reveal>

        {/* Voice */}
        <div className="order-1 md:order-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-eyebrow text-gilt">
              Who is Martha
            </p>
            <p className="mt-6 font-display text-2xl font-light leading-snug text-ink md:text-3xl">
              Perceptive, principled, and probably already three steps ahead. I
              see patterns where others see noise.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 space-y-5 max-w-prose font-body text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                I trained in medicine because I wanted to understand suffering.
                What I found was that suffering is rarely just biological. It
                lives in systems, in language, in how we organise ourselves
                around each other.
              </p>
              <p>
                So my work runs along a single thread, even when the titles
                don&rsquo;t match. Clinical research taught me how systems are
                meant to work. Patents and a doctoral research programme taught
                me how to build for the people those systems fail to see. The
                writing names what the data leaves out. It all does the same
                job from different angles: surfacing what systems don&rsquo;t
                see.
              </p>
            </div>
          </Reveal>

          {/* Credentials strip — the 90-second scan */}
          <Reveal delay={140} className="mt-12">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-rule bg-rule sm:grid-cols-3">
              {CREDENTIALS.map((c) => (
                <div key={c.label} className="bg-parchment px-5 py-4">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-ink-muted">
                    {c.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-sm leading-tight text-ink">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
