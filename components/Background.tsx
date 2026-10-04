import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const PRACTICE = {
  role: 'Healthcare Assistant ',
  org: 'Vivantes Hauptstadtpflege · Berlin',
  period: 'Sept 2024 to Present',
  points: [
    'Clinical patient records and safety protocols under German regulatory standards, in a high-volume inpatient environment.',
    'Ground-level understanding of patient eligibility, protocol-level care, and institutional compliance: the same machinery a monitor verifies, seen from inside the ward.',
  ],
};

const EDUCATION = [
  {
    title: 'MD, Surgery Track',
    org: 'Horbachevsky Ternopil National Medical University, Ukraine',
    period: '2020 to Nov 2026',
    note: 'Continued via clinical placements in Germany.',
  },
  {
    title: 'Postgraduate Cybersecurity ',
    org: 'Careerera',
    period: '2023 to 2024',
    note: '',
  },
  {
    title: 'BSc Business Administration',
    org: 'LICCSAL Business College, Freetown · GPA 4.0',
    period: 'Oct 2019 to May 2023',
    note: 'Data analysis, project management, organisational strategy.',
  },
  {
    title: 'AP Research Programme',
    org: 'Senegal American Bilingual School, Dakar',
    period: '2019 to 2020',
    note: 'Published original quantitative research; completed ethics certification independently.',
  },
];

const BACKGROUND = [
  {
    title: 'Founder',
    org: 'MetaVoxa, Berlin (in formation)',
    period: '2023 to Present',
    note: 'Digital health research Institution and publishing platform with three arms (Press, Research, Labs). A holding structure is planned. Building GDPR-aligned health-data architecture for a planned candidate digital biomarker validation pilot.',
  },
  {
    title: 'Founder',
    org: 'Gla\u00e9Grip, Berlin',
    period: '2026 to Present',
    note: 'Cooling steering wheel sleeve for summer driving. Utility model registered with the DPMA (August 2026).',
  },
  {
    title: 'Public Diplomacy & Cultural Affairs Intern',
    org: 'Embassy of the Republic of Sierra Leone, Berlin',
    period: '2022 to 2023',
    note: 'Official correspondence, briefing summaries, and formal records; supported senior staff across German legal and administrative frameworks.',
  },
  {
    title: 'Diplomatic Aide & Strategic Assistant',
    org: 'Office of the Ambassador, Republic of Sierra Leone',
    period: '2018 to 2020',
    note: 'Briefing files and confidential records across high-level meetings, state functions, and diplomatic receptions.',
  },
];

const CERTS = [
  'Clinical Trial Operations · Johns Hopkins (via Coursera)',
  'Drug Development & Pharmacoepidemiology · Johns Hopkins (via Coursera)',
  'Data Management for Clinical Research · Vanderbilt (via Coursera)',
  'Regulatory Compliance · University of Pennsylvania (via Coursera)',
  'Drug Development & Product Management · UC San Diego (via Coursera)',
  'Google Data Analytics',
  'AWS Training & Certification',
  'Clinical Trials: Good Clinical Practice (ICH E6 GCP Investigator Site Training) \u00b7 Novartis, 2025',
  'Good Clinical Practice: ICH E6(R3) Principles · FreeGCP.com (TransCelerate-recognised curriculum), 2026',
];

function Entry({
  title,
  org,
  period,
  note,
}: {
  title: string;
  org: string;
  period: string;
  note: string;
}) {
  return (
    <div className="border-l border-rule pl-5 pb-7 last:pb-0">
      <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between md:gap-4">
        <h4 className="font-display text-lg text-ink">{title}</h4>
        {period && (
          <span className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-gilt">
            {period}
          </span>
        )}
      </div>
      <p className="mt-0.5 font-body text-sm italic text-ink-muted">{org}</p>
      {note && (
        <p className="mt-2 max-w-prose font-body text-sm leading-relaxed text-ink-soft">
          {note}
        </p>
      )}
    </div>
  );
}

export default function Background() {
  return (
    <section id="background" className="bg-parchment px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-content">
        <SectionHeader
          index="04"
          eyebrow="Practice, Education & Background"
          title="The ward before the whitepaper"
          intro="Clinical training taught me that policy has a pulse; you feel it in the corridor before you read it in the literature. The rest of the record runs across medicine, strategy, security, and diplomacy. Different rooms, one way of thinking."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-eyebrow text-ink-muted">
              Clinical practice
            </p>
            <Entry
              title={PRACTICE.role}
              org={PRACTICE.org}
              period={PRACTICE.period}
              note=""
            />
            <ul className="mt-1 space-y-3 border-l border-rule pl-5">
              {PRACTICE.points.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3 font-body text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-px w-3 shrink-0 bg-gilt" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="mb-6 mt-12 font-mono text-xs uppercase tracking-eyebrow text-ink-muted">
              Earlier &amp; cross-domain
            </p>
            <div>
              {BACKGROUND.map((b) => (
                <Entry key={b.title} {...b} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-6 font-mono text-xs uppercase tracking-eyebrow text-ink-muted">
              Education
            </p>
            <div>
              {EDUCATION.map((e) => (
                <Entry key={e.title} {...e} />
              ))}
            </div>

            <div className="mt-12 rounded-[2px] border border-rule bg-parchment-deep/40 p-6">
              <p className="font-mono text-xs uppercase tracking-eyebrow text-gilt">
                Leadership &amp; strategy
              </p>
              <p className="mt-3 font-display text-lg leading-snug text-ink">
                McKinsey Forward Programme
              </p>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-ink-soft">
                A selective leadership and structured-problem-solving programme,
                covering adaptability, communication, and the operating habits
                of management consulting.
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-4 font-mono text-xs uppercase tracking-eyebrow text-ink-muted">
                Certifications &amp; training
              </p>
              <ul className="flex flex-wrap gap-2">
                {CERTS.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-rule px-3 py-1.5 font-mono text-[0.68rem] leading-tight text-ink-soft"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
