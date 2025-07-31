import { Clock, ArrowRight } from "lucide-react";
import ChatbotImage from "@assets/gpt.jpg";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Building an Intelligent Chatbot with OpenAI: Overcoming Context Retention Challenges",
      excerpt: "Discover how to build a powerful AI-driven chatbot using OpenAI while tackling one of the biggest hurdles in conversational AI – context retention.",
      category: "AI / Chatbots",
      date: "Jul 31, 2025",
      readTime: "6 min read",
      image: ChatbotImage,
      link: "https://www.linkedin.com/pulse/building-intelligent-chatbot-openai-overcoming-context-thiam-npnoe/?trackingId=LOrSfnSjRpyR%2BRig4UcPhQ%3D%3D"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI / Chatbots":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing insights on AI, data engineering, cloud architecture, and machine learning best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-2 py-1 rounded text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:text-secondary transition-colors flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.linkedin.com/in/azizthiampro/details/posts/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
