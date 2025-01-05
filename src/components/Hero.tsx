import { ReactNode } from 'react'

type HeroProps = {
  backgroundImage?: string
  videoSrc?: string
  children: ReactNode
}

export default function Hero({ backgroundImage, videoSrc, children }: HeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background */}
      {videoSrc ? (
        <video 
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl px-4">
        {children}
      </div>
    </div>
  )
}
