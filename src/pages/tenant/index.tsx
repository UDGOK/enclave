import type { NextPage } from 'next'
import Layout from '@components/Layout'

const Tenant: NextPage = () => {
  return (
    <Layout title="Tenant Portal">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Tenant Portal</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Rent Payments</h2>
            {/* Rent payment content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Maintenance Requests</h2>
            {/* Maintenance request content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Lease Information</h2>
            {/* Lease information content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Contact Management</h2>
            {/* Contact management content */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Tenant
