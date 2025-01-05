import Layout from '../components/Layout'
import Link from 'next/link'

export default function Support() {
  return (
    <Layout title="Support - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Support Center</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-gray-400 mb-6">
              Find answers to common questions or contact our support team
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">FAQs</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Answers to frequently asked questions
                </p>
                <Link href="/faq">
                  <a className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    Visit FAQs
                  </a>
                </Link>
              </div>
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get in touch with our support team
                </p>
                <Link href="/contact">
                  <a className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    Contact Support
                  </a>
                </Link>
              </div>
              <div className="bg-black/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Report an Issue</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Let us know about any problems
                </p>
                <Link href="/feedback">
                  <a className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    Report Issue
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Support Resources</h2>
            <p className="text-gray-400 mb-4">
              Explore our support resources:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Tenant Support Portal</li>
              <li>Visitor Information Guide</li>
              <li>Accessibility Services</li>
              <li>Emergency Contacts</li>
              <li>Maintenance Requests</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Support Hours</h2>
            <p className="text-gray-400 mb-4">
              Our support team is available:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Monday-Friday: 8am - 8pm</li>
              <li>Saturday: 9am - 5pm</li>
              <li>Sunday: Closed</li>
            </ul>
            <p className="text-gray-400 mt-4">
              For emergencies, please call our 24/7 hotline: (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
