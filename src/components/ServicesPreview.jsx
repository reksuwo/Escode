import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const ServicesPreview = () => {
  useEffect(() => {
    // Load the Lottie script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js'
    script.type = 'module'
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const services = [
    {
      title: 'Frontend Development',
      description: 'Modern React applications with responsive design and optimal user experience.',
      icon: 'lottie-frontend',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions with robust APIs and database optimization.',
      icon: 'lottie-backend',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Full-Stack Solutions',
      description: 'Complete web applications from concept to deployment with seamless integration.',
      icon: 'lottie-fullstack',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Host your Website',
      description: 'Reliable hosting solutions with 99.9% uptime and lightning-fast performance.',
      icon: 'lottie',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-left mb-20">
          <h2 className="mb-6 text-white text-5xl md:text-6xl font-bold tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col items-center text-center border border-gray-800 rounded-2xl hover:border-gray-600 transition-all duration-500 group-hover:transform group-hover:scale-105">
                 {/* Animated Icon */}
                 {service.icon === 'lottie' ? (
                   <div className="mb-6 group-hover:animate-bounce">
                     <dotlottie-wc 
                       src="https://lottie.host/1714756f-e243-497e-992d-1cf1528022ae/e1Pyhky5Lu.lottie" 
                       style={{width: '80px', height: '80px'}} 
                       autoplay 
                       loop
                     />
                   </div>
                 ) : service.icon === 'lottie-fullstack' ? (
                   <div className="mb-6 group-hover:animate-bounce">
                     <dotlottie-wc 
                       src="https://lottie.host/b9b367a5-bfa3-482c-807e-b0a650e3d641/JTmFZSFa6g.lottie" 
                       style={{width: '80px', height: '80px'}} 
                       autoplay 
                       loop
                     />
                   </div>
                 ) : service.icon === 'lottie-frontend' ? (
                   <div className="mb-6 group-hover:animate-bounce">
                     <dotlottie-wc 
                       src="https://lottie.host/853fb98b-b260-46e9-8f79-0214810269fc/a9b4cLV09K.lottie" 
                       style={{width: '80px', height: '80px'}} 
                       autoplay 
                       loop
                     />
                   </div>
                 ) : service.icon === 'lottie-backend' ? (
                   <div className="mb-6 group-hover:animate-bounce">
                     <dotlottie-wc 
                       src="https://lottie.host/9738b268-2a38-4956-a5d9-71c65a08172e/TVILvEXO3m.lottie" 
                       style={{width: '80px', height: '80px'}} 
                       autoplay 
                       loop
                     />
                   </div>
                 ) : (
                   <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:animate-bounce`}>
                     <span className="text-3xl">{service.icon}</span>
                   </div>
                 )}
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/services" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
