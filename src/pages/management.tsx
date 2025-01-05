import Image from 'next/image'
import Layout from '../components/Layout'

export default function Management() {
  const services = [
    {
      title: "Facility Management",
      description: "Comprehensive maintenance and upkeep of all property facilities.",
      image: "/management/facility.jpg"
    },
    {
      title: "Financial Management",
      description: "Detailed financial reporting and budget management services.",
      image: "/management/financial.jpg"
    },
    {
      title: "Tenant Services",
      description: "Dedicated support for tenant needs and requests.",
      image: "/management/tenant.jpg"
    }
  ]

  return (
    <Layout title="Property Management at Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Property Management Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Comprehensive Property Solutions</h2>
            <p className="text-gray-400">
              Our experienced property management team ensures your retail space 
              operates at peak efficiency while maintaining the highest standards 
              of quality and service.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-gray-400">24/7 maintenance and support</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-gray-400">Financial reporting and analysis</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-400">Proactive property maintenance</p>
              </div>
            </div>
            
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Request Management Services
            </button>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Our Management Approach</h3>
            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Tenant Relations</h4>
                <p className="text-gray-400 text-sm">
                  We maintain strong relationships with tenants to ensure satisfaction 
                  and long-term occupancy.
                </p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Operational Efficiency</h4>
                <p className="text-gray-400 text-sm">
                  Streamlined operations to maximize property performance and 
                  minimize costs.
                </p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Sustainability Practices</h4>
                <p className="text-gray-400 text-sm">
                  Implementing eco-friendly initiatives to reduce environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Management Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index}>
                <div className="relative h-48 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
