import { Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Building Scalable Data Pipelines with Apache Beam on GCP",
      excerpt: "Learn how to design and implement robust data processing pipelines that can scale from gigabytes to petabytes using Apache Beam and Google Cloud Platform.",
      category: "Data Engineering",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      id: 2,
      title: "MLOps Best Practices: From Model Training to Production",
      excerpt: "A comprehensive guide to implementing MLOps workflows that ensure reliable, scalable, and maintainable machine learning systems in production.",
      category: "MLOps",
      date: "Dec 8, 2023",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      id: 3,
      title: "Multi-Cloud Data Strategy: Avoiding Vendor Lock-in",
      excerpt: "Strategies for building cloud-agnostic data architectures that leverage the best features of AWS, Azure, and GCP while maintaining flexibility.",
      category: "Cloud Architecture",
      date: "Nov 28, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Data Engineering":
        return "bg-primary/10 text-primary";
      case "MLOps":
        return "bg-accent/10 text-accent";
      case "Cloud Architecture":
        return "bg-green-100 text-green-800";
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
            Sharing insights on data engineering, cloud architecture, and machine learning best practices.
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
                  <a href="#">{post.title}</a>
                </h3>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <a href="#" className="text-primary font-semibold hover:text-secondary transition-colors flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}