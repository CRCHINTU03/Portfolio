import React from 'react';
import portfolioImage from '../assets/portfolio1.jpg';

function About() {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center relative overflow-hidden space-background">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-shrink-0">
            <img
              src={portfolioImage}
              alt="Chittaranjan Tadikonda"
              className="w-56 h-56 rounded-full shadow-md object-cover"
            />
          </div>
          <div className="max-w-lg text-center md:text-left">
            <p className="text-lg text-white leading-relaxed">
              Multifaceted data professional with expertise in data analytics, product analysis, data science, engineering, and AI. Adept at leveraging SQL, Python (Pandas,
              NumPy, scikit-learn, PyTorch), and visualization tools (Power BI, Tableau) to extract insights, automate reporting, and optimize decision-making.
              Experienced in designing robust data pipelines and deploying models on AWS, Azure, and cloud environments. Skilled in end-to-end data tracking, ETL
              processes, and predictive analytics, driving business efficiency across diverse industries. Proven ability to collaborate cross-functionally, refine data strategies,
              and implement innovative analytics solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;