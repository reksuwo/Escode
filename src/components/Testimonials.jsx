const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'DJA Dev transformed our vision into a stunning web application. Their attention to detail and technical expertise exceeded our expectations. Highly recommended!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Digital Solutions',
      content: 'Working with DJA Dev was a game-changer for our business. They delivered a robust, scalable solution that has significantly improved our operations.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Creative Agency',
      content: 'The team at DJA Dev understood our needs perfectly and delivered beyond what we imagined. Professional, reliable, and incredibly talented developers.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'David Thompson',
      role: 'CTO, Innovation Labs',
      content: 'DJA Dev\'s technical expertise and project management skills are outstanding. They delivered our complex project on time and within budget.',
      rating: 5,
      avatar: '👨‍🔬'
    },
    {
      name: 'Lisa Wang',
      role: 'Product Manager, E-commerce Platform',
      content: 'Exceptional work! DJA Dev created a beautiful, functional website that has increased our online sales by 200%. Truly professional team.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'James Wilson',
      role: 'Startup Founder, FinTech',
      content: 'DJA Dev helped us build our MVP from scratch. Their expertise in modern technologies and clean code practices is remarkable.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-left mb-16">
          <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-6 h-full flex flex-col border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to join our satisfied clients?
          </p>
          <a 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
