import Layout from '../components/Layout'

export default function Careers() {
  const jobOpenings = [
    {
      title: "Retail Development Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead retail space development projects from concept to completion"
    },
    {
      title: "Community Relations Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Develop and manage community engagement programs"
    },
    {
      title: "Sustainability Coordinator",
      location: "New York, NY",
      type: "Full-time",
      description: "Implement and oversee green initiatives across properties"
    },
    {
      title: "Marketing Associate",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Support marketing campaigns and brand development"
    },
    {
      title: "Leasing Consultant",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Manage tenant relationships and leasing operations"
    },
    {
      title: "IT Support Specialist",
      location: "Remote",
      type: "Part-time",
      description: "Provide technical support for our retail technology systems"
    }
  ]

  return (
    <Layout title="Careers - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Current Openings</h2>
            <p className="text-gray-400 mb-6">
              Explore exciting career opportunities at Enclave Bixby
            </p>
            
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <span className="text-gray-400 text-sm">{job.type}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{job.location}</p>
                  <p className="text-gray-400">{job.description}</p>
                  <button className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors mt-4">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-gray-400 mb-4">
              At Enclave Bixby, we offer:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Competitive salaries and benefits</li>
              <li>Opportunities for professional growth</li>
              <li>Innovative and collaborative work environment</li>
              <li>Commitment to work-life balance</li>
              <li>Chance to make a real community impact</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
            <p className="text-gray-400">
              We foster a culture of innovation, collaboration, and community 
              engagement. Our team is passionate about creating exceptional 
              retail experiences while making a positive impact on the 
              communities we serve.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
