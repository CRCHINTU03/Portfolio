import React from 'react';

function Projects() {
  const projects = [
    { 
      title: "AI & Machine Learning Projects", 
      desc: "Built a Fraud Detection Model, BCG GenAI & ChatBot Application.", 
      tools: "Python, Pandas, scikit-learn",
      link: "https://github.com/CRCHINTU03/AI-MachineLearningProjects" // Replace with actual URL
    },
    { 
      title: "E-commerce Recommendation System", 
      desc: "AI-powered recommendation system for an e-commerce platform.", 
      tools: "PostgreSQL, Python, Tableau",
      link: "https://github.com/CRCHINTU03/ecommerce-recommendation" // Replace with actual URL
    },
    { 
      title: "Sentiment Analysis", 
      desc: "Analyzed Twitter , reddit & youtube data with NLP techniques.", 
      tools: "Python, NLTK",
      link: "https://github.com/CRCHINTU03/Sentiment_Analysis" // Replace with actual URL
    },
  ];

  return (
    <section id="projects" className="py-20 min-h-screen flex items-center relative overflow-hidden space-background">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition duration-300 underline underline-offset-4"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <p className="text-gray-400 text-sm">Tools: {project.tools}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Source
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;