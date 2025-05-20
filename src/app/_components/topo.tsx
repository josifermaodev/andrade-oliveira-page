'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  
  useEffect(() => {
    const toggleVisibility = () => {
      
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

   
    window.addEventListener('scroll', toggleVisibility);
    
    
    toggleVisibility();
    
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

 
   const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className="relative bg-[#E6B902] hover:bg-[#c49e02] text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group flex items-center justify-center"
      >
        
        <ArrowUp 
          size={22} 
          className="group-hover:-translate-y-1 transition-transform duration-300"
        />
        
        
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Voltar ao topo
        </span>
        
        
        <svg 
          className="absolute top-0 left-0 w-full h-full -rotate-90" 
          viewBox="0 0 100 100"
        >
          <circle 
            cx="50" 
            cy="50" 
            r="46" 
            fill="none" 
            stroke="#ffffff33" 
            strokeWidth="4"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="46" 
            fill="none" 
            stroke="white" 
            strokeWidth="4" 
            strokeDasharray="289.5" 
            strokeDashoffset={289.5 - (289.5 * scrollProgress) / 100}
            className="transition-all duration-200"
          />
        </svg>
      </button>
    </div>
  );
}