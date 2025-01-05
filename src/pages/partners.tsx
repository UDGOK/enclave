import Layout from '../components/Layout'
import Image from 'next/image'

export default function Partners() {
  const partners = [
    {
      name: "GreenTech Solutions",
      logo: "/partners/greentech.png",
      description: "Sustainable building technologies partner"
    },
    {
      name: "Urban Retail Alliance",
      logo: "/partners/urban-retail.png",
      description: "National retail association partner"
    },
    {
      name: "Community First Bank",
      logo: "/partners/community-bank.png",
      description: "Financial services and community development partner"
    },
    {
      name: "SmartSpace Technologies",
      logo: "/partners/smartspace.png",
      description: "Retail technology and innovation partner"
    },
    {
      name: "EcoBuild Materials",
      logo: "/partners/ecobuild.png",
      description: "Sustainable construction materials supplier"
    },
    {
      name: "Local Business Network",
      logo: "/partners/local-network.png",
      description: "Community business support partner"
    }
  ]

  return (
    <Layout title="Partners - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Partners</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Strategic Collaborations</h2>
            <p className="text-gray-400 mb-6">
              We work with industry leaders to deliver exceptional retail experiences
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={128}
                    height={128}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-400 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-gray-400 mb-4">
              Our partnerships create value through:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Shared expertise and resources</li>
              <li>Innovative solutions development</li>
              <li>Enhanced community impact</li>
              <li>Improved operational efficiency</li>
              <li>Access to new markets and opportunities</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="text-gray-400 mb-4">
              Interested in collaborating with Enclave Bixby? We&rsquo;re always looking 
              for innovative partners to join our network.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Our Partnerships Team
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
