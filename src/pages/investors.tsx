import Layout from '../components/Layout'

export default function Investors() {
  return (
    <Layout title="Investors - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Investor Information</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Why Invest in Enclave Bixby?</h2>
            <p className="text-gray-400 mb-6">
              Discover the opportunities and benefits of investing in our innovative retail spaces
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-400 text-sm">
                  20+ successful retail developments nationwide
                </p>
              </div>
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Strong Growth</h3>
                <p className="text-gray-400 text-sm">
                  Consistent year-over-year revenue growth
                </p>
              </div>
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Innovative Approach</h3>
                <p className="text-gray-400 text-sm">
                  Cutting-edge retail space design and technology
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-gray-400 mb-4">
              We offer various investment options:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Equity investments in new developments</li>
              <li>Commercial real estate partnerships</li>
              <li>Retail technology venture funding</li>
              <li>Community development initiatives</li>
              <li>Sustainable infrastructure projects</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Financial Performance</h2>
            <p className="text-gray-400 mb-4">
              Key highlights from our recent performance:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>25% annual revenue growth over past 5 years</li>
              <li>95% tenant retention rate</li>
              <li>40% increase in property values</li>
              <li>Expansion to 5 new markets in 2023</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <p className="text-gray-400 mb-4">
              Ready to explore investment opportunities with Enclave Bixby?
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Our Investor Relations Team
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
