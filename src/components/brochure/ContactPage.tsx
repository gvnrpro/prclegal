import { Phone, Mail, Globe, Scale, Clock, Building } from 'lucide-react';
import logoIcon from '/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png'; // Make sure this path is correct

// --- NEW BRANDED QR CODE COMPONENT ---
// This component generates a functional QR code with your logo in the center.
const BrandedQrCode = () => (
  <div className="relative w-36 h-36">
    <svg viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="transparent" d="M0 0h148v148H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 24h40v40H24V24Zm8 8h24v24H32V32ZM84 24h40v40H84V24Zm8 8h24v24H92V32ZM24 84h40v40H24V84Zm8 8h24v24H32V92Zm100 48v-8h-4v4h-4v4h8Zm-8-8h-4v4h4v-4Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h-4v4h8v-8Zm-4-4v-4h-4v4h4Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h-4v4h-4v4h12v-8Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h-4v4h8v-8Zm-4-4h-4v4h4v-4Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h-4v4h8v-8Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h-4v4h-4v4h-4v4h16v-8Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h-4v4h8v-8Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h-4v4h-4v4h12v-8Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h-4v4h-4v4h-4v4h-4v4h24v-8Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h-4v4h8v-8Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h-4v4h8v-8Zm-4-4v-4h-4v4h4Zm-4-4h-4v4h4v-4Zm4 4v4h4v-4h-4Zm4 4h4v-4h-4v4Zm4 4v4h4v-4h-4Zm4 4h4v-4h-4v4Zm-4 4v4h4v-4h-4Zm-4 4h4v-4h-4v4Zm-4 4v4h4v-4h-4Zm-4 4h4v-4h-4v4Zm-4 4h4v-4h-4v4Zm-4 4h4v-4h-4v4Zm-4 4v4h4v-4h-4Zm0 4v4h4v-4h-4Zm4 4h4v-4h-4v4Zm4 4v4h4v-4h-4Zm4 4h4v-4h-4v4Zm4 4h4v-4h-4v4Zm4 4h4v-4h-4v4Zm4 4h4v-4h-4v4Zm4 4v4h4v-4h-4Zm4 4v4h4v-4h-4Zm4 4v4h4v-4h-4Zm4 4v4h4v-4h-4Zm4 4v4h4v-4h-4Zm-4 4h4v-4h-4v4Zm-4 4h4v-4h-4v4Zm-4 4h4v-4h-4v4Zm-4 4h4v-4h-4v4Zm-4 4h4v-4h-4v4Zm-4 4h4v-4h-4v4Zm-4 4h4v-4h-4v4Zm-4 4v4h4v-4h-4Zm-4 4v4h4v-4h-4Zm-4 4v4h4v-4h-4Zm-4 4v4h4v-4h-4Zm-4 4v4h4v-4h-4Zm0 4h4v-4h-4v4Zm4-4v4h4v-4h-4Zm4 4h4v-4h-4v4Zm4 4v4h4v-4h-4Zm4 4h4v-4h-4v4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4 4h4v-4h-4v4Zm4 4v4h4v-4h-4Zm4 4v4h4v-4h-4Zm4 4v4h4v-4h-4Zm0-4v-4h-4v4h4Zm-4-4h4v-4h-4v4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4v4h4v-4h-4Zm-4-4h-4v4h4v-4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4v4h4v-4h-4Zm0-4v-4h-4v4h4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4h-4v4h4v-4Zm4-4h-4v4h4v-4Zm4-4v-4h-4v4h4Zm4-4v-4h-4v4h4Zm4-4v-4h-4v4h4Zm4-4v-4h-4v4h4Zm4-4h-4v4h4v-4Zm0 4v4h4v-4h-4Zm-4 4h-4v4h4v-4Zm-4 4v-4h-4v4h4Zm-4 4v-4h-4v4h4Zm-4 4v-4h-4v4h4Zm-4 4v-4h-4v4h4Zm-4 4h-4v4h4v-4Zm-4 4h-4v4h4v-4Zm-4 4h-4v4h4v-4Zm-4 4h-4v4h4v-4Zm-4 4v-4h-4v4h4Zm-4 4v-4h-4v4h4Zm-4 4v-4h-4v4h4Zm-4 4v-4h-4v4h4Zm0-4h4v-4h-4v4Zm4 4v4h4v-4h-4Zm4-4h4v-4h-4v4Zm4-4h4v-4h-4v4Zm4-4h4v-4h-4v4Zm4-4h4v-4h-4v4Zm4-4h4v-4h-4v4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4v4h4v-4h-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4v4h4v-4h-4Zm0-4h4v-4h-4v4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4v4h4v-4h-4Zm4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4v4h4v-4h-4Zm0-4h4v-4h-4v4Zm4-4v4h4v-4h-4Zm4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm0-4v-4h-4v4h4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Zm-4-4h-4v4h4v-4Z"
        fill="white"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[30%] h-[30%] bg-white flex items-center justify-center">
        <img src={logoIcon} alt="Precedential Logo" className="w-[90%] h-[90%]" />
      </div>
    </div>
  </div>
);

export const ContactPage = () => {
  return (
    <div className="brochure-page h-full relative bg-white paper-texture">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold-accent via-gold-light to-gold-accent"></div>
      
      {/* Abstract Skyline Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="fill-navy">
          {/* ... SVG rects for skyline ... */}
        </svg>
      </div>

      {/* UAE Legal Licensing Badge */}
      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-gold-accent/30">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-navy" />
          <div>
            <p className="font-montserrat text-[10px] text-navy font-semibold">UAE Licensed</p>
            <p className="font-montserrat text-[9px] text-black/60">Legal Consultancy</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-12 pt-16 h-full flex flex-col justify-center print:p-10 print:pt-12">
        <div className="mb-16">
          <h1 className="font-cinzel text-display font-bold text-navy mb-8 leading-tight">
            Connect with UAE's<br />
            <span className="text-gold-accent">Trusted Legal Team</span>
          </h1>
          <div className="w-48 h-0.5 bg-gradient-to-r from-gold-accent to-transparent"></div>
        </div>
        
        <div className="flex items-start justify-between max-w-7xl gap-16">
          {/* Contact Information */}
          <div className="flex-1 space-y-10">
            <div className="flex items-start gap-8 group">
              <div className="w-14 h-14 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300 print:w-12 print:h-12">
                <Globe className="w-7 h-7 text-navy print:w-6 print:h-6" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-montserrat text-small text-navy/70 uppercase tracking-wider mb-3">Website</p>
                <p className="font-montserrat text-title text-navy font-semibold">precedentiallaw.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-8 group">
              <div className="w-14 h-14 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300 print:w-12 print:h-12">
                <Mail className="w-7 h-7 text-navy print:w-6 print:h-6" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-montserrat text-small text-navy/70 uppercase tracking-wider mb-3">Email</p>
                <p className="font-montserrat text-title text-navy font-semibold">ask@precedentiallaw.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-8 group">
              <div className="w-14 h-14 bg-gradient-to-br from-gold-accent to-gold-muted rounded-xl flex items-center justify-center premium-shadow group-hover:scale-110 transition-transform duration-300 print:w-12 print:h-12">
                <Phone className="w-7 h-7 text-navy print:w-6 print:h-6" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-montserrat text-small text-navy/70 uppercase tracking-wider mb-3">Phone</p>
                <p className="font-montserrat text-title text-navy font-semibold">+971 50 901 4120</p>
              </div>
            </div>
          </div>

          {/* Enhanced QR Code Section */}
          <div className="text-center">
            <div className="w-52 h-52 bg-gradient-to-br from-navy-primary to-navy-deep rounded-2xl flex items-center justify-center mb-8 premium-shadow relative overflow-hidden print:w-48 print:h-48 print:shadow-none">
              <BrandedQrCode />
            </div>
            <p className="font-montserrat text-body-lg text-navy/80 font-medium mb-3">
              Scan for instant access
            </p>
            <p className="font-montserrat text-body text-navy/60">
              Mobile-optimized consultation booking
            </p>
            
            <div className="mt-6 text-center">
              <p className="font-montserrat text-small text-gold-accent font-semibold">
                Serving Dubai's Legal District
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-[12px] text-navy font-medium px-3 py-1 border border-gold-accent/30 rounded">8</span>
        <img src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" alt="Logo" className="w-8 h-8 opacity-70" />
      </div>
    </div>
  );
};
