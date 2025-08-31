'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getCurrentMonthData } from '@/utils/monthUtils';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  // Get theme from shared context
  const { isDarkMode } = useTheme();
  
  // Get current month data from shared utility
  const currentMonth = getCurrentMonthData();

  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 sm:p-8 relative"
      style={{
        backgroundColor: `var(--${currentMonth.cssName}-bg)`,
        color: `var(--${currentMonth.cssName}-fg)`
      }}
    >
      <div className="text-center max-w-2xl w-full px-4">
        {/* Dynamic Monthly Logo */}
        <div className="mb-8 sm:mb-16">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8">
            <Image 
              src={currentMonth.file} 
              alt={`Kṛttikās Logo - ${currentMonth.name}`} 
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
          Kṛttikās
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
        </div>
        <div className="opacity-60 hover:opacity-100 transition-opacity duration-500">
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
