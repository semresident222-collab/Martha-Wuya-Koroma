import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const LIFECYCLE = ['Qualification', 'Initiation', 'Monitoring', 'Safety', 'Close-out'];

const ROLES = [
  {
    role: 'Phase 3 Clinical Trial Observer',
    org: 'Inductive Quotient',
    period: '7 months',
    points: [
      'Observed qualification, initiation, and monitoring visits end to end: site visit structure, investigator qualification verification, and ISF/TMF filing requirements.',
      'Followed protocol deviation identification, communication to site staff, and CAPA documentation in real time across an active trial.',
      'Direct exposure to adverse event and SAE review, concomitant medication verification, and data integrity practices under ICH-GCP.',
    ],
  },
  {
    role: 'International Research Collaborator',
    org: 'Global Suicide Prevention Network / The Lancet Psychiatry',
    period: '2024 to 2025',
    points: [
      'Led primary data collection and quality assessment across assigned countries in a 105-country study; applied source data verification and quality-control methodology across diverse site environments.',
      'Named collaborator on the peer-reviewed publication (The Lancet Psychiatry, 2025).',
      'Assessed data completeness and accuracy; contributed findings to Bayesian statistical modelling across 105 countries.',
    ],
  },
  {
    role: 'Self-Directed Clinical Research',
    org: 'Berlin, Germany',
    period: 'May 2025 to Present',
    points: [
      'Produced a monitoring-plan redesign for a Phase III oncology trial, with IPCW-adjusted survival analysis and an irAE rechallenge protocol, anchored in ICH E6(R2), E9, E9(R1), and FDA adaptive design guidance.',
      'Completed hands-on EDC training (Medidata Rave, REDCap) and CTMS (Veeva) through the Johns Hopkins Clinical Trial Operations specialisation.',
      'Maintained study documentation aligned with TMF standards; applied ICH-GCP principles to protocol analysis and regulatory review.',
    ],
  },
];

const TOOLING = ['Medidata Rave', 'REDCap', 'Veeva CTMS', 'ICH-GCP', 'ICH E6(R3)', 'TMF / ISF'];

export default function ClinicalResearch() {
  return (
    <section id="research" className="bg-espresso px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader
          index="01"
          eyebrow="Clinical Research"
          title="How systems are meant to work"
          intro="The end-to-end machinery of a trial: qualification, monitoring, deviation, safety. This is the ground I came up on, and the work I am moving toward next."
          dark
        />

        {/* Visual anchor: the trial lifecycle, drawn as a quiet path of arches.
            Gives the non-specialist eye something to follow without overpowering. */}
        <Reveal className="mb-14">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4 rounded-[2px] border border-espresso-rule bg-espresso-soft px-6 py-5">
            {LIFECYCLE.map((stage, i) => (
              <div key={stage} className="flex items-center gap-3">
                <span className="flex items-center gap-2.5">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
                    <path
                      d="M1 19V8C1 4.13 4.13 1 8 1C11.87 1 15 4.13 15 8V19"
                      stroke="#A67C3D"
                      strokeWidth="1"
                    />
                  </svg>
                  <span className="font-mono text-[0.7rem] uppercase tracking-eyebrow text-parchment/80">
                    {stage}
                  </span>
                </span>
                {i < LIFECYCLE.length - 1 && (
                  <span className="text-gilt/40" aria-hidden="true">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="space-y-px overflow-hidden rounded-[2px] border border-espresso-rule bg-espresso-rule">
          {ROLES.map((r, i) => (
            <Reveal key={r.role} delay={i * 60}>
              <article className="bg-espresso-soft px-6 py-8 md:px-10 md:py-10">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-xl text-parchment md:text-2xl">
                    {r.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-eyebrow text-gilt">
                    {r.period}
                  </span>
                </div>
                <p className="mt-1 font-body text-sm italic text-parchment/55">
                  {r.org}
                </p>
                <ul className="mt-5 space-y-3">
                  {r.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-3 font-body text-sm leading-relaxed text-parchment/80 md:text-base"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-gilt" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-parchment/50">
            Systems &amp; standards
          </span>
          {TOOLING.map((t) => (
            <span
              key={t}
              className="rounded-full border border-espresso-rule px-3 py-1 font-mono text-[0.7rem] text-parchment/75"
            >
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
