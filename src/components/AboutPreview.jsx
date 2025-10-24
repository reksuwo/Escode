import { Link } from 'react-router-dom'

const AboutPreview = () => {
  const stats = [
    {
      number: '50+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '3+',
      label: 'Years Experience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-left mb-20">
          <h2 className="mb-6 text-white text-5xl md:text-6xl font-bold tracking-tight">
            About DJA Dev
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
            Passionate about creating exceptional digital experiences through clean, efficient code and innovative solutions. 
            With expertise in modern web technologies, We help businesses transform their ideas into powerful web applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glowing Background Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col items-center text-center bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-gray-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Number with Modern Design */}
                <div className="relative mb-6">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-pulse`}>
                    {stat.number}
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-sm`}></div>
                </div>
                
                <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {stat.label}
                </h3>
                
                {/* Decorative Line */}
                <div className={`w-16 h-1 bg-gradient-to-r ${stat.color} mt-4 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/about" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            <span className="relative z-10">Learn More About Me</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
