import React from "react";
import { Building2, Network, Monitor } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Vrya Tech Solutions Pvt Ltd",
      role: "Associate Software Engineer",
      period: "Nov 2022 - Oct 2024",
      description:
        "Analyzed market trends, identified potential opportunities, and assessed competition. Handled Sales, Pre-Sales, Procurement, and facility Team.",
      icon: Building2,
    },
    {
      company: "Excitel Broadband pvt ltd",
      role: "Infrastructure Engineer",
      period: "Jan 2020 - Oct 2022",
      description:
        "Built Internet Network Infrastructure in Bangalore Location and maintained the Services while interacting with respective vendors.",
      icon: Network,
    },
    {
      company: "Redsky Technology",
      role: "Field Engineer",
      period: "May 2019 - Jan 2020",
      description:
        "Provided Computer Services and mapped printer applications to systems in Bangalore Location.",
      icon: Monitor,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <exp.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
