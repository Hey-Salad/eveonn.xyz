import { Activity, Bot, GitFork, Rocket, ShieldCheck, Zap } from "lucide-react";

const stack = ["Next.js", "Vercel Eve", "Agent runtime", "Web channel"];

const roadmap = [
  {
    icon: Bot,
    label: "Branded agent starter",
    text: "A clean Eve project people can fork, rename, and deploy with their own agent identity.",
  },
  {
    icon: ShieldCheck,
    label: "Protected by default",
    text: "The public site is open, while chat access stays gated until a real auth policy is chosen.",
  },
  {
    icon: Activity,
    label: "Always-on runtime",
    text: "Eve sessions, health checks, tools, channels, and schedules can live behind one web surface.",
  },
];

export default function Page() {
  return (
    <main className="eo-shell mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
      <header className="eo-nav flex items-center justify-between gap-4">
        <div className="eo-pill border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase text-lime-300">
          eveonn.xyz
        </div>
        <div className="eo-pill-muted border border-white/10 bg-black/20 px-4 py-2 font-mono text-xs text-white/60">
          Eve on. Always on.
        </div>
      </header>

      <section className="eo-hero grid flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_450px] lg:py-20">
        <div>
          <div className="eo-kicker mb-5 font-mono text-xs uppercase text-white/45">
            Open source Eve agent starter
          </div>
          <h1 className="eo-title max-w-4xl text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.92] text-balance">
            eveonn.xyz
          </h1>
          <p className="eo-copy mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Eveonn is a forkable, deployable template for always-on agents built with Vercel Eve.
            It gives an Eve runtime a public brand, a protected API surface, and a path to tools,
            schedules, channels, and web chat.
          </p>

          <div className="eo-actions mt-10 flex flex-wrap gap-4">
            <a
              className="eo-button eo-button-primary inline-flex items-center gap-2 bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              href="https://github.com/Hey-Salad/eveonn.xyz"
            >
              <GitFork className="h-4 w-4" />
              View on GitHub
            </a>
            <a
              className="eo-button inline-flex items-center gap-2 border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10"
              href="/eve/v1/health"
            >
              <Activity className="h-4 w-4" />
              Check Runtime
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

        <aside className="eo-panel border border-white/10 bg-white/[0.05] shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="eo-terminal-dots flex gap-2 border-b border-white/10 px-5 py-4">
            <span className="eo-dot eo-dot-active h-2.5 w-2.5 bg-lime-300" />
            <span className="eo-dot h-2.5 w-2.5 bg-white/20" />
            <span className="eo-dot h-2.5 w-2.5 bg-white/20" />
          </div>
          <div className="eo-terminal space-y-4 px-5 py-5">
            <div className="font-mono text-sm text-white/78">
              <span className="eo-command-symbol text-white/35">$</span>{" "}
              <span className="eo-command-name text-lime-300">npx</span> eve@latest init my-agent
            </div>
            <div className="font-mono text-sm text-white/78">
              <span className="eo-command-symbol text-white/35">$</span>{" "}
              <span className="eo-command-name text-lime-300">brand</span> eveonn.xyz
            </div>
            <div className="font-mono text-sm text-white/78">
              <span className="eo-command-symbol text-white/35">$</span>{" "}
              <span className="eo-command-name text-lime-300">deploy</span> vercel --prod
            </div>
          </div>

          <div className="eo-status border-t border-white/10 px-5 py-5">
            <div className="eo-status-title mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <Zap className="h-4 w-4 text-lime-300" />
              Project status
            </div>
            <dl className="eo-status-grid grid gap-3 text-sm text-white/62">
              <div className="eo-status-row flex items-center justify-between gap-4">
                <dt>Runtime</dt>
                <dd className="font-medium text-white">Mounted</dd>
              </div>
              <div className="eo-status-row flex items-center justify-between gap-4">
                <dt>Public site</dt>
                <dd className="font-medium text-white">Live</dd>
              </div>
              <div className="eo-status-row flex items-center justify-between gap-4">
                <dt>Chat access</dt>
                <dd className="eo-good font-medium text-lime-300">Protected</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="eo-cards grid gap-4 pb-12 md:grid-cols-3">
        {roadmap.map(({ icon: Icon, label, text }) => (
          <article className="eo-card border border-white/10 bg-black/20 p-5" key={label}>
            <Icon className="mb-5 h-5 w-5 text-lime-300" />
            <h2 className="text-base font-semibold text-white">{label}</h2>
            <p className="mt-3 text-sm leading-6 text-white/62">{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
