import { notFound } from 'next/navigation'
import { tools } from '@/data/Tools'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

// Define available categories
const categories = [
  { slug: 'ai-writing', name: 'AI Writing', description: 'AI-powered writing and content creation tools' },
  { slug: 'ai-video', name: 'AI Video', description: 'AI video generation and editing tools' },
  { slug: 'ai-design', name: 'AI Design', description: 'AI-powered design and image generation tools' },
  { slug: 'ai-productivity', name: 'AI Productivity', description: 'AI tools for productivity and workflow optimization' },
  { slug: 'ai-chat', name: 'AI Chat', description: 'AI chatbots and conversational assistants' },
  { slug: 'ai-marketing', name: 'AI Marketing', description: 'AI-powered marketing and SEO tools' },
  { slug: 'ai-development', name: 'AI Development', description: 'AI coding assistants and development tools' },
]

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug)
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `Best ${category.name} Tools 2025 - AI Tools Directory`,
    description: `Discover the top ${category.name.toLowerCase()} tools with affiliate programs. ${category.description}`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = categories.find((c) => c.slug === categorySlug)
  
  // Map category slugs to the actual category names in Tools data
  const categoryNameMap: { [key: string]: string } = {
    'ai-writing': 'AI Writing',
    'ai-video': 'AI Video', 
    'ai-design': 'AI Design',
    'ai-productivity': 'AI Productivity',
    'ai-chat': 'AI Chat',
    'ai-marketing': 'AI Marketing',
    'ai-development': 'AI Development'
  }
  
  const categoryTools = tools.filter((tool) => 
    tool.category === categoryNameMap[categorySlug]
  )

  if (!category) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span>{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            ✨ Curated Collection
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Best {category.name} Tools 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{category.description}</p>
        </div>

        {/* Tools Grid */}
        {categoryTools.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {categoryTools.map((tool) => (
              <div key={tool.slug} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={tool.imageUrl}
                      alt={tool.name}
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      Top Rated
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{tool.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      Try {tool.name} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">No tools found yet</h3>
            <p className="text-gray-600 mb-6">We're constantly adding new tools to this category.</p>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              Browse all tools
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gray-100 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for More {category.name} Tools?</h2>
          <p className="text-gray-600 mb-6">
            Get notified when we add new {category.name.toLowerCase()} tools with affiliate programs.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Browse All Categories
          </Link>
        </div>
      </div>
    </>
  )
}
