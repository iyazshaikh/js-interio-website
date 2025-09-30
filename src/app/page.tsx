'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const featuredProjects = [
  {
    title: "Modern Corporate Office",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "A sophisticated corporate office space featuring glass walls and minimalist furniture",
    image: "/images/projects/commercial-office-1.jpg",
    slug: "modern-corporate-office"
  },
  {
    title: "Luxury Villa Estate",
    category: "RESIDENTIAL BUILDINGS",
    description: "An exclusive residential villa with clean architecture and private swimming pool",
    image: "/images/projects/luxury-villa-1.jpg",
    slug: "luxury-villa-estate"
  },
  {
    title: "Geometric Art Gallery",
    category: "ART DIRECTION / INSTALLATIONS",
    description: "A modern art gallery showcasing geometric wall sculptures with elegant exhibition lighting",
    image: "/images/projects/art-gallery-1.jpg",
    slug: "geometric-art-gallery"
  }
]

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href')!)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            JS INTERIO
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Creating spaces that inspire, transform, and endure through innovative design and architectural excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
              <Link href="/about">
                About Studio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section id="categories" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in creating exceptional spaces across various architectural and interior design disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "COMMERCIAL AND PUBLIC INTERIORS",
                description: "Innovative interior solutions for offices, retail spaces, restaurants, and public facilities that enhance user experience and functionality.",
                icon: "🏢"
              },
              {
                title: "RESIDENTIAL INTERIORS",
                description: "Personalized residential spaces that combine comfort, style, and functionality to create homes that reflect individual lifestyles.",
                icon: "🏠"
              },
              {
                title: "COMMERCIAL AND PUBLIC BUILDINGS",
                description: "Architectural design for commercial and public buildings that balance aesthetic appeal with practical requirements and sustainability.",
                icon: "🏗️"
              },
              {
                title: "RESIDENTIAL BUILDINGS",
                description: "Complete architectural services for residential buildings, from single-family homes to multi-unit developments.",
                icon: "🏘️"
              },
              {
                title: "ART DIRECTION / INSTALLATIONS",
                description: "Creative art direction and installation design for spaces that require unique artistic elements and visual storytelling.",
                icon: "🎨"
              }
            ].map((category, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-6">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <Button asChild variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                    <Link href="/projects">
                      Explore Category
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest work that showcases our commitment to excellence in architectural and interior design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <div className="relative overflow-hidden h-64 bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 text-gray-900 text-xs px-2 py-1 rounded">
                      Featured
                    </div>
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
                  <Button asChild variant="ghost" className="p-0 h-auto text-gray-900 hover:text-gray-700 w-full justify-start">
                    <Link href={`/projects/${project.slug}`}>
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Studio Philosophy */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Design Philosophy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At JS Interio, we believe that great design is born from the perfect balance of form, function, and context. 
            Our approach combines innovative thinking with practical solutions to create spaces that not only meet our clients' 
            needs but exceed their expectations. We draw inspiration from the surrounding environment, cultural context, and 
            the unique vision of each client to deliver architectural solutions that are both timeless and contemporary.
          </p>
          <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
            <Link href="/about">
              Learn More About Us
            </Link>
          </Button>
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