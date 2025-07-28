"use client"

import Link from "next/link"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Categories for dropdown
  const categories = [
    { id: 'ai-writing', name: 'AI Writing', emoji: '✍️' },
    { id: 'ai-video', name: 'AI Video', emoji: '🎥' },
    { id: 'ai-design', name: 'AI Design', emoji: '🎨' },
    { id: 'ai-productivity', name: 'AI Productivity', emoji: '⚡' },
    { id: 'ai-chat', name: 'AI Chat', emoji: '💬' },
    { id: 'ai-marketing', name: 'AI Marketing', emoji: '📈' },
    { id: 'ai-development', name: 'AI Development', emoji: '👨‍💻' }
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
            <span className="text-xl">🤖</span>
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Tools Directory
            </span>
            <div className="text-xs text-gray-500">Affiliate Programs</div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-1">
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/tools"
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
              >
                All Tools
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
                Categories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[500px] gap-3 p-6 md:w-[600px] md:grid-cols-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.id}`}
                      className="group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{category.emoji}</span>
                        <div>
                          <div className="text-sm font-medium leading-none">{category.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500 group-hover:text-blue-500">
                            Browse {category.name.toLowerCase()} tools
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/affiliate-programs"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
              >
                Affiliate Programs
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg 
            className={`h-6 w-6 text-gray-600 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tools"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              All Tools
            </Link>
            
            {/* Categories Section */}
            <div className="pt-2 pb-1">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Categories
              </div>
            </div>
            
            <Link
              href="/categories/ai-writing"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ✍️ AI Writing
            </Link>
            <Link
              href="/categories/ai-video"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              🎥 AI Video
            </Link>
            <Link
              href="/categories/ai-design"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              🎨 AI Design
            </Link>
            <Link
              href="/categories/ai-productivity"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ⚡ AI Productivity
            </Link>
            <Link
              href="/categories/ai-chat"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              💬 AI Chat
            </Link>
            <Link
              href="/categories/ai-marketing"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              📈 AI Marketing
            </Link>
            <Link
              href="/categories/ai-development"
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              👨‍💻 AI Development
            </Link>
            
            {/* Affiliate Programs */}
            <div className="pt-3">
              <Link
                href="/affiliate-programs"
                className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Affiliate Programs
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
