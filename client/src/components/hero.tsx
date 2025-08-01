import { Download, Cloud } from "lucide-react";
import { SiGooglecloud, SiAmazon } from "react-icons/si";
import profileImage from "@assets/cropped.png";
import resumePDF from "@assets/cv_tech.pdf";
import { MdDataObject } from "react-icons/md";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
              From Fullstack Developer to
              <span className="text-primary"> Data Fullstack</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Data Engineer/Scientist with 4 years of experience, including 1
              year in cloud-native data systems and Generative AI. Transitioned
              from 3 years in web and mobile development to designing machine
              learning solutions, scalable data pipelines, and AI chatbots using
              AWS, Azure, GCP, PyTorch, and FastAPI. Google-certified (2x): GCP
              Professional Data Engineer and Machine Learning Engineer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
              >
                Get In Touch
              </button>
              <a
                href={resumePDF}
                download="Abdou_Aziz_Thiam_Resume.pdf"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center flex items-center justify-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <SiGooglecloud className="text-accent text-xl" />
                <span className="text-sm text-gray-600">
                  GCP Pro Data Engineer
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <SiGooglecloud className="text-green-500 text-xl" />
                <span className="text-sm text-gray-600">
                  GCP Pro ML Engineer
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="text-primary text-xl" />
                <span className="text-sm text-gray-600">
                  Multi-Cloud 
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={profileImage}
                  alt="Abdou Aziz Thiam - Data Engineer & Scientist"
                  className="w-full h-full object-contain object-center bg-white"
                />
              </div>

            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
              <MdDataObject className="w-12 h-12 text-indigo-500" />
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
