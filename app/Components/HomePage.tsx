"use client"
// import coffeeIcon from './assets/coffee-icon.png'
import heroImage from '../../public/more/3.png'
import { ArrowRight } from "lucide-react"
import playstore from "@/public/more/playStore.png"
import google from "@/public/more/google.png"
import mbile1 from "@/public/more/mobile2.png"
import mbile2 from "@/public/more/Screenshot from 2025-04-14 15-57-46.png"
import more from "@/public/more/24.jpg"
import cup1 from "@/public/cups/Rectangle 10.png"
import cup2 from "@/public/cups/Rectangle 12.png"
import cup4 from "@/public/cups/Rectangle 15.png"
import cup5 from "@/public/cups/Rectangle 14.png"
// import logo from '../../public/more/2.png'
import { Coffee, Award, Bean, CupSoda } from 'lucide-react'

import card1 from '../../public/more/27.jpg'
import card2 from '../../public/more/2.png'
import CoffeeShowcase from './CoffeeShowcase'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* Hero Section */}
      <section className="min-h-[600px] relative flex-1 bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Coffee Beans" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Would you like a Cup of Delicious Coffee?</h2>
            <p className="text-sm md:text-base text-gray-200">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every
              moment!! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E6B17E] hover:bg-[#d9a06e] text-[#4A2C1F] font-medium py-2 px-6 rounded transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F5E6D8] py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Feature
              icon={<Coffee className="w-12 h-12 text-[#4A2C1F]" />}
              title="Awesome Aroma"
              description="You will definitely be a fan of the design & aroma of your coffee"
            />

            {/* Feature 2 */}
            <Feature
              icon={<Award className="w-12 h-12 text-[#4A2C1F]" />}
              title="High Quality"
              description="We served the coffee to you maintaining the best quality"
            />

            {/* Feature 3 */}
            <Feature
              icon={<Bean className="w-12 h-12 text-[#4A2C1F]" />}
              title="Pure Grades"
              description="The coffee is made of the green coffee beans which you will love"
            />

            {/* Feature 4 */}
            <Feature
              icon={<CupSoda className="w-12 h-12 text-[#4A2C1F]" />}
              title="Proper Roasting"
              description="Your coffee is brewed by first roasting the green coffee beans"
            />
          </div>
        </div>
      </section>
      <section className='bg-[#FFFFFF]'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Coffee Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24">
        <div className="space-y-6">
          <h3 className="text-[#C8A27A] uppercase text-sm font-medium tracking-wide">Our Coffee</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">Choose your favourite coffee</h2>
          <p className="text-gray-600 max-w-md">
            More than 100+ type of coffee are ready to serve by our professionals.
          </p>

          <div className="flex items-center space-x-2 text-sm font-medium">
            <span className="text-[#C8A27A]">CAPPUCINO</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900">LATTE</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900">ARABICA</span>
          </div>

          <div className="pt-4">
            <button className="flex items-center text-gray-900 font-medium text-sm group">
              MORE MENU
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src={card1}
            alt="dessert plate with cake"
            fill
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Dessert Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 relative h-[300px] md:h-[400px]">
          <Image
            src={card2}
            alt="Dessert plate with cake"
            fill
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <h3 className="text-[#C8A27A] uppercase text-sm font-medium tracking-wide">Our Desserts</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Complete your coffee with our desserts
          </h2>
          <p className="text-gray-600 max-w-md">Enjoy your coffee with our tasty desserts that will build your mood.</p>

          <div className="flex items-center space-x-2 text-sm font-medium">
            <span className="text-[#C8A27A]">LECREME</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900">CREME</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900">TIRAMISU</span>
          </div>

          <div className="pt-4">
            <button className="flex items-center text-gray-900 font-medium text-sm group">
              MORE MENU
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-24 border-t border-gray-200"></div>
    </div>
      </section>
      <section>
        <CoffeeShowcase></CoffeeShowcase>
      </section>
      <section className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="mb-8">
      <span className="text-[#C8A27A] uppercase text-sm font-medium tracking-wide">Gallery</span>
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2">Our great atmosphere</h2>
    </div>

    {/* Top Row of Images */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="relative h-64 overflow-hidden rounded-md">
        <Image
          src={cup1}
          alt="Gallery Image 1"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative h-64 overflow-hidden rounded-md">
        <Image
          src={cup2}
          alt="Gallery Image 2"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative h-64 overflow-hidden rounded-md">
        <Image
          src={cup4}
          alt="Gallery Image 3"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>

    {/* Bottom Row of Images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="relative h-64 overflow-hidden rounded-md">
        <Image
          src={cup5}
          alt="Gallery Image 4"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="relative h-64 overflow-hidden rounded-md">
        <Image
          src={cup4}          alt="Gallery Image 5"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
</section>


    <section className="bg-[#121212] py-16 px-4 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={more} alt="Coffee background" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Let's try our mobile app</h2>
          <p className="max-w-2xl text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Lacus nibh ac id convallis dolor. Risus odio odio lectus
            pellentesque non enim sollicitudin quam. Enim donec in tortor ultrices porta eget elit. Adipiscing amet
            porta feugiat sed pretium.
          </p>
        </div>

        <div className="flex justify-center gap-20 mb-12">
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Image src={playstore} alt="Download on the App Store" className="h-15" />
          </a>
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Image src={google} alt="Get it on Google Play" className="h-15" />
          </a>
        </div>

        <div className="flex justify-center align-items-center gap-10">
        <div className="relative h-[400px] w-full max-w-xs">
            <Image src={mbile1} alt="Mobile app mockup" className="w-full" />
          </div>
          <div className="relative h-[400px] w-full max-w-xs">
            <Image src={mbile2} alt="Mobile app mockup" className="w-full" />
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-[#4A2C1F] mb-2">{title}</h3>
      <p className="text-sm text-[#6B4F3F]">{description}</p>
    </div>
  )
}
