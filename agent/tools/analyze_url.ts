import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Fetch and analyze a web page. Use when the user shares a URL and wants a summary, review, or analysis of its content.",
  inputSchema: z.object({
    url: z.string().url().describe("The URL to analyze"),
    focus: z
      .enum(["summary", "key_points", "competitor_analysis", "technical_review", "seo_review"])
      .default("summary")
      .describe("What to focus the analysis on"),
  }),
  async execute({ url, focus }) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Eveonn-Agent/1.0" },
        signal: AbortSignal.timeout(10_000),
      });
      const html = await res.text();

      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const metaDescMatch = html.match(
        /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i,
      );

      const textContent = html
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 3000);

      return {
        url,
        focus,
        title: titleMatch?.[1]?.trim() ?? "Unknown",
        metaDescription: metaDescMatch?.[1]?.trim() ?? "",
        contentPreview: textContent,
        fetchedAt: new Date().toISOString(),
      };
    } catch (e) {
      return {
        url,
        focus,
        error: `Failed to fetch: ${e instanceof Error ? e.message : "unknown error"}`,
      };
    }
  },
});
