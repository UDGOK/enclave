type ShopCardProps = {
  name: string
  description: string
  imageUrl: string
  category: string
}

export default function ShopCard({ name, description, imageUrl, category }: ShopCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-accent font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2">{name}</h3>
        <p className="text-text mt-2">{description}</p>
      </div>
    </div>
  )
}
