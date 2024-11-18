import React from "react";
import { MapPin, Mail, Download } from "lucide-react";
import '../CssComponents/Profile.css';


export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm Santosh Karpurashetti
              <span className="block text-blue-600 mt-2">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              BE/BTech graduate with expertise in Java, Spring Boot, MySQL, and
              modern web technologies. Passionate about building scalable
              applications and solving complex problems.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                Belgaum, Karnataka
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                Santumk1008@gmail.com
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
              <div className="flex gap-4">
                {/* <a
                  href="https://github.com/santosh-javadevelopper"
                  className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                > */}
                {/* <Github className="w-5 h-5" />
                </a> */}
                {/* <a
                  href="https://linkedin.com/in/santosh-karpurashetti-8778001ba"
                  className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-10 absolute -inset-4"></div>
            <img
              src="../src/Images/IMG_5952.jpg"
              alt="Profile"
              className="Screen_Photos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
