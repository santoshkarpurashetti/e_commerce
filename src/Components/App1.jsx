import React from "react";
import { Hero } from "./Hero";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "./Contact";
import Skills from "./Skills";


function App1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">


     

      <main className="pt-16">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        
       
      </main>

      <footer className="bg-white mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">
              © 2024 Santosh Karpurashetti. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/santosh-javadevelopper"
                className="text-gray-500 hover:text-gray-700"
              >
                {/* <Github className="w-5 h-5" /> */}
              </a>
              <a
                href="https://linkedin.com/in/santosh-karpurashetti-8778001ba"
                className="text-gray-500 hover:text-gray-700"
              >
                {/* <Linkedin className="w-5 h-5" /> */}
              </a>
              <a
                href="mailto:Santumk1008@gmail.com"
                className="text-gray-500 hover:text-gray-700"
              >
                {/* <Mail className="w-5 h-5" /> */}
              </a>
            </div>
          </div>
        </div>
   
      </footer>
    </div>
  );
}

export default App1;
