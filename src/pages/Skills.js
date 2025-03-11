import React from 'react';

function Skills() {
  return (
    <section id="skills" className="py-20 min-h-screen flex items-center relative overflow-hidden space-background">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Programming Languages:</h3>
            <p className="text-gray-300">Python (Pandas, NumPy, scikit-learn, Matplotlib, PyTorch, FastAPI)</p>
            <p className="text-gray-300">SQL (Snowflake)</p>
            <p className="text-gray-300">JavaScript (NodeJS, ReactJS)</p>
            <p className="text-gray-300">JAVA</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Databases:</h3>
            <p className="text-gray-300">MS SQL (Joins, CTEs, Subquery, CAST Function, Case, Views, Store Procedures, CRUD)</p>
            <p className="text-gray-300">PostgreSQL, MongoDB</p>
            <p className="text-gray-300">Redis, Amazon RDS</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Visualization:</h3>
            <p className="text-gray-300">Tableau, Power BI</p>
            <p className="text-gray-300">Seaborn, Plotly</p>
            <p className="text-gray-300">Microsoft Excel (Pivot table, VLOOKUP, Nested IF)</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Methodologies:</h3>
            <p className="text-gray-300">Exploratory Data Analysis (EDA) , A/B Testing</p>
            <p className="text-gray-300">Data cleaning & preprocessing</p>
            <p className="text-gray-300">Statistical Analysis (Regression Analysis, Hypothesis Testing)</p>
            <p className="text-gray-300">Data Modelling, Data Wrangling, Web Scraping</p>
            <p className="text-gray-300">Data Governance, Feature Engineering</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">UI Tools:</h3>
            <p className="text-gray-300">HTML5, CSS</p>
            <p className="text-gray-300">Tailwind CSS, Bootstrap5</p>
            <p className="text-gray-300">Bluma, Figma</p>
            <p className="text-gray-300">Chrome DevTools, Google Tag Manager, Pendo</p>

          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Additional:</h3>
            <p className="text-gray-300">Machine Learning (NLP, K-means, PCA, SVM, Decision Trees, Neural Networks, GEN AI)</p>
            <p className="text-gray-300">Cloud Computing (AWS, Azure) , Docker</p>
            <p className="text-gray-300">VS Code, Jira, Slack, Microsoft 365</p>
            <p className="text-gray-300">Git, GitHub, Bitbucket</p>
            <p className="text-gray-300">Agile, Scrum, Kanban</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;