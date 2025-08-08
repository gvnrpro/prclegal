import { Globe, Scale, Users, Award } from 'lucide-react';

// It's good practice to export the component so it can be used elsewhere.
// I'm assuming this is the main component for this file, so I'll add a default export.
export default function RegionalExpertisePage() {
  const expertisePoints = [
    {
      icon: Scale,
      title: "UAE Commercial Law",
      description: "Comprehensive understanding of UAE commercial legislation and regulatory compliance."
    },
    {
      icon: Globe,
      title: "UAE Free Zones",
      description: "Specialized expertise in DIFC, ADGM, and other UAE free zone regulations."
    },
    {
      icon: Users,
      title: "Corporate Formation",
      description: "Complete business setup services across all UAE emirates and jurisdictions."
    },
    {
      icon: Award,
      title: "Local Partnerships",
      description: "Strategic partnerships with UAE authorities and local business networks."
    }
  ];

  return (
    // Increased bottom padding to ensure footer never overlaps content.
    <div className="brochure-page min-h-full relative bg-white paper-texture pt-12 pb-24">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      <div className="min-h-full flex pt-4">
        {/* Left Side - Image */}
        <div className="flex-1 min-w-0 relative bg-gradient-to-br from-grey-light via-white to-grey-light">
          <img 
            src="/lovable-uploads/f76ae9c9-cca4-4c3f-b532-a3aa8173a5e9.png" 
            alt="UAE Legal Expertise" 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x800/E5E7EB/333333?text=UAE+Expertise'; e.currentTarget.onerror = null; }}
          />
          {/* UAE Flag accent - Updated to be a more accurate representation */}
          <div className="absolute top-6 left-6 w-16 h-10 flex rounded shadow-lg overflow-hidden">
            <div className="w-1/4 bg-red-600 h-full"></div>
            <div className="w-3/4 flex flex-col">
              <div className="h-1/3 bg-green-500"></div>
              <div className="h-1/3 bg-white"></div>
              <div className="h-1/3 bg-black"></div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Content */}
        <div className="flex-1 min-w-0 p-10 flex flex-col bg-white print:p-6">
          <div className="mb-6">
            <h2 className="font-cinzel text-display font-bold text-navy mb-6 leading-tight">
              UAE Legal Expertise
            </h2>
            <div className="w-20 h-0.5 bg-gold-accent mb-6"></div>
            <p className="font-montserrat text-body-lg text-black/80 leading-relaxed">
              Specialized legal counsel for the UAE market, combining deep local knowledge 
              with international best practices to deliver strategic solutions.
            </p>
          </div>

          {/* Expertise Points: Adjusted spacing for better fit */}
          <div className="space-y-4">
            {expertisePoints.map((point, index) => {
              const Icon = point.icon; // Capitalize for JSX
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gold-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 print:w-10 print:h-10">
                    <Icon className="w-5 h-5 text-navy print:w-5 print:h-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-title font-semibold text-navy mb-1">
                      {point.title}
                    </h3>
                    {/* Slightly smaller text for description to save space */}
                    <p className="font-montserrat text-sm text-black/70 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* UAE Business Focus: Pushed to the bottom */}
          <div className="mt-auto pt-6">
            <div className="p-4 bg-navy/5 rounded-lg border-l-4 border-gold-accent print:p-3">
              <p className="font-montserrat text-sm text-navy font-medium italic">
                "Precedential Legal Consultancy is licensed and based in the UAE, 
                providing authentic local expertise with global standards."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">5</span>
        <img src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" alt="Logo" className="w-6 h-6 opacity-60" />
      </div>
    </div>
  );
};
