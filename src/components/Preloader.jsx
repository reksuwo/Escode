import { useState, useEffect } from 'react'

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [textVisible, setTextVisible] = useState(false)
  const [subtextVisible, setSubtextVisible] = useState(false)

  useEffect(() => {
    // Show main text after a short delay
    const textTimer = setTimeout(() => {
      setTextVisible(true)
    }, 500)

    // Show subtext after main text
    const subtextTimer = setTimeout(() => {
      setSubtextVisible(true)
    }, 1200)

    // Hide preloader after animation completes
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 3000)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(subtextTimer)
      clearTimeout(hideTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="text-center">
        {/* Main Title */}
        <h1 
          className={`text-6xl md:text-8xl font-bold text-white mb-4 transition-all duration-1000 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            letterSpacing: '0.1em'
          }}
        >
          DJA DEV
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl text-gray-400 transition-all duration-1000 ${
            subtextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          We build and host your website
        </p>

        {/* Loading Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-3000 ease-out"
              style={{
                width: textVisible && subtextVisible ? '100%' : '0%'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
