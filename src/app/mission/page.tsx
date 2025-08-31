'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getCurrentMonthData } from '@/utils/monthUtils';
import { useTheme } from '@/contexts/ThemeContext';

export default function Mission() {
  // Get theme from shared context
  const { isDarkMode } = useTheme();
  
  // Get current month data from shared utility
  const currentMonth = getCurrentMonthData();

  return (
    <main 
      className="min-h-screen flex flex-col p-4 sm:p-8 relative"
      style={{
        backgroundColor: `var(--${currentMonth.cssName}-bg)`,
        color: `var(--${currentMonth.cssName}-fg)`
      }}
    >
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
              alt={`Kṛttikās Logo - ${currentMonth.name}`} 
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
            Our guiding principles and commitments for building technology that serves humanity.
          </p>
        </div>

        {/* Mission Sections */}
        <div className="space-y-16">
          {/* Purpose */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-light mb-6 flex items-center">
              <span className="text-3xl mr-4">🌱</span>
              Purpose
            </h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-3xl">
              To create technology that uplifts human creativity, well-being, and freedom. 
              We believe technology should amplify what makes us human, not replace it.
            </p>
          </section>

          {/* Principles */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-light mb-8 flex items-center">
              <span className="text-3xl mr-4">⚡</span>
              Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-lg opacity-90">Tech for good</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-lg opacity-90">Sustainability</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                <span className="text-lg opacity-90">Accessibility</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <span className="text-lg opacity-90">Integrity</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="text-lg opacity-90">Creativity</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                <span className="text-lg opacity-90">Community</span>
              </div>
            </div>
          </section>

          {/* Commitments */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-light mb-8 flex items-center">
              <span className="text-3xl mr-4">🤝</span>
              Commitments
            </h2>
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-start space-x-4">
                <span className="text-green-400 text-xl mt-1">•</span>
                <span className="text-lg leading-relaxed opacity-90">We pledge to reinvest sustainable growth in community impact</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-green-400 text-xl mt-1">•</span>
                <span className="text-lg leading-relaxed opacity-90">Share knowledge openly where possible to uplift the entire ecosystem</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-green-400 text-xl mt-1">•</span>
                <span className="text-lg leading-relaxed opacity-90">Prioritize user well-being and mental health in all our products</span>
              </div>
            </div>
          </section>

          {/* Sustainable Growth */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-light mb-6 flex items-center">
              <span className="text-3xl mr-4">🌿</span>
              Sustainable Growth
            </h2>
            <div className="space-y-6 max-w-3xl">
              <p className="text-xl leading-relaxed opacity-90">
                Sustainable growth fuels our mission; it is not the mission itself. 
                We measure success by the communities we strengthen and the knowledge we share.
              </p>
              <p className="text-xl leading-relaxed opacity-90">
                We aim to operate with the generosity, discipline, and stewardship of a nonprofit, 
                while sustaining ourselves through the resources we generate.
              </p>
              <p className="text-xl leading-relaxed opacity-90">
                Our focus is on reinvestment, accessibility, and long-term human benefit.
              </p>
            </div>
          </section>

          {/* Evolution */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-light mb-6 flex items-center">
              <span className="text-3xl mr-4">🔄</span>
              Evolution
            </h2>
            <p className="text-xl leading-relaxed opacity-90 max-w-3xl">
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
