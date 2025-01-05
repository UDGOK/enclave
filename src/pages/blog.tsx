import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      title: "The Future of Retail Spaces",
      date: "2023-10-15",
      excerpt: "Exploring how retail spaces are evolving to meet modern consumer demands",
      image: "/blog/future-retail.jpg"
    },
    {
      title: "Sustainable Retail Development",
      date: "2023-09-28",
      excerpt: "Best practices for creating eco-friendly retail environments",
      image: "/blog/sustainable-retail.jpg"
    },
    {
      title: "Technology in Modern Retail",
      date: "2023-09-10",
      excerpt: "How technology is transforming the retail experience",
      image: "/blog/retail-tech.jpg"
    },
    {
      title: "Community-Centric Retail",
      date: "2023-08-22",
      excerpt: "Building retail spaces that foster community engagement",
      image: "/blog/community-retail.jpg"
    },
    {
      title: "Design Trends in Retail",
      date: "2023-08-05",
      excerpt: "Latest trends in retail space design and architecture",
      image: "/blog/design-trends.jpg"
    },
    {
      title: "Tenant Mix Strategies",
      date: "2023-07-18",
      excerpt: "Creating the perfect blend of tenants for vibrant retail spaces",
      image: "/blog/tenant-mix.jpg"
    }
  ]

  return (
    <Layout title="Blog - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Insights & Articles</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            <p className="text-gray-400 mb-6">
              Explore our latest insights on retail development and trends
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div key={index} className="bg-black/20 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                    <p className="text-gray-400 text-sm">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <p className="text-gray-400 mb-4">
              Explore our blog by category:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Retail Design</li>
              <li>Sustainability</li>
              <li>Technology</li>
              <li>Community Engagement</li>
              <li>Market Trends</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <Link
              href="/newsletter"
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
