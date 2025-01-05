import Layout from '../components/Layout'

export default function Awards() {
  const awards = [
    {
      year: "2023",
      name: "Green Building Award",
      organization: "Sustainable Development Council",
      description: "Recognized for eco-friendly retail space design"
    },
    {
      year: "2022",
      name: "Community Impact Award",
      organization: "National Retail Association",
      description: "Awarded for outstanding community engagement programs"
    },
    {
      year: "2021",
      name: "Innovation in Retail Award",
      organization: "Retail Technology Association",
      description: "Honored for cutting-edge retail technology integration"
    },
    {
      year: "2020",
      name: "Best Workplace Award",
      organization: "Great Places to Work",
      description: "Recognized as a top employer in the retail sector"
    },
    {
      year: "2019",
      name: "Excellence in Design Award",
      organization: "Architectural Digest",
      description: "Awarded for innovative retail space architecture"
    },
    {
      year: "2018",
      name: "Sustainability Leadership Award",
      organization: "Green Business Council",
      description: "Recognized for sustainable business practices"
    }
  ]

  return (
    <Layout title="Awards - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Awards & Recognition</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-400 mb-6">
              Recognitions for our commitment to excellence and innovation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-6">
                  <div className="text-2xl font-bold mb-2">{award.year}</div>
                  <h3 className="text-xl font-bold mb-2">{award.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{award.organization}</p>
                  <p className="text-gray-400 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What Our Awards Mean</h2>
            <p className="text-gray-400 mb-4">
              These recognitions reflect our commitment to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Innovative retail space design</li>
              <li>Sustainable development practices</li>
              <li>Exceptional community engagement</li>
              <li>Cutting-edge technology integration</li>
              <li>Employee satisfaction and growth</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Continuing Our Legacy</h2>
            <p className="text-gray-400">
              We remain committed to excellence and innovation in all aspects of
              our business, striving to set new standards in retail development.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
