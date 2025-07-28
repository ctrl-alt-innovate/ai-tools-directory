import Link from "next/link";
import { tools } from "@/data/Tools";
import Navigation from "@/components/Navigation";

export default function AllTools() {
  // Group tools by category
  const categories = [
    { id: 'ai-writing', name: 'AI Writing', emoji: '✍️' },
    { id: 'ai-video', name: 'AI Video', emoji: '🎥' },
    { id: 'ai-design', name: 'AI Design', emoji: '🎨' },
    { id: 'ai-productivity', name: 'AI Productivity', emoji: '⚡' },
    { id: 'ai-chat', name: 'AI Chat', emoji: '💬' },
    { id: 'ai-marketing', name: 'AI Marketing', emoji: '📈' },
    { id: 'ai-development', name: 'AI Development', emoji: '👨‍💻' }
  ];

  const getToolsByCategory = (categoryId: string) => {
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
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                >
                  <span className="mr-2">{category.emoji}</span>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tools by Category */}
        {categories.map((category) => {
          const categoryTools = getToolsByCategory(category.id);
          if (categoryTools.length === 0) return null;

          return (
            <section key={category.id} id={category.id}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{category.emoji}</span>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {category.name}
                  </h2>
                  <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {categoryTools.length} tools
                  </span>
                </div>
                <Link
                  href={`/categories/${category.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  View Category →
                </Link>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryTools.map((tool) => (
                  <div key={tool.slug} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <img
                          src={tool.imageUrl}
                          alt={tool.name}
                          className="w-10 h-10 object-contain rounded-lg"
                        />
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                          {tool.category}
                        </span>
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
                          className="text-center text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                        >
                          Try {tool.name} →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
