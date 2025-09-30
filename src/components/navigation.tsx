'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'

const projectCategories = [
  {
    name: "COMMERCIAL AND PUBLIC INTERIORS",
    projects: ["Modern Corporate Office", "Luxury Retail Store"]
  },
  {
    name: "RESIDENTIAL INTERIORS",
    projects: ["Luxury Living Space", "Minimalist Bedroom Design"]
  },
  {
    name: "COMMERCIAL AND PUBLIC BUILDINGS",
    projects: ["Contemporary Office Tower", "Public Library Complex"]
  },
  {
    name: "RESIDENTIAL BUILDINGS",
    projects: ["Luxury Villa Estate", "Modern Apartment Complex"]
  },
  {
    name: "ART DIRECTION / INSTALLATIONS",
    projects: ["Geometric Art Gallery", "Interactive Exhibition Space"]
  }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activePath, setActivePath] = useState('/')

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/contact', label: 'CONTACT' }
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold tracking-tight">JS INTERIO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.label === 'PROJECTS' ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`h-auto p-0 text-sm font-medium hover:text-gray-900 ${
                          activePath === item.href ? 'text-gray-900' : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-96 bg-white shadow-lg border border-gray-200">
                      {projectCategories.map((category) => (
                        <DropdownMenuSub key={category.name}>
                          <DropdownMenuSubTrigger className="text-xs font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            {category.name}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent className="bg-white shadow-lg border border-gray-200">
                            {category.projects.length > 0 ? category.projects.map((project) => (
                              <DropdownMenuItem
                                key={project}
                                className="text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                              >
                                <Link 
                                  href={`/projects/${project.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="w-full"
                                >
                                  {project}
                                </Link>
                              </DropdownMenuItem>
                            )) : (
                              <div className="px-3 py-2 text-xs text-gray-500">
                                Projects coming soon
                              </div>
                            )}
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                      activePath === item.href ? 'text-gray-900' : 'text-gray-600'
                    }`}
                    onClick={() => setActivePath(item.href)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.label === 'PROJECTS' ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm font-medium text-gray-900">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {projectCategories.map((category) => (
                        <div key={category.name} className="space-y-1">
                          <div className="px-3 py-1 text-xs font-medium text-gray-700">
                            {category.name}
                          </div>
                          <div className="pl-4 space-y-1">
                            {category.projects.length > 0 ? category.projects.map((project) => (
                              <Link
                                key={project}
                                href={`/projects/${project.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-3 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                              >
                                {project}
                              </Link>
                            )) : (
                              <div className="px-3 py-1 text-xs text-gray-500">
                                Projects coming soon
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setActivePath(item.href)
                      setIsOpen(false)
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}