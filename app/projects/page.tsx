'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import ProjectModal from '../components/ProjectModals'
import type { Project } from '../types'

// 🧩 Image component with orientation detection
function ProjectImage({
  src,
  alt,
  category,
}: {
  src: string
  alt: string
  category: string
}) {
  const [isVertical, setIsVertical] = useState(false)

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    const vertical = img.naturalHeight > img.naturalWidth
    setIsVertical(vertical)
  }

  return (
    <div className="relative overflow-hidden h-64 flex items-center justify-center bg-gray-900">
      {/* Blurred background for vertical images */}
      {isVertical && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110"
        />
      )}

      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`relative z-10 transition-transform duration-500 group-hover:scale-105 ${
          isVertical
            ? 'max-h-full max-w-full object-contain'
            : 'w-full h-full object-cover'
        }`}
      />

      {/* Category Tag */}
      <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold z-20">
        {category}
      </div>
    </div>
  )
}


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'TempatKitacafe.com',
      category: 'Web App',
      description: 'E-commerce platform for a cafe with product management',
      longDescription:
        'Full-featured e-commerce web application for TempatKitacafe, featuring product listings, shopping cart, user authentication, and payment integration. Built with a focus on performance and user experience.',
      image: 'image/tempatkita.png',
      tech: ['HTML', 'CSS', 'Javascript', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Sharfin App',
      category: 'Mobile App',
      description:
        'The Sharfin app is an innovative application designed to provide comprehensive information about Islam and Islamic finance.',
      longDescription:
        'The Sharfin app offers a wide range of features, including articles, videos, and interactive tools that help users learn about Islamic principles, financial management according to Islamic law, and other related topics. The app is designed with a user-friendly interface, making it easy for users of all ages to navigate and find the information they need.',
      image: 'image/Sharfin.png',
      tech: ['Flutter', 'Dart', 'Golang', 'Google APIs'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Tajwidku',
      category: 'Mobile App',
      description:
        'School Project about Interactive app for learning and practicing Tajwid rules',
      longDescription:
        'Tajwidku is an interactive mobile application designed to help users learn and practice the rules of Tajwid, the art of proper pronunciation and recitation of the Quran. The app features engaging lessons, and video examples to enhance the learning experience. Users can track their progress and receive feedback to improve their Tajwid skills effectively.',
      image: 'image/tajwidku.png',
      tech: ['React Native', 'Tajwid APIs', 'MongoDB', 'Youtube APIs'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Teman Isyarat',
      category: 'Mobile App',
      description:
        'Sign language learning and communication app for the hearing impaired',
      longDescription:
        'Teman Isyarat is a mobile application designed to facilitate learning and communication for the hearing impaired through sign language. The app offers a variety of features, including interactive lessons, video tutorials, and a communication platform that allows users to connect with others using sign language. With an emphasis on accessibility and user engagement, Teman Isyarat aims to bridge the communication gap and promote inclusivity.',
      image: 'image/temanisyarat.png',
      tech: ['Flutter', 'Dart', 'SupaBase', 'Flask', 'Python'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-yellow-400">Featured</span> Projects
          </h1>
          <p className="text-gray-400 text-xl">
            Explore, Read, and{' '}
            <span className="text-yellow-400 font-bold">ENJOY</span>
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 rounded-3xl overflow-hidden border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <ProjectImage
                src={project.image}
                alt={project.title}
                category={project.category}
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900 rounded-lg text-sm border border-yellow-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-yellow-400 font-medium group-hover:gap-3 gap-2 transition-all">
                  View Details{' '}
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
