import Layout from '../components/Layout'
import Link from 'next/link'

export default function Sitemap() {
  const sections = [
    {
      title: "About Us",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Leadership", href: "/about#leadership" },
        { name: "Sustainability", href: "/about#sustainability" }
      ]
    },
    {
      title: "Retail Spaces",
      links: [
        { name: "Available Spaces", href: "/leasing" },
        { name: "Floor Plans", href: "/leasing#floor-plans" },
        { name: "Leasing Information", href: "/leasing#info" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Property Management", href: "/management" },
        { name: "Retail Consulting", href: "/consulting" },
        { name: "Marketing Solutions", href: "/marketing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Careers", href: "/careers" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Accessibility", href: "/accessibility" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "General Inquiries", href: "/contact" },
        { name: "Leasing Office", href: "/contact#leasing" },
        { name: "Management Office", href: "/contact#management" }
      ]
    }
  ]

  return (
    <Layout title="Sitemap - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Website Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
