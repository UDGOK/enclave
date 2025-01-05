import Image from 'next/image'
import Layout from '../components/Layout'

export default function Leasing() {
  const spaces = [
    {
      name: "Main Plaza - 1,200 sq.ft.",
      description: "High visibility location near main entrance",
      image: "/leasing/main-plaza.jpg",
      price: "$45/sq.ft. annually"
    },
    {
      name: "Food Court - 800 sq.ft.",
      description: "Perfect for quick-service restaurants",
      image: "/leasing/food-court.jpg",
      price: "$55/sq.ft. annually"
    },
    {
      name: "Upper Level - 2,500 sq.ft.",
      description: "Ideal for flagship stores",
      image: "/leasing/upper-level.jpg",
      price: "$40/sq.ft. annually"
    }
  ]

  return (
    <Layout title="Leasing at Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Leasing Opportunities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Find Your Perfect Space</h2>
            <p className="text-gray-400">
              Discover premium retail spaces designed to help your business thrive. 
              Our leasing team will work with you to find the ideal location that 
              matches your brand and business needs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-400">Prime locations in high-traffic areas</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-gray-400">Flexible lease terms to suit your business</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-400">Competitive rates and incentives</p>
              </div>
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Our Leasing Team
            </button>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Available Spaces</h3>
            <div className="space-y-4">
              {spaces.map((space, index) => (
                <div key={index} className="bg-black/20 p-4 rounded-lg">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={space.image}
                      alt={space.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="font-bold mb-2">{space.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{space.description}</p>
                  <div className="text-sm text-gray-400">{space.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Enclave Bixby?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Prime Locations</h3>
              <p className="text-gray-400">
                Our properties are strategically located in high-traffic areas with excellent visibility.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Dedicated Support</h3>
              <p className="text-gray-400">
                Our team provides ongoing support to help your business succeed.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Modern Facilities</h3>
              <p className="text-gray-400">
                State-of-the-art facilities designed to enhance customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
