'use client'

import { useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import type { Project } from '../types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVertical, setIsVertical] = useState(false)

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    const vertical = img.naturalHeight > img.naturalWidth
    setIsVertical(vertical)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-yellow-400 shadow-2xl shadow-yellow-400/20">
        {/* Top Image Section */}
        <div className="relative overflow-hidden h-64 flex items-center justify-center bg-gray-900 rounded-t-3xl">
          {/* Blurred background if vertical */}
          {isVertical && (
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110"
            />
          )}

          {/* Main Image */}
          <img
            src={project.image}
            alt={project.title}
            onLoad={handleImageLoad}
            className={`relative z-10 transition-transform duration-500 ${
              isVertical
                ? 'max-h-full max-w-full object-contain'
                : 'w-full h-full object-cover'
            }`}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-900 p-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all z-20"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-4">
            {project.category}
          </div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">{project.title}</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-800 border border-yellow-400/30 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-yellow-400 text-gray-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all"
            >
              <ExternalLink size={20} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 border-2 border-yellow-400 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-700 transition-all"
            >
              <Github size={20} /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
