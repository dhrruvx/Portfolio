'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/10 backdrop-blur-xl z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              Meet Dhruv
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="text-gray-300 hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-black/20 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 backdrop-blur-xl border-t border-white/10">
            <Link href="/#about" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/#skills" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 