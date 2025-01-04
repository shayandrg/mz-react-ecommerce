import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import products from '../products.json'

type Product = {
  id: number
  name: string
  price: number
  category: string
  image: string
  description: string
}

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const foundProduct = products.find(p => p.id === Number(id))
    if (foundProduct) {
      setProduct({
        ...foundProduct,
        description: foundProduct.description || 'Show off your style with our premium collection. Made from high-quality materials, perfect for any occasion.'
      })
    }
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 })
    }
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

