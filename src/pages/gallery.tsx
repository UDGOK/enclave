import Layout from '../components/Layout'
import Image from 'next/image'

export default function Gallery() {
  const galleryItems = [
    {
      type: "image",
      src: "/gallery/retail-space-1.jpg",
      caption: "Modern retail spaces with natural lighting"
    },
    {
      type: "image",
      src: "/gallery/community-event-1.jpg",
      caption: "Annual community festival"
    },
    {
      type: "video",
      src: "/gallery/tour.mp4",
      caption: "Virtual tour of our flagship location"
    },
    {
      type: "image",
      src: "/gallery/sustainability-1.jpg",
      caption: "Green spaces and eco-friendly design"
    },
    {
      type: "image",
      src: "/gallery/retail-space-2.jpg",
      caption: "Innovative storefront designs"
    },
    {
      type: "image",
      src: "/gallery/community-event-2.jpg",
      caption: "Local business showcase event"
    }
  ]

  return (
    <Layout title="Gallery - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Explore Our Spaces</h2>
            <p className="text-gray-400 mb-6">
              A visual journey through our retail developments and community events
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <div key={index} className="bg-black/20 rounded-lg overflow-hidden">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      className="w-full h-64 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-gray-400 text-sm">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Featured Collections</h2>
            <p className="text-gray-400 mb-4">
              Explore our curated photo and video collections:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Retail Space Designs</li>
              <li>Community Events</li>
              <li>Sustainability Features</li>
              <li>Construction Progress</li>
              <li>Tenant Spotlights</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Share Your Photos</h2>
            <p className="text-gray-400 mb-4">
              Have great photos from our spaces or events? Share them with us!
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Submit Your Photos
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
