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
      className="py-12 bg-[var(--secondary)] relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--accent)] opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center justify-center">
          <div className={`transition-all duration-1000 mb-6 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-playfair text-2xl md:text-3xl font-light">VAN SWOL & CO</h2>
            <p className="text-[var(--accent)] tracking-[0.3em] uppercase text-[10px] md:text-xs opacity-80 font-light mt-1">
              Timeless Elegance
            </p>
          </div>
                    
          <div className={`transition-all duration-1000 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mt-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
               style={{ transitionDelay: '200ms' }}>
            <a href="#" className="text-xs opacity-70 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
              About
            </a>
            <span className="hidden md:inline text-[var(--accent)] opacity-30">•</span>
            <a href="#" className="text-xs opacity-70 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
              Collections
            </a>
            <span className="hidden md:inline text-[var(--accent)] opacity-30">•</span>
            <a href="#" className="text-xs opacity-70 hover:text-[var(--accent)] transition-colors duration-300 font-light hover:opacity-100">
              Contact
            </a>
          </div>
          
          <div className={`transition-all duration-1000 mt-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
               style={{ transitionDelay: '300ms' }}>
            <p className="text-[10px] md:text-xs opacity-50 font-light tracking-wide text-center">
              © {new Date().getFullYear()} Van Swol & Co. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}