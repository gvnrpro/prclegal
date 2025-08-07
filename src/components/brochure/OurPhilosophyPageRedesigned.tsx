export const OurPhilosophyPageRedesigned = () => {
  return (
    <div className="brochure-page min-h-full relative bg-off-white overflow-hidden">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-matte-gold to-transparent"></div>
      
      {/* Centered quote content */}
      <div className="min-h-full flex items-center justify-center p-16 print:p-12">
        <div className="max-w-4xl text-center">
          <blockquote className="relative">
            {/* Opening quote mark */}
            <div className="absolute -top-8 -left-8 text-6xl font-rasputin text-matte-gold opacity-60 print:text-5xl print:-top-6 print:-left-6">"</div>
            
            {/* Main quote */}
            <p className="font-rasputin text-5xl font-normal text-deep-navy leading-tight relative z-10 px-12 print:text-4xl print:px-8">
              Legal advice should feel like a strategic partnership—not a last resort.
            </p>
            
            {/* Closing quote mark */}
            <div className="absolute -bottom-8 -right-8 text-6xl font-rasputin text-matte-gold opacity-60 print:text-5xl print:-bottom-6 print:-right-6">"</div>
          </blockquote>
          
          {/* Accent Line */}
          <div className="w-24 h-0.5 bg-matte-gold mt-12 mx-auto"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-16 right-16 flex items-center justify-between print:bottom-6 print:left-12 print:right-12">
        <span className="font-montserrat text-sm text-deep-navy font-semibold px-3 py-1 border border-matte-gold/40 rounded-sm">3</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-8 h-8 opacity-70 print:w-6 print:h-6"
          style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(84%) saturate(2978%) hue-rotate(12deg) brightness(101%) contrast(101%)' }}
        />
      </div>
    </div>
  );
};