'use client'

import type { Skill } from '../types'

export default function Skills() {
  const skills: Skill[] = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "Next.js", level: 88, color: "bg-gray-800" },
    { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
    { name: "Node.js", level: 80, color: "bg-green-600" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "Git", level: 87, color: "bg-red-600" }
  ]

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-yellow-400">Technical</span> Skills
          </h1>
          <p className="text-gray-400 text-xl">Complete mastery of modern web technologies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
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

        <div className="text-center">
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
    </div>
  )
}