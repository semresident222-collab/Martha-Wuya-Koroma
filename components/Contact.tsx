import Image from 'next/image';
import Reveal from './Reveal';

const LINKS = [
  {
    label: 'LinkedIn',
    value: 'martha-koroma',
    href: 'https://www.linkedin.com/in/martha-koroma-67a28b191/',
  },
  {
    label: 'ORCID',
    value: '0000-0003-4152-3863',
    href: 'https://orcid.org/0000-0003-4152-3863',
  },
  {
    label: 'Writing',
    value: 'MetaVoxa Press',
    href: 'https://substack.com/@metavoxa',
  },
  {
    label: 'Platform',
    value: 'metavoxa.com',
    href: 'https://metavoxa.com',
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink text-parchment">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-20">
          {/* Invitation */}
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-eyebrow text-gilt-bright">
              Get in touch
            </p>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] md:text-5xl">
              Reach out if you want to talk about systems, strategy, or what
              comes next.
            </h2>

            <a
              href="mailto:marthakoroma722@gmail.com"
              className="group mt-9 inline-flex items-center gap-3 font-display text-xl italic text-gilt-bright transition-colors hover:text-parchment md:text-2xl"
            >
              marthakoroma722@gmail.com
              <span className="transition-transform group-hover:translate-x-1.5">
                &rarr;
              </span>
            </a>

            <div className="mt-10">
              <a
                href="/Martha_Koroma_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-parchment/30 px-6 py-3 font-mono text-xs uppercase tracking-eyebrow text-parchment/90 transition-colors hover:border-gilt-bright hover:text-gilt-bright"
              >
                Download CV (PDF)
              </a>
            </div>

            {/* Warmth: the lounge portrait */}
            <div className="mt-12 max-w-xs overflow-hidden rounded-[2px] border border-parchment/15">
              <Image
                src="/images/martha-lounge.jpg"
                alt="Martha Wuya Koroma"
                width={1000}
                height={1491}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 80vw, 28vw"
              />
            </div>
          </Reveal>

          {/* Index */}
          <Reveal delay={80}>
            <dl className="space-y-5 border-l border-parchment/15 pl-6 md:pl-8">
              <div>
                <dt className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-parchment/50">
                  Location
                </dt>
                <dd className="mt-1 font-body text-base text-parchment/90">
                  Berlin, Germany
                </dd>
              </div>
              {LINKS.map((l) => (
                <div key={l.label}>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-parchment/50">
                    {l.label}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-base text-parchment/90 underline decoration-parchment/25 underline-offset-4 transition-colors hover:text-gilt-bright hover:decoration-gilt-bright"
                    >
                      {l.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-parchment/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[0.68rem] text-parchment/50">
            &copy; {new Date().getFullYear()} Martha Wuya Koroma
          </p>
          <p className="font-mono text-[0.68rem] text-parchment/50">
            Surfacing what systems don&rsquo;t see.
          </p>
        </div>
      </div>
    </footer>
  );
}
