# eveonn.xyz

An open source always-on agent starter built with [Vercel Eve](https://vercel.com/eve), Next.js, and Vercel.

Eveonn reads two ways: **Eve on** for agents built on Eve, and **always on** for persistent agent experiences. This repo packages that idea into a forkable project with a branded website, an Eve runtime, and a deployment path.

## What is included

- Public Next.js site at `/`
- Eve runtime mounted behind the same deployment
- Eve HTTP channel under `/eve/v1/*`
- Protected production chat access by default
- GitHub Actions for checks and Vercel production deploys
- Roadmap for turning the starter into a full agent platform

## Project structure

```txt
agent/
  agent.ts              Eve runtime configuration
  instructions.md       Evelyn's standing behavior
  channels/eve.ts       Eve HTTP channel and auth policy
app/
  page.tsx              Public eveonn.xyz homepage
  layout.tsx            Metadata, fonts, providers
  globals.css           Theme and global styles
.github/workflows/
  ci.yml                Typecheck and build
  vercel-production.yml Production deployment workflow
```

## Requirements

- Node 24.x
- npm
- Vercel account and project
- Eve-compatible model credentials configured in Vercel

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Verification

```bash
npm run typecheck
npm run build
```

## Deployment

This project is designed to deploy to Vercel.

For GitHub Actions based deployment, add these repository secrets:

```txt
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

`VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` are available in `.vercel/project.json` after `vercel link`, but `.vercel/` must stay untracked.

Production deploys run from pushes to `main` through `.github/workflows/vercel-production.yml`.

## Auth posture

The public website is open. Production chat access is intentionally protected in `agent/channels/eve.ts` until the project has a real auth policy.

Good next options:

- authenticated demo chat
- invite-only access
- per-user rate limits
- GitHub OAuth for contributors
- Vercel Connect backed identities

## Roadmap

See [ROADMAP.md](ROADMAP.md).

## License

MIT
