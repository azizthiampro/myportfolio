import { Github, ExternalLink, TrendingUp, Bot, Database } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications showcasing expertise in data engineering, machine learning, and system architecture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Finance Chatbot Project */}
          <div className="project-card bg-white p-8 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Finance dashboard with charts and analytics" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">FinanceBot AI</h3>
              <div className="flex space-x-2">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              Intelligent chatbot for financial services with fine-tuned LLM capabilities. Processes natural language queries about market data, portfolio analysis, and investment recommendations using real-time financial APIs.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fine-tuned GPT-3.5 on 500K financial documents</li>
                <li>• 95% accuracy in financial query classification</li>
                <li>• Sub-200ms response time for complex queries</li>
                <li>• Deployed on GCP with auto-scaling capabilities</li>
              </ul>
            </div>
            
            {/* Code Example */}
            <div className="code-highlight p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold">Fine-tuning Pipeline</span>
                <span className="text-gray-300 text-xs">Python</span>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto font-mono">
{`# Fine-tuning setup for financial domain
from transformers import GPTJForCausalLM, Trainer
import torch

def create_financial_model():
    model = GPTJForCausalLM.from_pretrained(
        "EleutherAI/gpt-j-6B",
        torch_dtype=torch.float16,
        device_map="auto"
    )
    
    # Custom financial tokenizer
    tokenizer = FinancialTokenizer()
    
    return model, tokenizer

# Training configuration
training_args = TrainingArguments(
    output_dir="./financial-gpt",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    learning_rate=5e-5,
    fp16=True,
    logging_steps=100
)`}
              </pre>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Transformers</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">GCP Vertex AI</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">FastAPI</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Redis</span>
            </div>
          </div>
          
          {/* ATS System Project */}
          <div className="project-card bg-white p-8 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Recruitment dashboard with candidate profiles" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Smart ATS Platform</h3>
              <div className="flex space-x-2">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              AI-powered Applicant Tracking System with automated resume parsing, skill matching, and bias detection. Processes 10K+ applications daily with intelligent ranking and automated scheduling.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 87% improvement in candidate-role matching accuracy</li>
                <li>• 60% reduction in time-to-hire</li>
                <li>• Bias detection reducing discriminatory filtering by 45%</li>
                <li>• Scalable architecture handling 50K+ concurrent users</li>
              </ul>
            </div>
            
            {/* Code Example */}
            <div className="code-highlight p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold">Resume Processing Pipeline</span>
                <span className="text-gray-300 text-xs">Python</span>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto font-mono">
{`# Resume parsing and skill extraction
from apache_beam import Pipeline
import apache_beam as beam

class ResumeProcessor:
    def __init__(self):
        self.skill_extractor = SkillExtractor()
        self.bias_detector = BiasDetector()
    
    def process_resume(self, resume_data):
        # Extract structured data
        skills = self.skill_extractor.extract(resume_data)
        experience = self.extract_experience(resume_data)
        
        # Bias detection
        bias_score = self.bias_detector.evaluate(resume_data)
        
        return {
            'skills': skills,
            'experience': experience,
            'bias_score': bias_score,
            'processed_at': datetime.utcnow()
        }

# Apache Beam pipeline for batch processing
with Pipeline() as pipeline:
    (pipeline 
     | 'Read Resumes' >> beam.io.ReadFromBigQuery(query)
     | 'Process' >> beam.Map(processor.process_resume)
     | 'Write Results' >> beam.io.WriteToBigQuery(table))`}
              </pre>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Apache Beam</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">spaCy</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">BigQuery</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Kubernetes</span>
            </div>
          </div>
        </div>
        
        {/* Additional smaller projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-accent text-2xl mr-3" />
              <h4 className="text-lg font-bold text-gray-900">Real-time Analytics Dashboard</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Streaming analytics platform processing 1M+ events/hour with sub-second latency visualization.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Kafka</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Flink</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">D3.js</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Bot className="text-accent text-2xl mr-3" />
              <h4 className="text-lg font-bold text-gray-900">MLOps Automation</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              End-to-end ML pipeline with automated model training, validation, and deployment.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">MLflow</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Kubeflow</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Airflow</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Database className="text-accent text-2xl mr-3" />
              <h4 className="text-lg font-bold text-gray-900">Data Lake Architecture</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Multi-petabyte data lake with automated cataloging and quality monitoring.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Delta Lake</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Spark</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Terraform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}