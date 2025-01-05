import Layout from '../components/Layout'

export default function History() {
  const milestones = [
    {
      year: "2005",
      event: "Company founded with first retail development",
      description: "Started with a single shopping center in San Francisco"
    },
    {
      year: "2010",
      event: "Expanded to 5 major cities",
      description: "Opened developments in Los Angeles, Chicago, and New York"
    },
    {
      year: "2015",
      event: "Launched sustainability initiative",
      description: "Implemented green building practices across all properties"
    },
    {
      year: "2018",
      event: "Reached 1 million square feet of retail space",
      description: "Major milestone in our growth and expansion"
    },
    {
      year: "2020",
      event: "Pioneered COVID-safe retail spaces",
      description: "Developed innovative safety protocols for tenants and visitors"
    },
    {
      year: "2023",
      event: "Expanded to international markets",
      description: "Opened first development in Canada"
    }
  ]

  return (
    <Layout title="Our History - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Our History</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Milestones</h2>
            <p className="text-gray-400 mb-6">
              Key moments in our journey of growth and innovation
            </p>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-black/20 rounded-lg px-6 py-4 text-center">
                    <span className="text-2xl font-bold">{milestone.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{milestone.event}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Legacy</h2>
            <p className="text-gray-400 mb-4">
              Over the years, we&rsquo;ve achieved:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>20+ successful retail developments</li>
              <li>95% tenant retention rate</li>
              <li>40% reduction in energy consumption</li>
              <li>500+ community events hosted</li>
              <li>1,000+ local jobs created</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Looking Ahead</h2>
            <p className="text-gray-400">
              We continue to innovate and expand, with plans for new developments
              and community initiatives in the coming years.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
