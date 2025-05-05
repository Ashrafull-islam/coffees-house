import Image from "next/image";


// Fetch product by ID
export const getData = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/product/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('❌ Error fetching product:', error);
    return null;
  }
};

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  const product = data?.user;
  console.log(product.name)

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-red-50 text-red-700 text-xl">
        ❌ Product not found.
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
              src={product.photo}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-sm mb-6">Origin: {product.origin || 'Unknown'}</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
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
            <li><strong>Roast:</strong> Medium</li>
            <li><strong>Taste Notes:</strong> Blueberry, Dark Chocolate, Floral</li>
            <li><strong>Elevation:</strong> 1900–2100m</li>
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
