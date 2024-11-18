import React from "react";
import { ShoppingCart, Shield } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully functional e-commerce platform with product browsing, cart management, and secure checkout. Built using Java Spring Boot, React.js, and MySQL with microservices architecture.",
      icon: ShoppingCart,
      tech: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      title: "Vehicle Anti-Theft System",
      description:
        "An Arduino-based security system using fingerprint authentication, with GSM module integration for remote notifications and enhanced vehicle security.",
      icon: Shield,
      tech: ["Arduino", "C++", "Hardware Integration", "GSM Module", "Sensors"],
    },
    {
      title: "Military Multipurpose Robot",
      description:
        "Designed and built a versatile robot for military applications, featuring surveillance capabilities, obstacle detection, and remote control functionality.",

      tech: [
        "Arduino Mega",
        "Sensors",
        "GPS Module",
        "Camera Module",
        "Bluetooth",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <hr className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {tech}
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
