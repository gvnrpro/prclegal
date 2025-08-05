import { Building, Scale, Users, Home, FileText, Search } from 'lucide-react';

export const ServicePortfolioPage = () => {
  const services = [
    {
      category: "Corporate & Commercial Law",
      icon: Building,
      items: [
        "Company Formation (Mainland & Free Zone)",
        "Contract Drafting & Review",
        "Mergers & Acquisitions (M&A)",
        "Shareholder Agreements",
        "Regulatory Compliance",
        "Business Succession Planning"
      ]
    },
    {
      category: "Dispute Resolution & Litigation",
      icon: Scale,
      items: [
        "Pre-litigation Strategy & Dispute Management",
        "Arbitration & Mediation Support",
        "Cheque Bounce & Execution Cases",
        "UAE Judgment Enforcement"
      ]
    },
    {
      category: "Employment & Labour Law",
      icon: Users,
      items: [
        "UAE Labour Law Advisory",
        "Termination & Compensation Claims",
        "Arbitrary Dismissal Cases",
        "HR Policies & Contract Drafting"
      ]
    },
    {
      category: "Property & Rental Law",
      icon: Home,
      items: [
        "Tenancy Dispute Resolution",
        "Property Transfer & Mortgage Legalities",
        "Custom Landlord–Tenant Contracts"
      ]
    },
    {
      category: "Family & Estate Management",
      icon: FileText,
      items: [
        "UAE Family & Divorce Law",
        "Wills & Guardianship Advisory",
        "Estate Planning & Cross-border Inheritance"
      ]
    },
    {
      category: "Specialized Legal Services",
      icon: Search,
      items: [
        "Travel Ban Resolution",
        "Trademark Registration & IP",
        "Bankruptcy & Insolvency",
        "AML Compliance & Due Diligence"
      ]
    }
  ];

  return (
    <div className="brochure-page min-h-full relative">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      {/* Content */}
      <div className="p-16 min-h-full print:p-12">
        <h1 className="font-cinzel text-display font-bold text-navy mb-10">
          Our Legal Services
        </h1>
        
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 overflow-y-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gold-accent/20 shadow-sm print:p-5 print:shadow-none">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-gold-accent rounded-lg flex items-center justify-center print:w-8 print:h-8">
                  <service.icon className="w-5 h-5 text-navy print:w-4 print:h-4" strokeWidth={2.5} />
                </div>
                <h3 className="font-montserrat text-title font-semibold text-navy">
                  {service.category}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 font-montserrat text-body text-black/90 leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-gold-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-10 w-40 h-0.5 bg-gold-accent"></div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-12 right-12 flex items-center justify-between">
        <span className="font-montserrat text-caption text-navy font-medium px-2 py-1 border border-gold-accent/30">6</span>
        <img 
          src="/lovable-uploads/8bed513d-4aba-454c-b47a-e6c98c3b7720.png" 
          alt="Logo" 
          className="w-6 h-6 opacity-60"
        />
      </div>
    </div>
  );
};