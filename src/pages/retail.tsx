import Image from 'next/image'
import Layout from '../components/Layout'

export default function Retail() {
  const spaces = [
    {
      name: "Suite A - Gyros By Ali",
      description: "Authentic Mediterranean cuisine specializing in gyros, falafel, and hummus.",
      image: "/retail/gyros-by-ali.jpg",
      website: "https://www.gyrosbyali.com"
    },
    {
      name: "Suite B",
      description: "Available for lease - Prime retail space",
      image: "/retail/available.jpg"
    },
    {
      name: "Suite C - The Eye Institute",
      description: "Comprehensive eye care services including LASIK, cataract surgery, and routine eye exams.",
      image: "/retail/eye-institute.jpg",
      website: "https://eyeinst.com"
    },
    {
      name: "Suite D - Oklahoma Credit Union",
      description: "Full-service banking with a focus on community support and financial education.",
      image: "/retail/credit-union.jpg",
      website: "https://www.okcu.org"
    },
    {
      name: "Suite E",
      description: "Available for lease - Prime retail space",
      image: "/retail/available.jpg"
    },
    {
      name: "Suite F",
      description: "Available for lease - Prime retail space",
      image: "/retail/available.jpg"
    }
  ]

  return (
    <Layout title="Retail Spaces - Enclave Bixby">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Retail Spaces</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Available Spaces</h2>
          <p className="text-gray-300 mb-4">
            We currently have 4 retail spaces available for lease:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spaces.map((space, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="relative h-48 mb-4">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{space.name}</h3>
                <p className="text-gray-300 mb-4">{space.description}</p>
                {space.website && (
                  <a 
                    href={space.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Current Tenants</h2>
          <p className="text-gray-300 mb-4">
            Our 7 current tenants include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1,2,3,4,5,6,7].map(tenant => (
              <div key={tenant} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Tenant #{tenant}</h3>
                <p className="text-gray-300">Details coming soon</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
