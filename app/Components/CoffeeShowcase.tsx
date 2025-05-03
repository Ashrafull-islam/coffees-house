"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

// 1. Define the Product interface
interface Product {
  _id?: string;
  name: string;
  chef?: string;
  supplier?: string;
  taste?: string;
  category?: string;
  details?: string;
  photo?: string;
  price?: string;
}

// 2. CoffeeItem is typed with Product
const CoffeeItem: React.FC<Product> = ({
  name,
  details,
  photo,
  price,
  _id
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group bg-[#F5E6D8] border border-[#E6B17E]/30">
      <Link href={`/${_id}`}>
      <div className="relative h-64 w-full">
        <img
          src={photo || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="font-semibold uppercase tracking-wide text-sm mb-1">
            {name}
          </h3>
          <p className="text-xs text-white/80 mb-2">{details}</p>
          <p className="text-sm font-medium text-[#E6B17E]">
            ${price ? price.toFixed(2) : "2.30"} USD
          </p>
        </div>
        <button
          className="absolute bottom-4 right-4 bg-[#F5E6D8] text-[#2A1A17] rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-[#E6B17E]/90 transition-colors"
          aria-label={`Add ${name} to cart`}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
      </Link>
    </div>
  );
};

const CoffeeShowcase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/product")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched products:", data);
      if (Array.isArray(data.users)) {
        setProducts(data.users);
      } else {
        console.error("Invalid data format: 'users' not an array");
      }
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
    });
  }, []);
  console.log(products)
  return (
    <section className="bg-[#FDF6F0] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2A1A17] max-w-md leading-tight">
            Let's try the best coffee in Amsterdam
          </h2>
          <button className="flex items-center text-[#2A1A17] font-medium text-sm group border-b border-transparent hover:border-[#2A1A17] transition-all">
            MORE MENU
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((item) => (
            <CoffeeItem key={item._id || item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeShowcase;
