import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <section id="home" className="py-20 min-h-screen flex items-center relative overflow-hidden space-background">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
          Chittaranjan Tadikonda
        </h1>
        <h2 className="text-2xl mb-8 text-gray-300">
          <span className="inline-block">
            <TypeAnimation
              sequence={[
                'Data Analyst', 1000,
                'Data Scientist', 1000,
                'AI Engineer', 1000,
                'Machine Learning Engineer', 1000,
                'Data Engineer', 1000,
                'Data Professional', 1000,
                'Python Developer', 1000,
                'SQL Developer', 1000,
                'Tableau Developer', 1000,
                'Data Visualization Expert', 1000,
                'Data Storyteller', 1000,
                'Product Analyst', 1000,
                'Business Analyst', 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold"
            />
          </span>
        </h2>
        <p className="mb-8 text-lg text-gray-200 max-w-2xl mx-auto">
          Data expert specializing in analytics, AI, and engineering, leveraging SQL, Python, and cloud solutions to drive insights, automation, and business impact.
        </p>
        <a
          href="/resume.pdf"
          download="Chittaranjan_Tadikonda_Resume.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          aria-label="Download Chittaranjan Tadikonda's resume"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;