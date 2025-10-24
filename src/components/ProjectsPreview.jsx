import { Link } from 'react-router-dom'

const ProjectsPreview = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern React e-commerce solution with payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'Completed',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with smooth animations and contact form.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      status: 'Completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates.',
      tech: ['React', 'Socket.io', 'Express'],
      status: 'In Progress',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-left mb-20">
          <h2 className="mb-6 text-white text-5xl md:text-6xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Status Badge */}
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-900 text-green-300 border border-green-700' 
                      : 'bg-yellow-900 text-yellow-300 border border-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 group-hover:bg-gray-700 group-hover:border-gray-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/projects" 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            <span className="relative z-10">Explore All Projects</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview
