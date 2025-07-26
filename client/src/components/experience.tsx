export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Career Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From full-stack development to data engineering expertise - a story of continuous learning and evolution in the tech landscape.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {/* Current Role */}
            <div className="relative flex items-start">
              <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:ml-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Consultant Data Engineer/Scientist</h3>
                    <p className="text-primary font-semibold">Deloitte France</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Feb 2025 - Aug 2025</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Built Generative AI chatbot using AWS Bedrock, Lambda, and Route 53. Deployed cloud services via Amazon RDS, EC2, CloudFront, API Gateway, Cognito, and VPC. Designed secure, scalable chatbot architecture using Azure and Azure DevOps. Modeled KPIs using Google Cloud BigQuery and developed ingestion pipelines for Richemont brands (Van Cleef & Arpels, Cartier, Montblanc).
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS Bedrock</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GCP BigQuery</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Azure DevOps</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Lambda</span>
                </div>
              </div>
            </div>
            
            {/* ML/AI Role */}
            <div className="relative flex items-start">
              <div className="hidden md:flex absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:ml-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Generative AI & Machine Learning Intern</h3>
                    <p className="text-primary font-semibold">Steer AI, Versailles</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Aug 2024 - Nov 2024</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Migrated TensorFlow-based car damage detection models to PyTorch. Built a chatbot using OpenAI APIs, RAG (Retrieval-Augmented Generation), and Hummingbird for enhanced AI-powered interactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PyTorch</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">OpenAI APIs</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">RAG</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                </div>
              </div>
            </div>
            
            {/* Mobile/Web Development Role */}
            <div className="relative flex items-start">
              <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:ml-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mobile and Web Application Developer</h3>
                    <p className="text-primary font-semibold">Irisoftech, Dakar</p>
                  </div>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Nov 2020 - Jan 2023</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Developed mobile and web applications using Flutter and Angular. Digitized internal workflows to improve operational efficiency and user experience across multiple platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Flutter</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Angular</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Mobile Development</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Web Applications</span>
                </div>
              </div>
            </div>
            
            {/* Early Web Development Role */}
            <div className="relative flex items-start">
              <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:ml-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Web Developer</h3>
                    <p className="text-primary font-semibold">DSI Université de Thiès, Senegal</p>
                  </div>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Sep 2019 - Nov 2020</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Built full-stack applications using Angular and Symfony. Delivered web tools for academic and administrative use, improving university digital infrastructure.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Angular</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Symfony</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Full-Stack</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Academic Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}