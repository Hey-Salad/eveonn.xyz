import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Generate a business or product strategy document. Use when the user wants a go-to-market plan, competitive analysis, product roadmap, or growth strategy.",
  inputSchema: z.object({
    type: z
      .enum(["go_to_market", "competitive_analysis", "product_roadmap", "growth_strategy", "pricing_strategy"])
      .describe("Type of strategy document"),
    context: z.string().min(1).describe("Business context, product details, or problem statement"),
    timeframe: z.string().optional().describe("Time horizon, e.g. '90 days', 'Q3 2026'"),
  }),
  async execute({ type, context, timeframe }) {
    return {
      type,
      context,
      timeframe: timeframe ?? "90 days",
      status: "ready",
      note: `Produce a detailed ${type.replace(/_/g, " ")} based on the context. Include actionable steps, metrics to track, and clear priorities. Timeframe: ${timeframe ?? "90 days"}.`,
    };
  },
});
