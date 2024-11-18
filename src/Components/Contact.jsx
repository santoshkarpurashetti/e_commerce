import React from "react";
import { Mail, Phone, MapPin, Languages } from "lucide-react";

export function Contact() {
  const languages = ["English", "Kannada", "Hindi", "Marathi", "Telugu"];
  const qualities = [
    "Self-Motivated",
    "Determined",
    "Goal-Oriented",
    "Passionate",
    "Team Player",
    "Problem Solver",
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Contact & Personal Info
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:Santumk1008@gmail.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Santumk1008@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">+91 8762099503</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">
                  A/p: Suttatti, Tq: Raybag, Dist: Belgaum, 591311
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full"
                >
                  <Languages className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">{language}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Key Qualities</h3>
            <div className="flex flex-wrap gap-2">
              {qualities.map((quality, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
