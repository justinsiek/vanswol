'use client';

import { useEffect, useRef, useState } from 'react';

export default function Anticipation() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-40 overflow-hidden relative bg-gradient-to-b from-[var(--tertiary)] to-[var(--secondary)]"
    >
      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-32 bg-[var(--accent)] opacity-20"></div>

      <div className="container mx-auto px-12 relative">
        {/* Top decorative element */}
        <div className="flex justify-center mb-24">
          <div className={`w-10 h-10 relative ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div className="absolute inset-0 border border-[var(--accent)] rotate-45 opacity-30"></div>
            <div className={`absolute inset-[3px] border border-[var(--accent)] rotate-45 transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-50' : 'opacity-0'}`}></div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-[var(--accent)] uppercase tracking-[0.4em] text-xs mb-8 font-light">
              Limited Edition
            </h2>
            <h3 className="font-playfair text-3xl md:text-5xl mb-10 leading-tight font-light">
              Anticipate <span className="text-[var(--accent)]">Excellence</span>
            </h3>
            <p className="text-base opacity-80 mb-12 max-w-xl mx-auto leading-relaxed tracking-wide font-light">
              Our master watchmakers are preparing an unprecedented limited collection of only 25 pieces. Join our waiting list to be among the first to receive exclusive details.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="relative w-full md:w-auto flex-1 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className="w-full bg-transparent border-b border-[var(--foreground)] border-opacity-20 py-3 px-4 focus:outline-none focus:border-[var(--accent)] transition-colors duration-500 text-sm placeholder:text-[var(--foreground)] placeholder:text-opacity-50"
                  required
                />
                
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[var(--accent)] transition-all duration-700 group-focus-within:w-full"></div>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className="text-xs text-[var(--foreground)] uppercase tracking-[0.25em] border border-[var(--foreground)] border-opacity-30 hover:border-[var(--accent)] py-3 px-10 transition-all duration-700 hover:text-[var(--accent)] relative overflow-hidden group font-light"
              >
                <span className="relative z-10">
                  {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Confirmed' : 'Register Interest'}
                </span>
                <span className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-700"></span>
              </button>
            </div>
            
            {formStatus === 'success' && (
              <div className="mt-6 text-sm text-[var(--accent)] opacity-90 tracking-wide fade-in">
                <span className="inline-block mr-2">✓</span> Thank you for your interest. We will be in touch soon.
              </div>
            )}
          </form>

          {/* Bottom animated line */}
          <div className="flex justify-center mt-24">
            <div 
              className={`w-0 h-[1px] bg-[var(--accent)] transition-all duration-1500 delay-900 ${isVisible ? 'w-32 opacity-40' : 'opacity-0'}`}
            ></div>
          </div>
        </div>
      </div>

    </section>
  );
} 