import { notFound } from "next/navigation";
import { tools } from "@/data/Tools";
import Navigation from "@/components/Navigation";
import Link from "next/link";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return { title: "Tool Not Found" };
  return {
    title: `${tool.name} Review & Affiliate Link`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return notFound();

  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto p-6">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/tools" className="hover:text-blue-600 transition-colors">Tools</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{tool.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            🏆 {tool.category} Tool
          </div>
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
            <img src={tool.imageUrl} alt={tool.name} className="w-16 h-16 object-contain" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            {tool.name} Review
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">{tool.description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try {tool.name} Free
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/affiliate-programs"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              Join Affiliate Program
            </Link>
          </div>
        </div>

        {/* Tool Details Card */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">What is {tool.name}?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {tool.name} is a leading {tool.category.toLowerCase()} solution that helps businesses and individuals
                leverage AI technology to improve their workflow and productivity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you&apos;re a content creator, marketer, or business owner, {tool.name} provides 
                the tools you need to stay competitive in today&apos;s AI-driven landscape.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Category:</strong> {tool.category}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Best For:</strong> Content creators, marketers, businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Pricing:</strong> Subscription-based with free trial</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Support:</strong> 24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="relative z-10 text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6 text-lg">Join thousands of users who are already using {tool.name} to boost their productivity.</p>
            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition transform hover:scale-105"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="text-center">
          <Link
            href={`/categories/${tool.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Browse more {tool.category} tools
          </Link>
        </div>
      </main>
    </>
  );
}
