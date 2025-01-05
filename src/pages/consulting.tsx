import Layout from '../components/Layout'
import Link from 'next/link'

export default function Consulting() {
  const services = [
    {
      title: "Retail Space Design",
      description: "Innovative designs that maximize space utilization and customer experience",
      icon: "design"
    },
    {
      title: "Market Analysis",
      description: "Comprehensive market research to identify opportunities and trends",
      icon: "analysis"
    },
    {
      title: "Tenant Mix Strategy",
      description: "Optimal tenant selection to create vibrant retail ecosystems",
      icon: "strategy"
    },
    {
      title: "Sustainability Planning",
      description: "Green building strategies and sustainable operations consulting",
      icon: "sustainability"
    },
    {
      title: "Technology Integration",
      description: "Cutting-edge retail technology solutions for modern spaces",
      icon: "technology"
    },
    {
      title: "Community Engagement",
      description: "Strategies to build strong community relationships and loyalty",
      icon: "community"
    }
  ]

  return (
    <Layout title="Consulting - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Consulting Services</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400 mb-6">
              Leverage our experience in retail development and management
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-6">
                  <div className="text-2xl font-bold mb-2">{service.title}</div>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-400 mb-4">
              Our consulting services stand out because:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>20+ years of retail development experience</li>
              <li>Proven track record of successful projects</li>
              <li>Customized solutions for each client</li>
              <li>Focus on sustainability and innovation</li>
              <li>Comprehensive end-to-end services</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <p className="text-gray-400 mb-4">
              Ready to transform your retail space? Contact us today.
            </p>
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <a>Contact Our Team</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
