import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO",
      bio: "Visionary leader with 20+ years in retail development",
      photo: "/team/alex-johnson.jpg"
    },
    {
      name: "Maria Gonzalez",
      role: "COO",
      bio: "Operations expert focused on sustainable growth",
      photo: "/team/maria-gonzalez.jpg"
    },
    {
      name: "David Chen",
      role: "CFO",
      bio: "Financial strategist driving profitability",
      photo: "/team/david-chen.jpg"
    },
    {
      name: "Sarah Thompson",
      role: "Head of Community Relations",
      bio: "Passionate about building strong community ties",
      photo: "/team/sarah-thompson.jpg"
    },
    {
      name: "Michael Brown",
      role: "Director of Sustainability",
      bio: "Champion of eco-friendly development practices",
      photo: "/team/michael-brown.jpg"
    },
    {
      name: "Emily Davis",
      role: "Creative Director",
      bio: "Innovator in retail space design",
      photo: "/team/emily-davis.jpg"
    }
  ]

  return (
    <Layout title="Our Team - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Leadership</h2>
            <p className="text-gray-400 mb-6">
              Our experienced leadership team drives our vision forward
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-black/20 rounded-lg overflow-hidden">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 mb-4">
              What drives our team:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Innovation in retail development</li>
              <li>Commitment to sustainability</li>
              <li>Strong community partnerships</li>
              <li>Exceptional customer experiences</li>
              <li>Continuous improvement</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-400 mb-4">
              Interested in joining our team? Explore our career opportunities.
            </p>
            <Link
              href="/careers"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
