import Reveal from './Reveal';

/**
 * The signature device: a section marker shaped as a threshold/archway,
 * echoing the vaulted arches of the MetaVoxa Atrium. Supports light
 * (parchment) and dark (espresso) rooms so the page reads as a sequence
 * of distinct spaces.
 */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-start gap-5 md:gap-7">
        <Threshold />
        <div className="flex-1 pt-1">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-gilt tracking-eyebrow">
              {index}
            </span>
            <span
              className={`font-mono text-xs tracking-eyebrow uppercase ${
                dark ? 'text-parchment/55' : 'text-ink-muted'
              }`}
            >
              {eyebrow}
            </span>
          </div>
          <h2
            className={`mt-4 font-display text-3xl md:text-5xl font-light leading-[1.08] max-w-[20ch] ${
              dark ? 'text-parchment' : 'text-ink'
            }`}
          >
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-5 max-w-prose font-body text-base md:text-lg leading-relaxed ${
                dark ? 'text-parchment/75' : 'text-ink-soft'
              }`}
            >
              {intro}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function Threshold() {
  return (
    <svg
      width="34"
      height="56"
      viewBox="0 0 34 56"
      fill="none"
      className="mt-1 shrink-0 text-gilt"
      aria-hidden="true"
    >
      <path
        d="M1 55V17C1 8.16 8.16 1 17 1C25.84 1 33 8.16 33 17V55"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
      <path
        d="M7 55V18C7 12.48 11.48 8 17 8C22.52 8 27 12.48 27 18V55"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.35"
      />
    </svg>
  );
}
