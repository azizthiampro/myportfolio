import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation in computer science and distributed artificial intelligence, providing the theoretical knowledge that supports my practical expertise.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Master's in AI */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="text-primary h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Master's in Distributed Artificial Intelligence</h3>
                    <p className="text-primary font-semibold text-lg">Université Paris Cité</p>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Paris, France</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2023 – 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Completed</span>
                </div>
              </div>
              
              <div className="ml-16 pl-4">
                <p className="text-gray-600 mb-4">
                  Advanced studies in distributed AI systems, machine learning architectures, and multi-agent systems. 
                  Focus on scalable AI solutions, neural networks, and distributed computing frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Distributed Systems</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Neural Networks</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Multi-Agent Systems</span>
                </div>
              </div>
            </div>
            
            {/* Master's in Computer Science */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <GraduationCap className="text-accent h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Master's in Computer Science</h3>
                    <p className="text-accent font-semibold text-lg">Université Iba Der THIAM de Thiès</p>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Senegal</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2020 – 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Completed</span>
                </div>
              </div>
              
              <div className="ml-16 pl-4">
                <p className="text-gray-600 mb-4">
                  Comprehensive graduate studies in computer science with emphasis on software engineering, 
                  algorithms, data structures, and system design. Foundation for transition into data science and AI.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Software Engineering</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Algorithms</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Data Structures</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">System Design</span>
                </div>
              </div>
            </div>
            
            {/* Bachelor's in Computer Science */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-400/10 p-3 rounded-lg">
                    <GraduationCap className="text-gray-600 h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Bachelor's in Computer Science</h3>
                    <p className="text-gray-600 font-semibold text-lg">Université Iba Der THIAM de Thiès</p>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Senegal</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2017 – 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Completed</span>
                </div>
              </div>
              
              <div className="ml-16 pl-4">
                <p className="text-gray-600 mb-4">
                  Undergraduate foundation in computer science fundamentals including programming, 
                  mathematics, database systems, and web development. Built the core technical skills for software development career.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Programming Fundamentals</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Mathematics</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Database Systems</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Web Development</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Academic Info */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Research Focus</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Distributed AI Systems</li>
                  <li>• Machine Learning Architectures</li>
                  <li>• Multi-Agent Systems</li>
                  <li>• Cloud-Native AI Solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Key Skills Developed</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Advanced Mathematics & Statistics</li>
                  <li>• Software Engineering Principles</li>
                  <li>• Research Methodology</li>
                  <li>• Technical Writing & Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}