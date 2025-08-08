import { Globe, MapPin, Network, Scale, Users, Award } from 'lucide-react';

export const RegionalExpertisePage = () => {
  const expertisePoints = [
    {
      icon: Scale,
      title: "UAE Commercial Law",
      description: "Comprehensive understanding of UAE commercial legislation and regulatory compliance"
    },
    {
      icon: Globe,
      title: "UAE Free Zones",
      description: "Specialized expertise in DIFC, ADGM, and other UAE free zone regulations"
    },
    {
      icon: Users,
      title: "Corporate Formation",
      description: "Complete business setup services across all UAE emirates and jurisdictions"
    },
    {
      icon: Award,
      title: "Local Partnerships",
      description: "Strategic partnerships with UAE authorities and local business networks"
    }
  ];

  return (
    <div className="brochure-page min-h-full relative bg-white paper-texture">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Split Layout */}
      <div className="min-h-full flex">
        {/* Left Side - Image */}
        <div className="flex-1 min-w-0 relative bg-gradient-to-br from-grey-light via-white to-grey-light">
          <img 
            src="/lovable-uploads/f76ae9c9-cca4-4c3f-b532-a3aa8173a5e9.png" 
            alt="UAE Legal Expertise" 
            className="w-full h-full object-cover"
          />
          {/* UAE Flag accent */}
          <div className="absolute top-6 left-6 w-16 h-12 bg-gradient-to-r from-red-600 via-white to-green-600 rounded shadow-lg opacity-80"></div>
        </div>
        
        {/* Right Side - Content */}
        <div className="flex-1 min-w-0 p-8 flex flex-col justify-center bg-white print:p-6">
          <div className="mb-10">
            <h2 className="font-cinzel text-display font-bold text-navy mb-6 leading-tight">
              UAE Legal Expertise
            </h2>
            <div className="w-20 h-0.5 bg-gold-accent mb-8"></div>
            <p className="font-montserrat text-body-lg text-black/80 leading-relaxed mb-10">
              Specialized legal counsel for the UAE market, combining deep local knowledge 
              with international best practices to deliver strategic solutions for businesses 
              operating in the dynamic UAE legal landscape.
            </p>
          </div>

          {/* Expertise Points */}
          <div className="space-y-8">
            {expertisePoints.map((point, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gold-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 print:w-10 print:h-10">
                  <point.icon className="w-6 h-6 text-navy print:w-5 print:h-5" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-montserrat text-title font-semibold text-navy mb-3">
                    {point.title}
                  </h3>
                  <p className="font-montserrat text-body text-black/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* UAE Business Focus */}
          <div className="mt-6 p-4 bg-navy/5 rounded-lg border-l-4 border-gold-accent print:mt-4 print:p-3">
            <p className="font-montserrat text-body text-navy font-medium">
              "Precedential Legal Consultancy is licensed and based in the UAE, 
              providing authentic local expertise with global standards."
            </p>
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