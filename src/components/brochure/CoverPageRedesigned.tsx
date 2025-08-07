export const CoverPageRedesigned = () => {
  return (
    <div className="brochure-page min-h-full relative bg-deep-navy overflow-hidden print:bg-deep-navy">
      
      {/* Subtle wing logo pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-8 h-full p-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 100 100" className="fill-current text-white">
                <path d="M50 20 L30 40 L35 50 L50 45 L65 50 L70 40 Z" opacity="0.3" />
                <path d="M50 55 L30 75 L35 85 L50 80 L65 85 L70 75 Z" opacity="0.2" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Main content - perfectly centered */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-16 z-10 print:px-20">
        
        {/* Logo Icon - Gold */}
        <div className="mb-12">
          <img
            src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
            alt="Precedential Legal Consultancy Logo"
            className="w-24 h-24 mx-auto print:w-20 print:h-20"
            style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(84%) saturate(2978%) hue-rotate(12deg) brightness(101%) contrast(101%)' }}
          />
        </div>

        {/* Company Name - Large white Rasputin alternative */}
        <h1 className="font-rasputin text-8xl font-normal text-pure-white mb-6 tracking-wider leading-none print:text-7xl">
          PRECEDENTIAL
        </h1>
        
        {/* Subtitle - Smaller white Montserrat */}
        <h2 className="font-montserrat text-xl text-pure-white mb-12 tracking-[0.3em] uppercase font-medium print:text-lg">
          LEGAL CONSULTANCY
        </h2>

        {/* Gold accent line */}
        <div className="w-32 h-0.5 bg-matte-gold my-8"></div>

        {/* Tagline - Small white */}
        <p className="font-montserrat text-lg text-pure-white leading-relaxed max-w-lg font-light print:text-base">
          Setting the Precedent for Your Success
        </p>

        {/* Legal credentials */}
        <div className="mt-16">
          <p className="font-montserrat text-sm text-matte-gold font-semibold uppercase tracking-wider">
            UAE Licensed Legal Consultancy
          </p>
        </div>

      </div>
    </div>
  );
};