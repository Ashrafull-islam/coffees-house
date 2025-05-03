import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#fdfaf6] text-gray-800 font-serif">
      {/* Hero Section */}
      <section className="bg-[#2A1A17] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:flex items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src=""
              alt="Coffee Cup"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ethiopian Arabica</h1>
            <p className="text-lg mb-4">Aromatic and fruity with notes of blueberry and dark chocolate. Hand-roasted in small batches to deliver premium taste.</p>
            <p className="text-sm mb-6">Origin: Yirgacheffe, Ethiopia</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
              Buy Now - $12.99
            </button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Coffee Details</h2>
          <ul className="space-y-2">
            <li><strong>Roast:</strong> Medium</li>
            <li><strong>Taste Notes:</strong> Blueberry, Dark Chocolate, Floral</li>
            <li><strong>Elevation:</strong> 1900-2100m</li>
            <li><strong>Process:</strong> Washed</li>
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
        <button className="bg-[#2A1A17] hover:bg-[#422923] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-md transition-all">
          Add to Cart
        </button>
      </section>
    </main>
  );
}
