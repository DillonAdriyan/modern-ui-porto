"use client"

import Layout from "../components/layout"
import Image from "next/image"
import { Mouse } from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      <div className="px-4 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Background Animation */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl animate-pulse opacity-30"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-100 rounded-full blur-2xl animate-pulse opacity-20 animation-delay-1000"></div>
          </div>

          {/* Mobile Layout (Stacked) */}
          <div className="flex flex-col md:hidden relative z-10">
            {/* Title Section */}
            <div className="mb-6 animate-in slide-in-from-left duration-800">
              <h1 className="text-5xl sm:text-6xl font-bold mb-1 tracking-tight hover:scale-105 transition-transform duration-500 cursor-default">
                Dillon
              </h1>
              <p className="text-gray-500
              text-base animate-in fade-in
              duration-1000 delay-300">Web
              Developer</p>
            </div>

            {/* Image Section with Pagination */}
            <div className="relative mb-6
            animate-in slide-in-from-bottom
            duration-1000 delay-200 ">
              <div className="relative group">
                <Image
                  src="/main.png"
                  alt="Joker Portrait"
                  width={400}
                  height={500}
                  className={`w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-sm
                  hover:drop-shadow-xl ${
                    imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Intelligence Label */}
                <div className="absolute top-4
                right-4 flex items-center
                space-x-2 animate-in
                slide-in-from-right duration-800
                delay-500
                 rounded-full">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  <span className="text-xs
                  sm:text-sm font-medium
                  bg-white/30 backdrop-blur-lg px-2 py-1 rounded
                  shadow-sm hover:shadow-md
                  transition-shadow duration-300">
                    Intelligence
                  </span>
                </div>
              </div>

              {/* Mobile Pagination (Horizontal) */}
              <div className="flex justify-center space-x-4 mt-4 animate-in slide-in-from-bottom duration-800 delay-700">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex items-center space-x-2 group cursor-pointer">
                    <span
                      className={`text-sm transition-all duration-300 ${
                        activeSlide === index ? "text-black font-bold" : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div
                      className={`rounded-full transition-all duration-500 ${
                        activeSlide === index
                          ? "w-3 h-3 bg-black scale-110"
                          : "w-2 h-2 bg-gray-300 group-hover:bg-gray-400 group-hover:scale-110"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Power Section */}
            <div className="space-y-3 mb-6
            animate-in slide-in-from-left
            duration-800 delay-400 lg:">
              <h3 className="text-lg font-semibold hover:text-gray-700 transition-colors duration-300">Power</h3>
              <p className="text-gray-600
              leading-relaxed text-sm sm:text-base
              hover:text-gray-800
              transition-colors duration-300">
                Complete Unpredictability, Chaos Agent, Customized Weapons, Venom Toxin Which Causes Victims To Die
                Laughing
              </p>
            </div>

            {/* Footer with Scroll and Icon */}
            <div className="flex justify-between items-center animate-in slide-in-from-bottom duration-800 delay-600">
              <div className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors duration-300 group">
                <Mouse className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-xs sm:text-sm">Scroll Mouse</span>
              </div>

              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200 hover:border-gray-400 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="text-base sm:text-lg hover:scale-110 transition-transform duration-200">🎭</div>
              </div>
            </div>
          </div>

          {/* Desktop Layout (Original) */}
          <div className="hidden md:flex items-center justify-between relative z-10">
            {/* Left Content */}
            <div className="flex-1 space-y-8 animate-in slide-in-from-left duration-1000">
              <div>
                <h1 className="text-7xl lg:text-8xl font-bold mb-2 tracking-tight hover:scale-105 transition-transform duration-500 cursor-default">
                  Dillon
                </h1>
                <p className="text-gray-500
                text-lg animate-in fade-in
                duration-1000 delay-300">Web
                Developer</p>
              </div>

              <div className="space-y-4 animate-in slide-in-from-left duration-1000 delay-200">
                <h3 className="text-xl font-semibold hover:text-gray-700 transition-colors duration-300">Power</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs hover:text-gray-800 transition-colors duration-300">
                  Complete Unpredictability, Chaos Agent, Customized Weapons, Venom Toxin Which Causes Victims To Die
                  Laughing
                </p>
              </div>

              <div className="flex items-center space-x-3 text-gray-500 hover:text-gray-700 transition-colors duration-300 group animate-in slide-in-from-left duration-1000 delay-400">
                <Mouse className="w-5 h-5 group-hover:animate-bounce" />
                <span className="text-sm">Scroll Mouse</span>
              </div>
            </div>

            {/* Center - Joker Image */}
            <div className="flex-1 flex
            justify-center relative animate-in
            zoom-in duration-1000 delay-300 ml-4">
              <div className="relative group">
                <Image
                  src="/main.png"
                  alt="Joker Portrait"
                  width={400}
                  height={500}
                  className="object-cover
                  grayscale
                  hover:grayscale-0 transition-all
                  duration-700 hover:scale-105
                  drop-shadow-sm
                  hover:drop-shadow-xl"
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Intelligence Label */}
                <div className="absolute top-16 right-8 flex items-center space-x-2 animate-in slide-in-from-right duration-800 delay-500 hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  <span className="text-sm
                  font-medium bg-white/30 px-2 py-1
                  rounded shadow-sm
                  hover:shadow-md
                  transition-shadow duration-300
                  backdrop-blur-lg
                  border-2 border-gray-600/60">
                    Intelligence
                  </span>
                </div>

                {/* Complete Unpredictability Label */}
                <div className="absolute bottom-32 right-4 flex items-center space-x-2 animate-in slide-in-from-right duration-800 delay-700 hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  <div className="bg-white/30
                  backdrop-blur-lg px-2 py-1
                  rounded shadow-sm
                  hover:shadow-md
                  transition-shadow duration-300">
                    <div className="text-sm font-medium">Complete</div>
                    <div className="text-sm font-medium">Unpredictability</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Pagination */}
            <div className="flex-1 flex flex-col
            items-end justify-evenly h-96 animate-in
            slide-in-from-right duration-1000
            delay-400">
              <div className="flex flex-col space-y-6 text-right">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                    style={{ animationDelay: `${index * 100 + 600}ms` }}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        activeSlide === index
                          ? "text-2xl font-bold"
                          : "text-lg text-gray-400 group-hover:text-gray-600 group-hover:scale-110"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <div
                      className={`rounded-full transition-all duration-500 ${
                        activeSlide === index
                          ? "w-4 h-4 bg-black scale-110"
                          : "w-2 h-2 bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Joker Mask Icon */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200 hover:border-gray-400 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer animate-in zoom-in duration-800 delay-800">
                <div className="text-xl hover:scale-110 transition-transform duration-200">🎭</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
