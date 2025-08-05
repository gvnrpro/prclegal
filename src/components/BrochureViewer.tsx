import React, { useState, useEffect } from 'react';
import { CoverPage } from './brochure/CoverPage';
import { WhoIsPage } from './brochure/WhoIsPage';
import { PhilosophyPage } from './brochure/PhilosophyPage';
import { WhyChoosePage } from './brochure/WhyChoosePage';
import { RegionalExpertisePage } from './brochure/RegionalExpertisePage';
import { ServicePortfolioPage } from './brochure/ServicePortfolioPage';
import { PartnershipPage } from './brochure/PartnershipPage';
import { ContactPage } from './brochure/ContactPage';

const pages = [
  { id: 1, component: CoverPage },
  { id: 2, component: WhoIsPage },
  { id: 3, component: PhilosophyPage },
  { id: 4, component: WhyChoosePage },
  { id: 5, component: RegionalExpertisePage },
  { id: 6, component: ServicePortfolioPage },
  { id: 7, component: PartnershipPage },
  { id: 8, component: ContactPage },
];

export const BrochureViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pages.length && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(pageIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'ArrowRight') nextPage();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const CurrentPageComponent = pages[currentPage]?.component;

  return (
    <div className="min-h-screen brochure-viewer-bg flex items-center justify-center p-8 print:p-0 print:min-h-0 print:h-full print:block print:flex-none">
      <div className="relative brochure-container print:shadow-none print:w-full print:h-full">
        {/* Navigation Controls - Hidden in Print */}
        {currentPage > 0 && (
          <button
            onClick={prevPage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 print:hidden"
            aria-label="Previous page"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {currentPage < pages.length - 1 && (
          <button
            onClick={nextPage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 print:hidden"
            aria-label="Next page"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Page Indicator - Hidden in Print */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2 print:hidden">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Brochure Pages - Screen: Single page view, Print: All pages */}
        <div className="w-[297mm] h-[210mm] max-w-[90vw] max-h-[85vh] print:max-w-none print:max-h-none print:w-full print:h-auto print:block">
          {/* Screen View - Single Page */}
          <div className={`w-full h-full transition-transform duration-500 ease-in-out print:hidden ${
            isTransitioning ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
          }`}>
            {CurrentPageComponent && <CurrentPageComponent />}
          </div>
          
          {/* Print View - All Pages */}
          <div className="hidden print:block">
            {pages.map((page, index) => {
              const PageComponent = page.component;
              return (
                <div key={page.id} className="print-page">
                  <PageComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};