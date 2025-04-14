import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-32 mr-2">
            {/* Placeholder logo - would be replaced with actual logo */}
            <div className="absolute inset-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
                SOLGOL
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-white hover:text-blue-300 transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-white hover:text-blue-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-300 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Cart and Account Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/account" className="text-white hover:text-blue-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          <Link href="/cart" className="text-white hover:text-blue-300 transition-colors relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2">
          <div className="flex flex-col space-y-3 pb-3">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors py-2">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-blue-300 transition-colors py-2">
              Products
            </Link>
            <Link href="/about" className="text-white hover:text-blue-300 transition-colors py-2">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition-colors py-2">
              Contact
            </Link>
            <div className="flex space-x-4 pt-2">
              <Link href="/account" className="text-white hover:text-blue-300 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account
              </Link>
              <Link href="/cart" className="text-white hover:text-blue-300 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart (0)
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
