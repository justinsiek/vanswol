'use client';

import { useEffect, useRef, useState } from 'react';

export default function BrandStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-40 bg-[var(--background)]"
    >
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          {/* Left column - text content */}
          <div className={`transition-all duration-1200 delay-300 relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="mb-16 relative">
              {/* Decorative diamond element */}
              <div className={`absolute -top-9 left-0 w-2 h-2 opacity-0 ${isVisible ? 'opacity-80 transition-opacity duration-1000 delay-700' : ''}`}>
                <div className="w-full h-full border border-[var(--accent)] rotate-45 shimmer"></div>
              </div>
              
              {/* Animated horizontal line */}
              <div className={`absolute -top-8 left-6 right-0 h-[1px] bg-[var(--accent)] opacity-60 ${isVisible ? 'draw-line-h' : 'w-0'}`} />
              
              <h2 className="text-[var(--accent)] uppercase tracking-[0.4em] text-xs mb-8 font-light opacity-90">
                Our Philosophy
              </h2>
              <h3 className="font-playfair text-3xl md:text-4xl mb-10 leading-tight font-light">
                The Vision Behind <span className="text-[var(--accent)]">Van Swol & Co</span>
              </h3>
            </div>
            
            <div className="space-y-10 text-base md:text-lg opacity-70 font-light leading-relaxed">
              <p>
              filler text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
            </div>
            
            {/* Animated horizontal line */}
            <div className={`mt-16 h-[1px] bg-[var(--accent)] opacity-30 ${isVisible ? 'draw-line-h draw-line-h-delay-1' : 'w-0'}`} />
          </div>
          
          {/* Right column - image placeholder */}
          <div className={`relative transition-all duration-1200 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="aspect-[3/4] bg-[var(--tertiary)] relative gold-border-gradient">
              {/* Placeholder for founder image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[var(--accent)] opacity-30 text-lg font-light italic">Founder Image</span>
              </div>
              
              {/* Animated frame */}
              <div className="absolute inset-4 pointer-events-none">
                <div className={`absolute top-0 left-0 w-full h-[1px] bg-[var(--accent)] opacity-40 ${isVisible ? 'draw-line-h' : 'w-0'}`} />
                <div className={`absolute top-0 right-0 w-[1px] h-full bg-[var(--accent)] opacity-40 ${isVisible ? 'draw-line-v draw-line-v-delay-1' : 'h-0'}`} />
                <div className={`absolute bottom-0 right-0 w-full h-[1px] bg-[var(--accent)] opacity-40 ${isVisible ? 'draw-line-h draw-line-h-delay-1' : 'w-0'}`} />
                <div className={`absolute bottom-0 left-0 w-[1px] h-full bg-[var(--accent)] opacity-40 ${isVisible ? 'draw-line-v draw-line-v-delay-2' : 'h-0'}`} />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -right-4 bottom-1/3 w-8 h-8 opacity-0 pointer-events-none">
              <div className={`w-full h-full border border-[var(--accent)] opacity-20 ${isVisible ? 'opacity-60 transition-opacity duration-1000 delay-1500' : ''}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 