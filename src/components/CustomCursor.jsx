import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition)
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    })

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Outer ring cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />
      
      {/* Inner dot cursor */}
      <div
        className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorPosition.x - 2,
          top: cursorPosition.y - 2,
        }}
      />
    </>
  )
}

export default CustomCursor
