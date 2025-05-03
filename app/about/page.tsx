import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] relative">
      {/* Background text */}
      <div className="absolute top-0 left-0 text-[#f0e9e2] text-[180px] font-bold leading-none z-0 select-none">
        ABOUT
      </div>

      {/* Header */}
      <header className="relative z-10 pt-4 px-4 flex justify-between items-start">
        <div className="max-w-md">
          <h1 className="text-[#3a3a3a] text-3xl font-bold leading-tight">our coffee journey</h1>
          <div className="mt-2 inline-block">
            <div className="bg-[#8b5d3a] text-white text-xs px-3 py-1 rounded-full flex items-center">
              <span className="mr-1">●</span> Crafting excellence since 2005
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href="/" className="bg-[#3a3a3a] text-white p-3 rounded-full">
            <ArrowLeft size={20} />
          </Link>
          <button className="bg-[#3a3a3a] text-white p-3 rounded-full">
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 mt-8 px-4 max-w-8/12 mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
          <div className="relative h-64 md:h-80">
            <Image src="/coffee-hero.jpg" alt="Coffee beans being roasted" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Our Story</h2>
                <p className="text-sm opacity-90">
                  From humble beginnings to becoming the finest coffee destination in the city
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About the Shop */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#3a3a3a] mb-4">About Our Coffee Shop</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-700 mb-4">
              Founded in 2005, our coffee shop began with a simple mission: to serve the most exceptional coffee
              experience possible. What started as a small corner café has grown into a beloved destination for coffee
              enthusiasts and casual drinkers alike.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of passionate baristas are trained in the art and science of coffee preparation, ensuring that
              every cup served meets our exacting standards. We believe that great coffee is not just a beverage, but an
              experience that brings people together.
            </p>
            <p className="text-gray-700">
              Today, we continue to honor our commitment to quality, sustainability, and community. Every bean we
              source, every drink we craft, and every customer we serve is part of our ongoing coffee journey.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-[#f0e9e2] rounded-xl p-4 text-center">
                <div className="text-[#8b5d3a] font-bold text-2xl">18+</div>
                <div className="text-xs text-gray-600 mt-1">Years of Excellence</div>
              </div>
              <div className="bg-[#f0e9e2] rounded-xl p-4 text-center">
                <div className="text-[#8b5d3a] font-bold text-2xl">12</div>
                <div className="text-xs text-gray-600 mt-1">Coffee Origins</div>
              </div>
              <div className="bg-[#f0e9e2] rounded-xl p-4 text-center">
                <div className="text-[#8b5d3a] font-bold text-2xl">5</div>
                <div className="text-xs text-gray-600 mt-1">Award-Winning Blends</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coffee Process */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#3a3a3a] mb-4">From Seed to Cup</h2>

          <div className="space-y-4">
            <ProcessCard
              number="01"
              title="Sourcing the Finest Beans"
              description="Our journey begins with selecting the highest quality coffee beans from sustainable farms around the world. We work directly with farmers who share our passion for excellence and environmental responsibility."
              image="/sourcing.jpg"
            />

            <ProcessCard
              number="02"
              title="Meticulous Harvesting"
              description="Coffee cherries are carefully hand-picked at peak ripeness to ensure optimal flavor. Only the reddest, ripest cherries are selected, guaranteeing the sweetest, most flavorful beans."
              image="/harvesting.jpg"
            />

            <ProcessCard
              number="03"
              title="Precise Processing"
              description="The beans undergo either washed, natural, or honey processing methods, each bringing out unique flavor characteristics. This crucial step develops the distinct flavor profiles that make our coffees special."
              image="/processing.jpg"
            />

            <ProcessCard
              number="04"
              title="Artisanal Roasting"
              description="Our master roasters bring decades of experience to the craft, roasting each batch to perfection. We use small-batch drum roasters to ensure precise temperature control and consistent quality."
              image="/roasting.jpg"
            />

            <ProcessCard
              number="05"
              title="Expert Brewing"
              description="Finally, our skilled baristas transform these perfectly roasted beans into exceptional coffee experiences. Each brewing method is executed with precision to highlight the unique characteristics of every coffee variety."
              image="/brewing.jpg"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#3a3a3a] mb-4">Our Values</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <ValueCard
                title="Quality"
                description="We never compromise on the quality of our beans, our processes, or our service."
                icon="✦"
              />
              <ValueCard
                title="Sustainability"
                description="From farm to cup, we're committed to environmentally responsible practices."
                icon="♲"
              />
              <ValueCard
                title="Community"
                description="We believe coffee brings people together and strive to create welcoming spaces."
                icon="♥"
              />
            </div>
          </div>
        </div>

        {/* Visit Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#3a3a3a] mb-4">Visit Us</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative h-64">
              <Image src="/cafe-interior.jpg" alt="Our coffee shop interior" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-2">Main Location</h3>
                  <p className="text-gray-600 text-sm mb-1">123 Coffee Street</p>
                  <p className="text-gray-600 text-sm mb-1">Brewville, BC 10101</p>
                  <p className="text-gray-600 text-sm">Open daily: 7am - 8pm</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Contact Us</h3>
                  <p className="text-gray-600 text-sm mb-1">info@finestcoffee.com</p>
                  <p className="text-gray-600 text-sm mb-1">+1 (555) 123-4567</p>
                  <p className="text-gray-600 text-sm">@finestcoffee</p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/"
                  className="inline-block bg-[#8b5d3a] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#7a4e2f] transition-colors"
                >
                  Explore Our Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function ProcessCard({
  number,
  title,
  description,
  image,
}: { number: string; title: string; description: string; image: string }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <div className="h-48 md:h-full relative">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          <div className="absolute top-4 left-4 bg-[#8b5d3a] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
            {number}
          </div>
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-bold text-[#3a3a3a] mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

function ValueCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-[#f0e9e2] rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-[#8b5d3a] text-xl">{icon}</span>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
