'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-800 ${
      scrolled ? 'bg-[var(--background)]' : 'bg-transparent'
    }`}>
      {/* Top line */}
      <div className={`h-[1px] w-full bg-[var(--accent)] opacity-5`}></div>
      
      <div className={`container mx-auto px-12 py-8 transition-all duration-800 ${scrolled ? 'py-5' : ''}`}>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col items-start">
            <h1 className="font-playfair text-xl md:text-2xl font-light tracking-wide text-[var(--foreground)]">
              <span>Van Swol</span>
              <span className="text-[var(--accent)]"> & Co</span>
            </h1>
          </Link>
          
          <nav className="hidden md:flex space-x-16 text-xs uppercase tracking-[0.25em]">
            <Link 
              href="/" 
              className="text-[var(--foreground)] hover:text-[var(--accent)] luxury-hover py-2 font-light"
            >
              Home
            </Link>
            <Link 
              href="/collections" 
              className="text-[var(--foreground)] hover:text-[var(--accent)] luxury-hover py-2 font-light"
            >
              Collections
            </Link>
            <Link 
              href="/craftsmanship" 
              className="text-[var(--foreground)] hover:text-[var(--accent)] luxury-hover py-2 font-light"
            >
              Craftsmanship
            </Link>
            <Link 
              href="/about" 
              className="text-[var(--foreground)] hover:text-[var(--accent)] luxury-hover py-2 font-light"
            >
              Heritage
            </Link>
            <Link 
              href="/contact" 
              className="text-[var(--foreground)] hover:text-[var(--accent)] luxury-hover py-2 font-light"
            >
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-700 flex flex-col items-center gap-2">
              <span className="w-6 h-[1px] bg-current transition-all"></span>
              <span className="w-6 h-[1px] bg-current transition-all"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom animated horizontal line */}
      <div className={`h-[1px] bg-[var(--accent)] opacity-10 mx-auto transition-all duration-1000 ${
        scrolled ? 'w-full' : 'w-0'
      }`}></div>
    </header>
  );
} 