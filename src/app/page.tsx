import Image from 'next/image';

export default function Home() {
  // Get current month (0-11, so we add 1 to get 1-12)
  const currentMonth = new Date().getMonth() + 1;
  
  // Check if we're in dark mode
  const isDarkMode = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Map month numbers to month names and logo files
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
  
  const currentMonthLogo = monthLogos[currentMonth as keyof typeof monthLogos];

  // Get month name for CSS variables
  const monthName = currentMonthLogo.name.toLowerCase();

  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      style={{
        backgroundColor: `var(--${monthName}-bg)`,
        color: `var(--${monthName}-fg)`
      }}
    >
      <div className="text-center max-w-2xl w-full px-4">
        {/* Dynamic Monthly Logo */}
        <div className="mb-8 sm:mb-16">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8">
            <Image 
              src={currentMonthLogo.file} 
              alt={`Thinking Labs Logo - ${currentMonthLogo.name}`} 
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
          style={{ color: `var(--${monthName}-fg)` }}
        >
          Thinking Labs
        </h1>

        <p 
          className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-16 font-light"
          style={{ color: `var(--${monthName}-accent)` }}
        >
          Coming Soon
        </p>

        {/* Subtle CTA */}
        <div className="opacity-60 hover:opacity-100 transition-opacity duration-500">
          <p 
            className="text-xs sm:text-sm uppercase tracking-widest"
            style={{ color: `var(--${monthName}-accent)` }}
          >
            San Francisco, CA
          </p>
        </div>
      </div>
    </main>
  )
}
