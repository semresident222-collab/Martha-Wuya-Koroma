import Image from 'next/image';
import Reveal from './Reveal';

export default function Doorway() {
  return (
    <section
      id="metavoxa"
      aria-label="MetaVoxa"
      className="relative overflow-hidden border-t border-rule"
    >
      {/* The Atrium render, full bleed */}
      <div className="relative">
        <Image
          src="/images/metavoxa-atrium.jpg"
          alt="The MetaVoxa Atrium: a vaulted hall of arches opening onto further rooms"
          width={1600}
          height={873}
          className="h-[72vh] min-h-[460px] w-full object-cover object-[47%_center] md:h-[88vh]"
          sizes="100vw"
        />
        {/* Legible overlay — darken toward the lower left where text sits */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent"
          aria-hidden="true"
        />

        {/* Drifting gilt light accent, echoing the render */}
        <div
          className="animate-gilt-drift pointer-events-none absolute right-[8%] top-1/3 h-40 w-40 rounded-full bg-gilt-bright/30 blur-3xl"
          aria-hidden="true"
        />

        {/* The text — the deliberate exit */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-content px-6 pb-14 md:px-10 md:pb-20">
            <Reveal className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-eyebrow text-gilt-bright">
                The threshold
              </p>
              <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] text-parchment md:text-5xl">
                The professional record lives here.
                <br />
                <span className="italic text-gilt-bright">
                  The rest of me lives at MetaVoxa.
                </span>
              </h2>
              <p className="mt-6 max-w-prose font-body text-base leading-relaxed text-parchment/85 md:text-lg">
                MetaVoxa is the house: research, writing, cartography, and the
                work that doesn&rsquo;t fit on a CV. Everything that made the
                record possible, kept in its own rooms.
              </p>
              <a
                href="https://metavoxa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-parchment px-7 py-3.5 font-mono text-xs uppercase tracking-eyebrow text-ink transition-all hover:bg-gilt-bright hover:text-ink"
              >
                Enter the Atrium
                <span className="transition-transform group-hover:translate-x-1.5">
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
