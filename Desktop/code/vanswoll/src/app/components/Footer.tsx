'use client';

import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="py-28 bg-[var(--secondary)] relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--accent)] opacity-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--accent)] opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-[var(--accent)] opacity-20"></div>
      
      <div className="container mx-auto px-10">
        <div className="mb-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-playfair text-4xl font-light mb-2">VAN SWOL & CO</h2>
            <p className="text-[var(--accent)] tracking-[0.4em] uppercase text-xs opacity-80 font-light">
              Timeless Elegance
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-[var(--accent)] uppercase tracking-[0.3em] text-xs mb-8 font-light">About</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Our Craft
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Heritage
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          
          <div 
            className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <h3 className="text-[var(--accent)] uppercase tracking-[0.3em] text-xs mb-8 font-light">Collections</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Classic Line
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Complications
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Limited Editions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Materials Guide
                </a>
              </li>
            </ul>
          </div>
          
          <div 
            className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-[var(--accent)] uppercase tracking-[0.3em] text-xs mb-8 font-light">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Private Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Authentication
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Bespoke Creations
                </a>
              </li>
            </ul>
          </div>
          
          <div 
            className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '450ms' }}
          >
            <h3 className="text-[var(--accent)] uppercase tracking-[0.3em] text-xs mb-8 font-light">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Boutique Locations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Appointment Request
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                  Press Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between border-t border-[var(--foreground)] border-opacity-10 pt-6">
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex items-center space-x-4">
              <a href="#" className="text-xs opacity-70 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                Privacy Policy
              </a>
              <span className="text-[var(--accent)] opacity-30">•</span>
              <a href="#" className="text-xs opacity-70 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                Terms of Service
              </a>
              <span className="text-[var(--accent)] opacity-30">•</span>
              <a href="#" className="text-xs opacity-70 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
                Cookies
              </a>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 mt-6 md:mt-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <p className="text-xs opacity-60 font-light tracking-wide">
              © {new Date().getFullYear()} Van Swol & Co. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Signature element */}
        <div className="flex justify-center mt-16">
          <div className={`w-6 h-6 relative ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-800`}>
            <div className="absolute inset-0 border border-[var(--accent)] rotate-45 opacity-20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}