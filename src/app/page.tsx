'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Custom theme state - default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Get current month data in one place
  const getCurrentMonthData = () => {
    const currentMonth = new Date().getMonth() + 1;
    
    const monthLogos = {
      1: { name: 'January', file: '/logo-january.svg' },
      2: { name: 'February', file: '/logo-february.svg' },
      3: { name: 'March', file: '/logo-march.svg' },
      4: { name: 'April', file: '/logo-april.svg' },
      5: { name: 'May', file: '/logo-may.svg' },
      6: { name: 'June', file: '/logo-june.svg' },
      7: { name: 'July', file: '/logo-july.svg' },
      8: { name: 'August', file: '/logo.svg' }, // Default logo for August
      9: { name: 'September', file: '/logo-september.svg' },
      10: { name: 'October', file: '/logo-october.svg' },
      11: { name: 'November', file: '/logo-november.svg' },
      12: { name: 'December', file: '/logo-december.svg' }
    };
    
    const monthData = monthLogos[currentMonth as keyof typeof monthLogos];
    
    return {
      month: currentMonth,
      name: monthData.name,
      file: monthData.file,
      cssName: monthData.name.toLowerCase()
    };
  };
  
  const currentMonth = getCurrentMonthData();
  console.log(currentMonth);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 relative"
      style={{
        backgroundColor: `var(--${currentMonth.cssName}-bg)`,
        color: `var(--${currentMonth.cssName}-fg)`
      }}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <div className="text-center max-w-2xl w-full px-4">
        {/* Dynamic Monthly Logo */}
        <div className="mb-8 sm:mb-16">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8">
            <Image 
              src={currentMonth.file} 
              alt={`Thinking Labs Logo - ${currentMonth.name}`} 
              width={64}
              height={64}
              className="w-full h-full"
              style={{
                filter: !isDarkMode ? "invert(1)" : "none"
              }}
            />
          </div>
        </div>

        {/* Main Text */}
        <h1 
          className="text-4xl sm:text-6xl md:text-8xl font-light mb-4 sm:mb-6 tracking-tight"
          style={{ color: `var(--${currentMonth.cssName}-fg)` }}
        >
          Thinking Labs
        </h1>

        <p 
          className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-16 font-light"
          style={{ color: `var(--${currentMonth.cssName}-accent)` }}
        >
          Coming Soon
        </p>

        {/* Subtle CTA */}
        <div className="opacity-60 hover:opacity-100 transition-opacity duration-500">
          <p 
            className="text-xs sm:text-sm uppercase tracking-widest mb-4"
            style={{ color: `var(--${currentMonth.cssName}-accent)` }}
          >
            San Francisco, CA
          </p>
          
          {/* Mission Link */}
          <Link 
            href="/mission"
            className="inline-block text-sm opacity-70 hover:opacity-100 transition-opacity duration-200 underline"
            style={{ color: `var(--${currentMonth.cssName}-accent)` }}
          >
            Read Our Mission Charter
          </Link>
        </div>
      </div>
    </main>
  )
}
