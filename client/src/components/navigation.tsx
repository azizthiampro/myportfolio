import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">AT</div>
            <div className="hidden md:block ml-6">
              <span className="text-lg font-semibold text-gray-900">Abdou Aziz Thiam</span>
              <span className="text-sm text-gray-500 ml-2">Data Engineer</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-gray-700 hover:text-primary font-medium"
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'mobile-nav-visible' : 'mobile-nav-hidden'} mobile-nav`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <button 
            onClick={() => scrollToSection('about')} 
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium w-full text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium w-full text-left"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium w-full text-left"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium w-full text-left"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium w-full text-left"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('blog')} 
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium w-full text-left"
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium w-full text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
