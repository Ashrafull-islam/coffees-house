// ❌ REMOVE THIS LINE
// "use client"

import Image from "next/image";

// Fetch product by ID
const getData = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Error fetching product: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data.success ? data.user : null;
  } catch (error) {
    console.error("❌ Unexpected error fetching product:", error);
    return null;
  }
};

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const product = await getData(params.id);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-red-50 text-red-700 text-xl">
        <p>Sorry, we couldn&apos;t find that coffee. It might be brewing somewhere else!</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfaf6] text-gray-800 font-serif">
      <section className="bg-[#2A1A17] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:flex items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src={product.photo || "/cups/Rectangle 10.png"}
              alt={product.name || "Coffee"}
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-sm mb-6">Origin: {product.origin || "Unknown"}</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
              Buy Now - ${product.price || "0.00"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
