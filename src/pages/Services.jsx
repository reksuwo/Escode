import { useState } from 'react'
import ServicesImage from '../assets/services.jpg'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: 'Web Development + Hosting',
      icon: '🌐',
      hotDeal: true,
      description: 'Build a modern web application using the latest technologies and host it seamlessly online. No need to pay for the whole website as this is free and pay only the hosting.',
      features: [
        'No payment on the website revision',
        'Responsive Design',
        'Performance Optimization',
        'SEO Optimization',
        'Cross-Browser Compatibility',
        'Modern UI/UX',
        'Database Integration'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      title: 'E-commerce Solutions',
      icon: '🛒',
      description: 'Complete e-commerce platforms with secure payment processing and inventory management.',
      features: [
        'Payment Integration',
        'Inventory Management',
        'Order Tracking',
        'Customer Dashboard',
        'Admin Panel',
        'Security Features'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'MongoDB']
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our team creates wireframes, mockups, and interactive prototypes to visualize your project before development begins.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with continuous testing and quality assurance throughout the process.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution to production and provide ongoing support, maintenance, and feature updates as needed.'
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="section bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ServicesImage})` }}
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
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
              We offer comprehensive digital solutions to help your business grow and succeed in the modern digital landscape. 
              From web development to cloud solutions, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left mb-16">
            <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold tracking-tight">
              What We Offer
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative p-8 h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-gray-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Hot Deal Badge */}
                  {service.hotDeal && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      🔥 HOT DEAL
                    </div>
                  )}
                  
                  {/* Service Icon */}
                  <div className="text-4xl mb-6 group-hover:animate-bounce">
                    {service.icon}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-purple-500 transition-colors duration-300"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold tracking-tight">
              Our Process
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="relative p-8 h-full text-center border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
