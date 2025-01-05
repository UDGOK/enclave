import Layout from '../components/Layout'

export default function Accessibility() {
  return (
    <Layout title="Accessibility - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-400">
              Enclave Bixby is committed to ensuring digital accessibility for 
              people with disabilities. We are continually improving the user 
              experience for everyone and applying the relevant accessibility 
              standards.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
            <p className="text-gray-400 mb-4">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Keyboard navigation support</li>
              <li>Alternative text for images</li>
              <li>High contrast mode</li>
              <li>Resizable text</li>
              <li>Screen reader compatibility</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Physical Accessibility</h2>
            <p className="text-gray-400 mb-4">
              Our retail center features:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Wheelchair accessible entrances and pathways</li>
              <li>Accessible parking spaces</li>
              <li>Elevators to all levels</li>
              <li>Accessible restrooms</li>
              <li>Assistance animal friendly environment</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Feedback & Assistance</h2>
            <p className="text-gray-400 mb-4">
              We welcome your feedback on the accessibility of Enclave Bixby. 
              Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Phone: 555-123-4567</li>
              <li>Email: accessibility@enclavebixby.com</li>
              <li>In-person at our customer service desk</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Ongoing Efforts</h2>
            <p className="text-gray-400">
              We regularly review our website and facilities to identify and 
              address accessibility issues. Our goal is to meet or exceed 
              WCAG 2.1 AA standards.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
