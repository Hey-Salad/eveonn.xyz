import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Search the web for current information. Use when the user asks about recent events, facts, or anything that benefits from live data.",
  inputSchema: z.object({
    query: z.string().min(1).describe("The search query"),
  }),
  async execute({ query }) {
    const res = await fetch(
      `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`,
    );
    const data = await res.json();

    const results: { title: string; snippet: string; url: string }[] = [];

    if (data.AbstractText) {
      results.push({
        title: data.Heading || query,
        snippet: data.AbstractText,
        url: data.AbstractURL || "",
      });
    }

    for (const topic of data.RelatedTopics?.slice(0, 5) ?? []) {
      if (topic.Text && topic.FirstURL) {
        results.push({
          title: topic.Text.slice(0, 80),
          snippet: topic.Text,
          url: topic.FirstURL,
        });
      }
    }

    if (results.length === 0) {
      return { query, results: [], note: "No results found. Try rephrasing." };
    }

    return { query, results };
  },
});
