"use client"
import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Coffee } from "lucide-react"
import { usePathname } from 'next/navigation'
export default function Footer() {
  const pathName=usePathname();
  if(!pathName.includes('addminPage')){
    return (
      <>
  <footer className="relative">
        <div className="bg-[#F5F2EE] py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              {/* Left Column - Company Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Coffee className="h-8 w-8 text-[#5D3A1A]" />
                  </div>
                  <h3 className="text-[#5D3A1A] text-2xl font-serif">Espresso Emporium</h3>
                  <p className="text-[#5D3A1A] max-w-md">
                    Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with
                    your best companion.
                  </p>
                </div>
  
                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-[#5D3A1A] text-white p-2 rounded-full hover:bg-[#7B4E25] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#5D3A1A] text-white p-2 rounded-full hover:bg-[#7B4E25] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#5D3A1A] text-white p-2 rounded-full hover:bg-[#7B4E25] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#5D3A1A] text-white p-2 rounded-full hover:bg-[#7B4E25] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
  
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-[#5D3A1A] text-xl font-serif">Get in Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#5D3A1A]">
                      <Phone className="h-5 w-5 min-w-5" />
                      <span>+88 01533 333 333</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#5D3A1A]">
                      <Mail className="h-5 w-5 min-w-5" />
                      <span>info@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#5D3A1A]">
                      <MapPin className="h-5 w-5 min-w-5" />
                      <span>72, Wall street, King Road, Dhaka</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Right Column - Contact Form */}
              <div className="space-y-6">
                <h3 className="text-[#5D3A1A] text-2xl font-serif">Connect with Us</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 border border-[#E8E1DA] bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#5D3A1A]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border border-[#E8E1DA] bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#5D3A1A]"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={5}
                      className="w-full p-3 border border-[#E8E1DA] bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#5D3A1A]"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="px-6 py-2 border border-[#5D3A1A] text-[#5D3A1A] rounded-full hover:bg-[#5D3A1A] hover:text-white transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright Bar */}
        <div className="bg-[#331A0F] text-white py-3 text-center text-sm">
          <div className="container mx-auto">Copyright Espresso Emporium | All Rights Reserved</div>
        </div>
      </footer>
      </>
    )
  }
  else{
    return <></>
  }

}
