import { useState } from 'react'
import ContactImage from '../assets/contact.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@dja-dev.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call us for immediate support'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Remote Worldwide',
      description: 'Serving clients globally'
    },
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="section bg-black relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ContactImage})` }}
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-left mb-16">
            <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold tracking-tight">
              Contact Information
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Multiple ways to reach us and get started
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6 h-full flex flex-col items-center text-center border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{info.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-300 font-medium mb-2">{info.value}</p>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-left mb-16">
              <h2 className="mb-6 text-white text-4xl md:text-5xl font-bold tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8 border border-gray-800 rounded-2xl hover:border-gray-600 transition-all duration-500">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 resize-vertical"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                    >
                      <span className="relative z-10 group-hover:text-black transition-colors duration-300">Send Message</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
