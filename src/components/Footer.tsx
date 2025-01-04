import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Skate or Die</h3>
          <p className="text-sm">Make a statement with our bold and provocative clothing.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/products" className="hover:text-red-500 transition-colors">Shop</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-red-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-red-500 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} Skate or Die. All rights reserved.
      </div>
    </footer>
  )
}

