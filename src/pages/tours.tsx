export default function Tours() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Virtual Tours</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Shopping Center Tour</h2>
        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
          <p className="text-gray-300">360° Tour Coming Soon</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Spaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2,3,4].map(space => (
            <div key={space} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Space #{space}</h3>
              <div className="aspect-video bg-gray-700 rounded flex items-center justify-center">
                <p className="text-gray-300">Tour Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
