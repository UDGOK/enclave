import Layout from '../components/Layout'

export default function Newsletter() {
  return (
    <Layout title="Newsletter - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Stay Connected</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mb-6">
              Get the latest updates on new developments, community events, and special offers
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-gray-400 text-sm mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-black/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-400 text-sm mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-black/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="bg-black/20 rounded"
                />
                <label htmlFor="terms" className="text-gray-400 text-sm">
                  I agree to receive emails from Enclave Bixby
                </label>
              </div>

              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What You&rsquo;ll Receive</h2>
            <p className="text-gray-400 mb-4">
              Our newsletter includes:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Exclusive updates on new developments</li>
              <li>Invitations to community events</li>
              <li>Special offers from our tenants</li>
              <li>Insights into our sustainability initiatives</li>
              <li>Spotlights on local businesses</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="text-gray-400">
              We respect your privacy and will never share your information with third parties.
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
