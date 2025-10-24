import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function AppContent() {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true)
    
    // Simulate loading time for navigation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // 0.8 second loading time

    return () => clearTimeout(timer)
  }, [location.pathname])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  const handleInitialPreloaderComplete = () => {
    setIsInitialLoading(false)
  }

  if (isInitialLoading) {
    return <Preloader onComplete={handleInitialPreloaderComplete} />
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <AppContent />
      </div>
    </Router>
  )
}

export default App
