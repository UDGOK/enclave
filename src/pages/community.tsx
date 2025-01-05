import Layout from '../components/Layout'
import Image from 'next/image'

export default function Community() {
  const initiatives = [
    {
      title: "Local Business Support",
      description: "Programs to help small businesses thrive",
      icon: "/community/business.png"
    },
    {
      title: "Youth Development",
      description: "Scholarships and internship opportunities",
      icon: "/community/youth.png"
    },
    {
      title: "Sustainability Education",
      description: "Workshops on eco-friendly practices",
      icon: "/community/sustainability.png"
    },
    {
      title: "Community Events",
      description: "Regular events to bring people together",
      icon: "/community/events.png"
    },
    {
      title: "Arts & Culture",
      description: "Support for local artists and cultural programs",
      icon: "/community/arts.png"
    },
    {
      title: "Health & Wellness",
      description: "Programs promoting community health",
      icon: "/community/health.png"
    }
  ]

  return (
    <Layout title="Community - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Community Impact</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Initiatives</h2>
            <p className="text-gray-400 mb-6">
              We&rsquo;re committed to making a positive impact in the communities we serve
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-6">
                  <Image
                    src={initiative.icon}
                    alt={initiative.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                  <p className="text-gray-400">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Community Impact Report</h2>
            <p className="text-gray-400 mb-4">
              Highlights from our recent community efforts:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Supported 50+ local businesses</li>
              <li>Provided 100+ scholarships and internships</li>
              <li>Hosted 200+ community events annually</li>
              <li>Recycled 75% of construction materials</li>
              <li>Created 500+ local jobs</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-gray-400 mb-4">
              Join us in making a difference in our communities
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Learn About Volunteer Opportunities
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
