import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "./globals.css";

const criticalCss = `
  :root {
    color-scheme: dark;
    --eo-bg: #02060a;
    --eo-fg: #f4f2ea;
    --eo-muted: rgba(244, 242, 234, 0.68);
    --eo-soft: rgba(255, 255, 255, 0.06);
    --eo-line: rgba(255, 255, 255, 0.12);
    --eo-lime: #d5ff57;
  }
  * { box-sizing: border-box; }
  html { min-height: 100%; background: var(--eo-bg); }
  body {
    min-height: 100%;
    margin: 0;
    background:
      linear-gradient(135deg, rgba(213, 255, 87, 0.08), transparent 28%),
      linear-gradient(225deg, rgba(88, 110, 255, 0.12), transparent 30%),
      var(--eo-bg);
    color: var(--eo-fg);
    font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
  }
  a { color: inherit; text-decoration: none; }
  .eo-shell {
    width: min(100%, 1280px);
    min-height: 100vh;
    margin: 0 auto;
    padding: 32px 48px 48px;
  }
  .eo-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .eo-pill {
    border: 1px solid var(--eo-line);
    background: var(--eo-soft);
    padding: 8px 14px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--eo-lime);
  }
  .eo-pill-muted {
    border: 1px solid var(--eo-line);
    background: rgba(0, 0, 0, 0.24);
    padding: 8px 14px;
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 12px;
    color: rgba(244, 242, 234, 0.62);
  }
  .eo-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) 450px;
    align-items: center;
    gap: 48px;
    min-height: calc(100vh - 220px);
    padding: 72px 0 48px;
  }
  .eo-kicker {
    margin-bottom: 20px;
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 12px;
    text-transform: uppercase;
    color: rgba(244, 242, 234, 0.48);
  }
  .eo-title {
    max-width: 900px;
    margin: 0;
    font-size: clamp(3.5rem, 10vw, 8rem);
    line-height: 0.92;
    font-weight: 800;
    letter-spacing: 0;
    white-space: nowrap;
  }
  .eo-copy {
    max-width: 700px;
    margin: 24px 0 0;
    color: var(--eo-muted);
    font-size: 20px;
    line-height: 1.6;
  }
  .eo-actions, .eo-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .eo-actions { margin-top: 40px; }
  .eo-stack { margin-top: 36px; }
  .eo-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    border: 1px solid var(--eo-line);
    padding: 0 18px;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(244, 242, 234, 0.88);
    font-size: 14px;
    font-weight: 700;
    max-width: 100%;
  }
  .eo-button-primary {
    border-color: var(--eo-lime);
    background: var(--eo-lime);
    color: #05070a;
  }
  .eo-tag {
    border: 1px solid var(--eo-line);
    background: rgba(0, 0, 0, 0.24);
    padding: 8px 12px;
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 12px;
    color: rgba(244, 242, 234, 0.62);
  }
  .eo-panel, .eo-card {
    border: 1px solid var(--eo-line);
    background: rgba(255, 255, 255, 0.055);
    box-shadow: 0 30px 120px rgba(0, 0, 0, 0.35);
  }
  .eo-terminal-dots {
    display: flex;
    gap: 8px;
    border-bottom: 1px solid var(--eo-line);
    padding: 16px 20px;
  }
  .eo-dot {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.22);
  }
  .eo-dot-active { background: var(--eo-lime); }
  .eo-terminal {
    display: grid;
    gap: 16px;
    padding: 20px;
    font-family: var(--font-mono), ui-monospace, monospace;
    font-size: 14px;
    color: rgba(244, 242, 234, 0.78);
  }
  .eo-command-symbol { color: rgba(244, 242, 234, 0.38); }
  .eo-command-name { color: var(--eo-lime); }
  .eo-status {
    border-top: 1px solid var(--eo-line);
    padding: 20px;
  }
  .eo-status-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 700;
  }
  .eo-status-grid {
    display: grid;
    gap: 12px;
    margin: 0;
    font-size: 14px;
    color: rgba(244, 242, 234, 0.64);
  }
  .eo-status-row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .eo-status-row dd {
    margin: 0;
    color: var(--eo-fg);
    font-weight: 700;
  }
  .eo-status-row .eo-good { color: var(--eo-lime); }
  .eo-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    padding-bottom: 48px;
  }
  .eo-card {
    box-shadow: none;
    padding: 20px;
    background: rgba(0, 0, 0, 0.22);
  }
  .eo-card svg, .eo-button svg, .eo-status-title svg {
    width: 18px;
    height: 18px;
    color: var(--eo-lime);
  }
  .eo-card h2 {
    margin: 18px 0 0;
    font-size: 16px;
  }
  .eo-card p {
    margin: 12px 0 0;
    color: rgba(244, 242, 234, 0.64);
    font-size: 14px;
    line-height: 1.6;
  }
  @media (max-width: 900px) {
    .eo-shell { padding: 24px 20px 40px; }
    .eo-hero {
      grid-template-columns: 1fr;
      min-height: auto;
      padding: 56px 0 32px;
    }
    .eo-cards { grid-template-columns: 1fr; }
  }
  @media (max-width: 520px) {
    .eo-nav { align-items: flex-start; flex-direction: column; }
    .eo-title { font-size: clamp(2.75rem, 15vw, 3.9rem); }
    .eo-copy { font-size: 17px; }
    .eo-actions { width: 100%; }
    .eo-button { width: 100%; justify-content: center; }
  }
`;

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "eveonn.xyz - Always-on agents built with Eve",
  description:
    "eveonn.xyz is an open source always-on agent starter built with Vercel Eve and Next.js.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html className={cn(sans.variable, mono.variable)} lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </head>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
