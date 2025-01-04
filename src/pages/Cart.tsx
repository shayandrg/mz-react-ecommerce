import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    console.log('Cart items:', cart);
  }, [cart]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">Your cart is empty.</p>
          <Link 
            to="/products" 
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {cart.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex items-center mt-2">
                  <button 
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="px-2 py-1 border rounded-l"
                    disabled={item.quantity <= 0}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded-r"
                  >
                    +
                  </button>
                  <span className="ml-4 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-8 text-right">
            <div className="text-2xl font-bold">
              Total: ${total.toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

