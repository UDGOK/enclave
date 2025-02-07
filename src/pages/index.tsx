import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Particles from '@components/Particles'
import TimeDisplay from '@components/TimeDisplay'
import SocialLinks from '@components/SocialLinks'

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden">
        <Particles />
        <div className="container mx-auto px-4">
          <div 
            className="relative z-10"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              opacity: 1 - scrollY / 300
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in">
              Enclave Bixby
            </h1>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mb-12 animate-fade-in animation-delay-100">
            Your premier destination for shopping, dining, and entertainment. 
            Experience the future of retail in our state-of-the-art facilities.
          </p>
          </div>
          <div className="flex gap-4 animate-fade-in animation-delay-200">
            <button className="bg-accent text-background px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all">
              Explore Stores
            </button>
            <button className="border-2 border-accent text-accent px-8 py-4 rounded-lg hover:bg-accent hover:text-background transition-all">
              View Events
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white mb-4">Luxury Shopping</h3>
              <p className="text-gray-400">
                Discover world-class brands and exclusive boutiques in our premium shopping district.
              </p>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white mb-4">Gourmet Dining</h3>
              <p className="text-gray-400">
                Savor exquisite cuisine from award-winning chefs and international restaurants.
              </p>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white mb-4">Entertainment</h3>
              <p className="text-gray-400">
                Enjoy live performances, cinema, and family-friendly attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Experience Enclave Bixby?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join our community and be part of the ultimate shopping destination.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-accent text-background px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all">
              Get Started
            </button>
            <button className="border-2 border-accent text-accent px-8 py-4 rounded-lg hover:bg-accent hover:text-background transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <TimeDisplay />
      <SocialLinks />
    </>
  )
}

export default Home
