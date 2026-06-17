import {
  Activity,
  ArrowRight,
  Bot,
  FileText,
  GitFork,
  Globe,
  LineChart,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";

const stack = ["Next.js 16", "Vercel Eve", "Claude Opus", "Always-on"];

const capabilities = [
  {
    icon: Search,
    label: "Web Research",
    text: "Search the web in real time. Get answers grounded in current data, not stale training cuts.",
  },
  {
    icon: FileText,
    label: "Content Drafting",
    text: "Blog posts, social media, email campaigns, landing pages — drafted and ready to publish.",
  },
  {
    icon: Globe,
    label: "URL Analysis",
    text: "Drop a link, get a summary, competitor analysis, SEO review, or technical breakdown.",
  },
  {
    icon: LineChart,
    label: "Strategy Generation",
    text: "Go-to-market plans, pricing strategies, product roadmaps with real timelines and metrics.",
  },
];

const plans = [
  {
    name: "Open Source",
    price: "Free",
    description: "Fork it, deploy it, make it yours.",
    features: [
      "Full source code (MIT)",
      "4 built-in tools",
      "Eve agent runtime",
      "One-click Vercel deploy",
      "Community support",
    ],
    cta: "Deploy Your Own",
    href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHey-Salad%2Feveonn.xyz&project-name=my-agent&repository-name=my-agent",
    primary: false,
  },
  {
    name: "Custom Agent",
    price: "From $2,000",
    description: "We build a production agent for your business.",
    features: [
      "Custom tools & integrations",
      "Your brand & domain",
      "Slack, Discord, email channels",
      "Human-in-the-loop approvals",
      "Production deployment & support",
      "Strategy consultation",
    ],
    cta: "Get in Touch",
    href: "mailto:peter@heysalad.co?subject=Custom%20AI%20Agent&body=Hi%20Peter%2C%20I%27m%20interested%20in%20a%20custom%20agent%20for%20my%20business.",
    primary: true,
  },
];

export default function Page() {
  return (
    <main className="eo-shell mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
      {/* Nav */}
      <header className="eo-nav flex items-center justify-between gap-4">
        <div className="eo-pill border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase text-lime-300">
          eveonn.xyz
        </div>
        <nav className="flex items-center gap-4">
          <a
            className="text-sm text-white/60 transition-colors hover:text-white"
            href="#capabilities"
          >
            Capabilities
          </a>
          <a
            className="text-sm text-white/60 transition-colors hover:text-white"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="inline-flex items-center gap-2 border border-lime-300 bg-lime-300 px-4 py-2 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            href="/chat"
          >
            <MessageCircle className="h-4 w-4" />
            Try Evelyn
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="eo-hero grid flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_450px] lg:py-20">
        <div>
          <div className="eo-kicker mb-5 font-mono text-xs uppercase text-white/45">
            Open source always-on agent
          </div>
          <h1 className="eo-title max-w-4xl text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.92] text-balance">
            eveonn.xyz
          </h1>
          <p className="eo-copy mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            An always-on AI agent that researches, writes, analyzes, and strategizes for you.
            Fork it and deploy your own, or let us build a custom agent for your business.
          </p>

          <div className="eo-actions mt-10 flex flex-wrap gap-4">
            <a
              className="eo-button eo-button-primary inline-flex items-center gap-2 bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              href="/chat"
            >
              <MessageCircle className="h-4 w-4" />
              Try the Agent
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="eo-button inline-flex items-center gap-2 border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
              href="https://github.com/Hey-Salad/eveonn.xyz"
            >
              <GitFork className="h-4 w-4" />
              View on GitHub
            </a>
            <a
              className="eo-button inline-flex items-center gap-2 border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
              href="https://vercel.com/eve"
            >
              <Rocket className="h-4 w-4" />
              Built with Eve
            </a>
          </div>

          <div className="eo-stack mt-10 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                className="eo-tag border border-white/10 bg-black/25 px-3 py-2 font-mono text-xs text-white/58"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Terminal panel */}
        <aside className="eo-panel border border-white/10 bg-white/[0.05] shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="eo-terminal-dots flex gap-2 border-b border-white/10 px-5 py-4">
            <span className="eo-dot eo-dot-active h-2.5 w-2.5 bg-lime-300" />
            <span className="eo-dot h-2.5 w-2.5 bg-white/20" />
            <span className="eo-dot h-2.5 w-2.5 bg-white/20" />
          </div>
          <div className="eo-terminal space-y-4 px-5 py-5">
            <div className="font-mono text-sm text-white/78">
              <span className="eo-command-symbol text-white/35">&gt;</span>{" "}
              <span className="text-white/50">Research competitors for my SaaS</span>
            </div>
            <div className="font-mono text-sm text-lime-300/80">
              Searching the web for competitor data...
            </div>
            <div className="font-mono text-sm text-white/78">
              <span className="eo-command-symbol text-white/35">&gt;</span>{" "}
              <span className="text-white/50">Draft a go-to-market plan</span>
            </div>
            <div className="font-mono text-sm text-lime-300/80">
              Generating strategy with 90-day milestones...
            </div>
            <div className="font-mono text-sm text-white/78">
              <span className="eo-command-symbol text-white/35">&gt;</span>{" "}
              <span className="text-white/50">Write a launch blog post</span>
            </div>
            <div className="font-mono text-sm text-lime-300/80">
              Drafting 1,200-word blog post in bold tone...
            </div>
          </div>

          <div className="eo-status border-t border-white/10 px-5 py-5">
            <div className="eo-status-title mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <Zap className="h-4 w-4 text-lime-300" />
              Agent status
            </div>
            <dl className="eo-status-grid grid gap-3 text-sm text-white/62">
              <div className="eo-status-row flex items-center justify-between gap-4">
                <dt>Runtime</dt>
                <dd className="font-medium text-white">Always on</dd>
              </div>
              <div className="eo-status-row flex items-center justify-between gap-4">
                <dt>Tools</dt>
                <dd className="font-medium text-white">4 active</dd>
              </div>
              <div className="eo-status-row flex items-center justify-between gap-4">
                <dt>Model</dt>
                <dd className="eo-good font-medium text-lime-300">Claude Opus</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      {/* Capabilities */}
      <section className="pb-20" id="capabilities">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What Evelyn can do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Four built-in tools, ready out of the box. Fork and add your own.
          </p>
        </div>
        <div className="eo-cards grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, label, text }) => (
            <article className="eo-card border border-white/10 bg-black/20 p-5" key={label}>
              <Icon className="mb-5 h-5 w-5 text-lime-300" />
              <h3 className="text-base font-semibold text-white">{label}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-20" id="pricing">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ship your agent today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Deploy the open-source starter for free, or hire us to build a custom agent.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              className={`flex flex-col border p-8 ${
                plan.primary
                  ? "border-lime-300/40 bg-lime-300/[0.04]"
                  : "border-white/10 bg-black/20"
              }`}
              key={plan.name}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-2 text-3xl font-bold text-lime-300">{plan.price}</div>
                <p className="mt-2 text-sm text-white/60">{plan.description}</p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li className="flex items-start gap-2 text-sm text-white/75" key={f}>
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.primary
                    ? "bg-lime-300 text-black"
                    : "border border-white/12 bg-white/5 text-white/85"
                }`}
                href={plan.href}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mb-12 border border-lime-300/20 bg-lime-300/[0.04] px-8 py-10 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Need a custom agent for your business?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          HeySalad builds production AI agents — custom tools, your brand, deployed and supported.
          From internal ops agents to customer-facing assistants.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="inline-flex items-center gap-2 bg-lime-300 px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            href="mailto:peter@heysalad.co?subject=Custom%20AI%20Agent&body=Hi%20Peter%2C%20I%27m%20interested%20in%20a%20custom%20agent%20for%20my%20business."
          >
            <Bot className="h-4 w-4" />
            Contact HeySalad
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            className="inline-flex items-center gap-2 border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
            href="/chat"
          >
            <MessageCircle className="h-4 w-4" />
            Try Evelyn First
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
        <p>
          Built by{" "}
          <a className="text-white/60 hover:text-white" href="https://heysalad.co">
            HeySalad
          </a>{" "}
          with{" "}
          <a className="text-white/60 hover:text-white" href="https://vercel.com/eve">
            Vercel Eve
          </a>
        </p>
      </footer>
    </main>
  );
}
