import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function SocialLinks() {
  return (
    <div className="fixed bottom-8 right-48 text-white text-opacity-80 flex space-x-6">
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-opacity-100 transition-opacity"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-opacity-100 transition-opacity"
      >
        <FaInstagram className="w-6 h-6" />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-opacity-100 transition-opacity"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
  )
}
