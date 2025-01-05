export default function Retail() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Retail Spaces</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Available Spaces</h2>
        <p className="text-gray-300 mb-4">
          We currently have 4 retail spaces available for lease:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Suite A - Gyros By Ali</h3>
            <p className="text-gray-300 mb-4">Authentic Mediterranean cuisine specializing in gyros, falafel, and hummus.</p>
            <a href="https://www.gyrosbyali.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Visit Website
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Suite B</h3>
            <p className="text-gray-300">Available for lease - Prime retail space</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Suite C - The Eye Institute</h3>
            <p className="text-gray-300 mb-4">Comprehensive eye care services including LASIK, cataract surgery, and routine eye exams.</p>
            <a href="https://eyeinst.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Visit Website
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Suite D - Oklahoma Credit Union</h3>
            <p className="text-gray-300 mb-4">Full-service banking with a focus on community support and financial education.</p>
            <a href="https://www.okcu.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Visit Website
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Suite E</h3>
            <p className="text-gray-300">Available for lease - Prime retail space</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Suite F</h3>
            <p className="text-gray-300">Available for lease - Prime retail space</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Current Tenants</h2>
        <p className="text-gray-300 mb-4">
          Our 7 current tenants include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2,3,4,5,6,7].map(tenant => (
            <div key={tenant} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tenant #{tenant}</h3>
              <p className="text-gray-300">Details coming soon</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
