import { useState } from 'react'
import ProjectsImage from '../assets/projects.jpg'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'api', label: 'API Development' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Local Business Website',
      category: 'web',
      description: 'A responsive business website for a local restaurant featuring online menu, contact forms, and social media integration.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Netlify', 'Formspree'],
      features: [
        'Responsive Design',
        'Online Menu',
        'Contact Forms',
        'Social Media Integration'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Startup Landing Page',
      category: 'web',
      description: 'A modern landing page for a tech startup with email collection, feature showcase, and call-to-action sections.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Vercel', 'Mailchimp'],
      features: [
        'Email Collection',
        'Feature Showcase',
        'Call-to-Action',
        'Analytics Integration'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Small Business E-commerce',
      category: 'ecommerce',
      description: 'A simple e-commerce solution for a local boutique with product catalog, basic cart functionality, and contact forms.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Stripe', 'MongoDB', 'Heroku'],
      features: [
        'Product Catalog',
        'Shopping Cart',
        'Payment Processing',
        'Contact Forms'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'web',
      description: 'A personal portfolio website showcasing skills, projects, and contact information with smooth animations.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
      features: [
        'Project Showcase',
        'Smooth Animations',
        'Contact Forms',
        'Responsive Design'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Event Management App',
      category: 'mobile',
      description: 'A simple mobile app for local event management with event listing, RSVP functionality, and notifications.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Expo', 'Push Notifications'],
      features: [
        'Event Listing',
        'RSVP System',
        'Push Notifications',
        'User Profiles'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Blog Platform',
      category: 'web',
      description: 'A content management system for a personal blog with post creation, editing, and comment functionality.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
      features: [
        'Post Management',
        'Rich Text Editor',
        'Comment System',
        'Image Upload'
      ],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '3', label: 'Expert Developers' },
    { number: '5+', label: 'Years Combined' }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="section bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ProjectsImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left mb-20">
            <h1 className="mb-6 text-white text-5xl md:text-6xl font-bold tracking-tight">
              Our Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
              Explore our growing portfolio of projects and see how we've helped local businesses 
              and startups establish their online presence with modern, affordable web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative text-center">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                
                {/* Card Content */}
                <div className="relative p-6 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-gray-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Number with Modern Design */}
                  <div className="relative mb-4">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:animate-pulse">
                      {stat.number}
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-sm"></div>
                  </div>
                  
                  <h4 className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {stat.label}
                  </h4>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold tracking-tight">
              Portfolio Showcase
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Filter our projects by category to see specific types of work
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={project.liveUrl}
                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Project Description */}
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Let's work together to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 hover:scale-105">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
