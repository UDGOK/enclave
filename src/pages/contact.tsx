
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-2">Phone: (555) 123-4567</p>
            <p className="text-gray-300 mb-2">Email: info@enclavebixby.com</p>
            <p className="text-gray-300">Address: 123 Main St, Bixby, OK 74008</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <p className="text-gray-300 mb-2">Mon-Fri: 9am - 9pm</p>
            <p className="text-gray-300 mb-2">Sat: 10am - 8pm</p>
            <p className="text-gray-300">Sun: 11am - 6pm</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <img
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            alt="Shopping center interior"
            className="rounded-lg hidden md:block"
          />
          <form className="bg-gray-800 p-6 rounded-lg">
            <div className="grid grid-cols-1 gap-6">
              <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input type="text" className="w-full bg-gray-700 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input type="email" className="w-full bg-gray-700 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea className="w-full bg-gray-700 rounded p-2 text-white" rows={4} />
            </div>
            <button 
              type="submit" 
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
