import { useState } from 'react'

export default function Menu() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Shops', href: '/shops' },
    { name: 'Tenant Portal', href: '/tenant' },
    { name: 'Admin', href: '/admin' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-black/50 z-50">
      <div className="container mx-auto px-8 py-6 flex items-center">
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-8 relative">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-white/80 hover:text-white transition-colors"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
              {hoveredItem === index && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/50">
                  <div className="absolute inset-0 bg-white animate-underline" />
                </div>
              )}
            </a>
          ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
