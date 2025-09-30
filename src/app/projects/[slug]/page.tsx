'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, MapPin, Share2, Download } from 'lucide-react'
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const projectData: Record<string, any> = {
  'kabelovna-studios': {
    title: "KABELOVNA STUDIOS",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    secondaryCategory: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "Modern studio spaces with industrial elements and collaborative work areas",
    fullDescription: "Kabelovna Studios represents a transformative approach to creative workspace design. Located in a historic industrial building in Prague, this project seamlessly blends raw industrial elements with contemporary design principles to create inspiring environments for artists and creative professionals.",
    year: "2023",
    location: "Prague, Czech Republic",
    client: "Kabelovna Creative Group",
    size: "2,500 m²",
    status: "Completed",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Open-plan studio spaces",
      "Industrial materials and finishes",
      "Natural lighting optimization",
      "Collaborative work areas",
      "Sustainable design elements",
      "Flexible space configuration"
    ],
    challenges: "The main challenge was preserving the historic industrial character while creating modern, functional spaces. We worked carefully to expose original brickwork and steel structures while integrating contemporary amenities and technology.",
    solution: "Our solution involved a careful balance of preservation and innovation. We maintained the building's industrial aesthetic while introducing modern lighting, climate control, and flexible partitioning systems that allow the space to adapt to various creative needs."
  },
  'bjm-apartment': {
    title: "BJM APARTMENT",
    category: "RESIDENTIAL INTERIORS",
    secondaryCategory: "RESIDENTIAL BUILDINGS",
    description: "Contemporary residential design with natural materials and open floor plan",
    fullDescription: "The BJM Apartment project showcases our approach to modern residential living in the heart of Prague. This 120m² apartment was completely reimagined to create a harmonious living space that balances contemporary design with comfort and functionality.",
    year: "2023",
    location: "Prague, Czech Republic",
    client: "Private Client",
    size: "120 m²",
    status: "Completed",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Open-plan living area",
      "Natural material palette",
      "Custom kitchen design",
      "Integrated storage solutions",
      "Smart home technology",
      "Energy-efficient systems"
    ],
    challenges: "The apartment's original layout was compartmentalized and dark. Our challenge was to create a sense of space and light while maintaining the necessary separation between living areas.",
    solution: "We removed non-structural walls to create an open-plan living space, introduced large sliding doors for flexibility, and optimized natural light through strategic placement of openings and reflective surfaces."
  },
  'cornloft-triplex-reconstruction-n.1': {
    title: "CORNLOFT TRIPEX RECONSTRUCTION N.1",
    category: "RESIDENTIAL INTERIORS",
    secondaryCategory: "ART DIRECTION / INSTALLATIONS",
    description: "Historic loft reconstruction with modern amenities and artistic installations",
    fullDescription: "The Cornloft Triplex Reconstruction project involved the complete renovation of a historic industrial building into a unique triplex residential space. This project demonstrates our expertise in adaptive reuse and our ability to blend historical preservation with contemporary living requirements.",
    year: "2022",
    location: "Prague, Czech Republic",
    client: "Private Client",
    size: "280 m²",
    status: "Completed",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Triplex layout with vertical connectivity",
      "Exposed original structure",
      "Custom artistic installations",
      "Rooftop terrace",
      "Industrial-chic aesthetic",
      "Historic preservation elements"
    ],
    challenges: "Preserving the building's historic character while meeting modern living standards and structural requirements was the primary challenge.",
    solution: "Our approach involved careful structural analysis, preservation of key historical elements, and integration of modern systems in a way that complemented rather than compromised the original architecture."
  },
  'dbb-prague-office': {
    title: "DBB PRAGUE OFFICE",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    secondaryCategory: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "Corporate office design with collaborative spaces and sustainable materials",
    fullDescription: "The DBB Prague Office project represents a new approach to corporate workspace design. Created for a dynamic consulting firm, this office environment emphasizes collaboration, flexibility, and employee well-being while reflecting the company's professional identity.",
    year: "2023",
    location: "Prague, Czech Republic",
    client: "DBB Consulting",
    size: "1,800 m²",
    status: "Completed",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Collaborative work zones",
      "Private meeting rooms",
      "Recreational spaces",
      "Sustainable materials",
      "Advanced technology integration",
      "Flexible furniture systems"
    ],
    challenges: "Creating a space that would support both focused work and collaboration while accommodating the company's growth and changing needs.",
    solution: "We designed a flexible workplace strategy with varied work settings, implemented modular furniture systems, and created distinct zones for different types of work activities."
  },
  'green-blacks': {
    title: "GREEN & BLACKS",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "Retail space design with eco-friendly materials and modern aesthetics",
    fullDescription: "Green & Blacks is a premium chocolate boutique that required a design reflecting the brand's commitment to quality and sustainability. Our design creates an immersive retail experience that highlights the products while embodying the brand's ethical values.",
    year: "2022",
    location: "Prague, Czech Republic",
    client: "Green & Blacks",
    size: "85 m²",
    status: "Completed",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Sustainable material selection",
      "Custom display fixtures",
      "Brand-integrated design",
      "Warm, inviting atmosphere",
      "Efficient retail layout",
      "Eco-friendly lighting"
    ],
    challenges: "Creating a distinctive retail environment that would stand out in a competitive market while staying true to the brand's sustainable ethos.",
    solution: "We developed a design language using reclaimed wood, recycled materials, and energy-efficient lighting to create a space that tells the brand's story while providing an exceptional customer experience."
  },
  'tropicana': {
    title: "TROPICANA",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "Tropical-themed restaurant interior with sustainable design elements",
    fullDescription: "Tropicana is a vibrant restaurant and bar that brings tropical vibes to the heart of Prague. Our design creates an immersive atmosphere that transports guests to a tropical paradise while incorporating sustainable design principles and local craftsmanship.",
    year: "2022",
    location: "Prague, Czech Republic",
    client: "Tropicana Group",
    size: "220 m²",
    status: "Completed",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Tropical-themed interior",
      "Living plant installations",
      "Sustainable materials",
      "Custom lighting design",
      "Indoor-outdoor flow",
      "Local artisan elements"
    ],
    challenges: "Creating an authentic tropical atmosphere in a temperate climate while ensuring environmental sustainability and operational efficiency.",
    solution: "We integrated extensive planting, used sustainable and recycled materials, and implemented energy-efficient systems to create the tropical ambiance while minimizing environmental impact."
  },
  'barn': {
    title: "BARN",
    category: "RESIDENTIAL BUILDINGS",
    secondaryCategory: "RESIDENTIAL INTERIORS",
    description: "Traditional barn conversion into modern residential space",
    fullDescription: "The Barn project demonstrates our expertise in adaptive reuse of agricultural buildings. This 19th-century barn was transformed into a stunning contemporary residence while preserving its historic character and rural context.",
    year: "2021",
    location: "Czech Countryside",
    client: "Private Client",
    size: "350 m²",
    status: "Completed",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Historic barn preservation",
      "Modern interior insertions",
      "Rural landscape integration",
      "Sustainable heating systems",
      "Natural material palette",
      "Indoor-outdoor living"
    ],
    challenges: "Converting a historic agricultural building into a modern home while preserving its character and meeting contemporary living standards.",
    solution: "Our approach involved careful structural reinforcement, preservation of original features, and insertion of modern elements that complement rather than compete with the historic architecture."
  },
  'modern-corporate-office': {
    title: "Modern Corporate Office",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "A sophisticated corporate office space featuring glass walls, minimalist furniture, and professional lighting designed to enhance productivity and collaboration.",
    fullDescription: "This Modern Corporate Office project represents the pinnacle of contemporary workspace design. Located in the heart of Mumbai's business district, this office environment was meticulously crafted to foster innovation, collaboration, and employee well-being while reflecting the company's forward-thinking corporate identity.",
    year: "2024",
    location: "Mumbai, India",
    client: "Tech Solutions India",
    size: "1,500 m²",
    status: "Completed",
    images: [
      "/images/projects/commercial-office-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Glass wall partitions",
      "Minimalist furniture design",
      "Professional lighting systems",
      "Collaborative work zones",
      "Advanced technology integration",
      "Sustainable materials"
    ],
    challenges: "Creating a workspace that would balance open collaboration with focused work areas while incorporating cutting-edge technology and sustainable design principles.",
    solution: "Our solution involved a careful zoning strategy, implementing smart glass partitions that could switch between transparent and opaque states, and integrating state-of-the-art lighting and climate control systems that adapt to occupancy and time of day."
  },
  'luxury-retail-store': {
    title: "Luxury Retail Store",
    category: "COMMERCIAL AND PUBLIC INTERIORS",
    description: "An elegant retail space with high-end displays, sophisticated lighting, and premium materials creating an exclusive shopping experience.",
    fullDescription: "This Luxury Retail Store project showcases our ability to create immersive retail environments that elevate the shopping experience. Located in Delhi's premier shopping district, this boutique was designed to reflect the brand's commitment to luxury and exclusivity while providing an unparalleled customer journey.",
    year: "2024",
    location: "Delhi, India",
    client: "Luxury Brands International",
    size: "300 m²",
    status: "Completed",
    images: [
      "/images/projects/retail-store-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "High-end display systems",
      "Sophisticated lighting design",
      "Premium material selection",
      "Custom fixture design",
      "Exclusive fitting rooms",
      "Brand-integrated technology"
    ],
    challenges: "Creating a retail environment that would stand out in a competitive luxury market while maintaining brand consistency and providing an exceptional customer experience.",
    solution: "We developed a comprehensive design language using premium materials like marble, brass, and custom millwork, integrated sophisticated lighting that highlights products, and created distinct zones for different product categories while maintaining a cohesive overall aesthetic."
  },
  'luxury-living-space': {
    title: "Luxury Living Space",
    category: "RESIDENTIAL INTERIORS",
    description: "A contemporary living room featuring comfortable furniture, large windows, and elegant design elements that create a warm and inviting atmosphere.",
    fullDescription: "This Luxury Living Space project exemplifies our approach to high-end residential design. Located in a premium Mumbai apartment, this living area was transformed into a sophisticated sanctuary that balances comfort, style, and functionality while maximizing the stunning city views.",
    year: "2024",
    location: "Mumbai, India",
    client: "Private Client",
    size: "85 m²",
    status: "Completed",
    images: [
      "/images/projects/luxury-living-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Floor-to-ceiling windows",
      "Custom furniture design",
      "Elegant lighting fixtures",
      "Premium material palette",
      "Smart home integration",
      "Acoustic optimization"
    ],
    challenges: "Maximizing the sense of space and light in a relatively compact area while incorporating luxury amenities and maintaining a warm, inviting atmosphere.",
    solution: "Our approach involved careful space planning, the use of reflective surfaces to enhance natural light, custom furniture that maximizes functionality without overwhelming the space, and a layered lighting scheme that creates ambiance while providing practical illumination."
  },
  'minimalist-bedroom-design': {
    title: "Minimalist Bedroom Design",
    category: "RESIDENTIAL INTERIORS",
    description: "A serene bedroom sanctuary with clean lines, neutral colors, and sophisticated decor promoting relaxation and tranquility.",
    fullDescription: "This Minimalist Bedroom Design project demonstrates our mastery of creating peaceful, restorative environments. Located in a Pune residence, this bedroom was designed as a tranquil retreat from the busy urban life, emphasizing simplicity, comfort, and mindfulness in every design decision.",
    year: "2024",
    location: "Pune, India",
    client: "Private Client",
    size: "45 m²",
    status: "Completed",
    images: [
      "/images/projects/minimal-bedroom-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Clean line aesthetics",
      "Neutral color palette",
      "Custom built-in storage",
      "Organic materials",
      "Blackout lighting control",
      "Acoustic treatment"
    ],
    challenges: "Creating a minimalist space that feels warm and inviting rather than cold or sterile, while incorporating ample storage and maintaining visual interest.",
    solution: "We focused on texture and material quality to add warmth and depth, incorporated hidden storage solutions to maintain clean lines, used a layered approach to lighting for flexibility, and selected furniture and decor items that combine simplicity with sophisticated craftsmanship."
  },
  'contemporary-office-tower': {
    title: "Contemporary Office Tower",
    category: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "A striking commercial building with glass facade, contemporary architecture, and sustainable design elements in an urban setting.",
    fullDescription: "This Contemporary Office Tower project represents our vision for modern commercial architecture. Located in Bangalore's technology corridor, this 15-story tower was designed to make a bold architectural statement while incorporating cutting-edge sustainable technologies and creating an optimal work environment for occupants.",
    year: "2024",
    location: "Bangalore, India",
    client: "Bangalore Development Corporation",
    size: "25,000 m²",
    status: "Completed",
    images: [
      "/images/projects/office-building-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Glass curtain wall system",
      "Contemporary architectural form",
      "Sustainable design elements",
      "Advanced facade technology",
      "Green roof integration",
      "Smart building systems"
    ],
    challenges: "Designing a distinctive commercial building that would stand out in a competitive market while meeting stringent sustainability requirements and creating a productive work environment.",
    solution: "Our solution involved developing a unique architectural form that responds to solar orientation, incorporating advanced facade systems that optimize natural light while minimizing heat gain, and integrating state-of-the-art building management systems for optimal efficiency and comfort."
  },
  'public-library-complex': {
    title: "Public Library Complex",
    category: "COMMERCIAL AND PUBLIC BUILDINGS",
    description: "An innovative public library featuring modern architecture, glass panels, and community-focused spaces for learning and collaboration.",
    fullDescription: "This Public Library Complex project showcases our commitment to creating civic architecture that serves and inspires communities. Located in Chennai, this modern library was designed as a knowledge hub that combines traditional library functions with cutting-edge technology and collaborative spaces for the digital age.",
    year: "2024",
    location: "Chennai, India",
    client: "Chennai Municipal Corporation",
    size: "8,000 m²",
    status: "Completed",
    images: [
      "/images/projects/public-library-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Modern architectural design",
      "Extensive glass facades",
      "Community learning spaces",
      "Digital integration",
      "Sustainable systems",
      "Accessible design"
    ],
    challenges: "Creating a modern library that would honor the traditional role of libraries while embracing digital transformation and serving as a true community hub for diverse user groups.",
    solution: "We developed a flexible design that accommodates various learning styles and activities, incorporated extensive glazing to create a connection with the surroundings, integrated advanced technology seamlessly, and ensured universal accessibility throughout the facility."
  },
  'luxury-villa-estate': {
    title: "Luxury Villa Estate",
    category: "RESIDENTIAL BUILDINGS",
    description: "An exclusive residential villa with clean architecture, private swimming pool, and beautifully landscaped gardens offering ultimate luxury.",
    fullDescription: "This Luxury Villa Estate project represents the pinnacle of residential luxury living. Located in the pristine coastal region of Goa, this villa was designed as a private sanctuary that combines sophisticated modern architecture with the natural beauty of its surroundings, creating an unparalleled living experience.",
    year: "2024",
    location: "Goa, India",
    client: "Private Client",
    size: "1,200 m²",
    status: "Completed",
    images: [
      "/images/projects/luxury-villa-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Clean modern architecture",
      "Private swimming pool",
      "Landscaped gardens",
      "Ocean views",
      "Smart home technology",
      "Luxury amenities"
    ],
    challenges: "Designing a luxury residence that would maximize the stunning coastal location while providing privacy, security, and all the amenities expected in a high-end property.",
    solution: "Our approach involved careful site planning to optimize views and privacy, incorporating sustainable design principles suitable for the tropical climate, integrating advanced home automation systems, and using premium materials that would withstand the coastal environment while maintaining their beauty."
  },
  'modern-apartment-complex': {
    title: "Modern Apartment Complex",
    category: "RESIDENTIAL BUILDINGS",
    description: "A contemporary apartment building featuring modern design, spacious balconies, and premium amenities in a prime urban location.",
    fullDescription: "This Modern Apartment Complex project demonstrates our expertise in high-density residential architecture. Located in Mumbai's prime residential area, this 20-story building was designed to offer urban dwellers a sophisticated living environment with extensive amenities and connections to the surrounding community.",
    year: "2024",
    location: "Mumbai, India",
    client: "Mumbai Housing Development",
    size: "18,000 m²",
    status: "Completed",
    images: [
      "/images/projects/apartment-building-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Contemporary architectural design",
      "Spacious balconies",
      "Premium amenities",
      "Rooftop gardens",
      "Fitness center",
      "Community spaces"
    ],
    challenges: "Creating a high-density residential development that would provide a high quality of life for residents while making efficient use of limited urban space and incorporating sustainable design principles.",
    solution: "We developed a design that maximizes natural light and ventilation for all units, incorporated extensive green spaces including rooftop gardens, provided a comprehensive range of amenities, and used advanced building systems to ensure energy efficiency and resident comfort."
  },
  'geometric-art-gallery': {
    title: "Geometric Art Gallery",
    category: "ART DIRECTION / INSTALLATIONS",
    description: "A modern art gallery showcasing geometric wall sculptures with elegant exhibition lighting designed to enhance artistic appreciation.",
    fullDescription: "This Geometric Art Gallery project represents our innovative approach to exhibition design. Located in Mumbai's art district, this gallery was designed as a dynamic space that would showcase contemporary geometric art while creating an immersive experience that enhances visitors' appreciation and understanding of the artworks.",
    year: "2024",
    location: "Mumbai, India",
    client: "Mumbai Art Foundation",
    size: "600 m²",
    status: "Completed",
    images: [
      "/images/projects/art-gallery-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Geometric design elements",
      "Custom exhibition lighting",
      "Flexible gallery spaces",
      "Interactive installations",
      "Educational areas",
      "Artist studios"
    ],
    challenges: "Creating a gallery space that would be versatile enough to accommodate various types of geometric art while providing optimal viewing conditions and creating an engaging visitor experience.",
    solution: "Our solution involved developing a modular space that could be reconfigured for different exhibitions, designing a sophisticated lighting system that could be adjusted for different artworks, incorporating interactive elements to engage visitors, and creating a flow that would guide visitors through the space in an intuitive manner."
  },
  'interactive-exhibition-space': {
    title: "Interactive Exhibition Space",
    category: "ART DIRECTION / INSTALLATIONS",
    description: "A creative exhibition space featuring interactive design elements and modern artistic displays that engage and inspire visitors.",
    fullDescription: "This Interactive Exhibition Space project showcases our ability to create immersive cultural experiences. Located in Delhi's cultural district, this space was designed as a platform for contemporary artists to create interactive installations that blur the boundaries between art and audience, creating memorable and transformative experiences.",
    year: "2024",
    location: "Delhi, India",
    client: "Delhi Cultural Council",
    size: "450 m²",
    status: "Completed",
    images: [
      "/images/projects/exhibition-space-1.jpg",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    features: [
      "Interactive design elements",
      "Modern artistic displays",
      "Flexible space configuration",
      "Multimedia integration",
      "Visitor engagement zones",
      "Artist-in-residence spaces"
    ],
    challenges: "Creating an exhibition space that would support a wide range of interactive and multimedia installations while ensuring visitor safety, accessibility, and optimal engagement with the artworks.",
    solution: "We developed a highly flexible infrastructure that could accommodate various types of installations, incorporated advanced multimedia systems, designed clear visitor flow patterns, and created distinct zones for different types of interactions while maintaining an overall cohesive experience."
  }
}

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const project = projectData[slug]

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <Button onClick={() => router.push('/projects')}>
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Back Button */}
      <div className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => router.push('/projects')}
            className="mb-8 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>

      {/* Hero Section with Main Image */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-lg bg-gray-200 h-96 lg:h-[600px]">
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4 border-gray-300 text-gray-700">
                  {project.category}
                </Badge>
                {project.secondaryCategory && (
                  <Badge variant="outline" className="ml-2 border-gray-300 text-gray-700">
                    {project.secondaryCategory}
                  </Badge>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Year: {project.year}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Location: {project.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Client: {project.client}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Size: {project.size}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Status: {project.status}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h2>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {project.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative overflow-hidden rounded-lg bg-gray-200 h-32 transition-all duration-200 ${
                  selectedImageIndex === index ? 'ring-2 ring-gray-900' : 'hover:ring-1 hover:ring-gray-400'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Selected Image */}
          <div className="relative overflow-hidden rounded-lg bg-gray-200 h-96 lg:h-[500px]">
            <img 
              src={project.images[selectedImageIndex]} 
              alt={`${project.title} - Selected Image`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setSelectedImageIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 transition-all"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solution */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(projectData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedProject]) => (
                <Card key={key} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <div className="relative overflow-hidden h-48 bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Project Image</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-xs text-gray-500 mb-2 tracking-wide uppercase">
                      {relatedProject.category}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <Button asChild variant="ghost" className="p-0 h-auto text-gray-900 hover:text-gray-700 text-sm">
                      <Link href={`/projects/${key}`}>
                        View Project
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
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