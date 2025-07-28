# AI Commissions

AI Commissions is a comprehensive platform for discovering the best AI tools and their affiliate programs. Our site provides detailed reviews, commission information, and insights to help affiliate marketers maximize their earnings from AI tool partnerships.

## Features

- 🤖 **Comprehensive AI Tool Directory**: Curated collection of top AI tools across various categories
- 💰 **Affiliate Program Details**: Commission rates, cookie duration, and program specifics
- 📊 **Category-based Browsing**: Tools organized by Writing, Video, Design, Chat, Productivity, Development, and Marketing
- 📝 **Expert Blog Content**: In-depth guides and strategies for AI tool affiliate marketing
- 🔍 **SEO Optimized**: Built with structured data and comprehensive metadata
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **SEO**: JSON-LD structured data, Open Graph, Twitter Cards
- **Performance**: Optimized images, fonts, and static generation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage with featured tools
│   ├── blog/              # Blog pages with article schema
│   ├── categories/        # Category-based tool listings
│   └── tools/             # Individual tool pages
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Site navigation
│   ├── ToolImage.tsx      # Tool logo component
│   └── ui/                # shadcn/ui components
└── data/                  # Content and data files
    ├── BlogPosts.ts       # Blog content
    └── Tools.ts           # Tool database
```

## Content Management

- **Tools**: Add new tools to `src/data/Tools.ts`
- **Blog Posts**: Add new articles to `src/data/BlogPosts.ts`
- **Images**: Place tool logos in `public/images/` and blog images in `public/images/blog/`

## SEO Features

- Comprehensive metadata and Open Graph tags
- JSON-LD structured data for Organization, Blog, and Article
- Optimized URLs and sitemap-ready structure
- Image optimization and lazy loading

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
