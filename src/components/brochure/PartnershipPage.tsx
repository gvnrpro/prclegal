import { Shield, Target, Clock } from 'lucide-react';

export const PartnershipPage = () => {
  return (
    <div className="brochure-page min-h-full relative bg-white paper-texture">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content */}
      <div className="p-8 min-h-full flex flex-col justify-center print:p-6">
        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="font-cinzel text-display font-bold text-navy mb-4 leading-tight">
            Our Partnership Approach
          </h1>
          <div className="w-24 h-0.5 bg-gold-accent mx-auto mt-6"></div>
        </div>

        {/* Unlimited Legal Support Section */}
        <div className="bg-navy-primary text-white rounded-xl p-6 mb-6 border-2 border-gold-accent print:p-4 print:mb-4">
          <div className="text-center mb-10">
            <h2 className="font-cinzel text-headline font-bold text-white mb-6">
              Unlimited Legal Support – One Predictable Price
            </h2>
            <div className="w-24 h-0.5 bg-gold-accent mx-auto mb-6"></div>
            <p className="font-montserrat text-body-lg text-white/90 leading-relaxed">
              Our subscription model, designed for SMEs seeking consistent legal support without hourly billing stress.
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="text-center mb-10 p-8 bg-white/10 rounded-lg border border-gold-accent/30 print:p-6 print:mb-8">
            <p className="font-montserrat text-subhead font-bold text-gold-accent mb-3">
              From AED 5,000/month
            </p>
            <p className="font-montserrat text-body text-white/80">
              Transparent pricing with no hidden fees
            </p>
          </div>

          {/* Service Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-navy" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-montserrat text-[14px] font-semibold text-white mb-2 print:text-[12px]">
                  Unlimited contract drafting, reviews, and edits
                </h3>
                <p className="font-montserrat text-[11px] text-white/80 leading-relaxed print:text-[10px]">
                  Complete contract lifecycle management without per-document fees
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-navy" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-montserrat text-[14px] font-semibold text-white mb-2 print:text-[12px]">
                  Unlimited legal consultations and advisory
                </h3>
                <p className="font-montserrat text-[11px] text-white/80 leading-relaxed print:text-[10px]">
                  Direct access to senior legal advisors for strategic guidance
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-navy" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-montserrat text-[14px] font-semibold text-white mb-2 print:text-[12px]">
                  Dedicated senior legal advisors
                </h3>
                <p className="font-montserrat text-[11px] text-white/80 leading-relaxed print:text-[10px]">
                  Consistent team ensuring continuity and deep business understanding
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-navy" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-montserrat text-[14px] font-semibold text-white mb-2 print:text-[12px]">
                  No hourly billing or long-term commitment
                </h3>
                <p className="font-montserrat text-[11px] text-white/80 leading-relaxed print:text-[10px]">
                  Flexible subscription with transparent monthly pricing structure
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-6 border-t border-white/20">
            <p className="font-montserrat text-[12px] text-gold-accent font-semibold print:text-[11px]">
              Designed specifically for UAE SMEs seeking predictable legal costs
            </p>
          </div>
        </div>

        <div className="mt-8 w-32 h-px bg-gold-accent"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">7</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-6 h-6 opacity-60"
        />
      </div>
    </div>
  );
};