import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      title: "Bachelor of Engineering",
      institution: "Shaikh College Of Engineering Technology, Belgaum",
      period: "Electronics and Communications",
      icon: GraduationCap,
    },
    {
      title: "PUC",
      institution: "GSS Science PU College Belgaum",
      period: "Science Stream",
      icon: BookOpen,
    },
    {
      title: "SSLC",
      institution: "Bharatesh Vidyalaya Bellada Bagewadi",
      period: "High School",
      icon: Award,
    },
  ];

  const certifications = [
    {
      title: "Java Full Stack Development",
      institution: "JSpiders",
      description: "Comprehensive training in Core Java, HTML, CSS, JavaScript, and MySQL",
      date: "Feb 2023",
    },
    {
      title: "DSA and Competitive Programming",
      institution: "GeeksforGeeks",
      description: "Online course covering algorithms and data structures",
      date: "May 2023",
    },
    {
      title: "Android Application Development",
      institution: "Sai Tekronics Pvt Ltd",
      description: "3-month internship in Android development using Java",
      date: "Nov 2023",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education & Training</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg h-fit">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-blue-600">{item.institution}</p>
                    <p className="text-gray-500">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications & Training</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>
                  <p className="text-blue-600 text-sm mb-2">{cert.institution}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}