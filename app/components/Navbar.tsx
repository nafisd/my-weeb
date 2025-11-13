'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavItem } from '../types'

export default function Navbar() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-40 border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-yellow-400">FrontEnd</span>
          <span className="text-white ml-2">Dev</span>
        </Link>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-medium transition-all hover:text-yellow-400 ${
                pathname === item.path ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}