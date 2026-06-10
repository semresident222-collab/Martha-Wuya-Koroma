import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-content flex-col justify-center px-6 pt-28 pb-16 md:px-10 md:pt-32"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        {/* Left: the inscription */}
        <div className="animate-fade-up">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-gilt">
            Berlin, Germany
          </p>

          <h1 className="mt-6 font-display text-[2.7rem] font-light leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Physician.
            <br />
            Researcher.
            <br />
            <span className="italic text-slate">Systems thinker.</span>
          </h1>

          <p className="mt-8 max-w-prose font-body text-lg leading-relaxed text-ink-soft">
            I think about how things work: the visible parts and the ones
            nobody talks about. Medicine taught me that the body keeps score.
            Systems thinking taught me that everything does.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#research"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-eyebrow text-parchment transition-colors hover:bg-slate"
            >
              The work
              <span className="transition-transform group-hover:translate-x-1">
                &darr;
              </span>
            </a>
            <a
              href="/Martha_Koroma_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-eyebrow text-ink-muted underline decoration-rule underline-offset-4 transition-colors hover:text-gilt hover:decoration-gilt"
            >
              Curriculum vitae &rarr;
            </a>
          </div>
        </div>

        {/* Right: the portrait, framed like a plate */}
        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="relative overflow-hidden rounded-[2px] border border-rule shadow-[0_30px_60px_-30px_rgba(28,24,20,0.4)]">
            <Image
              src="/images/martha-hero.jpg"
              alt="Martha Wuya Koroma"
              width={1400}
              height={1713}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 90vw, 38vw"
            />
          </div>
          {/* thin gilt frame line offset, echoing a museum plate */}
          <div
            className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[2px] border border-gilt/40"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
