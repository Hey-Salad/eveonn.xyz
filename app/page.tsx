import {
  ArrowRight,
  Bot,
  ExternalLink,
  FileText,
  GitFork,
  Globe,
  LineChart,
  MessageCircle,
  Search,
  Terminal,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 right-0 left-0 z-40 border-b border-[var(--eo-primary)]/8 bg-[var(--eo-bg)]/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a
            className="font-mono text-sm font-medium tracking-tight text-[var(--eo-ink)]"
            href="/"
          >
            eveonn<span className="text-[var(--eo-primary)]">.xyz</span>
          </a>
          <div className="flex items-center gap-6">
            <a
              className="hidden text-sm text-[var(--eo-muted)] transition-colors hover:text-[var(--eo-ink)] sm:block"
              href="#what"
            >
              What it does
            </a>
            <a
              className="hidden text-sm text-[var(--eo-muted)] transition-colors hover:text-[var(--eo-ink)] sm:block"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="inline-flex items-center gap-2 bg-[var(--eo-primary)] px-4 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
              href="/chat"
            >
              Try it
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-14">
        {/* Cobalt glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 opacity-[0.15]"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.62 0.14 247), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">
            <div>
              {/* Status indicator */}
              <div className="mb-8 inline-flex items-center gap-2.5 border border-[var(--eo-primary)]/20 bg-[var(--eo-primary)]/5 px-3.5 py-1.5 text-xs font-medium text-[var(--eo-primary)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--eo-accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--eo-accent)]" />
                </span>
                Agent online
              </div>

              <h1
                className="max-w-[14ch] text-[clamp(2.75rem,8vw,5.5rem)] font-800 leading-[0.95] tracking-tight text-[var(--eo-ink)]"
                style={{ textWrap: "balance" }}
              >
                Your agent,{" "}
                <span className="text-[var(--eo-primary)]">always on</span>
              </h1>

              <p
                className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--eo-muted)] sm:text-xl"
                style={{ lineHeight: "1.7" }}
              >
                An open-source AI agent that researches, writes, analyzes, and
                strategizes — running 24/7 on Vercel Eve. Fork it or let us
                build yours.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 bg-[var(--eo-primary)] px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  href="/chat"
                >
                  <MessageCircle className="h-4 w-4" />
                  Talk to Evelyn
                </a>
                <a
                  className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--eo-surface)] px-5 py-3 text-sm font-semibold text-[var(--eo-ink)] transition-colors hover:bg-[var(--eo-surface)]/80"
                  href="https://github.com/Hey-Salad/eveonn.xyz"
                >
                  <GitFork className="h-4 w-4" />
                  Fork on GitHub
                </a>
              </div>
            </div>

            {/* Live terminal */}
            <div className="border border-[var(--border)] bg-[var(--eo-surface)]">
              <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
                <Terminal className="h-3.5 w-3.5 text-[var(--eo-muted)]" />
                <span className="font-mono text-xs text-[var(--eo-muted)]">
                  evelyn session
                </span>
                <span className="ml-auto flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--eo-accent)]" />
                </span>
              </div>
              <div className="space-y-5 p-5 font-mono text-sm leading-relaxed">
                <div>
                  <p className="text-[var(--eo-muted)]">you</p>
                  <p className="mt-1 text-[var(--eo-ink)]">
                    Research my top 3 competitors and draft a GTM plan
                  </p>
                </div>
                <div>
                  <p className="text-[var(--eo-accent)]">evelyn</p>
                  <p className="mt-1 text-[var(--eo-ink)]/80">
                    Searching the web for competitor data...
                  </p>
                  <p className="mt-1 text-[var(--eo-ink)]/80">
                    Found 3 direct competitors. Analyzing positioning.
                  </p>
                  <p className="mt-1 text-[var(--eo-ink)]/80">
                    Generating 90-day go-to-market strategy...
                  </p>
                </div>
                <div>
                  <p className="text-[var(--eo-muted)]">you</p>
                  <p className="mt-1 text-[var(--eo-ink)]">
                    Now write the launch blog post
                  </p>
                </div>
                <div>
                  <p className="text-[var(--eo-accent)]">evelyn</p>
                  <p className="mt-1 text-[var(--eo-ink)]/80">
                    Drafting 1,200 words in bold tone targeting founders...
                  </p>
                  <span className="inline-block h-4 w-1.5 animate-pulse bg-[var(--eo-primary)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="border-t border-[var(--border)]" id="what">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <h2
            className="text-[clamp(1.75rem,4vw,3rem)] font-700 leading-tight tracking-tight"
            style={{ textWrap: "balance" }}
          >
            Four tools. One agent.{" "}
            <span className="text-[var(--eo-muted)]">Always running.</span>
          </h2>

          <div className="mt-14 grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
            {[
              {
                icon: Search,
                name: "web_search",
                title: "Web Research",
                body: "Real-time search grounded in current data. Evelyn looks things up instead of guessing.",
              },
              {
                icon: FileText,
                name: "draft_content",
                title: "Content Drafting",
                body: "Blog posts, emails, social copy, landing pages. Full drafts, not outlines.",
              },
              {
                icon: Globe,
                name: "analyze_url",
                title: "URL Analysis",
                body: "Drop a link. Get a summary, competitor breakdown, or SEO review with actionable next steps.",
              },
              {
                icon: LineChart,
                name: "generate_strategy",
                title: "Strategy Generation",
                body: "Go-to-market plans, pricing models, product roadmaps. Timelines and metrics included.",
              },
            ].map(({ icon: Icon, name, title, body }) => (
              <div className="bg-[var(--eo-bg)] p-8 sm:p-10" key={name}>
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[var(--eo-primary)]" />
                  <span className="font-mono text-xs text-[var(--eo-muted)]">
                    {name}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-600 text-[var(--eo-ink)]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-[var(--eo-muted)]">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--eo-primary)] transition-colors hover:text-[var(--eo-accent)]"
              href="/chat"
            >
              Try all four tools now
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-[var(--border)] bg-[var(--eo-surface)]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <h2
            className="text-[clamp(1.75rem,4vw,3rem)] font-700 leading-tight tracking-tight"
            style={{ textWrap: "balance" }}
          >
            Deploy in three commands
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="border border-[var(--border)] bg-[var(--eo-bg)] font-mono text-sm">
              <div className="border-b border-[var(--border)] px-5 py-3 text-xs text-[var(--eo-muted)]">
                terminal
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <span className="text-[var(--eo-muted)]">$</span>{" "}
                  <span className="text-[var(--eo-accent)]">npx</span>{" "}
                  <span className="text-[var(--eo-ink)]">
                    eve@latest init my-agent
                  </span>
                </div>
                <div>
                  <span className="text-[var(--eo-muted)]">$</span>{" "}
                  <span className="text-[var(--eo-accent)]">cd</span>{" "}
                  <span className="text-[var(--eo-ink)]">my-agent</span>
                </div>
                <div>
                  <span className="text-[var(--eo-muted)]">$</span>{" "}
                  <span className="text-[var(--eo-accent)]">vercel</span>{" "}
                  <span className="text-[var(--eo-ink)]">deploy --prod</span>
                </div>
                <div className="mt-2 border-t border-[var(--border)] pt-4 text-[var(--eo-accent)]">
                  Agent deployed to your-agent.vercel.app
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8">
              {[
                {
                  step: "Fork or init",
                  detail:
                    "Clone the repo or scaffold fresh with Eve CLI. Add your own tools in agent/tools/.",
                },
                {
                  step: "Customize",
                  detail:
                    "Write instructions in markdown. Define typed tools in TypeScript. The agent inherits your brand.",
                },
                {
                  step: "Ship",
                  detail:
                    "Push to GitHub. Vercel deploys automatically. Your agent is live, always on.",
                },
              ].map(({ step, detail }) => (
                <div key={step}>
                  <h3 className="text-base font-600 text-[var(--eo-ink)]">
                    {step}
                  </h3>
                  <p className="mt-1.5 max-w-[45ch] text-sm leading-relaxed text-[var(--eo-muted)]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-[var(--border)]" id="pricing">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <h2
            className="text-[clamp(1.75rem,4vw,3rem)] font-700 leading-tight tracking-tight"
            style={{ textWrap: "balance" }}
          >
            Ship today.{" "}
            <span className="text-[var(--eo-muted)]">
              Free or full-service.
            </span>
          </h2>

          <div className="mx-auto mt-14 grid max-w-4xl gap-px border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
            {/* Free tier */}
            <div className="flex flex-col bg-[var(--eo-bg)] p-8 sm:p-10">
              <span className="font-mono text-xs text-[var(--eo-muted)]">
                open source
              </span>
              <div className="mt-4 text-4xl font-800 tracking-tight text-[var(--eo-ink)]">
                $0
              </div>
              <p className="mt-3 text-sm text-[var(--eo-muted)]">
                Fork it, deploy it, make it yours. MIT licensed.
              </p>

              <ul className="mt-8 flex-1 space-y-3 text-sm text-[var(--eo-ink)]/80">
                {[
                  "Full source code",
                  "4 built-in tools",
                  "Eve agent runtime",
                  "One-click Vercel deploy",
                  "Community support",
                ].map((f) => (
                  <li className="flex items-start gap-2.5" key={f}>
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--eo-primary)]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                className="mt-10 inline-flex items-center justify-center gap-2 border border-[var(--border)] bg-[var(--eo-surface)] px-5 py-3 text-sm font-semibold text-[var(--eo-ink)] transition-colors hover:bg-[var(--eo-surface)]/80"
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHey-Salad%2Feveonn.xyz&project-name=my-agent&repository-name=my-agent"
              >
                Deploy Your Own
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Custom tier */}
            <div className="relative flex flex-col bg-[var(--eo-bg)] p-8 sm:p-10">
              <div className="absolute top-0 right-0 left-0 h-px bg-[var(--eo-primary)]" />
              <span className="font-mono text-xs text-[var(--eo-primary)]">
                custom build
              </span>
              <div className="mt-4 text-4xl font-800 tracking-tight text-[var(--eo-ink)]">
                From $2k
              </div>
              <p className="mt-3 text-sm text-[var(--eo-muted)]">
                We build a production agent for your business.
              </p>

              <ul className="mt-8 flex-1 space-y-3 text-sm text-[var(--eo-ink)]/80">
                {[
                  "Custom tools & integrations",
                  "Your brand & domain",
                  "Slack, Discord, email channels",
                  "Human-in-the-loop approvals",
                  "Production deploy & support",
                  "Strategy consultation",
                ].map((f) => (
                  <li className="flex items-start gap-2.5" key={f}>
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--eo-primary)]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                className="mt-10 inline-flex items-center justify-center gap-2 bg-[var(--eo-primary)] px-5 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                href="mailto:peter@heysalad.co?subject=Custom%20AI%20Agent&body=Hi%20Peter%2C%20I%27m%20interested%20in%20a%20custom%20agent%20for%20my%20business."
              >
                Get in Touch
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--eo-primary)]/20 bg-[var(--eo-primary)]/[0.04]">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
          <h2
            className="text-[clamp(1.75rem,4vw,3rem)] font-700 leading-tight tracking-tight"
            style={{ textWrap: "balance" }}
          >
            Your business needs an agent.
            <br />
            <span className="text-[var(--eo-primary)]">We build them.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[var(--eo-muted)] sm:text-lg">
            HeySalad builds production AI agents — custom tools, your brand,
            deployed and running. From internal ops to customer-facing
            assistants.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 bg-[var(--eo-primary)] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
              href="mailto:peter@heysalad.co?subject=Custom%20AI%20Agent&body=Hi%20Peter%2C%20I%27m%20interested%20in%20a%20custom%20agent%20for%20my%20business."
            >
              <Bot className="h-4 w-4" />
              Contact HeySalad
            </a>
            <a
              className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--eo-surface)] px-6 py-3 text-sm font-semibold text-[var(--eo-ink)] transition-colors hover:bg-[var(--eo-surface)]/80"
              href="/chat"
            >
              <MessageCircle className="h-4 w-4" />
              Try Evelyn First
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--eo-muted)]">
        Built by{" "}
        <a
          className="text-[var(--eo-ink)]/60 transition-colors hover:text-[var(--eo-ink)]"
          href="https://heysalad.co"
        >
          HeySalad
        </a>{" "}
        with{" "}
        <a
          className="text-[var(--eo-ink)]/60 transition-colors hover:text-[var(--eo-ink)]"
          href="https://vercel.com/eve"
        >
          Vercel Eve
        </a>
      </footer>
    </div>
  );
}
