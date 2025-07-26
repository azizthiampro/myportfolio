import { Download, Cloud } from "lucide-react";
import { SiGooglecloud, SiAmazon } from "react-icons/si";
import profileImage from "@assets/image_1753493265770.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="hero-gradient pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Available for Opportunities
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Former Senior Developer, now
              <span className="text-primary"> Data Expert</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Senior Data Engineer & Scientist with 8+ years of experience, transitioned from full-stack development to specializing in cloud-native data solutions, ML engineering, and scalable data architectures across AWS, Azure, and GCP. Certified GCP Professional Data Engineer and Machine Learning Engineer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
              >
                Get In Touch
              </button>
              <a 
                href="#" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center flex items-center justify-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
            
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <SiGooglecloud className="text-accent text-xl" />
                <span className="text-sm text-gray-600">GCP Pro Data Engineer</span>
              </div>
              <div className="flex items-center space-x-2">
                <SiGooglecloud className="text-green-500 text-xl" />
                <span className="text-sm text-gray-600">GCP Pro ML Engineer</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="text-primary text-xl" />
                <span className="text-sm text-gray-600">Multi-Cloud Expert</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-2xl p-1">
                <img 
                  src={profileImage} 
                  alt="Alex Chen - Data Engineer & Scientist"
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                <SiGooglecloud className="w-12 h-12 text-blue-500" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg">
                <SiGooglecloud className="w-12 h-12 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}