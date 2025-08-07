import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CoverPageRedesigned } from './brochure/CoverPageRedesigned';
import { OurFoundationPage } from './brochure/OurFoundationPage';
import { OurPhilosophyPageRedesigned } from './brochure/OurPhilosophyPageRedesigned';
import { PrecedentialAdvantagePage } from './brochure/PrecedentialAdvantagePage';
import { RegionalExpertisePageRedesigned } from './brochure/RegionalExpertisePageRedesigned';
import { OurExpertisePageLeft } from './brochure/OurExpertisePageLeft';
import { OurExpertisePageRight } from './brochure/OurExpertisePageRight';
import { ContactPageRedesigned } from './brochure/ContactPageRedesigned';

// Define all brochure pages with their components
const pages = [
  { id: 'cover', component: CoverPageRedesigned },
  { id: 'foundation', component: OurFoundationPage },
  { id: 'philosophy', component: OurPhilosophyPageRedesigned },
  { id: 'advantage', component: PrecedentialAdvantagePage },
  { id: 'regional', component: RegionalExpertisePageRedesigned },
  { id: 'expertise-left', component: OurExpertisePageLeft },
  { id: 'expertise-right', component: OurExpertisePageRight },
  { id: 'contact', component: ContactPageRedesigned },
];

export const BrochureViewerRedesigned = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Navigation function with smooth transition
  const goToPage = (pageIndex: number) => {
    if (pageIndex < 0 || pageIndex >= pages.length || pageIndex === currentPage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setIsTransitioning(false);
    }, 250);
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevPage();
      } else if (event.key === 'ArrowRight') {
        nextPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 print:p-0 print:bg-white">
      
      {/* Navigation Controls - Hidden in print */}
      <div className="mb-4 flex items-center space-x-4 print:hidden">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-deep-navy text-pure-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-deep-navy/90 transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        {/* Page Indicators */}
        <div className="flex space-x-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentPage 
                  ? 'bg-matte-gold' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-deep-navy text-pure-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-deep-navy/90 transition-all duration-200"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Brochure Pages - Screen: Single page view with page-turn effect, Print: All pages */}
      <div className="w-[297mm] min-h-[210mm] max-w-[95vw] print:max-w-none print:w-full print:h-auto print:block">
        {/* Screen View - Single Page with Page-Turn Effect */}
        <div className={`w-full h-full transition-all duration-500 ease-in-out print:hidden ${
          isTransitioning ? 'scale-95 opacity-90 rotate-y-12' : 'scale-100 opacity-100 rotate-y-0'
        } transform-gpu`} style={{ perspective: '1000px' }}>
          <div className="w-full h-full bg-white shadow-2xl rounded-lg overflow-hidden transform-gpu" style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s ease-in-out',
          }}>
            <CurrentPageComponent />
          </div>
        </div>
        
        {/* Print View - All Pages */}
        <div className="hidden print:block">
          {pages.map((page, index) => {
            const PageComponent = page.component;
            return (
              <div key={page.id} className={`w-full ${index > 0 ? 'page-break-before-always' : ''}`}>
                <PageComponent />
              </div>
            );
          })}
        </div>
      </div>

      {/* Instructions - Hidden in print */}
      <div className="mt-4 text-center text-gray-600 print:hidden">
        <p className="text-sm">Use arrow keys or buttons to navigate • Press Ctrl+P to print all pages</p>
      </div>
    </div>
  );
};