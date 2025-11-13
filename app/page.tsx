'use client'

import Link from 'next/link'
import { Sparkles, ChevronRight, Github, Linkedin, Mail } from 'lucide-react'


export default function Home() {
  return (
    <div className="min-h-screen px-6 bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-6 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6 animate-bounce">
              <Sparkles className="inline mr-2" size={20} />
              <span className="font-bold text-yellow-400">Frontend Developer</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Immerse</span> in
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Creative Code
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Nafis is a Front-End Developer with an engineering background, passionate about crafting modern, responsive, and user-friendly applications. Skilled in Laravel (Blade) and Flutter, he builds scalable web and mobile interfaces with a strong focus on clean UI/UX and maintainable design
            </p>

            <div className="flex gap-4">
              <Link 
                href="/projects"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg shadow-yellow-400/20"
              >
                View Projects <ChevronRight />
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-6 mt-8">
              <a 
                href="https://github.com/nafisd" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://linkedin.com/in/nafis-difaudin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="mailto:nafisdifaudin97@gmail.com" 
                className="text-gray-400 hover:text-yellow-400 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="image/selfpoto2.png"
                width={500}
                height={500} 
                alt="Developer portrait" 
                className="rounded-3xl shadow-2xl shadow-yellow-400/20 border-4 border-yellow-400/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">2+</div>
                <div className="text-sm font-medium">years experience</div>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  )
}