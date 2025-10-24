import DerekImage from '../assets/Derek.jpg'
import AlbertImage from '../assets/Albert.jpg'
import AboutUsImage from '../assets/about us.jpg'

const About = () => {
  const teamMembers = [
    {
      name: 'Derek',
      role: 'Full Stack Web Developer',
      description: 'Passionate about creating seamless user experiences with expertise in React, Node.js, and modern web technologies. Derek leads our frontend development initiatives.',
      image: DerekImage
    },
    {
      name: 'John Michael',
      role: 'Full Stack Web Developer',
      description: 'Specializes in scalable backend solutions and database architecture. John Michael ensures our applications are robust, secure, and performant.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Albert',
      role: 'Full Stack Web Developer',
      description: 'Expert in full-stack integration and DevOps practices. Albert bridges the gap between frontend and backend, ensuring smooth project delivery.',
      image: AlbertImage
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'DJA Dev was established with a vision to deliver exceptional web development solutions and digital experiences.'
    },
    {
      year: '2024',
      title: 'First Major Projects',
      description: 'Successfully completed our first portfolio of web applications, establishing our reputation for quality and innovation.'
    },
    {
      year: '2024',
      title: 'Team Expansion',
      description: 'Grew our team of skilled developers and designers to better serve our growing client base.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Expanded our services to serve clients worldwide, delivering projects across multiple industries.'
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="section bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${AboutUsImage})` }}
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
              About DJA Dev
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
              We are passionate about creating exceptional digital experiences through clean, efficient code and innovative solutions. 
              With expertise in modern web technologies, we help businesses transform their ideas into powerful web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Company Milestones Section */}
      <section className="section bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left mb-16">
            <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold tracking-tight">
              Company Milestones
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Our journey and growth as a leading web development company
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8 border border-gray-800 rounded-2xl hover:border-gray-600 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {milestone.title}
                      </h3>
                    </div>
                    <span className="text-gray-400 font-medium mt-2 md:mt-0">{milestone.year}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left mb-20">
            <div className="inline-block mb-6">
              <span className="text-blue-400 font-semibold text-lg tracking-wide uppercase">Our Team</span>
            </div>
            <h2 className="mb-6 text-white text-5xl md:text-6xl font-bold tracking-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Dream Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              The brilliant minds and creative souls behind our innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 group-hover:border-gray-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  
                  {/* Profile Image Container */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative">
                      {/* Glowing Ring */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                      
                  {/* Profile Image */}
                      <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 p-1 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                    <img 
                      src={member.image} 
                      alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold" style={{ display: 'none' }}>
                      {member.name.charAt(0)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                  
                  {/* Team Member Info */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {member.name}
                  </h3>
                  
                    <div className="inline-block mb-6">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {member.role}
                      </span>
                    </div>
                  
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {member.description}
                  </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Team Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '3', label: 'Expert Developers', color: 'from-blue-500 to-cyan-500' },
              { number: '5+', label: 'Years Combined', color: 'from-purple-500 to-pink-500' },
              { number: '100%', label: 'Passion Driven', color: 'from-green-500 to-emerald-500' },
              { number: '∞', label: 'Innovation', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                
                {/* Card Content */}
                <div className="relative p-6 h-full flex flex-col items-center text-center bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-gray-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                  {/* Number with Modern Design */}
                  <div className="relative mb-4">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-pulse`}>
                      {stat.number}
        </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-sm`}></div>
          </div>
          
                  <h4 className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {stat.label}
                  </h4>
                  
                  {/* Decorative Line */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${stat.color} mt-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
