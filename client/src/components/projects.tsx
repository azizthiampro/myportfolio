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
              <h3 className="text-2xl font-bold text-gray-900">Finance Chatbot</h3>
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
              Developed an NLP-based chatbot using financial APIs that improved insight generation by 18%. Built with modern AI technologies to provide intelligent financial analysis and recommendations.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Improved insight generation by 18% through NLP integration</li>
                <li>• Real-time financial data processing</li>
                <li>• Advanced natural language understanding for queries</li>
                <li>• Scalable architecture for high-volume requests</li>
              </ul>
            </div>
            
            {/* Code Example */}
            <div className="code-highlight p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold">NLP Processing Pipeline</span>
                <span className="text-gray-300 text-xs">Python</span>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto font-mono">
{`# Financial NLP chatbot implementation
import openai
from transformers import pipeline
import pandas as pd

class FinanceChatbot:
    def __init__(self):
        self.nlp_pipeline = pipeline(
            "sentiment-analysis",
            model="ProsusAI/finbert"
        )
        self.client = openai.Client()
    
    def process_query(self, user_input):
        # Extract financial entities
        sentiment = self.nlp_pipeline(user_input)
        
        # Generate insights
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{
                "role": "system", 
                "content": "Financial advisor assistant"
            }, {
                "role": "user", 
                "content": user_input
            }]
        )
        
        return {
            "sentiment": sentiment,
            "insights": response.choices[0].message.content
        }`}
              </pre>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">NLP</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Financial APIs</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">OpenAI</span>
            </div>
          </div>
          
          {/* CV Filter ATS Project */}
          <div className="project-card bg-white p-8 rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Recruitment dashboard with candidate profiles" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">CV Filter ATS System</h3>
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
              Built an advanced ATS system using Gemini API for intelligent resume parsing and automated recruiter notifications. Streamlines the hiring process with AI-powered candidate screening and matching.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Automated resume parsing with 95+ accuracy using Gemini API</li>
                <li>• Intelligent recruiter notification system</li>
                <li>• Advanced candidate screening and ranking</li>
                <li>• Streamlined hiring workflow automation</li>
              </ul>
            </div>
            
            {/* Code Example */}
            <div className="code-highlight p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold">Resume Processing with Gemini</span>
                <span className="text-gray-300 text-xs">Python</span>
              </div>
              <pre className="text-gray-300 text-sm overflow-x-auto font-mono">
{`# CV Filter ATS with Gemini API
import google.generativeai as genai
from dataclasses import dataclass
import json

@dataclass
class ResumeData:
    skills: list
    experience: str
    education: str
    contact_info: dict

class CVFilter:
    def __init__(self, api_key):
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-pro')
    
    def parse_resume(self, resume_text):
        prompt = f"""
        Extract structured data from this resume:
        {resume_text}
        
        Return JSON with: skills, experience, education, contact_info
        """
        
        response = self.model.generate_content(prompt)
        return json.loads(response.text)
    
    def notify_recruiter(self, candidate_data, job_match_score):
        if job_match_score > 0.8:
            # Send notification to recruiter
            return self.send_notification(candidate_data)`}
              </pre>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Gemini API</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AI Parsing</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Automation</span>
            </div>
          </div>
        </div>
        
        {/* Additional smaller projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-accent text-2xl mr-3" />
              <h4 className="text-lg font-bold text-gray-900">Time Series Forecasting</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Built LSTM and Prophet models for energy and stock price forecasting, achieving 87% accuracy on Kaggle competitions.
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">LSTM</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Prophet</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">PyTorch</span>
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