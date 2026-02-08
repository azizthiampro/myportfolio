import React from 'react';

type ExperienceType = {
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
  skills: string[];
  color: string;
};

const calculateDuration = (startDate: string | Date, endDate: string | Date): string => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth() + 1);

  if (months < 12) return `${months} month${months > 1 ? 's' : ''}`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  return `${years} year${years > 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`;
};

const formatDate = (date: string | Date): string => {
  if (date === 'Present') return 'Present';
  return new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

export default function Experience() {
  const experiences: ExperienceType[] = [
    {
      title: 'Data Engineer (Full-Time Contract)',
      company: 'Deloitte France (Client: TF1)',
      start: '2025-09-01',
      end: 'Present',
      description:
        'Mission: Full-time contract Data Engineer at Deloitte France for TF1.\n- Led Databricks Unity Catalog migration to strengthen governance, lineage, and access control.\n- Designed and optimized Azure data workflows using Azure Data Factory (ADF) and Azure Data Lake Storage (ADLS).\n- Improved delivery reliability through performance tuning and close collaboration with analytics stakeholders.',
      skills: ['Databricks', 'Unity Catalog', 'Azure ADF', 'Azure ADLS', 'SQL'],
      color: 'bg-primary',
    },
    {
      title: 'Consultant Data Engineer/AI',
      company: 'Deloitte France',
      start: '2025-02-01',
      end: '2025-08-01',
      description:
        'Mission: Data Engineer/AI consultant at Deloitte France for Richemont.\n- Built batch ingestion pipelines with BigQuery and BigQuery Notebooks for KPI modeling at scale.\n- Delivered AWS solutions using AuroraDB, EC2, CloudFront, API Gateway, Cognito, and Bedrock.\n- Built a Generative AI chatbot with AWS services and OpenSearch for intelligent CV retrieval.\n- Designed a production-ready Azure architecture supporting secure analytics workflows.\n- Worked with financial institutions on secure data platforms and governance requirements in regulated environments.',
      skills: ['AWS', 'GCP', 'Azure', 'Databricks', 'Snowflake', 'Lambda', 'OpenSearch'],
      color: 'bg-blue-500',
    },
    {
      title: 'Generative AI & Machine Learning Intern',
      company: 'Steer AI, Versailles',
      start: '2024-08-01',
      end: '2024-11-01',
      description:
        'Mission: Generative AI & Machine Learning Intern at Steer AI.\n- Migrated TensorFlow-based car damage detection models to PyTorch for performance improvements.\n- Developed and deployed a chatbot using OpenAI APIs and RAG (Retrieval-Augmented Generation).\n- Leveraged Hummingbird for optimized inference of ML models.',
      skills: ['PyTorch', 'OpenAI APIs', 'RAG', 'TensorFlow', 'Hummingbird'],
      color: 'bg-accent',
    },
    {
      title: 'Mobile and Web Application Developer',
      company: 'Irisoftech, Dakar',
      start: '2020-11-01',
      end: '2023-01-01',
      description:
        'Mission: Mobile and Web Application Developer at Irisoftech.\n- Developed and maintained mobile and web applications using Flutter and Angular frameworks.\n- Streamlined and digitized internal workflows to improve operational efficiency.\n- Designed cross-platform solutions enhancing user experience.',
      skills: ['Flutter', 'Angular', 'Mobile Development', 'Web Applications'],
      color: 'bg-gray-400',
    },
    {
      title: 'Web Developer',
      company: 'DSI Université de Thiès, Senegal',
      start: '2019-09-01',
      end: '2020-11-01',
      description:
        'Mission: Web Developer at DSI Université de Thiès.\n- Built and maintained full-stack web applications using Angular and Symfony.\n- Delivered custom web tools for academic and administrative use cases.\n- Enhanced university digital infrastructure and optimized workflows.',
      skills: ['Angular', 'Symfony', 'Full-Stack', 'Academic Systems'],
      color: 'bg-gray-400',
    },
  ];

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
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`hidden md:flex absolute left-6 w-4 h-4 ${exp.color} rounded-full border-4 border-white shadow-lg`}></div>
                <div className="md:ml-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                      {`${formatDate(exp.start)} – ${formatDate(exp.end)}`} 
                      <span className="ml-2 text-gray-600">({calculateDuration(exp.start, exp.end)})</span>
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 whitespace-pre-line">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
