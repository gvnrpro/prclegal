import { MapPin } from 'lucide-react';

export const RegionalExpertisePageRedesigned = () => {
  return (
    <div className="brochure-page min-h-full relative bg-off-white">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-matte-gold to-transparent"></div>
      
      {/* Two-column layout */}
      <div className="min-h-full flex">
        {/* Left Side - World Map with UAE Pin */}
        <div className="w-1/2 relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-16">
          {/* Stylized World Map SVG */}
          <div className="relative w-full max-w-lg">
            <svg viewBox="0 0 800 400" className="w-full h-auto opacity-20">
              {/* Simplified world map continents */}
              <path d="M100 100 Q200 80 300 100 L320 150 Q250 180 150 160 Z" fill="#CBD5E1" />
              <path d="M350 120 Q450 100 550 120 L580 200 Q480 220 380 200 Z" fill="#CBD5E1" />
              <path d="M150 250 Q250 230 350 250 L370 320 Q270 340 170 320 Z" fill="#CBD5E1" />
              <path d="M400 240 Q500 220 600 240 L620 310 Q520 330 420 310 Z" fill="#CBD5E1" />
              <path d="M50 50 Q150 30 250 50 L270 120 Q170 140 70 120 Z" fill="#CBD5E1" />
            </svg>
            
            {/* UAE Pin */}
            <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="w-12 h-12 text-matte-gold drop-shadow-lg" fill="currentColor" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="font-montserrat text-sm font-semibold text-deep-navy bg-pure-white px-2 py-1 rounded shadow">
                    UAE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Deep Navy Panel with Content */}
        <div className="w-1/2 bg-deep-navy p-16 flex flex-col justify-center print:p-12">
          <h1 className="font-montserrat text-2xl font-bold text-pure-white mb-8 leading-tight tracking-wide">
            REGIONAL RELATIONS AND ADVICE IN LINE WITH THE LATEST LEGAL CHANGES
          </h1>
          
          <p className="font-montserrat text-lg text-pure-white/90 leading-relaxed mb-8">
            Our firm enjoys strong relationships with local and regional regulatory bodies, allowing us to keep abreast of developments and legislation.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-matte-gold rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-montserrat text-base text-pure-white/85 leading-relaxed">
                Direct access to regulatory updates and legislative changes
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-matte-gold rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-montserrat text-base text-pure-white/85 leading-relaxed">
                Established network across all Emirates and GCC region
              </p>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-matte-gold rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-montserrat text-base text-pure-white/85 leading-relaxed">
                Proactive guidance on emerging legal requirements
              </p>
            </div>
          </div>
          
          {/* Accent line */}
          <div className="mt-12 w-24 h-0.5 bg-matte-gold"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-16 right-16 flex items-center justify-between print:bottom-6 print:left-12 print:right-12">
        <span className="font-montserrat text-sm text-pure-white font-semibold px-3 py-1 border border-matte-gold/40 rounded-sm bg-deep-navy/80">5</span>
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