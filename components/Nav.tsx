'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#research', label: 'Research' },
  { href: '#scene-bible', label: 'The Scene Bible' },
  { href: '#publications', label: 'Publications' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment/90 backdrop-blur-md border-b border-rule/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          Martha&nbsp;Wuya&nbsp;Koroma
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-eyebrow text-ink-muted transition-colors hover:text-gilt"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-xs uppercase tracking-eyebrow text-ink"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-rule/60 bg-parchment/95 px-6 py-4 backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-xs uppercase tracking-eyebrow text-ink-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
