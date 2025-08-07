import { Globe, Mail, Phone } from 'lucide-react';

export const ContactPageRedesigned = () => {
  return (
    <div className="brochure-page min-h-full relative bg-deep-navy overflow-hidden">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-matte-gold to-transparent"></div>
      
      {/* Abstract skyline background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 128" className="fill-current text-pure-white">
          <rect x="50" y="60" width="30" height="68" />
          <rect x="100" y="40" width="25" height="88" />
          <rect x="150" y="80" width="20" height="48" />
          <rect x="200" y="20" width="35" height="108" />
          <rect x="260" y="50" width="28" height="78" />
          <rect x="320" y="70" width="22" height="58" />
          <rect x="380" y="30" width="40" height="98" />
          <rect x="450" y="55" width="25" height="73" />
          <rect x="500" y="75" width="30" height="53" />
          <rect x="560" y="45" width="35" height="83" />
          <rect x="620" y="65" width="20" height="63" />
          <rect x="670" y="35" width="25" height="93" />
          <rect x="720" y="80" width="30" height="48" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 p-16 min-h-full flex flex-col justify-center print:p-12">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline */}
          <h1 className="font-rasputin text-6xl font-normal text-pure-white mb-8 leading-tight print:text-5xl">
            Let's Build Your Legal Confidence
          </h1>
          
          {/* Subtitle */}
          <p className="font-montserrat text-xl text-pure-white/90 mb-16 leading-relaxed max-w-2xl mx-auto">
            Ready to experience legal partnership that puts your success first? Connect with us today.
          </p>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Website */}
            <div className="text-center">
              <div className="w-16 h-16 bg-matte-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-deep-navy" />
              </div>
              <h3 className="font-montserrat text-lg font-semibold text-pure-white mb-2">Website</h3>
              <p className="font-montserrat text-base text-matte-gold">
                www.precedentiallegal.com
              </p>
            </div>
            
            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-matte-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-deep-navy" />
              </div>
              <h3 className="font-montserrat text-lg font-semibold text-pure-white mb-2">Email</h3>
              <p className="font-montserrat text-base text-matte-gold">
                info@precedentiallegal.com
              </p>
            </div>
            
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-matte-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-deep-navy" />
              </div>
              <h3 className="font-montserrat text-lg font-semibold text-pure-white mb-2">Phone</h3>
              <p className="font-montserrat text-base text-matte-gold">
                +971 (0) 4 123 4567
              </p>
            </div>
            
          </div>
          
          {/* QR Code Section */}
          <div className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-8 inline-block">
            <h3 className="font-montserrat text-lg font-semibold text-pure-white mb-4">
              Scan for Instant Access
            </h3>
            <img 
              src="/lovable-uploads/qr-code-contact.png" 
              alt="QR Code for contact" 
              className="w-32 h-32 mx-auto mb-4 bg-pure-white p-2 rounded"
            />
            <p className="font-montserrat text-sm text-pure-white/80">
              Mobile-optimized consultation booking
            </p>
          </div>
          
        </div>
      </div>

      {/* UAE Licensing Badge */}
      <div className="absolute top-16 right-16 bg-matte-gold text-deep-navy px-4 py-2 rounded-full print:top-12 print:right-12">
        <span className="font-montserrat text-sm font-bold">UAE LICENSED</span>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-16 right-16 flex items-center justify-between print:bottom-6 print:left-12 print:right-12">
        <span className="font-montserrat text-sm text-pure-white font-semibold px-3 py-1 border border-matte-gold/40 rounded-sm bg-deep-navy/80">8</span>
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