import Image from 'next/image'
import Layout from '../components/Layout'

export default function Marketing() {
  const services = [
    {
      title: "Digital Marketing",
      description: "Social media, email campaigns, and online advertising strategies.",
      image: "/marketing/digital.jpg"
    },
    {
      title: "Event Marketing",
      description: "Planning and promoting in-store events to drive traffic.",
      image: "/marketing/events.jpg"
    },
    {
      title: "Brand Partnerships",
      description: "Collaborations with complementary brands to expand reach.",
      image: "/marketing/partnerships.jpg"
    }
  ]

  return (
    <Layout title="Retail Marketing at Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Retail Marketing Solutions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Driving Foot Traffic & Sales</h2>
            <p className="text-gray-400">
              Our innovative marketing strategies are designed to increase 
              visibility, attract customers, and boost sales for your retail space.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="text-gray-400">Data-driven marketing strategies</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-gray-400">Targeted digital campaigns</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-400">Community engagement programs</p>
              </div>
            </div>
            
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Explore Marketing Solutions
            </button>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Our Marketing Services</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="bg-black/20 p-4 rounded-lg">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Marketing Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Data-Driven</h3>
              <p className="text-gray-400">
                Using analytics to create targeted, effective campaigns.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Omnichannel</h3>
              <p className="text-gray-400">
                Integrated campaigns across digital and physical channels.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Creative</h3>
              <p className="text-gray-400">
                Innovative strategies that capture attention and drive results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
