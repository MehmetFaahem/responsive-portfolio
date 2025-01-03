import React, { useState } from "react";

function Skills() {
  const skillCategories = {
    'Programming Languages': [
      { name: "JavaScript", expertise: "Advanced" },
      { name: "TypeScript", expertise: "Intermediate" },
      { name: "Python", expertise: "Intermediate" },
    ],
    'Frameworks I Use': [
      { name: "Next JS (Frontend)", expertise: "Advanced" },
      { name: "Nest JS (Backend)", expertise: "Intermediate" },
    ],
    'Databases I use': [
      { name: "MySQL", expertise: "Intermediate" },
      { name: "PostgreSQL", expertise: "Intermediate" },
      { name: "MongoDB", expertise: "Intermediate" },
    ],

    'CSS Frameworks I use': [
      { name: "TailwindCSS", expertise: "Intermediate" },
      { name: "Bootstrap", expertise: "Intermediate" },
      { name: "Material UI", expertise: "Intermediate" },
      { name: "ShadcnUI", expertise: "Intermediate" },
      { name: "MagicUI", expertise: "Intermediate" },
      { name: "ChakraUI", expertise: "Intermediate" },
    ],
    'State Managers I use': [
      { name: "Redux Toolkit", expertise: "Intermediate" },
      { name: "Zustand", expertise: "Intermediate" },
    ],
    'Tools I use': [
      { name: "Docker", expertise: "Intermediate" },
      { name: "Prisma", expertise: "Intermediate" },
      { name: "Git", expertise: "Intermediate" },
      { name: "Postman", expertise: "Intermediate" },
      { name: "Jira", expertise: "Intermediate" },
      { name: "Trello", expertise: "Intermediate" },
      { name: "VS Code", expertise: "Intermediate" },
      { name: "Anaconda", expertise: "Intermediate" },
    ],
    'Technologies I use': [
      { name: "React JS", expertise: "Advanced" },
      { name: "HTML5", expertise: "Intermediate" },
      { name: "CSS3", expertise: "Intermediate" },
      { name: "Sass (scss)", expertise: "Intermediate" },
    ],
  };

  const [expandedCategories, setExpandedCategories] = useState(
    Object.keys(skillCategories).reduce((acc, category, index) => {
      acc[category] = index < 2; // First two categories expanded by default
      return acc;
    }, {})
  );

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div
      id="skills"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-900/20 to-slate-800/20"
      style={{
        zIndex: 20,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-extrabold mobile:text-5xl laptop:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-16 animate-pulse">
          Technical Arsenal
        </h1>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-6">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full text-left"
            >
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-2 flex items-center justify-between">
                {category}
                <span className="text-2xl transition-transform duration-300" style={{
                  transform: expandedCategories[category] ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  ▼
                </span>
              </h2>
            </button>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${
              expandedCategories[category] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              {skills.map((data) => (
                <div
                  key={data.name}
                  className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/10 p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20 border border-white/10 hover:border-white/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {data.name}
                  </h2>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full ${
                          data.expertise === "Advanced" ? "w-full" : "w-2/3"
                        }`}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {data.expertise}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
