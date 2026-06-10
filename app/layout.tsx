import type { Metadata } from 'next';
// Self-hosted fonts (served from this domain — no Google Fonts request,
// which also keeps the site clean under German GDPR case law).
import '@fontsource-variable/fraunces';
import '@fontsource-variable/fraunces/wght-italic.css';
import '@fontsource-variable/mulish';
import '@fontsource-variable/jetbrains-mono';
import './globals.css';

const SITE_URL = 'https://marthakoroma.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Martha Wuya Koroma · Physician, Researcher, Systems Thinker',
  description:
    'Physician-researcher and MD candidate based in Berlin. ICH-GCP & E6(R3) certified, named collaborator in The Lancet Psychiatry, named inventor on two filed patents. Clinical research, healthcare systems, and the work of surfacing what systems don\u2019t see.',
  keywords: [
    'Martha Koroma',
    'Martha Wuya Koroma',
    'Clinical Research Associate',
    'physician researcher',
    'ICH-GCP',
    'Lancet Psychiatry',
    'healthcare systems',
    'Berlin',
    'MetaVoxa',
  ],
  authors: [{ name: 'Martha Wuya Koroma' }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Martha Wuya Koroma · Physician, Researcher, Systems Thinker',
    description:
      'Physician-researcher and MD candidate in Berlin. Clinical research, healthcare systems, and the work of surfacing what systems don\u2019t see.',
    url: SITE_URL,
    siteName: 'Martha Wuya Koroma',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/martha-hero.jpg',
        width: 1400,
        height: 1713,
        alt: 'Martha Wuya Koroma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martha Wuya Koroma · Physician, Researcher, Systems Thinker',
    description:
      'Physician-researcher and MD candidate in Berlin. Surfacing what systems don\u2019t see.',
    images: ['/images/martha-hero.jpg'],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Martha Wuya Koroma',
    url: SITE_URL,
    jobTitle: 'Physician-Researcher',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'DE',
    },
    sameAs: [
      'https://www.linkedin.com/in/martha-koroma-67a28b191/',
      'https://orcid.org/0000-0003-4152-3863',
      'https://substack.com/@metavoxa',
      'https://metavoxa.com',
    ],
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'ORCID',
      value: '0000-0003-4152-3863',
    },
  };

  return (
    <html lang="en">
      <body className="grain font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
