# ☕ Starbot — Canary Wharf Presentation

An interactive, fullscreen presentation showcasing **Starbot Coffee's** strategic commercial briefing & investment thesis for Canary Wharf. Built with [Bun](https://bun.sh), React 19, and Tailwind CSS v4.

## ✨ Features

- **10 cinematic slides** — cover, mission, product, quote, audience, Canary Wharf overview, deployment zones, financials, investment thesis & contact
- **Fullscreen mode** with keyboard & mouse navigation
- **HLS video background** via Mux streaming
- **Desktop-optimised** — graceful mobile fallback screen
- **Auto-hiding controls** with progress dots

## 🚀 Getting Started

### Prerequisites

- **[Bun](https://bun.sh)** ≥ 1.2 — install with `curl -fsSL https://bun.sh/install | bash`

### Install & Run

```bash
# Clone the repo
git clone https://github.com/starbothq/canary.git
cd canary

# Install dependencies
bun install

# Start the dev server (with HMR)
bun dev
```

The presentation will be available at **http://localhost:3000**.

### Production Build

```bash
# Build static assets to dist/
bun run build

# Serve in production mode
bun start
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `→` / `↓` / `Space` | Next slide |
| `←` / `↑` | Previous slide |
| `F` | Toggle fullscreen |
| `Esc` | Exit fullscreen |

## 📁 Project Structure

```
canary/
├── src/
│   ├── index.html          # Entry HTML
│   ├── index.ts            # Bun server (dev + prod)
│   ├── index.css            # Global styles (Tailwind v4)
│   ├── frontend.tsx         # React mount point
│   ├── App.tsx              # Slide orchestrator
│   ├── Presentation.tsx     # Slide engine & navigation
│   ├── VideoBackground.tsx  # HLS video player
│   ├── Logo.tsx             # SVG logo component
│   ├── logo.svg             # Starbot logo
│   ├── CoverSlide.tsx       # Title slide
│   ├── MissionSlide.tsx     # Mission & vision
│   ├── ProductSlide.tsx     # Product capabilities
│   ├── QuoteSlide.tsx       # Pull quote
│   ├── AudienceSlide.tsx    # Target audiences
│   ├── CanaryWharfSlide.tsx  # Canary Wharf overview
│   ├── DeploymentSlide.tsx  # Strategic deployment zones
│   ├── FinancialsSlide.tsx  # Financial comparison
│   ├── InvestmentSlide.tsx  # Investment thesis
│   └── ContactSlide.tsx     # Contact & CTA
├── build.ts                 # Custom Bun build script
├── bunfig.toml              # Bun config (Tailwind plugin)
├── package.json
├── tsconfig.json
└── CONTENT.md               # Source content & copy
```

## 🔺 Deploy to Vercel

This project uses Bun's native server, so we deploy it as a **serverless function** on Vercel.

### 1. Install Vercel CLI

```bash
npm i -g vercel
```

### 2. Add a `vercel.json`

Create a `vercel.json` in the project root (this is already included):

```json
{
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "installCommand": "bun install",
  "framework": null
}
```

### 3. Deploy

```bash
# First-time setup — follow the prompts to link your project
vercel

# Deploy to production
vercel --prod
```

### One-Click Deploy

Alternatively, connect the repo on [vercel.com/new](https://vercel.com/new):

1. Import the **starbothq/canary** repository
2. Set **Framework Preset** to `Other`
3. Set **Build Command** to `bun run build`
4. Set **Output Directory** to `dist`
5. Set **Install Command** to `bun install`
6. Click **Deploy** 🚀

> **Note:** Vercel natively supports Bun. If you don't set an install command, Vercel will auto-detect `bun.lock` and use Bun automatically.

## 📄 License

Private — © Starbot Coffee Ltd.
