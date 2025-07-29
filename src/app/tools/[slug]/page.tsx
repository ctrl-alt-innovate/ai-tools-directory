import { notFound } from "next/navigation";
import { tools } from "@/data/Tools";
import Navigation from "@/components/Navigation";
import ToolImage from "@/components/ToolImage";
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

        {/* Pricing Summary */}
        {tool.pricing && (
          <div className="bg-white rounded-3xl p-8 mb-12 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">{tool.name} Pricing Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-cols-fr max-w-6xl mx-auto">
              {tool.pricing.freeTier && (
                <div className="bg-gray-50 rounded-2xl p-4 text-center min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 truncate">Free</h3>
                  <p className="text-xl font-bold mb-3 text-blue-600">$0/month</p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">{tool.pricing.freeTier}</p>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Great for testing
                  </div>
                </div>
              )}
              {tool.pricing.lite && (
                <div className="bg-blue-50 rounded-2xl p-4 text-center border-2 border-blue-200 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 truncate">Lite</h3>
                  <p className="text-xl font-bold mb-3 text-blue-600">{tool.pricing.lite}</p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">For solopreneurs</p>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                </div>
              )}
              {tool.pricing.standard && (
                <div className="bg-purple-50 rounded-2xl p-4 text-center min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 truncate">Standard</h3>
                  <p className="text-xl font-bold mb-3 text-purple-600">{tool.pricing.standard}</p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">For growing teams</p>
                  <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                    Good Value
                  </div>
                </div>
              )}
              {tool.pricing.professional && (
                <div className="bg-indigo-50 rounded-2xl p-4 text-center border-2 border-indigo-200 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 truncate">Professional</h3>
                  <p className="text-xl font-bold mb-3 text-indigo-600">{tool.pricing.professional}</p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">For professionals</p>
                  <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                    Best Features
                  </div>
                </div>
              )}
              {tool.pricing.advanced && (
                <div className="bg-pink-50 rounded-2xl p-4 text-center min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 truncate">Advanced</h3>
                  <p className="text-xl font-bold mb-3 text-pink-600">{tool.pricing.advanced}</p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">For large teams</p>
                  <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium">
                    Enterprise Ready
                  </div>
                </div>
              )}
              {/* Fallback for legacy pricing structure */}
              {tool.pricing.starter && !tool.pricing.lite && (
                <div className="bg-blue-50 rounded-2xl p-4 text-center border-2 border-blue-200 min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 truncate">Starter</h3>
                  <p className="text-xl font-bold mb-3 text-blue-600">{tool.pricing.starter}</p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">Perfect for individuals</p>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              {tool.pricing.pro && !tool.pricing.professional && (
                <div className="bg-purple-50 rounded-2xl p-4 text-center min-w-0">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 truncate">Pro</h3>
                  <p className="text-xl font-bold mb-3 text-purple-600">{tool.pricing.pro}</p>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">For growing businesses</p>
                  <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                    Best Value
                  </div>
                </div>
              )}
              {tool.pricing.enterprise && (
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 text-center text-white min-w-0">
                  <h3 className="text-lg font-bold mb-2 truncate">Enterprise</h3>
                  <p className="text-xl font-bold mb-3 text-yellow-400">{tool.pricing.enterprise}</p>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">Custom solutions</p>
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Contact Sales
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Affiliate Commission Info */}
        {tool.commissionRate && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 mb-12 border border-green-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">💰 Affiliate Commission Details</h2>
              <p className="text-lg text-gray-600">Earn recurring income promoting {tool.name}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{tool.commissionRate}</div>
                  <div className="text-gray-700 font-medium">Commission Rate</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-2xl p-6">
                  <div className="text-xl font-bold text-blue-600 mb-2">{tool.commissionType || "Recurring"}</div>
                  <div className="text-gray-700 font-medium">Commission Type</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-2xl p-6">
                  <div className="text-xl font-bold text-purple-600 mb-2">{tool.cookieDuration || "30 days"}</div>
                  <div className="text-gray-700 font-medium">Cookie Duration</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why Promote This Tool */}
        {tool.whyPromote && (
          <div className="bg-white rounded-3xl p-8 mb-12 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🚀 Why Promote {tool.name}?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tool.whyPromote.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {tool.keyFeatures && (
          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">✨ Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tool.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Target Audience */}
        {tool.targetAudience && (
          <div className="bg-white rounded-3xl p-8 mb-12 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🎯 Who Should Use {tool.name}?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tool.targetAudience.map((audience, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-4 text-center">
                  <span className="text-blue-700 font-medium">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Brand Assets & Affiliate Disclaimer */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-12 border border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="mb-4">
                <ToolImage 
                  src={tool.imageUrl} 
                  alt={`${tool.name} Official Logo`}
                  className="w-20 h-20 mx-auto rounded-2xl shadow-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {tool.name} is a registered trademark of its respective owners.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border-l-4 border-blue-500">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Affiliate Disclosure</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Transparency Notice:</strong> We may earn a commission if you sign up for {tool.name} via our affiliate link. 
                  This comes at no additional cost to you and helps us maintain this free resource.
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Our {tool.commissionRate || "30%"} commission rate allows us to provide detailed, unbiased reviews and recommendations. 
                  We only promote tools we genuinely believe can benefit our users.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Our Promise:</strong> All opinions and recommendations are our own. We thoroughly test and evaluate 
                    each tool before featuring it on AI Commissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="bg-white rounded-3xl p-8 mb-12 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Legal & Compliance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Trademark Notice</h3>
              <p className="text-gray-600 mb-4">
                {tool.name}™ and all related marks are trademarks of their respective owners. 
                All company, product and service names used in this website are for identification purposes only.
              </p>
              <p className="text-sm text-gray-500">
                Use of these names, trademarks and brands does not imply endorsement.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Affiliate Program Terms</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Official {tool.name} affiliate partner
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {tool.commissionRate || "30%"} commission on qualifying purchases
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  No additional cost to customers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Compliant with FTC guidelines
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden rounded-3xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <div className="relative z-10 text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Promote {tool.name}?</h2>
            <p className="mb-6 text-lg">
              Join thousands of affiliates earning {tool.commissionRate || "30%"} recurring commissions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Promote {tool.name} Now
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Try {tool.name} Free
              </a>
            </div>
            {tool.commissionRate && (
              <div className="mt-6 text-sm opacity-90">
                💰 Earn {tool.commissionRate} on every sale • {tool.cookieDuration || "30 day"} cookie duration
              </div>
            )}
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
