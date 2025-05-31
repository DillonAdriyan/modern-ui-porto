"use client"

import Layout from "../../components/layout"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function BlogPage() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const posts = [
    {
      title: "The Psychology Behind the Joker's Madness",
      excerpt:
        "Exploring the complex psychological profile of Gotham's most notorious villain and what drives his chaotic nature.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Character Analysis",
    },
    {
      title: "Evolution of the Joker Across Different Media",
      excerpt:
        "From comic books to blockbuster films, how the Joker has transformed while maintaining his core identity.",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      category: "Media Analysis",
    },
    {
      title: "The Dark Knight's Greatest Adversary",
      excerpt: "Why the Joker remains Batman's most compelling and dangerous foe after decades of storytelling.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Character Study",
    },
    {
      title: "Chaos Theory in Gotham City",
      excerpt:
        "How the Joker's philosophy of chaos challenges the established order and creates compelling narratives.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Philosophy",
    },
    {
      title: "Behind the Makeup: Iconic Joker Designs",
      excerpt:
        "A visual journey through the most memorable interpretations of the Joker's appearance across different eras.",
      date: "Nov 20, 2024",
      readTime: "4 min read",
      category: "Design",
    },
  ]

  return (
    <Layout>
      <div className="px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Header */}
          <div className="mb-8 md:mb-12 animate-in slide-in-from-left duration-800">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight hover:scale-105 transition-transform duration-500 cursor-default">
              Blog
            </h1>
            <p className="text-gray-500 text-base md:text-lg animate-in fade-in duration-1000 delay-300">
              Insights into the Dark Universe
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-8 md:mb-12 p-6 md:p-8 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 animate-in slide-in-from-top duration-800 delay-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200">
                Featured
              </span>
              <span className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
                {posts[0].category}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
              {posts[0].title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 hover:text-gray-800 transition-colors duration-300">
              {posts[0].excerpt}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                  <Calendar className="w-4 h-4" />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                  <Clock className="w-4 h-4" />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-black hover:text-gray-600 hover:translate-x-1 transition-all duration-300 font-medium group">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold hover:text-gray-700 transition-colors duration-300 animate-in slide-in-from-left duration-800 delay-400">
              Recent Posts
            </h3>
            <div className="grid gap-6 md:gap-8">
              {posts.slice(1).map((post, index) => (
                <article
                  key={index}
                  className={`border-b border-gray-100 pb-6 md:pb-8 last:border-b-0 animate-in slide-in-from-bottom duration-800 hover:bg-gray-50 transition-all duration-300 rounded-lg p-4 -m-4 ${
                    hoveredPost === index ? "shadow-md scale-[1.01]" : ""
                  }`}
                  style={{ animationDelay: `${index * 150 + 600}ms` }}
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 transition-colors duration-300">
                          {post.category}
                        </span>
                      </div>
                      <h4 className="text-lg md:text-xl font-bold hover:text-gray-600 transition-colors duration-300 cursor-pointer">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-black hover:text-gray-600 hover:translate-x-1 transition-all duration-300 font-medium flex-shrink-0 group">
                      <span className="text-sm">Read</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-gray-100 animate-in slide-in-from-bottom duration-800 delay-1000">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-500 text-sm hover:text-gray-700 transition-colors duration-300">
                Showing {posts.length} articles
              </p>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200 hover:border-gray-400 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
                <div className="text-base sm:text-lg hover:scale-110 transition-transform duration-200">🎭</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
