import Image from 'next/image'

type ShopCardProps = {
  name: string
  description: string
  imageUrl: string
  category: string
}

export default function ShopCard({ name, description, imageUrl, category }: ShopCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <span className="text-sm text-accent font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2">{name}</h3>
        <p className="text-text mt-2">{description}</p>
      </div>
    </div>
  )
}
