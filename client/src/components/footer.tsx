import { Linkedin, Github, Twitter } from "lucide-react";
import { SiGooglecloud, SiAmazon, SiMedium } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-primary">AT</div>
              <span className="text-lg font-semibold ml-2">Abdou Aziz Thiam</span>
            </div>
            <p className="text-gray-400 mb-4">
              Data Engineer currently on full-time contract at Deloitte, specializing in cloud platforms, machine learning, and Generative AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/azizthiampro" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/azizthiampro" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <SiMedium className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('education')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <SiGooglecloud className="text-blue-400 mr-2 h-4 w-4" />
                GCP Professional Data Engineer
              </li>
              <li className="flex items-center">
                <SiGooglecloud className="text-blue-400 mr-2 h-4 w-4" />
                GCP Professional ML Engineer
              </li>
              <li className="flex items-center">
                <SiAmazon className="text-orange-400 mr-2 h-4 w-4" />
                AWS Solutions Architect
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Abdou Aziz Thiam. All rights reserved. 
            Built with modern web technologies and deployed on cloud infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}
