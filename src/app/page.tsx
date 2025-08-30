export default function Home() {
  // Get current month (0-11, so we add 1 to get 1-12)
  const currentMonth = new Date().getMonth() + 1;
  
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

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        {/* Dynamic Monthly Logo */}
        <div className="mb-16">
          <div className="w-16 h-16 mx-auto mb-8">
            <img src={currentMonthLogo.file} alt={`Thinking Labs Logo - ${currentMonthLogo.name}`} className="w-full h-full" />
          </div>
        </div>

        {/* Main Text */}
        <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tight">
          Thinking Labs
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-16 font-light">
          Coming Soon
        </p>

        {/* Subtle CTA */}
        <div className="opacity-60 hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            San Francisco, CA
          </p>
        </div>
      </div>
    </main>
  )
}
