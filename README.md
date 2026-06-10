# marthakoroma.com

Professional portfolio of Martha Wuya Koroma — physician, researcher, systems thinker.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Fully static output,
self-hosted fonts (no Google Fonts request — clean under German GDPR case law),
single-page architecture with anchored sections.

## Stack

- **Next.js 14** — App Router, static generation
- **Tailwind CSS 3** — custom design tokens (parchment / ink / gilt / slate)
- **Fontsource** — self-hosted Fraunces (display), Mulish (body), JetBrains Mono (labels)
- **No CMS, no database** — content lives in the components, edited in code

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (verify before pushing)
```

## Deploying (GitHub → Vercel)

1. Create a new GitHub repository (e.g. `marthakoroma.com`), then from this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin git@github.com:YOUR_USERNAME/marthakoroma.com.git
   git push -u origin main
   ```

2. In Vercel: **Add New → Project → Import** the repository.
   Framework preset auto-detects Next.js. No environment variables needed. Deploy.

3. **Domain:** Project → Settings → Domains → add `marthakoroma.com`
   (and `www.marthakoroma.com`, redirecting to the apex). Since the domain was
   bought through Vercel, DNS connects automatically.

## Content map — where to edit what

| What | File |
|---|---|
| SEO title/description, social card, JSON-LD | `app/layout.tsx` |
| Hero (triad, intro line, CV button) | `components/Hero.tsx` |
| About copy + credentials strip | `components/About.tsx` |
| Clinical research roles & tooling | `components/ClinicalResearch.tsx` |
| The Scene Bible (three doors) | `components/SceneBible.tsx` |
| Publications / patents / preprint / ORCID | `components/Publications.tsx` |
| Vivantes, education, certs, McKinsey, diplomacy | `components/Background.tsx` |
| Essays + Substack link | `components/Writing.tsx` |
| MetaVoxa doorway | `components/Doorway.tsx` |
| Contact, footer links | `components/Contact.tsx` |
| Design tokens (colors, fonts, spacing) | `tailwind.config.ts` |
| Quote thresholds (the two voice lines) | `app/page.tsx` (QuoteThreshold) |

## Section rhythm

The page alternates light (parchment) and dark (espresso) rooms so scrolling
feels like moving through distinct spaces, not one long page. Two full-width
quote thresholds carry Martha's voice between rooms. The Scene Bible doors
open on hover / tap / keyboard focus, and stay open by default on touch
devices so content is never trapped.

## Swapping assets

- **CV:** replace `public/Martha_Koroma_CV.pdf` (keep the filename, nothing else changes)
- **Photos:** replace files in `public/images/` keeping the same filenames:
  - `martha-hero.jpg` (hero portrait)
  - `martha-trench.jpg` (About / Who is Martha)
  - `martha-grandma.jpg` (Writing section)
  - `martha-lounge.jpg` (Contact section)
  - `metavoxa-atrium.jpg` (the doorway render)
- When the professional headshots arrive: overwrite `martha-hero.jpg` and
  `martha-portrait.jpg`, commit, push — Vercel redeploys automatically.

## When The Scene Bible ships

`components/SceneBible.tsx` is built to receive it: replace the
"Currently in production" note with an embed or a link to the
deployed Remotion piece, and the three door cards become navigation.
