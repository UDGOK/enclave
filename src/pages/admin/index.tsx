import type { NextPage } from 'next'
import Layout from '@components/Layout'

const Admin: NextPage = () => {
  return (
    <Layout title="Admin Panel">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Tenant Management</h2>
            {/* Tenant management content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Announcements</h2>
            {/* Announcements content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            {/* Analytics content */}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Rent Collection</h2>
            {/* Rent collection content */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Admin
