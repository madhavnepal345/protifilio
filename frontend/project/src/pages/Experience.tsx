import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Award, ArrowRight } from 'lucide-react';

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: "Led development of enterprise-scale applications using React, Node.js, and AWS.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipeline"
      ],
      color: "blue"
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      location: "New York, NY",
      description: "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced bug reports by 60%",
        "Mentored junior developers"
      ],
      color: "purple"
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2017 - 2019",
      location: "Boston, MA",
      description: "Created responsive and interactive web applications for various clients.",
      achievements: [
        "Built 20+ client websites",
        "Implemented design system",
        "Improved site accessibility"
      ],
      color: "green"
    }
  ];

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-blue-400" size={32} />
            <h1 className="text-4xl font-bold">Professional Experience</h1>
          </div>

          <div className="grid lg:grid-cols-[300px,1fr] gap-8">
            {/* Timeline Navigation */}
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeExperience === index
                      ? 'bg-gray-800 shadow-lg shadow-blue-500/10'
                      : 'bg-gray-900/50 hover:bg-gray-800/50'
                  }`}
                >
                  <h3 className="font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </button>
              ))}
            </div>

            {/* Experience Details */}
            <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="animate-fadeIn">
                <div className="flex flex-wrap items-start gap-6 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {experiences[activeExperience].title}
                    </h2>
                    <h3 className="text-xl text-blue-400 mb-4">
                      {experiences[activeExperience].company}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={18} />
                      <span>{experiences[activeExperience].period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={18} />
                      <span>{experiences[activeExperience].location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">
                  {experiences[activeExperience].description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Award className="text-blue-400" size={20} />
                    Key Achievements
                  </h4>
                  <div className="grid gap-3">
                    {experiences[activeExperience].achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <ArrowRight size={16} className="text-blue-400" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}