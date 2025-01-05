import { useState } from 'react'

export default function Menu() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Retail Spaces', href: '/retail' },
    { name: 'Virtual Tours', href: '/tours' },
    { name: 'Tenant Portal', href: '/tenant' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-black/50 z-50">
      <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
        {/* Hamburger Button */}
        <button
          className="sm:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div className={`${isOpen ? 'block' : 'hidden'} sm:block sm:flex-1 sm:flex sm:justify-center`}>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 relative">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white/80 hover:text-white transition-colors py-2 sm:py-0"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setIsOpen(false)}
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
