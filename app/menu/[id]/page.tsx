"use client"
import Image from "next/image";
import { useState, useEffect, use } from "react";

const defaultCoffeeImage = "/cups/Rectangle 10.png";

interface Coffee {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Fetch product by ID
const getData = async (id: string) => {
  try {
    // Using a more robust fetch with a timeout
    const res = await fetch(`http://localhost:3000/api/product/${id}`, { cache: 'no-store' });

    if (!res.ok) {
      // Log the status for better debugging
      console.error(`Error fetching product: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    
    if (!data.success) {
      console.error(`API error: ${data.message}`);
      return null;
    }

    return data;
  } catch (error) {
    console.error('❌ Unexpected error fetching product:', error);
    return null;
  }
};

export default function Page({ params }: { params: { id: string } }) {
  const { id } = use(params);
  const [product, setProduct] = useState<any>(null);
  const [cart, setCart] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(id);
      if (data) {
        setProduct(data.user);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (coffee: Omit<Coffee, 'quantity'>) => {
    const existingItem = cart.find(item => item._id === coffee._id);
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(item =>
        item._id === coffee._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...coffee, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-red-50 text-red-700 text-xl">
        <p>Sorry, we couldn&apos;t find that coffee. It might be brewing somewhere else!</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfaf6] text-gray-800 font-serif">
      {/* Hero Section */}
      <section className="bg-[#2A1A17] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:flex items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src={product.photo || defaultCoffeeImage}
              alt={product.name || 'Coffee Image'}
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name || 'Delicious Coffee'}</h1>
            <p className="text-lg mb-4">{product.description || 'No description available.'}</p>
            <p className="text-sm mb-6">Origin: {product.origin || 'Unknown'}</p>
            <button 
              onClick={() => addToCart({ _id: product._id, name: product.name, price: product.price, image: product.photo })}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              Buy Now - ${product.price || '0.00'}
            </button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Coffee Details</h2>
          <ul className="space-y-2">
            <li><strong>Roast:</strong> {product.roast || 'Medium'}</li>
            <li><strong>Taste Notes:</strong> {product.tasteNotes || 'Blueberry, Dark Chocolate, Floral'}</li>
            <li><strong>Elevation:</strong> {product.elevation || '1900–2100m'}</li>
            <li><strong>Process:</strong> {product.process || 'Washed'}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Nutrition Facts</h2>
          <ul className="space-y-2">
            <li><strong>Calories:</strong> 2 per 8 oz</li>
            <li><strong>Caffeine:</strong> ~95mg</li>
            <li><strong>Fat:</strong> 0g</li>
            <li><strong>Sugar:</strong> 0g</li>
          </ul>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-10">
        <button 
          onClick={() => addToCart({ _id: product._id, name: product.name, price: product.price, image: product.photo })}
          className="bg-[#2A1A17] hover:bg-[#422923] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-md transition-all"
        >
          Add to Cart
        </button>
      </section>
    </main>
  );
}
