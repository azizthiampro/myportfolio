import { Code, Database, Brain, Settings, Cloud } from "lucide-react";
import { SiAmazon, SiGooglecloud } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized in modern data engineering tools and cloud platforms, with deep expertise in building scalable, production-ready data solutions.
          </p>
        </div>
        
        {/* Cloud Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cloud Platforms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="skill-card bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl text-center">
              <SiAmazon className="text-orange-500 text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Amazon Web Services</h4>
              <p className="text-gray-600 mb-4">EMR, Glue, Redshift, S3, Lambda, SageMaker</p>
              <div className="flex justify-center">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">5+ Years</span>
              </div>
            </div>
            
            <div className="skill-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center border-2 border-primary">
              <SiGooglecloud className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Google Cloud Platform</h4>
              <p className="text-gray-600 mb-4">BigQuery, Dataflow, Composer, AI Platform, Cloud Functions</p>
              <div className="flex justify-center space-x-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Certified</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">3+ Years</span>
              </div>
            </div>
            
            <div className="skill-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
              <Cloud className="text-blue-600 text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Microsoft Azure</h4>
              <p className="text-gray-600 mb-4">Data Factory, Synapse, Databricks, ML Studio</p>
              <div className="flex justify-center">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">2+ Years</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Code className="text-primary mr-2 h-5 w-5" />
              Programming
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Python</span>
                <span className="text-primary font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">SQL</span>
                <span className="text-primary font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Scala</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Java</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Database className="text-primary mr-2 h-5 w-5" />
              Data Tools
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Apache Spark</span>
                <span className="text-primary font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Apache Airflow</span>
                <span className="text-primary font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Kafka</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">dbt</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Brain className="text-primary mr-2 h-5 w-5" />
              ML & AI
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">TensorFlow</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">PyTorch</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">scikit-learn</span>
                <span className="text-primary font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">MLflow</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Settings className="text-primary mr-2 h-5 w-5" />
              DevOps
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Docker</span>
                <span className="text-primary font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Kubernetes</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Terraform</span>
                <span className="text-accent font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">CI/CD</span>
                <span className="text-primary font-semibold">Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
