'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import ProjectModal from '../components/ProjectModals'
import type { Project } from '../types'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web App",
      description: "Modern e-commerce platform with cart, payment integration, and admin dashboard",
      longDescription: "A full-featured e-commerce platform built with React and Node.js. Features include product management, shopping cart, secure payment processing, order tracking, and comprehensive admin dashboard for inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      category: "Dashboard",
      description: "Analytics dashboard with real-time data visualization and social metrics",
      longDescription: "Comprehensive social media analytics platform featuring real-time data visualization, engagement metrics, audience insights, and automated reporting. Built with modern web technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tech: ["Next.js", "TypeScript", "Chart.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      category: "Mobile Web",
      description: "Beautiful weather app with location-based forecasts and animations",
      longDescription: "Elegant weather application providing accurate forecasts, location-based weather data, interactive maps, and beautiful weather animations. Features hourly and weekly forecasts with detailed weather metrics.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tech: ["React", "Weather API", "Framer Motion", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Task Management System",
      category: "Productivity",
      description: "Collaborative task manager with team features and kanban boards",
      longDescription: "Advanced task management system with drag-and-drop kanban boards, team collaboration features, real-time updates, task assignments, deadline tracking, and productivity analytics.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-yellow-400">Featured</span> Projects
          </h1>
          <p className="text-gray-400 text-xl">Explore, Read, and <span className="text-yellow-400 font-bold">ENJOY</span></p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-800/50 rounded-3xl overflow-hidden border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-900 rounded-lg text-sm border border-yellow-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-yellow-400 font-medium group-hover:gap-3 gap-2 transition-all">
                  View Details <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
