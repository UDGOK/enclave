import Layout from '../components/Layout'

export default function FAQ() {
  const faqs = [
    {
      question: "What types of retail spaces are available?",
      answer: "We offer a variety of retail spaces including storefronts, kiosks, and pop-up locations in high-traffic areas."
    },
    {
      question: "How do I apply for a retail space?",
      answer: "You can start by contacting our leasing team through our website or by visiting our office. We'll guide you through the application process."
    },
    {
      question: "What support services do you provide?",
      answer: "We offer comprehensive support including marketing, maintenance, and business consulting services to help your retail business succeed."
    },
    {
      question: "Are there any restrictions on business types?",
      answer: "We welcome a variety of businesses but do have guidelines to ensure a diverse and complementary mix of retailers."
    },
    {
      question: "What are the lease terms?",
      answer: "We offer flexible lease terms ranging from short-term pop-up agreements to long-term leases, tailored to your business needs."
    },
    {
      question: "How do you handle maintenance and repairs?",
      answer: "Our property management team handles all common area maintenance and can assist with coordinating repairs within your leased space."
    }
  ]

  return (
    <Layout title="FAQ - Enclave Bixby">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-gray-400 mb-6">
            If you didn&rsquo;t find what you&rsquo;re looking for, our team is here to help. 
            Contact us for more information about our retail spaces and services.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </Layout>
  )
}
