import { Check, Scale, Users, Clock, Target, Shield } from 'lucide-react';

export const PrecedentialAdvantagePage = () => {
  const advantages = [
    {
      icon: Scale,
      title: "UAE Legal Expertise",
      description: "Deep understanding of local laws, regulations, and business practices across all Emirates."
    },
    {
      icon: Users,
      title: "Proactive Partnership",
      description: "We work alongside you as strategic partners, anticipating legal needs before they become urgent."
    },
    {
      icon: Clock,
      title: "Responsive Service",
      description: "Quick turnaround times and accessible communication when legal guidance is needed most."
    },
    {
      icon: Target,
      title: "Commercial Focus",
      description: "Legal advice tailored to your business objectives and market realities."
    },
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Full-spectrum legal support covering corporate, commercial, and regulatory compliance matters."
    }
  ];

  return (
    <div className="brochure-page min-h-full relative bg-off-white">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-matte-gold to-transparent"></div>
      
      {/* Content */}
      <div className="p-16 min-h-full flex flex-col justify-center print:p-12">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="font-rasputin text-6xl font-normal text-deep-navy mb-6 leading-tight print:text-5xl">
            The Precedential Advantage
          </h1>
          <p className="font-montserrat text-lg text-deep-navy/80 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of working with a legal consultancy that puts your success at the center of everything we do.
          </p>
        </div>
        
        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="bg-pure-white p-8 rounded-lg shadow-sm border border-matte-gold/20">
                <div className="flex items-start space-x-4">
                  {/* Gold checkmark icon */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-matte-gold flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-deep-navy" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat text-lg font-semibold text-deep-navy mb-3 leading-tight">
                      {advantage.title}
                    </h3>
                    <p className="font-montserrat text-base text-deep-navy/80 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom accent line */}
        <div className="w-32 h-0.5 bg-matte-gold mt-12 mx-auto"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-16 right-16 flex items-center justify-between print:bottom-6 print:left-12 print:right-12">
        <span className="font-montserrat text-sm text-deep-navy font-semibold px-3 py-1 border border-matte-gold/40 rounded-sm">4</span>
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