import { notFound } from "next/navigation";
import { blogPosts } from "@/data/BlogPosts";
import Navigation from "@/components/Navigation";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    publishedTime: post.publishedAt,
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage || "/images/blog/default-featured.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [post.featuredImage || "/images/blog/default-featured.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) return notFound();

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": [
      post.featuredImage || "/images/blog/default-featured.png"
    ],
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "description": post.author.bio,
      "image": post.author.avatar
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Commissions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aicommisions.com/images/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aicommisions.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.length,
    "timeRequired": `PT${post.readTime}M`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
              {post.category}
            </span>
            {post.isFeatured && (
              <span className="px-4 py-2 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">
                ⭐ Featured
              </span>
            )}
          </div>
          
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full bg-gray-200"
              />
              <div>
                <div className="font-semibold text-gray-900">{post.author.name}</div>
                <div className="text-sm text-gray-600">{post.author.bio}</div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <div>📅 {new Date(post.publishedAt).toLocaleDateString()}</div>
              <div>⏱️ {post.readTime} min read</div>
            </div>
          </div>
        </header>

        {/* Newsletter Signup - Top */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-xl">📧</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Get More AI Affiliate Strategies</h3>
              <p className="text-gray-600">Join 2,000+ marketers getting weekly tips</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 font-medium">$1</a>')
                .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h3>')
                .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">$1</h2>')
                .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold mt-8 mb-6 text-gray-900">$1</h1>')
                .replace(/\n\n/g, '</p><p class="mb-6 text-gray-700 leading-relaxed">')
                .replace(/^(.+)$/gm, '<p class="mb-6 text-gray-700 leading-relaxed">$1</p>')
                .replace(/^\s*[-*]\s+(.+)$/gm, '<li class="mb-2">$1</li>')
            }}
          />
        </article>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to Start Promoting AI Tools?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Browse our curated list of AI tools with the highest-paying affiliate programs. Start earning recurring commissions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Browse AI Tools
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/affiliate-programs"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Affiliate Programs
            </Link>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-12">
          <div className="flex items-start gap-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-20 h-20 rounded-full bg-gray-200"
            />
            <div>
              <h4 className="text-xl font-bold mb-2">About {post.author.name}</h4>
              <p className="text-gray-600 mb-4">{post.author.bio}</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Follow on Twitter
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  More Articles
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-8 text-center">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="group">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3 inline-block">
                      {relatedPost.category}
                    </span>
                    <h4 className="font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>⏱️ {relatedPost.readTime} min</span>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
