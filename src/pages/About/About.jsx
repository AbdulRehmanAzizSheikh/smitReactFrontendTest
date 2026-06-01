import React from 'react';

function About() {
  // Skills array taake code clean rahe aur badges dynamically render hon
  const skills = [
    "React.js", "JavaScript (ES6+)", "Tailwind CSS",
    "React Router DOM", "Component-Based UI", "Responsive Design",
    "State Management", "Git & GitHub", "Frontend Architecture"
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            About <span className="text-blue-600">Our Project</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Production-level frontend development driven by clean architecture and reusable component design.
          </p>
        </div>

        {/* 1. Company / Student Profile Section */}
        <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm md:flex md:items-center md:gap-8 transition-all duration-300 hover:shadow-md">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-4xl font-black shadow-inner">
              AR
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Abdul Rehman</h2>
            <p className="text-blue-600 font-medium text-sm uppercase tracking-wider mb-4">Frontend Developer / Student</p>
            <p className="text-gray-600 leading-relaxed">
              I am a passionate frontend developer specializing in building modern web applications using the React ecosystem.
              This application is built as part of the React Frontend Assessment Test to demonstrate modular architecture,
              fluid routing, utility-first styling with Tailwind CSS, and clean semantic code practices.
            </p>
          </div>
        </section>

        {/* 2. Skills Section */}
        <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="text-center md:text-left mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Core Technical Skills</h2>
            <p className="text-sm text-gray-500 mt-1">Technologies and paradigms applied in this assessment project.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-xl text-sm border border-blue-100 shadow-xs transition-all duration-200 hover:bg-blue-600 hover:text-white cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 3. Mission Section */}
        <section className="bg-gradient-to-br from-gray-900 to-slate-800 text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center md:justify-start">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed text-center md:text-left">
              Our mission is to bypass standard templates and syntax replication to establish
              production-grade web solutions. We emphasize component scalability, extreme UI responsiveness,
              and stellar layout aesthetics. Every single file is architected to eliminate code duplication
              and enhance client-side runtime efficiency.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;