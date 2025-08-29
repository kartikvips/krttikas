export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className="mb-16">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="w-8 h-8 bg-black rounded-full"></div>
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
            Get notified
          </p>
        </div>
      </div>
    </main>
  )
}
