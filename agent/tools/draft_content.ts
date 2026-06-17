import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Draft marketing content: blog posts, social media posts, email campaigns, landing page copy, or product descriptions. Returns structured content the user can edit and publish.",
  inputSchema: z.object({
    type: z
      .enum(["blog_post", "social_post", "email", "landing_page", "product_description"])
      .describe("The type of content to draft"),
    topic: z.string().min(1).describe("What the content is about"),
    tone: z
      .enum(["professional", "casual", "bold", "technical", "friendly"])
      .default("professional")
      .describe("Writing tone"),
    audience: z.string().optional().describe("Target audience"),
  }),
  async execute({ type, topic, tone, audience }) {
    return {
      type,
      topic,
      tone,
      audience: audience ?? "general",
      status: "draft_ready",
      note: `Use the context and your writing ability to produce the ${type} about "${topic}" in a ${tone} tone${audience ? ` for ${audience}` : ""}. Return the full draft inline.`,
    };
  },
});
