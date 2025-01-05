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
          {[1,2,3,4].map(space => (
            <div key={space} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Space #{space}</h3>
              <p className="text-gray-300">Details coming soon</p>
            </div>
          ))}
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
