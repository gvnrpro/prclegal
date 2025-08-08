// It's best practice to import your image assets at the top.
// Ensure this path '/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png' is correct for your project's public folder structure.
import logoSrc from '/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png';

export const CoverPage = () => {
  return (
    <div className="brochure-page h-full relative bg-navy-primary overflow-hidden print:bg-navy-primary">
      
      {/* Professional paper texture for print */}
      <div className="absolute inset-0 paper-texture opacity-30"></div>

      {/* Legal profession background elements */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="fill-white/10">
          <path d="M400 100 L420 160 L360 140 Z" />
          <circle cx="200" cy="200" r="30" opacity="0.3" />
          <rect x="600" y="400" width="80" height="40" rx="5" opacity="0.4" />
        </svg>
      </div>

      {/* Main content optimized for print - Perfect centering */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-16 z-10 print:px-20">
        
        {/* Logo with print optimization */}
        <div className="mb-6">
          <img
            src={logoSrc} 
            alt="Precedential Legal Consultancy Logo"
            className="w-20 h-20 mx-auto print:w-18 print:h-18"
          />
        </div>

        {/* Company Name - Professional print typography */}
        <h1 className="font-cinzel text-hero font-bold text-white mb-3 tracking-wider leading-none">
          PRECEDENTIAL
        </h1>
        <h2 className="font-montserrat text-subhead text-white/90 mb-8 tracking-[0.2em] uppercase font-medium">
          LEGAL CONSULTANCY
        </h2>

        {/* Professional accent line */}
        <div className="w-32 h-0.5 bg-gold-accent mb-8"></div>

        {/* Tagline with print optimization */}
        <p className="font-montserrat text-body-lg text-white/95 leading-relaxed max-w-lg font-light mb-8">
          Setting the Precedent for Your Success
        </p>

        {/* Legal credentials indicator */}
        <div className="text-center">
          <p className="font-montserrat text-small text-gold-accent font-semibold uppercase tracking-wider">
            UAE Licensed Legal Consultancy
          </p>
        </div>

      </div>
    </div>
  );
};
