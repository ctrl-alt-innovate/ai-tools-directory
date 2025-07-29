export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
  affiliateUrl: string;
  imageUrl: string;
  isNew?: boolean;
  isPopular?: boolean;
  // Affiliate-specific fields
  pricing?: {
    freeTier?: string;
    lite?: string;
    standard?: string;
    starter?: string;
    pro?: string;
    professional?: string;
    advanced?: string;
    enterprise?: string;
  };
  commissionRate?: string;
  commissionType?: string;
  cookieDuration?: string;
  whyPromote?: string[];
  keyFeatures?: string[];
  targetAudience?: string[];
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
    pricing: {
      starter: "$49/month",
      pro: "$125/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "45 days",
    whyPromote: [
      "High conversion rates with proven marketing materials",
      "30% recurring commissions on all subscription payments",
      "Premium brand with excellent customer retention",
      "Comprehensive affiliate dashboard and tracking",
      "Responsive affiliate support team"
    ],
    keyFeatures: [
      "50+ AI copywriting templates",
      "Long-form content generation",
      "Brand voice customization",
      "Plagiarism checker included",
      "Multi-language support"
    ],
    targetAudience: [
      "Content marketers and agencies",
      "Bloggers and content creators",
      "E-commerce businesses",
      "Social media managers",
      "Small to enterprise businesses"
    ]
  },
  {
    slug: "writesonic",
    name: "Writesonic",
    description: "AI writer for marketing, blogs, and more, offering 30% recurring affiliate payouts.",
    category: "AI Writing",
    affiliateUrl: "https://writesonic.com/affiliate?ref=yourref",
    imageUrl: "/images/writesonic.png",
    isNew: true,
    pricing: {
      freeTier: "Free trial - no credit card needed",
      lite: "$39/month (billed annually) or $49/month",
      standard: "$79/month (billed annually) or $99/month", 
      professional: "$199/month (billed annually) or $249/month",
      advanced: "$399/month (billed annually) or $499/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Generous 30% recurring commissions on all plan tiers",
      "Premium pricing from $39-$499/month means high payouts",
      "All-in-one SEO and AI content platform",
      "Free trial converts well to paid plans",
      "Replaces multiple expensive marketing tools"
    ],
    keyFeatures: [
      "AI Article Writer 6.0 with SEO optimization",
      "AI Search Engine Optimization (GEO) tracking",
      "SEO site audit and content optimizer",
      "Chatsonic AI chat with web browsing and data analysis",
      "Premium SEO data integrations (Ahrefs, Semrush)"
    ],
    targetAudience: [
      "Digital marketing agencies", 
      "SEO professionals and consultants",
      "Enterprise marketing teams",
      "Content creators and bloggers",
      "Large brands needing custom solutions"
    ]
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    description: "Create marketing copy quickly with Copy.ai's 30% recurring affiliate program.",
    category: "AI Writing",
    affiliateUrl: "https://copy.ai/affiliate?ref=yourref",
    imageUrl: "/images/copy-ai.png",
    pricing: {
      freeTier: "2,000 words/month",
      pro: "$49/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Simple pricing structure with high conversion",
      "Strong brand recognition in AI space",
      "Excellent customer testimonials and case studies",
      "Regular webinars and marketing support",
      "Active community of users"
    ],
    keyFeatures: [
      "90+ copywriting tools and templates",
      "Blog post wizard for long-form content",
      "Social media content generator",
      "Email marketing templates",
      "Chrome extension for easy access"
    ],
    targetAudience: [
      "Marketing teams and agencies",
      "Social media managers",
      "Email marketers",
      "Content creators",
      "Small business owners"
    ]
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    description: "AI writing assistant for grammar, tone, and clarity. Trusted by millions worldwide.",
    category: "AI Writing",
    affiliateUrl: "https://grammarly.com/affiliate?ref=yourref",
    imageUrl: "/images/grammarly.png",
    pricing: {
      freeTier: "Basic grammar checking",
      starter: "$12/month",
      pro: "$15/month",
      enterprise: "$15/month per user"
    },
    commissionRate: "$0.20 - $25",
    commissionType: "Per signup/sale",
    cookieDuration: "90 days",
    whyPromote: [
      "Massive brand recognition and trust",
      "High conversion rate due to freemium model",
      "Long 90-day cookie duration",
      "Multiple commission tiers available",
      "Excellent marketing materials provided"
    ],
    keyFeatures: [
      "Advanced grammar and spell checking",
      "Tone and clarity suggestions",
      "Plagiarism detection",
      "Browser extension and mobile apps",
      "Team collaboration features"
    ],
    targetAudience: [
      "Students and academics",
      "Professional writers",
      "Business professionals",
      "Non-native English speakers",
      "Content teams and agencies"
    ]
  },
  {
    slug: "quillbot",
    name: "QuillBot",
    description: "AI paraphrasing and writing enhancement tool with affiliate opportunities.",
    category: "AI Writing",
    affiliateUrl: "https://quillbot.com/affiliate?ref=yourref",
    imageUrl: "/images/quillbot.png",
    pricing: {
      freeTier: "125 words paraphrasing",
      starter: "$4.95/month",
      pro: "$9.95/month"
    },
    commissionRate: "20%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Affordable pricing increases conversion rates",
      "Popular with students and content creators",
      "Strong brand presence in academic market",
      "Multiple language support attracts global users",
      "Regular feature updates and improvements"
    ],
    keyFeatures: [
      "AI-powered paraphrasing tool",
      "Grammar and spell checker",
      "Plagiarism detection",
      "Citation generator",
      "Multiple writing modes"
    ],
    targetAudience: [
      "Students and researchers",
      "Content writers and bloggers",
      "ESL learners",
      "Academic professionals",
      "Marketing teams"
    ]
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
    pricing: {
      starter: "$30/month",
      pro: "$67/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "60 days",
    whyPromote: [
      "Premium pricing means higher commission payouts",
      "Innovative AI video technology attracts interest",
      "Strong corporate and enterprise market",
      "Excellent customer retention rates",
      "Comprehensive marketing support and materials"
    ],
    keyFeatures: [
      "120+ AI avatars and voices",
      "50+ professional video templates",
      "Multilingual video generation",
      "Custom avatar creation",
      "Enterprise-grade security"
    ],
    targetAudience: [
      "Corporate training teams",
      "Marketing agencies",
      "Content creators",
      "E-learning companies",
      "Enterprise businesses"
    ]
  },
  {
    slug: "pictory",
    name: "Pictory",
    description: "Turn scripts into videos automatically. Perfect for YouTubers and marketers.",
    category: "AI Video",
    affiliateUrl: "https://pictory.ai/affiliate?ref=yourref",
    imageUrl: "/images/pictory.png",
    pricing: {
      starter: "$19/month",
      pro: "$39/month",
      enterprise: "$99/month"
    },
    commissionRate: "20%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Competitive pricing attracts small businesses",
      "Popular with YouTubers and content creators",
      "Strong conversion rate from free trial",
      "Regular feature updates and improvements",
      "Active affiliate community and support"
    ],
    keyFeatures: [
      "Script to video conversion",
      "Auto video highlights from long content",
      "Branded video templates",
      "Voice-over and music library",
      "Team collaboration features"
    ],
    targetAudience: [
      "YouTubers and content creators",
      "Marketing teams",
      "Social media managers",
      "Course creators",
      "Small businesses"
    ]
  },
  {
    slug: "descript",
    name: "Descript",
    description: "AI-powered video and audio editing with text-based editing interface.",
    category: "AI Video",
    affiliateUrl: "https://descript.com/affiliate?ref=yourref",
    imageUrl: "/images/descript.png",
    pricing: {
      freeTier: "3 hours transcription/month",
      starter: "$12/month",
      pro: "$24/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "25%",
    commissionType: "Recurring monthly",
    cookieDuration: "45 days",
    whyPromote: [
      "Innovative text-based editing appeals to creators",
      "Strong retention due to unique workflow",
      "Popular with podcasters and video creators",
      "Free tier helps with conversions",
      "Excellent customer testimonials"
    ],
    keyFeatures: [
      "Text-based video editing",
      "AI transcription and overdub",
      "Screen recording capabilities",
      "Multi-track editing",
      "Collaboration tools"
    ],
    targetAudience: [
      "Podcasters",
      "Video content creators",
      "Marketing teams",
      "Educators and trainers",
      "Remote teams"
    ]
  },
  {
    slug: "invideo",
    name: "InVideo",
    description: "AI video creation platform with templates and automated editing features.",
    category: "AI Video",
    affiliateUrl: "https://invideo.io/affiliate?ref=yourref",
    imageUrl: "/images/invideo.png",
    pricing: {
      freeTier: "60 videos/month with watermark",
      starter: "$15/month",
      pro: "$30/month"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "60 days",
    whyPromote: [
      "Generous 30% recurring commissions",
      "Large template library attracts users",
      "Strong social media marketing focus",
      "Good conversion from free to paid",
      "International market appeal"
    ],
    keyFeatures: [
      "5000+ professional templates",
      "AI-powered video creation",
      "Stock media library",
      "Brand kit and custom fonts",
      "Multi-language support"
    ],
    targetAudience: [
      "Social media marketers",
      "Small business owners",
      "Content creators",
      "Marketing agencies",
      "E-commerce businesses"
    ]
  },

  // AI Design Tools
  {
    slug: "midjourney",
    name: "Midjourney",
    description: "Generate stunning AI artwork and images. Popular among designers and creators.",
    category: "AI Design",
    affiliateUrl: "https://midjourney.com/affiliate?ref=yourref",
    imageUrl: "/images/midjourney.png",
    pricing: {
      starter: "$10/month",
      pro: "$30/month",
      enterprise: "$60/month"
    },
    commissionRate: "25%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Extremely popular in creative communities",
      "High-quality AI art generation attracts artists",
      "Strong social media presence drives awareness",
      "Growing professional market adoption",
      "Unique Discord-based experience"
    ],
    keyFeatures: [
      "High-quality AI image generation",
      "Style customization and parameters",
      "Community gallery and inspiration",
      "Commercial usage rights",
      "Discord-based interface"
    ],
    targetAudience: [
      "Digital artists and designers",
      "Content creators",
      "Marketing professionals",
      "Game developers",
      "Social media managers"
    ]
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    description: "AI-powered design platform with text-to-image and smart design features.",
    category: "AI Design",
    affiliateUrl: "https://canva.com/affiliate?ref=yourref",
    imageUrl: "/images/canva-ai.png",
    pricing: {
      freeTier: "Basic design tools",
      pro: "$14.99/month",
      enterprise: "$30/month per user"
    },
    commissionRate: "10%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Massive user base and brand recognition",
      "Easy-to-use interface appeals to beginners",
      "Strong conversion from free to paid",
      "Constant feature updates and AI improvements",
      "Enterprise market growing rapidly"
    ],
    keyFeatures: [
      "Text to image AI generation",
      "Magic Design automation",
      "Brand kit and templates",
      "Collaboration tools",
      "Print and digital export options"
    ],
    targetAudience: [
      "Small business owners",
      "Social media managers",
      "Marketing teams",
      "Content creators",
      "Non-designers needing graphics"
    ]
  },
  {
    slug: "dall-e",
    name: "DALL-E 3",
    description: "OpenAI's advanced AI image generator integrated with ChatGPT Plus.",
    category: "AI Design",
    affiliateUrl: "https://openai.com/affiliate?ref=yourref",
    imageUrl: "/images/dall-e.png",
    pricing: {
      pro: "$20/month (ChatGPT Plus)",
      enterprise: "Custom pricing"
    },
    commissionRate: "N/A",
    commissionType: "Part of ChatGPT Plus",
    cookieDuration: "30 days",
    whyPromote: [
      "Built into popular ChatGPT Plus subscription",
      "OpenAI brand trust and recognition",
      "High-quality image generation",
      "Integration with text conversations",
      "Constant improvements and updates"
    ],
    keyFeatures: [
      "Advanced AI image generation",
      "Natural language prompts",
      "Integration with ChatGPT",
      "High resolution outputs",
      "Commercial usage rights"
    ],
    targetAudience: [
      "ChatGPT Plus subscribers",
      "Content creators",
      "Marketing professionals",
      "Researchers and educators",
      "Creative professionals"
    ]
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    description: "Professional AI image generation with advanced control and customization.",
    category: "AI Design",
    affiliateUrl: "https://leonardo.ai/affiliate?ref=yourref",
    imageUrl: "/images/leonardo-ai.png",
    pricing: {
      freeTier: "150 credits/day",
      starter: "$12/month",
      pro: "$30/month"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "45 days",
    whyPromote: [
      "High 30% recurring commissions",
      "Professional features attract serious users",
      "Growing reputation in AI art community",
      "Free tier helps with conversions",
      "Advanced control features differentiate from competitors"
    ],
    keyFeatures: [
      "Advanced AI image generation",
      "Model training and fine-tuning",
      "Canvas editing tools",
      "Motion and video generation",
      "API access for developers"
    ],
    targetAudience: [
      "Professional designers",
      "Game developers",
      "Marketing agencies",
      "Content creators",
      "AI enthusiasts"
    ]
  },

  // AI Productivity Tools
  {
    slug: "notion-ai",
    name: "Notion AI",
    description: "AI-powered workspace for notes, docs, and project management.",
    category: "AI Productivity",
    affiliateUrl: "https://notion.so/affiliate?ref=yourref",
    imageUrl: "/images/notion-ai.png",
    pricing: {
      freeTier: "Basic workspace features",
      pro: "$8/month per user",
      enterprise: "$15/month per user"
    },
    commissionRate: "25%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Popular productivity tool with strong retention",
      "Growing AI features increase upgrade rates",
      "Strong word-of-mouth marketing potential",
      "Enterprise market provides higher value customers",
      "Freemium model helps with conversions"
    ],
    keyFeatures: [
      "AI writing and editing assistance",
      "Smart database automation",
      "Template generation",
      "Meeting notes and summaries",
      "Team collaboration tools"
    ],
    targetAudience: [
      "Knowledge workers",
      "Startup teams",
      "Project managers",
      "Content creators",
      "Students and researchers"
    ]
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    description: "AI meeting transcription and note-taking with real-time collaboration.",
    category: "AI Productivity",
    affiliateUrl: "https://otter.ai/affiliate?ref=yourref",
    imageUrl: "/images/otter-ai.png",
    pricing: {
      freeTier: "600 minutes/month",
      starter: "$8.33/month",
      pro: "$20/month per user",
      enterprise: "Custom pricing"
    },
    commissionRate: "20%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Essential tool for remote work and meetings",
      "High conversion from free to paid plans",
      "Strong business and enterprise demand",
      "Regular feature updates improve retention",
      "Integration with popular meeting platforms"
    ],
    keyFeatures: [
      "Real-time transcription",
      "Speaker identification",
      "Meeting summaries and highlights",
      "Integration with Zoom, Teams, Google Meet",
      "Shared notes and collaboration"
    ],
    targetAudience: [
      "Remote workers",
      "Business professionals",
      "Students and academics",
      "Journalists and researchers",
      "Sales and marketing teams"
    ]
  },
  {
    slug: "zapier",
    name: "Zapier",
    description: "Automation platform connecting apps with AI-powered workflow suggestions.",
    category: "AI Productivity",
    affiliateUrl: "https://zapier.com/affiliate?ref=yourref",
    imageUrl: "/images/zapier.png",
    pricing: {
      freeTier: "100 tasks/month",
      starter: "$19.99/month",
      pro: "$49/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "30%",
    commissionType: "One-time payment",
    cookieDuration: "90 days",
    whyPromote: [
      "High commission rate and long cookie duration",
      "Strong business demand for automation",
      "Excellent customer retention rates",
      "Wide range of pricing tiers",
      "Comprehensive affiliate resources"
    ],
    keyFeatures: [
      "5000+ app integrations",
      "AI-powered automation suggestions",
      "Multi-step workflows (Zaps)",
      "Team collaboration features",
      "Advanced logic and filters"
    ],
    targetAudience: [
      "Small business owners",
      "Marketing professionals",
      "Sales teams",
      "Operations managers",
      "Digital agencies"
    ]
  },
  {
    slug: "clickup-ai",
    name: "ClickUp AI",
    description: "Project management with AI writing assistant and automation features.",
    category: "AI Productivity",
    affiliateUrl: "https://clickup.com/affiliate?ref=yourref",
    imageUrl: "/images/clickup-ai.png",
    pricing: {
      freeTier: "100MB storage",
      starter: "$7/month per user",
      pro: "$12/month per user",
      enterprise: "$19/month per user"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "60 days",
    whyPromote: [
      "High 30% recurring commissions",
      "All-in-one platform reduces customer churn",
      "Strong enterprise adoption growing",
      "Free tier converts well to paid",
      "Regular product updates and AI improvements"
    ],
    keyFeatures: [
      "AI writing assistant for tasks and docs",
      "Automated project templates",
      "Smart task suggestions",
      "Time tracking and reporting",
      "Custom workflows and automation"
    ],
    targetAudience: [
      "Project managers",
      "Startup teams",
      "Marketing agencies",
      "Software development teams",
      "Remote teams"
    ]
  },

  // AI Chat & Assistants
  {
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    description: "OpenAI's premium ChatGPT with GPT-4, faster responses, and priority access.",
    category: "AI Chat",
    affiliateUrl: "https://openai.com/affiliate?ref=yourref",
    imageUrl: "/images/chatgpt-plus.png",
    pricing: {
      freeTier: "GPT-3.5 with limits",
      pro: "$20/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "N/A",
    commissionType: "Direct sales only",
    cookieDuration: "N/A",
    whyPromote: [
      "Most recognizable AI brand globally",
      "Massive user base and adoption",
      "Continuous improvements and updates",
      "Enterprise market rapidly expanding",
      "Strong media coverage drives awareness"
    ],
    keyFeatures: [
      "GPT-4 access for advanced reasoning",
      "DALL-E 3 image generation included",
      "Custom GPTs and marketplace",
      "Priority access during peak times",
      "Plugin ecosystem and integrations"
    ],
    targetAudience: [
      "Knowledge workers",
      "Content creators",
      "Researchers and academics",
      "Software developers",
      "Business professionals"
    ]
  },
  {
    slug: "claude-pro",
    name: "Claude Pro",
    description: "Anthropic's advanced AI assistant for complex reasoning and long-form content.",
    category: "AI Chat",
    affiliateUrl: "https://claude.ai/affiliate?ref=yourref",
    imageUrl: "/images/claude-pro.png",
    pricing: {
      freeTier: "Limited usage",
      pro: "$20/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "25%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Strong focus on safety and reliability",
      "Excellent for long-form content creation",
      "Growing reputation among professionals",
      "Competitive alternative to ChatGPT",
      "Strong enterprise adoption potential"
    ],
    keyFeatures: [
      "100K token context window",
      "Advanced reasoning capabilities",
      "Document analysis and summarization",
      "Code generation and debugging",
      "Constitutional AI safety features"
    ],
    targetAudience: [
      "Content writers and editors",
      "Legal and compliance professionals",
      "Researchers and analysts",
      "Software developers",
      "Business consultants"
    ]
  },
  {
    slug: "perplexity-pro",
    name: "Perplexity Pro",
    description: "AI-powered search engine with citations and advanced reasoning capabilities.",
    category: "AI Chat",
    affiliateUrl: "https://perplexity.ai/affiliate?ref=yourref",
    imageUrl: "/images/perplexity-pro.png",
    pricing: {
      freeTier: "5 Pro searches/day",
      pro: "$20/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "45 days",
    whyPromote: [
      "High 30% recurring commissions",
      "Unique positioning as AI search engine",
      "Growing user base seeking Google alternatives",
      "Strong citation and source features",
      "Appeals to research-focused users"
    ],
    keyFeatures: [
      "Real-time web search with AI",
      "Source citations and references",
      "Image and file upload analysis",
      "API access for developers",
      "Unlimited Pro searches"
    ],
    targetAudience: [
      "Researchers and academics",
      "Journalists and writers",
      "Students and educators",
      "Business analysts",
      "Information professionals"
    ]
  },
  {
    slug: "character-ai",
    name: "Character.AI",
    description: "Create and chat with AI characters for entertainment and role-playing.",
    category: "AI Chat",
    affiliateUrl: "https://character.ai/affiliate?ref=yourref",
    imageUrl: "/images/character-ai.png",
    pricing: {
      freeTier: "Limited character interactions",
      pro: "$9.99/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "20%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Unique entertainment and creative use case",
      "Strong appeal to younger demographics",
      "Growing community of character creators",
      "High engagement and retention rates",
      "Multiple monetization opportunities"
    ],
    keyFeatures: [
      "Custom AI character creation",
      "Role-playing and storytelling",
      "Character sharing and discovery",
      "Group conversations",
      "Image generation for characters"
    ],
    targetAudience: [
      "Creative writers and storytellers",
      "Gaming and role-playing enthusiasts",
      "Content creators",
      "Students and educators",
      "Entertainment seekers"
    ]
  },

  // AI Marketing Tools
  {
    slug: "hubspot-ai",
    name: "HubSpot AI",
    description: "AI-powered CRM and marketing automation with content generation features.",
    category: "AI Marketing",
    affiliateUrl: "https://hubspot.com/affiliate?ref=yourref",
    imageUrl: "/images/hubspot-ai.png",
    pricing: {
      freeTier: "Basic CRM features",
      starter: "$45/month",
      pro: "$800/month",
      enterprise: "$3,200/month"
    },
    commissionRate: "15%",
    commissionType: "Recurring monthly",
    cookieDuration: "90 days",
    whyPromote: [
      "Premium pricing means high commission payouts",
      "Strong enterprise market presence",
      "Excellent customer retention rates",
      "Comprehensive marketing platform appeal",
      "Long 90-day cookie duration"
    ],
    keyFeatures: [
      "AI content generation for marketing",
      "Smart lead scoring and automation",
      "Predictive analytics and insights",
      "Email marketing optimization",
      "CRM integration and workflow automation"
    ],
    targetAudience: [
      "Marketing agencies",
      "B2B sales teams",
      "Enterprise marketing departments",
      "Small business owners",
      "Digital marketing consultants"
    ]
  },
  {
    slug: "semrush",
    name: "Semrush AI",
    description: "SEO and digital marketing toolkit with AI content and keyword suggestions.",
    category: "AI Marketing",
    affiliateUrl: "https://semrush.com/affiliate?ref=yourref",
    imageUrl: "/images/semrush.png",
    pricing: {
      pro: "$119.95/month",
      starter: "$229.95/month",
      enterprise: "$449.95/month"
    },
    commissionRate: "40%",
    commissionType: "One-time payment",
    cookieDuration: "120 days",
    whyPromote: [
      "Highest commission rate at 40%",
      "Premium pricing with high-value customers",
      "Industry-leading SEO tool reputation",
      "Strong demand from digital marketers",
      "Excellent affiliate resources and support"
    ],
    keyFeatures: [
      "AI-powered keyword research",
      "Competitor analysis and insights",
      "Content optimization suggestions",
      "Backlink analysis and monitoring",
      "Rank tracking and reporting"
    ],
    targetAudience: [
      "SEO professionals",
      "Digital marketing agencies",
      "Content marketers",
      "E-commerce businesses",
      "Marketing consultants"
    ]
  },
  {
    slug: "mailchimp-ai",
    name: "Mailchimp AI",
    description: "Email marketing platform with AI content generation and optimization.",
    category: "AI Marketing",
    affiliateUrl: "https://mailchimp.com/affiliate?ref=yourref",
    imageUrl: "/images/mailchimp-ai.png",
    pricing: {
      freeTier: "500 contacts, 1,000 sends/month",
      starter: "$13/month",
      pro: "$20/month",
      enterprise: "$350/month"
    },
    commissionRate: "30%",
    commissionType: "One-time payment",
    cookieDuration: "30 days",
    whyPromote: [
      "Strong brand recognition in email marketing",
      "Freemium model helps with conversions",
      "Growing AI features attract new users",
      "Good commission rate for established platform",
      "Wide range of pricing tiers"
    ],
    keyFeatures: [
      "AI-powered send time optimization",
      "Smart audience segmentation",
      "Predictive demographics insights",
      "Content optimization suggestions",
      "Automated email workflows"
    ],
    targetAudience: [
      "Small business owners",
      "E-commerce stores",
      "Content creators",
      "Marketing agencies",
      "Non-profit organizations"
    ]
  },

  // AI Development Tools
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps write code faster with intelligent suggestions.",
    category: "AI Development",
    affiliateUrl: "https://github.com/affiliate?ref=yourref",
    imageUrl: "/images/github-copilot.png",
    pricing: {
      starter: "$10/month",
      pro: "$19/month",
      enterprise: "$39/month per user"
    },
    commissionRate: "25%",
    commissionType: "Recurring monthly",
    cookieDuration: "60 days",
    whyPromote: [
      "Backed by Microsoft and GitHub's reputation",
      "Essential tool for modern developers",
      "High adoption rate in development teams",
      "Strong enterprise market penetration",
      "Continuous improvements and updates"
    ],
    keyFeatures: [
      "AI-powered code completion",
      "Context-aware suggestions",
      "Multi-language support",
      "IDE integration (VS Code, etc.)",
      "Chat interface for code questions"
    ],
    targetAudience: [
      "Software developers",
      "Development teams",
      "Computer science students",
      "Tech startups",
      "Enterprise development departments"
    ]
  },
  {
    slug: "cursor-ai",
    name: "Cursor",
    description: "AI-first code editor with advanced autocomplete and refactoring capabilities.",
    category: "AI Development",
    affiliateUrl: "https://cursor.sh/affiliate?ref=yourref",
    imageUrl: "/images/cursor-ai.png",
    pricing: {
      freeTier: "Limited AI features",
      pro: "$20/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "45 days",
    whyPromote: [
      "Innovative AI-first code editor approach",
      "Growing popularity among developers",
      "Strong differentiation from traditional IDEs",
      "High engagement and productivity gains",
      "Active development and feature updates"
    ],
    keyFeatures: [
      "AI-powered code editor",
      "Natural language code generation",
      "Intelligent refactoring suggestions",
      "Git integration and collaboration",
      "Custom AI model fine-tuning"
    ],
    targetAudience: [
      "Individual developers",
      "AI/ML engineers",
      "Startup development teams",
      "Freelance programmers",
      "Code bootcamp graduates"
    ]
  },
  {
    slug: "replit-ai",
    name: "Replit AI",
    description: "Online IDE with AI coding assistant for collaborative development.",
    category: "AI Development",
    affiliateUrl: "https://replit.com/affiliate?ref=yourref",
    imageUrl: "/images/replit-ai.png",
    pricing: {
      freeTier: "Basic online IDE",
      starter: "$7/month",
      pro: "$25/month",
      enterprise: "Custom pricing"
    },
    commissionRate: "25%",
    commissionType: "Recurring monthly",
    cookieDuration: "30 days",
    whyPromote: [
      "Popular with students and educators",
      "No setup required - browser-based",
      "Strong community and collaboration features",
      "Growing AI capabilities attract users",
      "Good conversion from free to paid"
    ],
    keyFeatures: [
      "Browser-based development environment",
      "AI code completion and generation",
      "Real-time collaboration",
      "Multi-language support",
      "Hosting and deployment tools"
    ],
    targetAudience: [
      "Students and educators",
      "Web developers",
      "Remote development teams",
      "Coding bootcamps",
      "Prototype developers"
    ]
  },
  {
    slug: "tabnine",
    name: "Tabnine",
    description: "AI code completion assistant that works with all major IDEs and languages.",
    category: "AI Development",
    affiliateUrl: "https://tabnine.com/affiliate?ref=yourref",
    imageUrl: "/images/tabnine.png",
    pricing: {
      freeTier: "Basic code completion",
      pro: "$12/month",
      enterprise: "$39/month per user"
    },
    commissionRate: "30%",
    commissionType: "Recurring monthly",
    cookieDuration: "45 days",
    whyPromote: [
      "Works with all major IDEs and editors",
      "Strong enterprise and team adoption",
      "Privacy-focused local AI processing",
      "Multi-language and framework support",
      "Established player in AI coding space"
    ],
    keyFeatures: [
      "AI code completion for 30+ languages",
      "IDE integration (VS Code, IntelliJ, etc.)",
      "Team training on private codebases",
      "Local and cloud AI processing options",
      "Code review and quality suggestions"
    ],
    targetAudience: [
      "Professional developers",
      "Enterprise development teams",
      "Security-conscious organizations",
      "Multi-language developers",
      "Large development organizations"
    ]
  }
];
