import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm parchment base — drawn from the Atrium's lit marble, not generic cream
        parchment: '#F2EDE3',
        'parchment-deep': '#E8E0D2',
        // Deep espresso — the dark rooms. Warm near-black, stays in the earth-tone world.
        espresso: '#211A14',
        'espresso-soft': '#2E251D',
        'espresso-rule': '#43372C',
        // Deep ink — warm near-black, the inscription color
        ink: '#1C1814',
        'ink-soft': '#3A332B',
        'ink-muted': '#6B6155',
        // Gilt — the gold light from the Atrium render (the single accent)
        gilt: '#A67C3D',
        'gilt-bright': '#C49A55',
        // Slate — the cool blue-grey of the Atrium's stone shadows (secondary)
        slate: '#3D4654',
        'slate-soft': '#5A6573',
        // Hairlines
        rule: '#D6CCBC',
      },
      fontFamily: {
        // Display: characterful serif used with restraint — set like inscriptions
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        // Body: clean, warm humanist sans
        body: ['var(--font-mulish)', 'system-ui', 'sans-serif'],
        // Utility: mono for labels, data, eyebrows
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        prose: '38rem',
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gilt-drift': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'gilt-drift': 'gilt-drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
