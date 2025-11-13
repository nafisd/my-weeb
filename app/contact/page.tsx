'use client'

import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Let&apos;s <span className="text-yellow-400">Connect</span>
        </h1>
        <p className="text-gray-400 text-xl mb-12">
          Have a project in mind? Let&apos;s create something amazing together!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a 
            href="mailto:your@email.com" 
            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all hover:scale-105"
          >
            <Mail className="mx-auto mb-4 text-yellow-400" size={40} />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">your@email.com</p>
          </a>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all hover:scale-105"
          >
            <Github className="mx-auto mb-4 text-yellow-400" size={40} />
            <h3 className="font-bold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">@yourusername</p>
          </a>
          <a 
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all hover:scale-105"
          >
            <Linkedin className="mx-auto mb-4 text-yellow-400" size={40} />
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Your Name</p>
          </a>
        </div>

        <a
          href="/CV Nafis Difaudin.pdf"
          download="Nafis-Difaudin-Resume.pdf"
          className="inline-block bg-yellow-400 text-gray-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg shadow-yellow-400/20"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}