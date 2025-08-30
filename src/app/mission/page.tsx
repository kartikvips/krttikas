'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Mission() {
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
      8: { name: 'August', file: '/logo.svg' },
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
      className="min-h-screen flex flex-col p-4 sm:p-8 relative"
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

      {/* Navigation */}
      <div className="mb-8">
        <Link 
          href="/"
          className="inline-flex items-center text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
          style={{ color: `var(--${currentMonth.cssName}-accent)` }}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Mission Content */}
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-8">
            <Image 
              src={currentMonth.file} 
              alt={`Thinking Labs Logo - ${currentMonth.name}`} 
              width={80}
              height={80}
              className="w-full h-full"
              style={{
                filter: !isDarkMode ? "invert(1)" : "none"
              }}
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light mb-6 tracking-tight">
            Mission Charter
          </h1>
          
          <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto opacity-80">
            Our commitment to technology that uplifts human creativity, well-being, and freedom.
          </p>
        </div>

        {/* Mission Sections */}
        <div className="space-y-12">
          {/* Purpose */}
          <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-light mb-4 flex items-center">
              <span className="text-2xl mr-3">🌱</span>
              Purpose
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              To create technology that uplifts human creativity, well-being, and freedom. 
              We believe technology should amplify what makes us human, not replace it.
            </p>
          </section>

          {/* Principles */}
          <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-light mb-6 flex items-center">
              <span className="text-2xl mr-3">⚡</span>
              Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="opacity-90">Tech for good</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="opacity-90">Sustainability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="opacity-90">Accessibility</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span className="opacity-90">Integrity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="opacity-90">Creativity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="opacity-90">Community</span>
              </div>
            </div>
          </section>

          {/* Commitments */}
          <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-light mb-6 flex items-center">
              <span className="text-2xl mr-3">🤝</span>
              Commitments
            </h2>
            <ul className="space-y-4 text-lg leading-relaxed opacity-90">
              <li className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">•</span>
                <span>We pledge to reinvest sustainable growth in community impact</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Share knowledge openly where possible to uplift the entire ecosystem</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">•</span>
                <span>Prioritize user well-being and mental health in all our products</span>
              </li>
            </ul>
          </section>

          {/* Sustainable Growth */}
          <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-light mb-4 flex items-center">
              <span className="text-2xl mr-3">🌿</span>
              Sustainable Growth
            </h2>
            <p className="text-lg leading-relaxed opacity-90 mb-4">
              Sustainable growth fuels our mission; it is not the mission itself. 
              We measure success by the communities we strengthen and the knowledge we share.
            </p>
            <p className="text-lg leading-relaxed opacity-90 mb-4">
              We aim to operate with the generosity, discipline, and stewardship of a nonprofit, 
              while sustaining ourselves through the resources we generate.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Our focus is on reinvestment, accessibility, and long-term human benefit.
            </p>
          </section>

          {/* Evolution */}
          <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl font-light mb-4 flex items-center">
              <span className="text-2xl mr-3">🔄</span>
              Evolution
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              This charter is reviewed annually to ensure it remains aligned with our purpose 
              and the evolving needs of our community. We commit to growing and adapting 
              while staying true to our core values.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 opacity-60">
          <p className="text-sm" style={{ color: `var(--${currentMonth.cssName}-accent)` }}>
            San Francisco, CA • Building the future, one conscious decision at a time
          </p>
        </div>
      </div>
    </main>
  )
}
