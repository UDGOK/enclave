import Layout from '../components/Layout'

export default function Terms() {
  return (
    <Layout title="Terms & Conditions - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-400">
              These terms and conditions govern your use of our website and services. 
              By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
            <p className="text-gray-400 mb-4">
              You agree to use our website for lawful purposes only and not to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Engage in any fraudulent or illegal activity</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper working of the website</li>
              <li>Use automated tools to access our services</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Leasing Terms</h2>
            <p className="text-gray-400 mb-4">
              All retail space leases are subject to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Approval of your business application</li>
              <li>Compliance with our retail guidelines</li>
              <li>Execution of a formal lease agreement</li>
              <li>Payment of applicable fees and deposits</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-gray-400">
              All content on this website, including text, graphics, and logos, 
              is the property of Enclave Bixby and protected by copyright laws.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-gray-400">
              Enclave Bixby shall not be liable for any indirect, incidental, 
              or consequential damages arising from your use of our services.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-gray-400">
              These terms shall be governed by and construed in accordance with 
              the laws of the state where Enclave Bixby is located.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-gray-400">
              We reserve the right to modify these terms at any time. Your 
              continued use of our services constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
