'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/media', label: 'Media' },
  { href: '/projects', label: 'Projects' },
  { href: '/peace-talks', label: 'Peace Talks' },
  { href: '/anton-balasingham', label: 'Anton Balasingham' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-red-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ICET Logo" width={54} height={54} className="rounded-full shrink-0" />
            <div className="min-w-0">
              <p className="text-yellow-400 text-xs font-semibold leading-tight truncate">அனைத்துலக எழத்தமிழர் மக்களவை</p>
              <p className="text-white text-sm font-bold leading-tight">International Council Of Eelam Tamils</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Link href="/contact" className="border border-gray-500 hover:border-white text-white text-sm px-4 py-2 font-semibold transition">Contact</Link>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>
      <nav className="bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-300 hover:text-red-400 text-sm px-3 py-3 block font-medium transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {menuOpen && (
            <ul className="md:hidden py-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-red-400 text-sm px-3 py-2 block font-medium" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}
