'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-[var(--background)] z-0">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0.4px,_transparent_1px)] bg-[length:40px_40px] opacity-[0.03] z-0"></div>
      </div>
      
      {/* Animated gold elements */}
      <div className="absolute inset-0 overflow-visible">
        {/* Horizontal lines */}
        <div className={`absolute top-[12%] sm:top-[15%] left-0 h-[1px] bg-[var(--accent)] bg-opacity-20 transform ${loaded ? 'w-full' : 'w-0'}`}
             style={{ transition: 'width 1.8s ease-out', transitionDelay: '800ms' }}></div>
        <div className={`absolute bottom-[5%] sm:bottom-[15%] right-0 h-[1px] bg-[var(--accent)] bg-opacity-20 transform ${loaded ? 'w-full' : 'w-0'}`}
             style={{ transition: 'width 1.8s ease-out', transitionDelay: '900ms' }}></div>
             
        {/* Animated circles with drawing effect - responsive for all screens */}
        <div className="absolute inset-[-100%] sm:inset-[-50%] flex items-center justify-center overflow-visible">
          {/* Outer circle - adjusted for better visibility on all screens */}
          <div className="relative w-[120vmin] h-[120vmin] sm:w-[180vw] sm:h-[180vw] max-w-[1600px] max-h-[1600px] overflow-visible">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <circle 
                cx="100" 
                cy="100" 
                r="85" 
                fill="none" 
                stroke="var(--accent)" 
                strokeWidth="0.1" 
                strokeOpacity="0.1"
                strokeDasharray="534.1"
                strokeDashoffset={loaded ? "0" : "534.1"}
                style={{ 
                  transition: 'stroke-dashoffset 2.5s ease-out',
                  transitionDelay: '1000ms'
                }}
              />
            </svg>
          </div>
          
          {/* Middle circle */}
          <div className="absolute w-[110vmin] h-[110vmin] sm:w-[160vw] sm:h-[160vw] max-w-[1500px] max-h-[1500px] overflow-visible">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <circle 
                cx="100" 
                cy="100" 
                r="80" 
                fill="none" 
                stroke="var(--accent)" 
                strokeWidth="0.15" 
                strokeOpacity="0.15"
                strokeDasharray="502.7"
                strokeDashoffset={loaded ? "0" : "502.7"}
                style={{ 
                  transition: 'stroke-dashoffset 2.3s ease-out',
                  transitionDelay: '1200ms'
                }}
              />
            </svg>
          </div>
          
          {/* Inner circle */}
          <div className="absolute w-[100vmin] h-[100vmin] sm:w-[140vw] sm:h-[140vw] max-w-[1400px] max-h-[1400px] overflow-visible">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
              <circle 
                cx="100" 
                cy="100" 
                r="75" 
                fill="none" 
                stroke="var(--accent)" 
                strokeWidth="0.2" 
                strokeOpacity="0.2"
                strokeDasharray="471.2"
                strokeDashoffset={loaded ? "0" : "471.2"}
                style={{ 
                  transition: 'stroke-dashoffset 2s ease-out',
                  transitionDelay: '1400ms'
                }}
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 relative z-10 h-full flex items-center">
        <div className={`mx-auto w-full transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
             style={{ transitionDelay: '300ms' }}>
          <div className="flex flex-col items-center justify-center text-center min-h-[80vh] sm:min-h-0">
            {/* Content column - fully responsive with improved mobile spacing */}
            <div className="w-full max-w-4xl mx-auto py-8 sm:py-0">
              <div className="relative mb-6 sm:mb-6">
                <div className={`absolute -top-3 sm:-top-4 left-1/2 w-16 h-[1px] bg-[var(--accent)] opacity-60 shimmer ${loaded ? 'draw-line-h' : 'w-0'}`}
                     style={{ transitionDelay: '450ms', transform: 'translateX(-50%)' }}></div>
                <h2 className={`text-[var(--accent)] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs mb-5 sm:mb-6 font-light opacity-0 ${
                  loaded ? 'animate-fade-in' : ''
                }`}
                     style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                  Est. 1844
                </h2>
              </div>
              
              <h1 className="font-playfair mb-8 sm:mb-8 md:mb-12 leading-tight font-light">
                <span className={`block text-4xl sm:text-4xl md:text-6xl lg:text-7xl opacity-0 ${
                  loaded ? 'animate-fade-in' : ''
                }`} style={{ animationDelay: '750ms', animationFillMode: 'forwards' }}>
                  A New Era in
                </span>
                <span className={`block text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-[var(--accent)] opacity-0 ${
                  loaded ? 'animate-fade-in' : ''
                }`} style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
                  High-End Craftsmanship
                </span>
              </h1>
              
              <p className={`text-lg sm:text-lg opacity-0 mb-10 sm:mb-12 md:mb-16 font-light leading-relaxed max-w-2xl mx-auto tracking-wide ${
                loaded ? 'animate-fade-in' : ''
              }`} style={{ animationDelay: '1050ms', animationFillMode: 'forwards' }}>
                Timepieces crafted with uncompromising attention to detail, where tradition meets innovation in perfect harmony.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center">
                <button className={`px-10 py-4 bg-transparent border border-[var(--accent)] text-[var(--accent)] uppercase tracking-widest text-xs hover:text-[var(--background)] transition-all duration-700 elegant-button group opacity-0 w-full sm:w-auto ${
                  loaded ? 'animate-fade-in' : ''
                }`} style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
                  <span className="relative z-10 transition-colors duration-700 group-hover:text-[var(--background)]">
                    Discover Collections
                  </span>
                </button>
                <button className={`px-10 py-4 bg-transparent text-[var(--foreground)] uppercase tracking-widest text-xs hover:text-[var(--accent)] transition-all duration-700 luxury-hover opacity-0 w-full sm:w-auto ${
                  loaded ? 'animate-fade-in' : ''
                }`} style={{ animationDelay: '1350ms', animationFillMode: 'forwards' }}>
                  Our Heritage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 