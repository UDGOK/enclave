import type { NextPage } from 'next'
import Layout from '@/components/Layout'

const Tenant: NextPage = () => {
  return (
    <Layout title="Tenant Portal">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Tenant Portal</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Rent Status</h2>
            {/* Rent status content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Payment History</h2>
            {/* Payment history content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
            {/* Profile management content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Support Requests</h2>
            {/* Support requests content */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Tenant
