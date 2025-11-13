import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Frontend Developer',
  description: 'Personal portfolio website showcasing projects and skills',
  keywords: ['frontend', 'developer', 'portfolio', 'react', 'nextjs'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Navbar />
        <main className="pt-10">
          {children}
        </main>
        <footer className="bg-gray-900 border-t border-gray-800 py-6 px-6">
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p>© 2024 アニマンガDev. Crafted with ❤️ and ☕</p>
          </div>
        </footer>
      </body>
    </html>
  )
}