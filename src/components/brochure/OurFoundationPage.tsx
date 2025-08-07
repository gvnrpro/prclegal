export const OurFoundationPage = () => {
  return (
    <div className="brochure-page min-h-full relative bg-off-white">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-matte-gold to-transparent"></div>
      
      {/* Split Layout */}
      <div className="min-h-full flex">
        {/* Left Side - Image */}
        <div className="w-1/2 relative overflow-hidden">
          <img 
            src="/lovable-uploads/bb1220f9-ac19-4e73-a984-bb3c2565385b.png" 
            alt="Professional legal consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-off-white/20"></div>
        </div>
        
        {/* Right Side - Content */}
        <div className="w-1/2 p-16 flex flex-col justify-center print:p-12">
          <h1 className="font-rasputin text-6xl font-normal text-deep-navy mb-12 leading-tight print:text-5xl">
            Our Foundation
          </h1>
          
          <div className="space-y-8">
            <p className="font-montserrat text-lg leading-relaxed text-deep-navy/90 print:text-base">
              Precedential Legal Consultancy FZ LLC is a UAE-licensed firm committed to providing 
              comprehensive legal support to individuals and businesses across the Emirates.
            </p>
            
            <p className="font-montserrat text-lg leading-relaxed text-deep-navy/90 print:text-base">
              We combine deep knowledge of UAE law with international standards to deliver legal solutions 
              that are clear, strategic, and commercially relevant.
            </p>
            
            <p className="font-montserrat text-lg leading-relaxed text-deep-navy/90 print:text-base">
              Our approach ensures that every client receives tailored advice that aligns with their 
              specific objectives and the dynamic UAE market landscape.
            </p>
          </div>
          
          {/* Accent line */}
          <div className="mt-12 w-32 h-0.5 bg-matte-gold"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-16 right-16 flex items-center justify-between print:bottom-6 print:left-12 print:right-12">
        <span className="font-montserrat text-sm text-deep-navy font-semibold px-3 py-1 border border-matte-gold/40 rounded-sm">2</span>
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