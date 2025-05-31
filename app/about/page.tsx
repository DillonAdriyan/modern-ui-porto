"use client"

import Layout from "../../components/layout"
import { Users, Target, Award, Heart } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const stats = [
    { icon: Users, label: "Characters", value: "50+" },
    { icon: Target, label: "Stories", value: "200+" },
    { icon: Award, label: "Awards", value: "15" },
    { icon: Heart, label: "Fans", value: "1M+" },
  ]

  return (
    <Layout>
      <div className="px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Header */}
          <div className="mb-8 md:mb-12 animate-in slide-in-from-left duration-800">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight hover:scale-105 transition-transform duration-500 cursor-default">
              About
            </h1>
            <p className="text-gray-500 text-base md:text-lg animate-in fade-in duration-1000 delay-300">
              The Dark Universe of DC
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Story Section */}
            <div className="space-y-6 animate-in slide-in-from-left duration-800 delay-200">
              <h2 className="text-2xl md:text-3xl font-bold hover:text-gray-700 transition-colors duration-300">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="hover:text-gray-800 transition-colors duration-300 hover:translate-x-1 transition-transform">
                  DC Comics has been creating iconic characters and compelling stories for over 80 years. From the
                  streets of Gotham to the far reaches of space, our universe is filled with heroes and villains that
                  have captured imaginations worldwide.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300 hover:translate-x-1 transition-transform">
                  The Joker represents the perfect antithesis to order and justice. A character born from chaos, he
                  embodies the unpredictable nature of evil and the thin line between sanity and madness.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300 hover:translate-x-1 transition-transform">
                  Through various interpretations across comics, films, and television, the Joker continues to evolve
                  while maintaining his core essence of unpredictability and dark humor.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="space-y-6 animate-in slide-in-from-right duration-800 delay-400">
              <h2 className="text-2xl md:text-3xl font-bold hover:text-gray-700 transition-colors duration-300">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="hover:text-gray-800 transition-colors duration-300 hover:translate-x-1 transition-transform">
                  To create compelling narratives that explore the depths of human nature, both light and dark. We
                  believe in the power of storytelling to challenge perspectives and provoke thought.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300 hover:translate-x-1 transition-transform">
                  Every character in the DC Universe serves a purpose, representing different aspects of the human
                  condition. The Joker, in particular, forces us to confront our fears and question the nature of sanity
                  itself.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold hover:text-gray-700 transition-colors duration-300">
                  Core Values
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Authentic storytelling",
                    "Character depth and complexity",
                    "Pushing creative boundaries",
                    "Respecting legacy while innovating",
                  ].map((value, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 hover:text-gray-800 hover:translate-x-2 transition-all duration-300 animate-in slide-in-from-left"
                      style={{ animationDelay: `${index * 100 + 600}ms` }}
                    >
                      <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-gray-100 pt-8 md:pt-12 animate-in slide-in-from-bottom duration-800 delay-600">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 hover:text-gray-700 transition-colors duration-300">
              By the Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center space-y-3 animate-in zoom-in duration-800 hover:scale-110 transition-all duration-300 cursor-pointer ${
                    hoveredStat === index ? "scale-110" : ""
                  }`}
                  style={{ animationDelay: `${index * 150 + 800}ms` }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto hover:bg-gray-200 hover:shadow-lg transition-all duration-300">
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700 hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold hover:text-gray-700 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-gray-100 animate-in slide-in-from-bottom duration-800 delay-1000">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm hover:text-gray-700 transition-colors duration-300">
                Est. 1934 • DC Comics
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
