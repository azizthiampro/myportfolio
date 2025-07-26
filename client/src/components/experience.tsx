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
                    <h3 className="text-xl font-bold text-gray-900">Senior Data Engineer</h3>
                    <p className="text-primary font-semibold">TechFlow Solutions</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">2022 - Present</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Leading data architecture initiatives for fintech applications, implementing real-time data pipelines processing 50M+ daily transactions. Architected ML model serving infrastructure reducing inference latency by 75%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GCP BigQuery</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Apache Beam</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TensorFlow Serving</span>
                </div>
              </div>
            </div>
            
            {/* Transition Role */}
            <div className="relative flex items-start">
              <div className="hidden md:flex absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:ml-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Data Engineer</h3>
                    <p className="text-primary font-semibold">DataCorp Analytics</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">2020 - 2022</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Transitioned from full-stack development to data engineering. Built ETL pipelines for multi-terabyte datasets, implemented data quality frameworks, and established MLOps practices. Achieved GCP Professional certifications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Apache Spark</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Apache Airflow</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AWS EMR</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Docker</span>
                </div>
              </div>
            </div>
            
            {/* Development Role */}
            <div className="relative flex items-start">
              <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
              <div className="md:ml-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Senior Full-Stack Developer</h3>
                    <p className="text-primary font-semibold">Innovation Labs</p>
                  </div>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">2016 - 2020</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Led development of enterprise web applications serving 100K+ users. Specialized in React, Node.js, and cloud deployment. Discovered passion for data through building analytics features and performance optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}