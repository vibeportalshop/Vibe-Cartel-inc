import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import CostEstimator from './components/CostEstimator';
import CaseStudies from './components/CaseStudies';
import TechStack from './components/TechStack';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { PackageItem } from './data/packagesData';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('core-growth');
  const [customEstimateData, setCustomEstimateData] = useState<{
    basePackageName: string;
    extraPages: number;
    selectedAddonNames: string[];
    totalPrice: number;
    estimatedDays: number;
  } | null>(null);

  const handleOpenConsultation = (pkgId?: string) => {
    if (pkgId) {
      setSelectedPackageId(pkgId);
    }
    setCustomEstimateData(null);
    setIsModalOpen(true);
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackageId(pkg.id);
    setCustomEstimateData(null);
    setIsModalOpen(true);
  };

  const handleProceedWithEstimate = (estimate: {
    basePackageName: string;
    extraPages: number;
    selectedAddonNames: string[];
    totalPrice: number;
    estimatedDays: number;
  }) => {
    setCustomEstimateData(estimate);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onExplorePackages={() => scrollToSection('packages')}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        <Services onOpenConsultation={() => handleOpenConsultation()} />

        <Packages
          onSelectPackage={handleSelectPackage}
          onOpenEstimator={() => scrollToSection('estimator')}
        />

        <CostEstimator onProceedWithEstimate={handleProceedWithEstimate} />

        <CaseStudies onOpenConsultation={() => handleOpenConsultation()} />

        <TechStack />

        <TestimonialsFAQ onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Footer with Mandatory Attribution */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Project Inquiry & Booking Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedPackage={selectedPackageId}
        customEstimateSummary={customEstimateData}
      />
    </div>
  );
}
