import React from "react";

function Skills() {
  const Skills = [
    { name: "NextJS", expertise: "Advanced" },
    { name: "NestJS", expertise: "Intermediate" },
    { name: "React JS", expertise: "Advanced" },
    { name: "TypeScript", expertise: "Intermediate" },
    { name: "JavaScript (ES6)", expertise: "Advanced" },
    { name: "Redux Toolkit", expertise: "Intermediate" },
    { name: "MongoDB", expertise: "Intermediate" },
    { name: "MySQL", expertise: "Intermediate" },
    { name: "React Native", expertise: "Advanced" },
  ];
  return (
    <div
      id="skills"
      style={{
        zIndex: 20,
      }}
      className="p-10"
    >
      <h1 className="text-center font-bold mobile:text-4xl laptop:text-7xl text-white mb-12">
        My Skills
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Skills.map((data) => (
          <div key={data.name} class="bg-slate-900/40 p-6 rounded-md shadow-md">
            <h2 class="text-xl font-bold mb-2 text-blue-200">{data.name}</h2>
            <p class="text-gray-200">Expertise: {data.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
