"use client";

import React, { useState, useEffect } from 'react';
import { Code, Sparkles, ExternalLink, Github, Mail, Linkedin, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Your projects data
  const projects = [
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
  ];

  // Your skills data
  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "Next.js", level: 88, color: "bg-gray-800" },
    { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
    { name: "Node.js", level: 80, color: "bg-green-600" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "Git", level: 87, color: "bg-red-600" }
  ];

  type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

  const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-yellow-400 shadow-2xl shadow-yellow-400/20">
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-3xl" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-900 p-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-all"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-8">
          <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold mb-4">
            {project.category}
          </div>
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">{project.title}</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.longDescription}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-gray-800 border border-yellow-400/30 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a href={project.liveUrl} className="flex-1 bg-yellow-400 text-gray-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all">
              <ExternalLink size={20} /> Live Demo
            </a>
            <a href={project.githubUrl} className="flex-1 bg-gray-800 border-2 border-yellow-400 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-700 transition-all">
              <Github size={20} /> View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-40 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-yellow-400">アニマンガ</span>
            <span className="text-white ml-2">Dev</span>
          </div>
          <div className="flex gap-8">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-all hover:text-yellow-400 ${
                  activeSection === item.toLowerCase() ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
              Crafting beautiful, responsive, and user-friendly web experiences with modern technologies. 
              Let's build something amazing together!
            </p>

            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg shadow-yellow-400/20"
              >
                View Projects <ChevronRight />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-gray-900 transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-all hover:scale-110">
                <Github size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-all hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-all hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src= "/image/selfpoto.png" 
                alt="Developer" 
                className="rounded-3xl shadow-2xl shadow-yellow-400/20 border-4 border-yellow-400/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">3+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-yellow-400">Featured</span> Projects
            </h2>
            <p className="text-gray-400 text-xl">Explore, Read, and <span className="text-yellow-400 font-bold">ENJOY</span></p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-yellow-400">Technical</span> Skills
            </h2>
            <p className="text-gray-400 text-xl">Complete mastery of modern web technologies</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all">
                <div className="flex justify-between mb-3">
                  <span className="font-bold text-lg">{skill.name}</span>
                  <span className="text-yellow-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex gap-12 bg-gray-800/50 px-12 py-8 rounded-3xl border border-yellow-400/30">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">20+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="text-yellow-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12">
            Have a project in mind? Let's create something amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:your@email.com" className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all hover:scale-105">
              <Mail className="mx-auto mb-4 text-yellow-400" size={40} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">your@email.com</p>
            </a>
            <a href="https://github.com" className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all hover:scale-105">
              <Github className="mx-auto mb-4 text-yellow-400" size={40} />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@yourusername</p>
            </a>
            <a href="https://linkedin.com" className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all hover:scale-105">
              <Linkedin className="mx-auto mb-4 text-yellow-400" size={40} />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Your Name</p>
            </a>
          </div>

          <button className="bg-yellow-400 text-gray-900 px-12 py-5 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg shadow-yellow-400/20">
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 アニマンガDev. Crafted with ❤️ and ☕</p>
        </div>
      </footer>

      {/* Project Modal */}
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
  );
};

export default Portfolio;