"use client"

import Layout from "../../components/layout"
import { Calendar, Star, Play } from "lucide-react"
import { useState } from "react"

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "The Dark Knight",
      year: "2008",
      rating: "9.0",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.",
      status: "Released",
    },
    {
      title: "Joker",
      year: "2019",
      rating: "8.4",
      description: "A gritty character study of Arthur Fleck, a man disregarded by society.",
      status: "Released",
    },
    {
      title: "Batman: The Killing Joke",
      year: "2016",
      rating: "6.4",
      description: "As Batman hunts for the escaped Joker, the Clown Prince of Crime attacks the Gordon family.",
      status: "Released",
    },
  ]

  return (
    <Layout>
      <div className="px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Header */}
          <div className="mb-8 md:mb-12 animate-in slide-in-from-left duration-800">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight hover:scale-105 transition-transform duration-500 cursor-default">
              Projects
            </h1>
            <p className="text-gray-500 text-base md:text-lg animate-in fade-in duration-1000 delay-300">
              Featured DC Universe Films
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`border-b border-gray-100 pb-6 md:pb-8 last:border-b-0 animate-in slide-in-from-bottom duration-800 hover:bg-gray-50 transition-all duration-300 rounded-lg p-4 -m-4 ${
                  hoveredProject === index ? "shadow-md scale-[1.02]" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                  {/* Project Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h3 className="text-xl md:text-2xl font-bold hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                          <Star className="w-4 h-4 hover:text-yellow-500 transition-colors duration-300" />
                          <span>{project.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                      <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium">Watch</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-gray-100 animate-in slide-in-from-bottom duration-800 delay-600">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-500 text-sm hover:text-gray-700 transition-colors duration-300">
                Showing {projects.length} projects
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
