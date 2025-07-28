export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  affiliateUrl: string;
  imageUrl: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export const tools: Tool[] = [
  // AI Writing Tools
  {
    slug: "jasper-ai",
    name: "Jasper AI",
    description: "Powerful AI copywriting assistant with 30% recurring affiliate commissions.",
    category: "AI Writing",
    affiliateUrl: "https://jasper.ai/affiliate?ref=yourref",
    imageUrl: "/images/jasper-ai.png",
    isPopular: true,
  },
  {
    slug: "writesonic",
    name: "Writesonic",
    description: "AI writer for marketing, blogs, and more, offering 30% recurring affiliate payouts.",
    category: "AI Writing",
    affiliateUrl: "https://writesonic.com/affiliate?ref=yourref",
    imageUrl: "/images/writesonic.png",
    isNew: true,
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    description: "Create marketing copy quickly with Copy.ai's 30% recurring affiliate program.",
    category: "AI Writing",
    affiliateUrl: "https://copy.ai/affiliate?ref=yourref",
    imageUrl: "/images/copy-ai.png",
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    description: "AI writing assistant for grammar, tone, and clarity. Trusted by millions worldwide.",
    category: "AI Writing",
    affiliateUrl: "https://grammarly.com/affiliate?ref=yourref",
    imageUrl: "/images/grammarly.png",
  },
  {
    slug: "quillbot",
    name: "QuillBot",
    description: "AI paraphrasing and writing enhancement tool with affiliate opportunities.",
    category: "AI Writing",
    affiliateUrl: "https://quillbot.com/affiliate?ref=yourref",
    imageUrl: "/images/quillbot.png",
  },
  
  // AI Video Tools
  {
    slug: "synthesia",
    name: "Synthesia",
    description: "Create AI videos with virtual presenters. High-converting affiliate program.",
    category: "AI Video",
    affiliateUrl: "https://synthesia.io/affiliate?ref=yourref",
    imageUrl: "/images/synthesia.png",
    isPopular: true,
  },
  {
    slug: "pictory",
    name: "Pictory",
    description: "Turn scripts into videos automatically. Perfect for YouTubers and marketers.",
    category: "AI Video",
    affiliateUrl: "https://pictory.ai/affiliate?ref=yourref",
    imageUrl: "/images/pictory.png",
  },
  {
    slug: "descript",
    name: "Descript",
    description: "AI-powered video and audio editing with text-based editing interface.",
    category: "AI Video",
    affiliateUrl: "https://descript.com/affiliate?ref=yourref",
    imageUrl: "/images/descript.png",
  },
  {
    slug: "invideo",
    name: "InVideo",
    description: "AI video creation platform with templates and automated editing features.",
    category: "AI Video",
    affiliateUrl: "https://invideo.io/affiliate?ref=yourref",
    imageUrl: "/images/invideo.png",
  },

  // AI Design Tools
  {
    slug: "midjourney",
    name: "Midjourney",
    description: "Generate stunning AI artwork and images. Popular among designers and creators.",
    category: "AI Design",
    affiliateUrl: "https://midjourney.com/affiliate?ref=yourref",
    imageUrl: "/images/midjourney.png",
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    description: "AI-powered design platform with text-to-image and smart design features.",
    category: "AI Design",
    affiliateUrl: "https://canva.com/affiliate?ref=yourref",
    imageUrl: "/images/canva-ai.png",
  },
  {
    slug: "dall-e",
    name: "DALL-E 3",
    description: "OpenAI's advanced AI image generator integrated with ChatGPT Plus.",
    category: "AI Design",
    affiliateUrl: "https://openai.com/affiliate?ref=yourref",
    imageUrl: "/images/dall-e.png",
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    description: "Professional AI image generation with advanced control and customization.",
    category: "AI Design",
    affiliateUrl: "https://leonardo.ai/affiliate?ref=yourref",
    imageUrl: "/images/leonardo-ai.png",
  },

  // AI Productivity Tools
  {
    slug: "notion-ai",
    name: "Notion AI",
    description: "AI-powered workspace for notes, docs, and project management.",
    category: "AI Productivity",
    affiliateUrl: "https://notion.so/affiliate?ref=yourref",
    imageUrl: "/images/notion-ai.png",
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    description: "AI meeting transcription and note-taking with real-time collaboration.",
    category: "AI Productivity",
    affiliateUrl: "https://otter.ai/affiliate?ref=yourref",
    imageUrl: "/images/otter-ai.png",
  },
  {
    slug: "zapier",
    name: "Zapier",
    description: "Automation platform connecting apps with AI-powered workflow suggestions.",
    category: "AI Productivity",
    affiliateUrl: "https://zapier.com/affiliate?ref=yourref",
    imageUrl: "/images/zapier.png",
  },
  {
    slug: "clickup-ai",
    name: "ClickUp AI",
    description: "Project management with AI writing assistant and automation features.",
    category: "AI Productivity",
    affiliateUrl: "https://clickup.com/affiliate?ref=yourref",
    imageUrl: "/images/clickup-ai.png",
  },

  // AI Chat & Assistants
  {
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    description: "OpenAI's premium ChatGPT with GPT-4, faster responses, and priority access.",
    category: "AI Chat",
    affiliateUrl: "https://openai.com/affiliate?ref=yourref",
    imageUrl: "/images/chatgpt-plus.png",
  },
  {
    slug: "claude-pro",
    name: "Claude Pro",
    description: "Anthropic's advanced AI assistant for complex reasoning and long-form content.",
    category: "AI Chat",
    affiliateUrl: "https://claude.ai/affiliate?ref=yourref",
    imageUrl: "/images/claude-pro.png",
  },
  {
    slug: "perplexity-pro",
    name: "Perplexity Pro",
    description: "AI-powered search engine with citations and advanced reasoning capabilities.",
    category: "AI Chat",
    affiliateUrl: "https://perplexity.ai/affiliate?ref=yourref",
    imageUrl: "/images/perplexity-pro.png",
  },
  {
    slug: "character-ai",
    name: "Character.AI",
    description: "Create and chat with AI characters for entertainment and role-playing.",
    category: "AI Chat",
    affiliateUrl: "https://character.ai/affiliate?ref=yourref",
    imageUrl: "/images/character-ai.png",
  },

  // AI Marketing Tools
  {
    slug: "hubspot-ai",
    name: "HubSpot AI",
    description: "AI-powered CRM and marketing automation with content generation features.",
    category: "AI Marketing",
    affiliateUrl: "https://hubspot.com/affiliate?ref=yourref",
    imageUrl: "/images/hubspot-ai.png",
  },
  {
    slug: "semrush",
    name: "Semrush AI",
    description: "SEO and digital marketing toolkit with AI content and keyword suggestions.",
    category: "AI Marketing",
    affiliateUrl: "https://semrush.com/affiliate?ref=yourref",
    imageUrl: "/images/semrush.png",
  },
  {
    slug: "mailchimp-ai",
    name: "Mailchimp AI",
    description: "Email marketing platform with AI content generation and optimization.",
    category: "AI Marketing",
    affiliateUrl: "https://mailchimp.com/affiliate?ref=yourref",
    imageUrl: "/images/mailchimp-ai.png",
  },

  // AI Development Tools
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps write code faster with intelligent suggestions.",
    category: "AI Development",
    affiliateUrl: "https://github.com/affiliate?ref=yourref",
    imageUrl: "/images/github-copilot.png",
  },
  {
    slug: "cursor-ai",
    name: "Cursor",
    description: "AI-first code editor with advanced autocomplete and refactoring capabilities.",
    category: "AI Development",
    affiliateUrl: "https://cursor.sh/affiliate?ref=yourref",
    imageUrl: "/images/cursor-ai.png",
  },
  {
    slug: "replit-ai",
    name: "Replit AI",
    description: "Online IDE with AI coding assistant for collaborative development.",
    category: "AI Development",
    affiliateUrl: "https://replit.com/affiliate?ref=yourref",
    imageUrl: "/images/replit-ai.png",
  },
  {
    slug: "tabnine",
    name: "Tabnine",
    description: "AI code completion assistant that works with all major IDEs and languages.",
    category: "AI Development",
    affiliateUrl: "https://tabnine.com/affiliate?ref=yourref",
    imageUrl: "/images/tabnine.png",
  }
];
