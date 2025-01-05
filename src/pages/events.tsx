import Layout from '../components/Layout'
import Image from 'next/image'

export default function Events() {
  const events = [
    {
      date: "December 15, 2023",
      title: "Retail Innovation Summit",
      description: "Join industry leaders as we explore the future of retail spaces and innovative shopping experiences.",
      image: "/events/innovation-summit.jpg"
    },
    {
      date: "January 10, 2024",
      title: "Tenant Mix Workshop",
      description: "Discover strategies for creating the perfect tenant mix to maximize foot traffic and revenue.",
      image: "/events/tenant-workshop.jpg"
    },
    {
      date: "February 5, 2024",
      title: "Sustainability in Retail",
      description: "Learn how to implement sustainable practices in your retail spaces while maintaining profitability.",
      image: "/events/sustainability.jpg"
    }
  ]

  return (
    <Layout title="Events at Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="relative h-48 mb-4">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="text-sm text-gray-400 mb-2">{event.date}</div>
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
              <p className="text-gray-400 mb-4">
                {event.description}
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
