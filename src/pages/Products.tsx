import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../products.json';

type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
}

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const { addToCart } = useCart()

  useEffect(() => {
    setFilteredProducts(products)
  }, [])

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
    )
    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory])

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shop Our Collection</h1>
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded text-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Hoodies">Hoodies</option>
          <option value="Pants">Pants</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 flex flex-col" style={{ backgroundColor: '#0a0a0ac7' }}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            </Link>
            <p className="text-lg mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-auto transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

