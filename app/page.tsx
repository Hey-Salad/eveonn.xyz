import {
  ArrowRight,
  FileText,
  GitFork,
  Globe,
  LineChart,
  MessageCircle,
  Rocket,
  Search,
  Terminal,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 right-0 left-0 z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a
            className="font-[family-name:var(--font-display)] text-lg font-700 tracking-tight text-[var(--eo-ink)]"
            href="/"
          >
            eveonn<span className="text-[var(--eo-cherry)]">.xyz</span>
          </a>
          <div className="flex items-center gap-5">
            <a
              className="hidden text-sm text-[var(--eo-muted)] transition-colors hover:text-[var(--eo-ink)] sm:block"
              href="#what"
            >
              What it does
            </a>
            <a
              className="hidden text-sm text-[var(--eo-muted)] transition-colors hover:text-[var(--eo-ink)] sm:block"
              href="https://github.com/Hey-Salad/eveonn.xyz"
            >
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[var(--eo-cherry)] px-4 py-2 text-sm font-600 text-white transition-all hover:brightness-110"
              href="/chat"
            >
              Try Evelyn
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-14">
        {/* Peach gradient wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 left-0 h-[500px]"
          style={{
            background:
              "linear-gradient(180deg, var(--eo-light-peach) 0%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_420px]">
            <div>
              {/* Status */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[var(--eo-peach)] bg-[var(--eo-light-peach)] px-3.5 py-1.5 text-xs font-600 text-[var(--eo-cherry)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--eo-cherry)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--eo-cherry)]" />
                </span>
                Agent online
              </div>

              <h1
                className="max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,5rem)] font-800 leading-[1] tracking-tight text-[var(--eo-ink)]"
                style={{ textWrap: "balance" }}
              >
                Your agent,{" "}
                <span className="text-[var(--eo-cherry)]">always on</span>
              </h1>

              <p
                className="mt-6 max-w-md text-lg leading-relaxed text-[var(--eo-muted)]"
                style={{ lineHeight: "1.7" }}
              >
                An open-source AI agent that researches, writes, analyzes, and
                strategizes — running 24/7 on Vercel Eve. Fork it or let us
                build yours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--eo-cherry)] px-5 py-3 text-sm font-600 text-white transition-all hover:brightness-110"
                  href="/chat"
                >
                  <MessageCircle className="h-4 w-4" />
                  Talk to Evelyn
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-600 text-[var(--eo-ink)] transition-colors hover:bg-[var(--eo-light-peach)]"
                  href="https://github.com/Hey-Salad/eveonn.xyz"
                >
                  <GitFork className="h-4 w-4" />
                  Fork on GitHub
                </a>
              </div>
            </div>

            {/* Terminal preview */}
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-lg shadow-[var(--eo-peach)]/20">
              <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[var(--eo-light-peach)]/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[var(--eo-cherry)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--eo-peach)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--eo-light-peach)]" />
                </div>
                <span className="font-mono text-xs text-[var(--eo-muted)]">
                  evelyn session
                </span>
              </div>
              <div className="space-y-5 p-5 font-mono text-[13px] leading-relaxed">
                <div>
                  <p className="font-500 text-[var(--eo-muted)]">you</p>
                  <p className="mt-1 text-[var(--eo-ink)]">
                    Research my top 3 competitors and draft a GTM plan
                  </p>
                </div>
                <div>
                  <p className="font-500 text-[var(--eo-cherry)]">evelyn</p>
                  <p className="mt-1 text-[var(--eo-muted)]">
                    Searching the web for competitor data...
                  </p>
                  <p className="mt-1 text-[var(--eo-muted)]">
                    Found 3 direct competitors. Analyzing positioning.
                  </p>
                  <p className="mt-1 text-[var(--eo-muted)]">
                    Generating 90-day go-to-market strategy...
                  </p>
                </div>
                <div>
                  <p className="font-500 text-[var(--eo-muted)]">you</p>
                  <p className="mt-1 text-[var(--eo-ink)]">
                    Now write the launch blog post
                  </p>
                </div>
                <div>
                  <p className="font-500 text-[var(--eo-cherry)]">evelyn</p>
                  <p className="mt-1 text-[var(--eo-muted)]">
                    Drafting 1,200 words in bold tone targeting founders...
                  </p>
                  <span className="inline-block h-4 w-0.5 animate-pulse rounded-full bg-[var(--eo-cherry)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="border-t border-[var(--border)]" id="what">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2
            className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-tight tracking-tight text-[var(--eo-ink)]"
            style={{ textWrap: "balance" }}
          >
            Four tools. One agent.{" "}
            <span className="text-[var(--eo-cherry)]">Always running.</span>
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
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
              <div
                className="rounded-2xl border border-[var(--border)] bg-[var(--eo-light-peach)]/30 p-7 transition-colors hover:bg-[var(--eo-light-peach)]/60"
                key={name}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--eo-cherry)] text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-[var(--eo-muted)]">
                    {name}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-600 text-[var(--eo-ink)]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-[var(--eo-muted)]">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              className="inline-flex items-center gap-2 text-sm font-600 text-[var(--eo-cherry)] transition-colors hover:text-[var(--eo-ink)]"
              href="/chat"
            >
              Try all four tools now
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-[var(--border)] bg-[var(--eo-light-peach)]/30">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2
            className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-700 leading-tight tracking-tight text-[var(--eo-ink)]"
            style={{ textWrap: "balance" }}
          >
            Deploy in three commands
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white font-mono text-sm shadow-sm">
              <div className="border-b border-[var(--border)] bg-[var(--eo-light-peach)]/40 px-5 py-3">
                <div className="flex items-center gap-2 text-xs text-[var(--eo-muted)]">
                  <Terminal className="h-3.5 w-3.5" />
                  terminal
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <span className="text-[var(--eo-muted)]">$</span>{" "}
                  <span className="text-[var(--eo-cherry)]">npx</span>{" "}
                  <span className="text-[var(--eo-ink)]">
                    eve@latest init my-agent
                  </span>
                </div>
                <div>
                  <span className="text-[var(--eo-muted)]">$</span>{" "}
                  <span className="text-[var(--eo-cherry)]">cd</span>{" "}
                  <span className="text-[var(--eo-ink)]">my-agent</span>
                </div>
                <div>
                  <span className="text-[var(--eo-muted)]">$</span>{" "}
                  <span className="text-[var(--eo-cherry)]">vercel</span>{" "}
                  <span className="text-[var(--eo-ink)]">deploy --prod</span>
                </div>
                <div className="mt-2 border-t border-[var(--border)] pt-4 text-[var(--eo-cherry)]">
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

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[var(--eo-cherry)] px-5 py-3 text-sm font-600 text-white transition-all hover:brightness-110"
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHey-Salad%2Feveonn.xyz&project-name=my-agent&repository-name=my-agent"
            >
              <Rocket className="h-4 w-4" />
              Deploy Your Own
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-5 py-3 text-sm font-600 text-[var(--eo-ink)] transition-colors hover:bg-[var(--eo-light-peach)]"
              href="https://github.com/Hey-Salad/eveonn.xyz"
            >
              <GitFork className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--eo-muted)]">
        Built by{" "}
        <a
          className="font-500 text-[var(--eo-ink)] transition-colors hover:text-[var(--eo-cherry)]"
          href="https://heysalad.co"
        >
          HeySalad
        </a>{" "}
        with{" "}
        <a
          className="font-500 text-[var(--eo-ink)] transition-colors hover:text-[var(--eo-cherry)]"
          href="https://vercel.com/eve"
        >
          Vercel Eve
        </a>
      </footer>
    </div>
  );
}
