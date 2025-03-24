'use client';

import { useEffect, useRef, useState } from 'react';

type Collection = {
  id: number;
  name: string;
  description: string;
  price: string;
};

const collections: Collection[] = [
  {
    id: 1,
    name: "Chronograph Legacy",
    description: "A masterpiece of precision engineering, featuring hand-finished movements and a sophisticated complication system.",
    price: "From €18,500",
  },
  {
    id: 2,
    name: "Perpetual Calendar",
    description: "The pinnacle of horological achievement, accurately tracking days, months, and leap years until the year 2100.",
    price: "From €24,900",
  },
  {
    id: 3,
    name: "Tourbillon Excellence",
    description: "Our most exclusive creation, featuring a tourbillon cage that rotates to counteract the effects of gravity.",
    price: "From €29,800",
  },
];

export default function FeaturedCollections() {
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
        threshold: 0.1,
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
      className="py-40 bg-[var(--tertiary)]"
    >
      <div className="container mx-auto px-12">
        <div className={`text-center mb-32 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-[var(--accent)] uppercase tracking-[0.4em] text-xs mb-8 font-light opacity-90">
            Exceptional Timepieces
          </h2>
          <h3 className="font-playfair text-3xl md:text-5xl mb-12 leading-tight font-light">
            Featured <span className="text-[var(--accent)]">Collections</span>
          </h3>
          
          {/* Animated centerline */}
          <div className="flex justify-center">
            <div className={`w-20 h-[1px] bg-[var(--accent)] opacity-60 mt-6 ${isVisible ? 'draw-line-h shimmer' : 'w-0'}`}></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className={`transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${400 + index * 300}ms` }}
            >
              <div className="relative group">
                {/* Watch image placeholder */}
                <div className="aspect-square bg-[var(--secondary)] mb-12 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[var(--accent)] opacity-30 text-lg font-light italic">Watch Image</span>
                  </div>
                  
                  {/* Diamond marker at corner */}
                  <div className="absolute top-6 left-6 w-2 h-2 opacity-20 transition-opacity duration-700 group-hover:opacity-80">
                    <div className="w-full h-full border border-[var(--accent)] rotate-45"></div>
                  </div>
                  
                  {/* Animated frame that appears on hover */}
                  <div className="absolute top-6 left-6 right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-0 h-[1px] bg-[var(--accent)] group-hover:w-full transition-all duration-1000"></div>
                    <div className="absolute top-0 right-0 w-[1px] h-0 bg-[var(--accent)] group-hover:h-full transition-all duration-1000 delay-150"></div>
                    <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-[var(--accent)] group-hover:w-full transition-all duration-1000 delay-300"></div>
                    <div className="absolute bottom-0 left-0 w-[1px] h-0 bg-[var(--accent)] group-hover:h-full transition-all duration-1000 delay-450"></div>
                  </div>
                </div>
                
                <h4 className="font-playfair text-xl mb-4 font-light">{collection.name}</h4>
                <p className="text-sm opacity-70 mb-8 font-light leading-relaxed tracking-wide">{collection.description}</p>
                <p className="text-[var(--accent)] font-normal mb-8 tracking-wider">{collection.price}</p>
                
                <button className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-700 luxury-hover py-2 font-light">
                  Discover Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="flex justify-center mt-28">
          <div className={`w-32 h-[1px] opacity-0 bg-[var(--accent)] ${isVisible ? 'opacity-30 transition-opacity duration-1000 delay-1500' : ''}`}></div>
        </div>
      </div>
    </section>
  );
}