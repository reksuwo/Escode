import { Link } from 'react-router-dom'
import ConstellationBackground from './ConstellationBackground'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-start bg-gradient-to-b from-black to-gray-900 relative">
      <ConstellationBackground />
      <div className="container mx-auto px-4 text-left relative z-10">
        <div className="max-w-4xl">
          <h1 className="mb-6 animate-fade-in-up neon-glow">
            Professional Web Development
            <span className="block text-gray-400 text-2xl md:text-3xl font-normal mt-2">
              Optimized Performance • Exceptional UX
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We build your ideas into powerful, scalable web applications with modern technologies and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/projects" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-black bg-white border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-lg"
              style={{ backgroundColor: '#ffffff', color: '#000000' }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white border-2 border-gray-600 transition-all duration-300 hover:border-white hover:bg-white hover:text-black hover:scale-105"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
