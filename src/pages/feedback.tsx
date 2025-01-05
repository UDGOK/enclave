import Layout from '../components/Layout'

export default function Feedback() {
  return (
    <Layout title="Feedback - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Your Feedback Matters</h1>
        
        <div className="space-y-8">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Share Your Thoughts</h2>
            <p className="text-gray-400 mb-6">
              We value your input to help us improve our spaces and services
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Enter your name"
                  />
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
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full bg-black/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Feedback</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="issue">Report an Issue</option>
                  <option value="compliment">Compliment</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-black/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your message"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="contact"
                  className="bg-black/20 rounded"
                />
                <label htmlFor="contact" className="text-gray-400 text-sm">
                  I&rsquo;d like to be contacted about my feedback
                </label>
              </div>

              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Submit Feedback
              </button>
            </form>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">How We Use Feedback</h2>
            <p className="text-gray-400 mb-4">
              Your feedback helps us:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Improve our retail spaces and services</li>
              <li>Develop new features and amenities</li>
              <li>Address issues and concerns</li>
              <li>Enhance community programs</li>
              <li>Shape future developments</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-400">
              We review all feedback and use it to guide our decisions and improvements.
              While we can&rsquo;t respond to every submission, we appreciate every comment.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
