export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">About Enclave Bixby</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Shopping center exterior"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed">
              Enclave Bixby is more than just a shopping center - it's a community hub 
              that brings together the best of retail, dining, and entertainment.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          To create a vibrant, welcoming space that supports local businesses 
          and provides an exceptional experience for our visitors.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-300 leading-relaxed">
          Meet the dedicated team working behind the scenes to make Enclave Bixby 
          a premier destination for shopping and community engagement.
        </p>
      </section>
    </div>
  )
}
