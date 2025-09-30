'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const allProjects = [
  {
    title: "Modern Corporate Office",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "A sophisticated corporate office space featuring glass walls, minimalist furniture, and professional lighting designed to enhance productivity and collaboration.",
    location: "Mumbai, India",
    year: "2024",
    image: "/images/projects/commercial-office-1.jpg"
  },
  {
    title: "Luxury Retail Store",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "An elegant retail space with high-end displays, sophisticated lighting, and premium materials creating an exclusive shopping experience.",
    location: "Delhi, India",
    year: "2024",
    image: "/images/projects/retail-store-1.jpg"
  },
  {
    title: "Luxury Living Space",
    category: "RESIDENTIAL INTERIORS",
    description: "A contemporary living room featuring comfortable furniture, large windows, and elegant design elements that create a warm and inviting atmosphere.",
    location: "Mumbai, India",
    year: "2024",
    image: "/images/projects/luxury-living-1.jpg"
  },
  {
    title: "Minimalist Bedroom Design",
    category: "RESIDENTIAL INTERIORS",
    description: "A serene bedroom sanctuary with clean lines, neutral colors, and sophisticated decor promoting relaxation and tranquility.",
    location: "Pune, India",
    year: "2024",
    image: "/images/projects/minimal-bedroom-1.jpg"
  },
  {
    title: "Contemporary Office Tower",
    category: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "A striking commercial building with glass facade, contemporary architecture, and sustainable design elements in an urban setting.",
    location: "Bangalore, India",
    year: "2024",
    image: "/images/projects/office-building-1.jpg"
  },
  {
    title: "Public Library Complex",
    category: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "An innovative public library featuring modern architecture, glass panels, and community-focused spaces for learning and collaboration.",
    location: "Chennai, India",
    year: "2024",
    image: "/images/projects/public-library-1.jpg"
  },
  {
    title: "Luxury Villa Estate",
    category: "RESIDENTIAL BUILDINGS",
    description: "An exclusive residential villa with clean architecture, private swimming pool, and beautifully landscaped gardens offering ultimate luxury.",
    location: "Goa, India",
    year: "2024",
    image: "/images/projects/luxury-villa-1.jpg"
  },
  {
    title: "Modern Apartment Complex",
    category: "RESIDENTIAL BUILDINGS",
    description: "A contemporary apartment building featuring modern design, spacious balconies, and premium amenities in a prime urban location.",
    location: "Mumbai, India",
    year: "2024",
    image: "/images/projects/apartment-building-1.jpg"
  },
  {
    title: "Geometric Art Gallery",
    category: "ART DIRECTION / INSTALLATIONS",
    description: "A modern art gallery showcasing geometric wall sculptures with elegant exhibition lighting designed to enhance artistic appreciation.",
    location: "Mumbai, India",
    year: "2024",
    image: "/images/projects/art-gallery-1.jpg"
  },
  {
    title: "Interactive Exhibition Space",
    category: "ART DIRECTION / INSTALLATIONS",
    description: "A creative exhibition space featuring interactive design elements and modern artistic displays that engage and inspire visitors.",
    location: "Delhi, India",
    year: "2024",
    image: "/images/projects/exhibition-space-1.jpg"
  }
]

const categories = [
  "ALL PROJECTS",
  "COMMERCIAL AND PUBLIC INTERIORS",
  "RESIDENTIAL INTERIORS",
  "COMMERCIAL AND PUBLIC BUILDINGS",
  "RESIDENTIAL BUILDINGS",
  "ART DIRECTION / INSTALLATIONS"
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL PROJECTS")
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  const filterProjects = (category: string) => {
    setSelectedCategory(category)
    if (category === "ALL PROJECTS") {
      setFilteredProjects(allProjects)
    } else {
      const filtered = allProjects.filter(project => 
        project.category === category || project.secondaryCategory === category
      )
      setFilteredProjects(filtered)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Projects
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore our project categories and discover the range of architectural and interior design services we offer. 
              Projects will be showcased here as we complete them.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 border-b border-gray-200 sticky top-16 bg-white z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filter by category:</span>
            </div>
            
            {/* Desktop Filter */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => filterProjects(category)}
                  className={`text-xs ${
                    selectedCategory === category 
                      ? "bg-gray-900 text-white" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Mobile Filter */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="border-gray-300">
                    {selectedCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => filterProjects(category)}
                      className={selectedCategory === category ? "bg-gray-100" : ""}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              {selectedCategory === "ALL PROJECTS" ? "All project categories" : `Showing projects in ${selectedCategory}`}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? filteredProjects.map((project) => (
              <Card key={project.title} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <div className="relative overflow-hidden h-64 bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900 text-xs">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-gray-500 mb-2 tracking-wide uppercase">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500">{project.location}</span>
                    {project.secondaryCategory && (
                      <Badge variant="outline" className="text-xs border-gray-300">
                        {project.secondaryCategory}
                      </Badge>
                    )}
                  </div>
                  <Button asChild variant="ghost" className="p-0 h-auto text-gray-900 hover:text-gray-700 w-full justify-start">
                    <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )) : (
              <div className="col-span-3 text-center py-16">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Projects Coming Soon</h3>
                  <p className="text-gray-600 mb-8">
                    {selectedCategory === "ALL PROJECTS" 
                      ? "Our projects will be showcased here soon. We're working on creating exceptional spaces that will inspire and transform." 
                      : `Projects in the ${selectedCategory} category will be displayed here as we complete them.`
                    }
                  </p>
                  <div className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:bg-gray-100"
                      onClick={() => filterProjects("ALL PROJECTS")}
                    >
                      View All Categories
                    </Button>
                    <div className="text-sm text-gray-500">
                      <p>Interested in working with us?</p>
                      <Button asChild variant="link" className="p-0 h-auto text-gray-700 hover:text-gray-900">
                        <Link href="/contact">Get in touch</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JS INTERIO</h3>
              <p className="text-gray-400 text-sm">
                Creating exceptional architectural and interior design solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Project Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/projects" className="hover:text-white transition-colors">Commercial Interiors</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Residential Interiors</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Commercial Buildings</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Residential Buildings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>AR. MOHD UBED SULTAN</li>
                <li>Architect, Planner, Interior Designer</li>
                <li>Office No.1 Ground floor Raheja Arcade</li>
                <li>Plot No.61 Sector 11 CBD Belapur</li>
                <li>Navi Mumbai 400614</li>
                <li>Email: js.interio2021@gmail.com</li>
                <li>Phone: 9768525461</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 JS INTERIO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}