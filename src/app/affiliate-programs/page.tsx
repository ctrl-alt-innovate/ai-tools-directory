import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { tools } from '@/data/Tools'

export const metadata = {
  title: 'Best AI Tool Affiliate Programs 2025 - High Paying Commissions',
  description: 'Discover the highest-paying AI tool affiliate programs. Earn recurring commissions promoting top AI tools like Jasper, Copy.ai, and more.',
}

export default function AffiliateProgramsPage() {
  // Group tools by category for better organization
  const toolsByCategory = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = []
    }
    acc[tool.category].push(tool)
    return acc
  }, {} as Record<string, typeof tools>)

  return (
    <>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Best AI Tool Affiliate Programs 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start earning with high-converting AI tool affiliate programs. 
            Many offer 30%+ recurring commissions for life.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">30%+</h3>
            <p className="text-gray-700">Average Commission Rate</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Recurring</h3>
            <p className="text-gray-700">Lifetime Commissions</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-purple-600 mb-2">{tools.length}+</h3>
            <p className="text-gray-700">AI Tools Available</p>
          </div>
        </div>

        {/* Programs by Category */}
        {Object.entries(toolsByCategory).map(([category, categoryTools]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category} Affiliate Programs</h2>
            <div className="grid gap-6">
              {categoryTools.map((tool) => (
                <div key={tool.slug} className="border rounded-lg p-6 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={tool.imageUrl}
                      alt={tool.name}
                      className="w-16 h-16 object-contain flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                      <p className="text-gray-600 mb-3">{tool.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          High Converting
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 min-w-[200px]">
                      <a
                        href={tool.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white text-center font-semibold rounded hover:bg-blue-700 transition"
                      >
                        Join Program
                      </a>
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="px-4 py-2 border border-gray-300 text-center font-semibold rounded hover:bg-gray-50 transition"
                      >
                        View Tool Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Success Tips */}
        <div className="bg-gray-100 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            How to Succeed with AI Tool Affiliate Marketing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Focus on tools you actually use</li>
                <li>• Create honest, detailed reviews</li>
                <li>• Target specific use cases</li>
                <li>• Build trust with your audience</li>
                <li>• Optimize for search (SEO)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">🎯 Content Ideas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• &ldquo;Best AI tools for [specific use case]&rdquo;</li>
                <li>• Tool comparison posts</li>
                <li>• Tutorial videos</li>
                <li>• Case studies and results</li>
                <li>• Email newsletter reviews</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="mb-6">
            Pick a tool that matches your audience and start promoting today.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Browse All Tools
          </Link>
        </div>
      </div>
    </>
  )
}
