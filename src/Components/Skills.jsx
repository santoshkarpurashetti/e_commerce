import React from "react";
import { Code2, Database, Globe } from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code2,
      skills: ["Java", "Spring Boot", "DSA", "Microservices"],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "Database Design", "SQL Queries"],
    },
    {
      title: "Tools & Others",

      skills: ["Git", "Maven", "REST APIs", "Android Development"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  {/* <category.icon className="w-6 h-6 text-blue-600" /> */}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
