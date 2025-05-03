import Image from "next/image"
import { Search, X } from "lucide-react"
import Link from "next/link"

export const getpost = async () => {
  const res = await fetch(`http://localhost:3000//api/product`, {
    cache: 'no-store' // Optional: avoid caching
  })
  const data = await res.json()
  return data.users
}
export default async function Home() {
  const product = await getpost();
  console.log(product)
  return (
    <main className="min-h-screen bg-[#f8f5f2] relative">
      {/* Background text */}
      <div className="absolute top-0 left-0 text-[#f0e9e2] text-[180px] font-bold leading-none z-0 select-none">
        COFFEE
      </div>

      {/* Header */}
      <header className="relative z-10 pt-4 px-4 flex justify-between items-start">
        <div className="max-w-md">
          <h1 className="text-[#3a3a3a] text-3xl font-bold leading-tight">the finest coffee experience</h1>
          <div className="mt-2 inline-block">
            <div className="bg-[#8b5d3a] text-white text-xs px-3 py-1 rounded-full flex items-center">
              <span className="mr-1">●</span> 20% off on seasonal items
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="bg-[#3a3a3a] text-white p-3 rounded-full">
            <Search size={20} />
          </button>
          <button className="bg-[#3a3a3a] text-white p-3 rounded-full">
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="relative z-10 mt-8 px-4">
        <div className="max-w-md mx-auto relative">
          <div className="bg-white rounded-full border border-gray-200 flex items-center px-4 py-2">
            <Search size={18} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search here" className="flex-1 bg-transparent outline-none text-sm" />
            <button className="bg-[#8b5d3a] text-white text-xs px-4 py-1 rounded-full">Search</button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="relative z-10 mt-8 px-4">
        <div className="flex justify-between max-w-md mx-auto">
          <CategoryItem icon="/cups/Rectangle 9.png" label="Hot Coffee" />
          <CategoryItem icon="/cups/Rectangle 10.png" label="Cup Coffee" />
          <CategoryItem icon="/cups/Rectangle 11.png" label="Cold Coffee" />
          <CategoryItem icon="/cups/Rectangle 12.png" label="Tea" />
          <CategoryItem icon="/cups/Rectangle 15.png" label="Dessert" />
        </div>
      </div>

      {/* Coffee Products */}
      <div className="relative z-10 mt-8 px-4 pb-12 max-w-9/12 mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {product.map((item) => (
            <Link href={`/menu/${item._id}`}>
            <CoffeeCard
              key={item.id || item.name}
              photo={item?.photo || "/placeholder.svg"}
              name={item?.name || "Unnamed"}
              details={item?.details || "No description available"}
              discount="20% off - $2.50"
              tags={["Bold", "Strong", "Hot"]}
            />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

function CategoryItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
        <Image src={icon || "/placeholder.svg"} alt={label} width={24} height={24} />
      </div>
      <span className="text-xs mt-2 text-[#3a3a3a]">{label}</span>
    </div>
  )
}

function CoffeeCard({
  photo,
  name,
  details,
  discount,
  tags,
}: {
  photo: string
  name: string
  details: string
  discount?: string
  tags: string[]
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="relative">
        <img
          src={photo}
          alt={name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full flex items-center">
            <span className="mr-1">●</span> {discount}
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-medium text-[#3a3a3a]">{name}</h3>
          <span className="text-lg font-medium text-[#3a3a3a]">{'3.50'}</span>
        </div>

        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{details}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-3 py-1 rounded-full bg-[#f0e9e2] text-[#8b5d3a]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
