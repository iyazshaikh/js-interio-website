'use client'

import Link from 'next/link'
import { ArrowRight, Award, Users, Building, Lightbulb, Mail, Phone, MapPin } from 'lucide-react'
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const teamMembers = [
  {
    name: "AR. MOHD UBED SULTAN",
    position: "Founder & Principal Architect",
    bio: "Leading architect and designer with expertise in creating innovative spaces that blend functionality with aesthetic excellence. Specializes in residential, commercial, and public architecture with a focus on sustainable design practices.",
    image: "/api/placeholder/300/300"
  }
]

const services = [
  {
    icon: Building,
    title: "Architectural Design",
    description: "Comprehensive architectural services from concept development to construction documentation, specializing in both new construction and renovation projects."
  },
  {
    icon: Users,
    title: "Interior Design",
    description: "Interior architecture and design services that create functional, aesthetic, and sustainable spaces for residential, commercial, and public environments."
  },
  {
    icon: Lightbulb,
    title: "Design Consulting",
    description: "Expert consulting services including feasibility studies, space planning, sustainability analysis, and design strategy development."
  },
  {
    icon: Award,
    title: "Project Management",
    description: "End-to-end project management services ensuring quality delivery, budget control, and timely completion of architectural projects."
  }
]

const achievements = [
  {
    year: "2024",
    title: "JS Interio Founded",
    description: "Established JS Interio with a vision to deliver exceptional architectural and interior design solutions across Mumbai and beyond."
  },
  {
    year: "Ongoing",
    title: "Professional Excellence",
    description: "Committed to delivering innovative design solutions that meet client needs while adhering to the highest standards of architectural practice."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              About JS Interio
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We are a Mumbai-based architectural and interior design firm dedicated to creating innovative, 
              sustainable, and inspiring spaces that enhance the human experience and respect the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Architect */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Founder
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">AR. MOHD UBED SULTAN</h3>
                  <Badge variant="outline" className="mb-4 border-gray-300 text-gray-700">
                    Architect, Planner, Interior Designer
                  </Badge>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  AR. MOHD UBED SULTAN is the driving force behind JS Interio, bringing years of expertise 
                  in architecture, planning, and interior design. With a passion for creating spaces that 
                  inspire and transform, he leads every project with a commitment to excellence and innovation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  His approach combines technical expertise with creative vision, ensuring that each project 
                  not only meets functional requirements but also delivers exceptional aesthetic value. 
                  Specializing in residential, commercial, and public projects, he has established a reputation 
                  for delivering designs that are both practical and inspiring.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg bg-gray-200 h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Architect Photo</span>
                </div>
              </div>
              <Card className="p-6 bg-gray-50">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Office No.1 Ground floor Raheja Arcade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Plot No.61 Sector 11 CBD Belapur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Navi Mumbai 400614</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">js.interio2021@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">9768525461</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Philosophy */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                At JS Interio, we believe that great architecture is born from the perfect balance of 
                form, function, and context. Our approach combines innovative thinking with practical solutions 
                to create spaces that not only meet our clients' needs but exceed their expectations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We draw inspiration from the surrounding environment, cultural context, and the unique vision 
                of each client to deliver architectural solutions that are both timeless and contemporary. 
                Our commitment to sustainability drives us to explore new materials, technologies, and design 
                strategies that minimize environmental impact while maximizing human comfort and well-being.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every project is an opportunity to create something meaningful – a space that tells a story, 
                serves a purpose, and contributes positively to its community and environment.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200 h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Studio Philosophy Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We offer comprehensive architectural and design services tailored to meet the unique needs of each project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Led by experienced professionals dedicated to delivering excellence in every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 bg-white shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-6 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Team Photo</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <Badge variant="outline" className="mb-4 border-gray-300 text-gray-700">
                    {member.position}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700">
              Building a legacy of excellence in architectural design.
            </p>
          </div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                    {achievement.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700">
              We follow a collaborative and transparent design process that ensures successful project outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 bg-white shadow-sm">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  We begin by understanding your needs, goals, and vision through detailed consultations and site analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 bg-white shadow-sm">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Design</h3>
                <p className="text-gray-600 text-sm">
                  Our creative team develops innovative design solutions that balance aesthetics, functionality, and sustainability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 bg-white shadow-sm">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Delivery</h3>
                <p className="text-gray-600 text-sm">
                  We oversee the entire construction process to ensure the final result matches our shared vision and quality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Let's collaborate to create spaces that inspire and transform. 
            Contact us today to discuss your architectural and interior design needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
              <Link href="/projects">
                View Our Work
              </Link>
            </Button>
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