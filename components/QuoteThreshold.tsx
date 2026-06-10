import Reveal from './Reveal';

/**
 * A threshold between rooms: a full-width quote that gives the page breath
 * and carries Martha's voice directly. Used sparingly — two on the page —
 * so each lands as a moment, not decoration.
 */
export default function QuoteThreshold({
  lines,
  attribution = false,
  dark = false,
}: {
  lines: string[];
  attribution?: boolean;
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? 'bg-espresso px-6 py-24 md:px-10 md:py-32'
          : 'bg-parchment px-6 py-24 md:px-10 md:py-32'
      }
    >
      <Reveal className="mx-auto max-w-content">
        <div className="flex items-start gap-5 md:gap-8">
          {/* a single thin gilt arch, oversized, as the quote mark */}
          <svg
            width="48"
            height="64"
            viewBox="0 0 48 64"
            fill="none"
            className="mt-2 hidden shrink-0 text-gilt/60 sm:block"
            aria-hidden="true"
          >
            <path
              d="M2 63V25C2 12.3 11.85 2 24 2C36.15 2 46 12.3 46 25V63"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <blockquote className="flex-1">
            {lines.map((line, i) => (
              <p
                key={i}
                className={`font-display text-2xl font-light leading-[1.25] md:text-4xl ${
                  dark ? 'text-parchment' : 'text-ink'
                } ${i > 0 ? 'mt-1' : ''}`}
              >
                {line}
              </p>
            ))}
            {attribution && (
              <footer className="mt-6 font-mono text-xs uppercase tracking-eyebrow text-gilt">
                Martha Wuya Koroma
              </footer>
            )}
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
