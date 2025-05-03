"use client";
import { useContext, useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from '../../public/more/2.png';
import Link from "next/link";
import Image from "next/image";
import AuthContext from "../context/AuthContext/AuthContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName=usePathname();
  // console.log(pathName.includes("addminPage"));
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

if(!pathName.includes("addminPage")){
  return (
    <>
      {/* Header */}
      <header className="bg-[#2A1A17] py-4 px-6 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Coffee Icon" width={32} height={32} className="object-contain" />
          <h1 className="text-[#F5E6D8] text-2xl md:text-3xl font-serif">NextSipCafe</h1>
        </div>
      </header>

      {/* Navbar */}
      <nav
        className={`
          z-50 transition-all duration-300
          ${isScrolled ? "fixed top-2 left-1/2 -translate-x-1/2 w-[70%] rounded-2xl shadow-xl bg-[#181011]/90 backdrop-blur-sm text-white" : "relative w-full bg-[#F5E6D8]"}
          text-black border border-amber-950
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-serif text-3xl font-bold">
                <Image src={logo} alt="coffee-logo" width={45} height={45} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/menu" className="hover:text-gray-300">Menu</Link>
                <Link href="/about" className="hover:text-gray-300">About Us</Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              {user
                ? <button onClick={handleSignOut}>SignOut</button>
                : <Link href="/signIn" className="hover:text-gray-300">Sign In</Link>
              }
              <div className="w-px h-8 bg-white/20" />
              <button aria-label="Search" className="p-1 hover:text-gray-300">
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/20">
              <Link href="/" className="block px-3 py-2 hover:bg-white/10 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/menu" className="block px-3 py-2 hover:bg-white/10 rounded-md" onClick={() => setIsMenuOpen(false)}>Menu</Link>
              <Link href="/about" className="block px-3 py-2 hover:bg-white/10 rounded-md" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link href="/signin" className="block px-3 py-2 hover:bg-white/10 rounded-md" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              <div className="px-3 py-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-md bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
else{
  return <></>
}
}
