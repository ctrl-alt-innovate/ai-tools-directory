"use client"

import Link from "next/link";
import { useState } from "react";
import { tools } from "@/data/Tools";
import Navigation from "@/components/Navigation";

export default function AllTools() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Categories for dropdown
  const categories = [
    { id: 'all', name: 'All Categories', emoji: '🔍' },
    { id: 'ai-writing', name: 'AI Writing', emoji: '✍️' },
    { id: 'ai-video', name: 'AI Video', emoji: '🎥' },
    { id: 'ai-design', name: 'AI Design', emoji: '🎨' },
    { id: 'ai-productivity', name: 'AI Productivity', emoji: '⚡' },
    { id: 'ai-chat', name: 'AI Chat', emoji: '💬' },
    { id: 'ai-marketing', name: 'AI Marketing', emoji: '📈' },
    { id: 'ai-development', name: 'AI Development', emoji: '👨‍💻' }
  ];

  const getToolsByCategory = (categoryId: string) => {
    if (categoryId === 'all') return tools;
    
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
    
    return tools.filter(tool => tool.category === categoryNameMap[categoryId]);
  };

  const filteredTools = getToolsByCategory(selectedCategory);
  const selectedCategoryName = categories.find(cat => cat.id === selectedCategory)?.name || 'All Categories';

  return (
    <>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero */}
        <section className="text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-3xl opacity-50"></div>
          <div className="relative z-10 py-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              All AI Tools
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore our complete collection of AI tools with high-converting affiliate programs across all categories.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.emoji} {category.name}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500">
                Showing {filteredTools.length} tools in {selectedCategoryName}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  <span className="mr-2">{category.emoji}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filtered Tools Display */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {selectedCategoryName}
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool) => (
              <div key={tool.slug} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={tool.imageUrl}
                      alt={tool.name}
                      className="w-10 h-10 object-contain rounded-lg"
                    />
                    <div className="flex gap-1 flex-wrap">
                      {tool.isNew && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          NEW
                        </span>
                      )}
                      {tool.isPopular && (
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{tool.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{tool.description}</p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log(`Affiliate click: ${tool.name} from all tools page`);
                      }}
                      className="text-center text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                    >
                      Try {tool.name} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p className="text-gray-600 mb-6">Try selecting a different category.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
