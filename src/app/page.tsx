"use client"

import Link from "next/link";
import { tools } from "@/data/Tools";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* Hero */}
        <section className="text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-3xl opacity-50"></div>
          <div className="relative z-10 py-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
              � High-Converting AI Affiliate Programs
            </div>
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Discover the Best AI Tools<br />to Promote — and Earn<br />Recurring Income
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find profitable AI tools with generous affiliate programs. Get detailed commission rates, conversion tips, and proven strategies to build your recurring income stream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#tools"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Browse Tools
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Start Learning
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Tool Grid */}
        <section id="tools">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured AI Tools
            </h2>
            <p className="text-lg text-gray-600">Hand-picked tools with the best affiliate programs</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tools.slice(0, 6).map((tool) => (
              <div key={tool.slug} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={tool.imageUrl}
                      alt={tool.name}
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                    <div className="flex gap-2">
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
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                        {tool.category}
                      </span>
                    </div>
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
                      onClick={() => {
                        console.log(`Affiliate click: ${tool.name} from homepage`);
                        // You can replace this with your analytics tracking
                        // Example: analytics.track('affiliate_click', { tool: tool.name, page: 'homepage' });
                      }}
                      className="text-center text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      Try {tool.name} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Tools Button */}
          <div className="text-center mt-12">
            <Link
              href="/tools"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View All Tools
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Why Promote These Tools */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl"></div>
          <div className="relative z-10 p-12">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Promote AI Tools?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Recurring Income</h3>
                <p className="text-gray-600 leading-relaxed">Many tools offer 30%+ recurring commissions for life. One customer can generate hundreds in passive income.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Explosive Demand</h3>
                <p className="text-gray-600 leading-relaxed">AI adoption is growing fast — people are searching for these tools daily with high buying intent.</p>
              </div>
              <div className="group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3">High Conversion Rates</h3>
                <p className="text-gray-600 leading-relaxed">SaaS tools solve real problems, which means more people buy compared to other affiliate categories.</p>
              </div>
            </div>
          </div>
        </section>      {/* How It Works */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Find Your Niche</h3>
              <p className="text-gray-600 leading-relaxed">Pick a category or use case that matches your audience. Focus on tools you understand and can authentically recommend.</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Get Your Link</h3>
              <p className="text-gray-600 leading-relaxed">Join the affiliate program and copy your unique tracking URL. Most programs approve quickly and provide marketing materials.</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Promote & Profit</h3>
              <p className="text-gray-600 leading-relaxed">Share via blog posts, YouTube, email, or social media. Create honest reviews and tutorials to build trust with your audience.</p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl"></div>
          <div className="relative z-10 text-white p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Join the AI Affiliate Insider List</h2>
              <p className="mb-8 text-white opacity-90 text-lg drop-shadow">Get notified when we add new high-paying AI tools you can promote. Plus, receive exclusive marketing tips and strategies.</p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 transition-all duration-200 shadow-lg"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Get Updates
                  </button>
                </div>
                <p className="mt-4 text-sm text-white opacity-80 drop-shadow">No spam. Unsubscribe anytime.</p>
              </form>
            </div>
          </div>
        </section>      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-12 border-t">
        &copy; {new Date().getFullYear()} AI Commissions. All rights reserved.
      </footer>
    </main>
    </>
  );
}
