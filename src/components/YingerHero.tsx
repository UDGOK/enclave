import { useEffect, useRef, useState } from 'react'

export default function YingerHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame: number
    const particles: Particle[] = []
    const particleCount = 80

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = '#64ffda'
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Reset particle position when it goes off screen
        if (this.x > canvas!.width + 5 || this.x < -5 || 
            this.y > canvas!.height + 5 || this.y < -5) {
          this.x = Math.random() * canvas!.width
          this.y = Math.random() * canvas!.height
        }
      }

      draw() {
        ctx!.globalAlpha = this.opacity
        ctx!.fillStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      animationFrame = requestAnimationFrame(animate)
    }

    function handleResize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    // Handle scroll for text animation
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    handleResize()
    init()
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
      <div className="relative h-screen flex items-center justify-center bg-[#0a192f] overflow-hidden">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div 
        className="relative z-10 text-center"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 1 - scrollY / 300
        }}
      >
        <h1 className="text-6xl font-bold text-[#ccd6f6] mb-4">
          Enclave Bixby
        </h1>
        <p className="text-xl text-[#8892b0] max-w-2xl">
          Your premier shopping destination offering a unique blend of retail, dining, and entertainment experiences.
        </p>
      </div>
    </div>
  )
}
