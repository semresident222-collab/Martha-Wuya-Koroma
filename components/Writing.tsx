import Image from 'next/image';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const ESSAYS = [
  {
    title: 'Functional Pain',
    frame:
      'On the gap between what a body reports and what a system is willing to record.',
  },
  {
    title: 'Unrecognised, not invisible',
    frame:
      'The difference between being unseen and being unaccounted for, and why it matters clinically.',
  },
  {
    title: 'When the mask is also your culture',
    frame:
      'What masking costs when fitting in was never optional, and why that cost stays invisible to the clinic.',
  },
];

export default function Writing() {
  return (
    <section id="writing" className="bg-espresso px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader
          index="05"
          eyebrow="Writing & Thought Leadership"
          title="Naming what the data leaves out"
          intro="MetaVoxa Press is where the systems argument gets made in plain language: essays on healthcare, recognition, and the experiences clinical literature tends to miss."
          dark
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <Reveal>
            <figure className="mx-auto w-full max-w-xs">
              <div className="relative overflow-hidden rounded-[2px] border border-espresso-rule">
                <Image
                  src="/images/martha-grandma.jpg"
                  alt="Martha sharing tea with an elder in Morocco"
                  width={1200}
                  height={2133}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 80vw, 30vw"
                />
              </div>
              <figcaption className="mt-3 font-body text-xs italic leading-relaxed text-parchment/50">
                The work begins with people, not data. It always has.
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <div className="space-y-px overflow-hidden rounded-[2px] border border-espresso-rule bg-espresso-rule">
              {ESSAYS.map((e, i) => (
                <Reveal key={e.title} delay={i * 70}>
                  <article className="bg-espresso-soft px-6 py-7 md:px-8">
                    <h3 className="font-display text-xl italic text-parchment md:text-2xl">
                      {e.title}
                    </h3>
                    <p className="mt-2 max-w-prose font-body text-sm leading-relaxed text-parchment/75 md:text-base">
                      {e.frame}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={160}>
              <a
                href="https://substack.com/@metavoxa"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-parchment/40 px-6 py-3 font-mono text-xs uppercase tracking-eyebrow text-parchment transition-colors hover:bg-parchment hover:text-espresso"
              >
                Read MetaVoxa Press
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
