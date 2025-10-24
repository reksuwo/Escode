const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 border-t border-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">DJA Dev</h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Professional web development services specializing in modern, responsive websites and web applications.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Twitter
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>hello@dja-dev.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Available for freelance work</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DJA Dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
