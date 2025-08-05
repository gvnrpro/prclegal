export const WhoIsPage = () => {
  return (
    <div className="brochure-page h-full relative">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Split Layout */}
      <div className="h-full flex">
        {/* Left Side - Image */}
        <div className="w-1/2 relative overflow-hidden">
          <img 
            src="/lovable-uploads/bb1220f9-ac19-4e73-a984-bb3c2565385b.png" 
            alt="Professional legal consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brochure-page-bg/20"></div>
        </div>
        
        {/* Right Side - Content */}
        <div className="w-1/2 p-12 flex flex-col justify-center print:p-10">
          <h1 className="font-cinzel text-display font-bold text-navy mb-10 leading-tight">
            Who is Precedential?
          </h1>
          
          <div className="space-y-8">
            <p className="font-montserrat text-body-lg leading-relaxed text-black/90">
              Precedential Legal Consultancy FZ LLC is a UAE-licensed firm committed to providing 
              comprehensive legal support to individuals and businesses across the Emirates.
            </p>
            
            <p className="font-montserrat text-body-lg leading-relaxed text-black/90">
              We combine deep knowledge of UAE law with international standards to deliver legal solutions 
              that are clear, strategic, and commercially relevant.
            </p>
            
            <p className="font-montserrat text-body-lg leading-relaxed text-black/90">
              Our approach ensures that every client receives tailored advice that aligns with their 
              specific objectives and the dynamic UAE market landscape.
            </p>
          </div>
          
          {/* Accent line */}
          <div className="mt-10 w-32 h-0.5 bg-gold-accent"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-16 right-16 flex items-center justify-between print:bottom-6 print:left-12 print:right-12">
        <span className="font-montserrat text-small text-navy font-semibold px-3 py-1 border border-gold-accent/40 rounded-sm">2</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-8 h-8 opacity-70 print:w-6 print:h-6"
        />
      </div>
    </div>
  );
};