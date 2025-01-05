import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import ShopCard from '@/components/ShopCard'

const Shops: NextPage = () => {
  // Temporary mock data
  const shops = [
    {
      name: 'Fashion Haven',
      description: 'Trendy clothing and accessories',
      imageUrl: '/images/shop1.jpg',
      category: 'Fashion'
    },
    {
      name: 'Tech World',
      description: 'Latest gadgets and electronics',
      imageUrl: '/images/shop2.jpg',
      category: 'Electronics'
    },
    {
      name: 'Book Nook',
      description: 'Wide selection of books and magazines',
      imageUrl: '/images/shop3.jpg',
      category: 'Books'
    }
  ]

  return (
    <Layout title="Shop Directory">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">Shop Directory</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shops.map((shop, index) => (
            <ShopCard key={index} {...shop} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Shops
