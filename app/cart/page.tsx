
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Coffee {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Coffee[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          // Filter out items that are invalid to prevent runtime errors
          const validCart = parsedCart.filter(item => 
            item && typeof item.price === 'number' && typeof item.quantity === 'number'
          );
          setCart(validCart);
        }
      } catch (error) {
        console.error("Failed to parse or validate cart data from localStorage", error);
        // Clear corrupted or invalid cart data
        localStorage.removeItem('cart');
      }
    }
  }, []);

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(item =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cart.reduce((acc, item) => {
    // Ensure price and quantity are numbers before calculation
    const price = typeof item.price === 'number' ? item.price : 0;
    const quantity = typeof item.quantity === 'number' ? item.quantity : 0;
    return acc + price * quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map(item => (
            <div key={item._id} className="bg-white rounded-lg shadow-md p-6">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">
                {/* Add a check to ensure price is a number before calling toFixed */}
                {typeof item.price === 'number' ? `${item.price.toFixed(2)}` : 'N/A'}
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-8 text-right">
          <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

