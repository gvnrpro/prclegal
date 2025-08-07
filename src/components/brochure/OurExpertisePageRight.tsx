export const OurExpertisePageRight = () => {
  const rightServices = [
    {
      category: "Real Estate & Construction",
      items: [
        "Property Transactions",
        "Construction Contracts",
        "Development Agreements",
        "Property Management",
        "Real Estate Finance",
        "RERA Compliance"
      ]
    },
    {
      category: "Dispute Resolution",
      items: [
        "Commercial Litigation",
        "Arbitration Proceedings",
        "Mediation Services",
        "Debt Recovery",
        "Contract Disputes",
        "Cross-border Disputes"
      ]
    },
    {
      category: "Regulatory Compliance",
      items: [
        "AML/CFT Compliance",
        "Data Protection (GDPR)",
        "Financial Services Regulation",
        "Healthcare Regulation",
        "Environmental Compliance",
        "Tax Advisory"
      ]
    },
    {
      category: "Family & Personal Law",
      items: [
        "Personal Status Matters",
        "Inheritance & Wills",
        "Family Business Succession",
        "Guardianship Matters",
        "Cross-border Family Issues",
        "Asset Protection"
      ]
    }
  ];

  return (
    <div className="brochure-page min-h-full relative bg-off-white">
      {/* Header Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-matte-gold to-transparent"></div>
      
      {/* Spacer for headline alignment with left page */}
      <div className="pt-32 pb-12">
        {/* This space aligns with the headline on the left page */}
      </div>
      
      {/* Services Content */}
      <div className="px-16 pb-20 print:px-12 print:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {rightServices.map((service, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-montserrat text-xl font-bold text-deep-navy border-b border-matte-gold/30 pb-2">
                {service.category}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="font-montserrat text-base text-deep-navy/80 leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-matte-gold rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-16 right-16 flex items-center justify-between print:bottom-6 print:left-12 print:right-12">
        <span className="font-montserrat text-sm text-deep-navy font-semibold px-3 py-1 border border-matte-gold/40 rounded-sm">7</span>
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