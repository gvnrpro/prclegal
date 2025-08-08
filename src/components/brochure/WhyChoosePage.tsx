import { Shield, Award, Users, MessageCircle, Clock, Globe } from 'lucide-react';

export const WhyChoosePage = () => {
  const advantages = [
    {
      icon: Shield,
      title: "UAE Legal Expertise",
      description: "Deep specialization in local regulatory frameworks and commercial law"
    },
    {
      icon: Award,
      title: "International Standards", 
      description: "Global best practices combined with local market knowledge"
    },
    {
      icon: Users,
      title: "Client-Centered Approach",
      description: "Tailored legal strategies focused on your business objectives"
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Clear pricing structure and regular progress updates"
    },
    {
      icon: Clock,
      title: "Efficient Resolution",
      description: "Streamlined processes for faster case completion"
    },
    {
      icon: Globe,
      title: "UAE Market Expertise",
      description: "Comprehensive knowledge of UAE's evolving business landscape"
    }
  ];

  return (
    <div className="brochure-page h-full relative bg-white paper-texture print:bg-white pt-8 pb-16">
      {/* Professional header with legal accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Legal symbols background */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="fill-navy/5">
          <path d="M100 300 L120 260 L140 300 L120 340 Z" />
          <path d="M700 150 L720 110 L740 150 L720 190 Z" />
          <circle cx="650" cy="450" r="25" />
        </svg>
      </div>
      
      {/* Content optimized for print */}
      <div className="px-8 py-4 h-full flex flex-col justify-center">
        {/* Main Headline */}
        <div className="text-center mb-6">
          <h1 className="font-cinzel text-display font-bold text-navy mb-4 leading-tight">
            Why Choose Precedential
          </h1>
          <div className="w-20 h-0.5 bg-gold-accent mx-auto mt-4"></div>
        </div>

        {/* Professional quote */}
        <div className="text-center mb-6 p-4 border-l-4 border-gold-accent bg-navy/5 rounded-r-lg">
          <p className="font-montserrat text-body text-navy italic font-medium">
            "Excellence in legal counsel through comprehensive expertise and unwavering commitment to client success"
          </p>
        </div>

        {/* Advantages Grid - Print optimized */}
        <div className="grid grid-cols-3 gap-4 mb-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg border border-gold-accent/30 shadow-sm print:p-3 print:shadow-none">
              <div className="w-10 h-10 bg-gold-accent rounded-full mx-auto mb-3 flex items-center justify-center print:w-8 print:h-8">
                <advantage.icon className="w-5 h-5 text-navy print:w-4 print:h-4" strokeWidth={2.5} />
              </div>
              <h3 className="font-montserrat text-title font-semibold text-navy mb-2">
                {advantage.title}
              </h3>
              <p className="font-montserrat text-body text-black/80 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 w-32 h-0.5 bg-gold-accent mx-auto"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">4</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-6 h-6 opacity-60"
        />
      </div>
    </div>
  );
};