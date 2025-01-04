import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 animate-pulse">
          Skate or Die
        </h1>
        <p className="text-2xl md:text-4xl mb-8 font-bold">Make a statement</p>
        <Link
          to="/products"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

