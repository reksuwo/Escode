import { useEffect, useRef } from 'react'

const ConstellationBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.z = Math.random() * 1000
        this.prevX = this.x
        this.prevY = this.y
        this.speed = Math.random() * 0.5 + 0.1
        this.opacity = Math.random() * 0.8 + 0.2
        this.size = Math.random() * 2 + 0.5
      }

      update() {
        this.z -= this.speed
        if (this.z <= 0) {
          this.z = 1000
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.prevX = this.x
          this.prevY = this.y
        }
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (200 / this.z) + canvas.width / 2
        const y = (this.y - canvas.height / 2) * (200 / this.z) + canvas.height / 2

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath()
          ctx.arc(x, y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
          ctx.fill()

          // Draw constellation lines
          if (this.prevX !== this.x || this.prevY !== this.y) {
            ctx.beginPath()
            ctx.moveTo(this.prevX, this.prevY)
            ctx.lineTo(x, y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.1})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }

          this.prevX = x
          this.prevY = y
        }
      }
    }

    // Create stars
    const stars = []
    for (let i = 0; i < 150; i++) {
      stars.push(new Star())
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.update()
        star.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

export default ConstellationBackground
