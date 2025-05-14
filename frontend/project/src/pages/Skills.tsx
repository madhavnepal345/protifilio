import React, { useState, useEffect } from 'react';
import { Code, Brain, Cpu, Server, Palette, Terminal } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Skills', icon: Brain },
    { id: 'frontend', label: 'Frontend', icon: Palette },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'devops', label: 'DevOps', icon: Terminal },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'tools', label: 'Tools', icon: Cpu }
  ];

  const skills = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', level: 90, category: 'frontend', color: 'from-blue-400 to-indigo-500' },
    { name: 'Next.js', level: 85, category: 'frontend', color: 'from-gray-600 to-gray-900' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend', color: 'from-teal-400 to-cyan-500' },
    
    // Backend
    { name: 'Node.js', level: 88, category: 'backend', color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 85, category: 'backend', color: 'from-yellow-400 to-yellow-600' },
    { name: 'GraphQL', level: 80, category: 'backend', color: 'from-pink-400 to-rose-500' },
    { name: 'PostgreSQL', level: 85, category: 'backend', color: 'from-blue-500 to-indigo-600' },
    
    // DevOps
    { name: 'Docker', level: 82, category: 'devops', color: 'from-blue-400 to-blue-600' },
    { name: 'Kubernetes', level: 75, category: 'devops', color: 'from-blue-500 to-indigo-500' },
    { name: 'AWS', level: 80, category: 'devops', color: 'from-orange-400 to-red-500' },
    { name: 'CI/CD', level: 85, category: 'devops', color: 'from-green-500 to-emerald-600' },
    
    // Languages
    { name: 'JavaScript', level: 95, category: 'languages', color: 'from-yellow-300 to-yellow-500' },
    { name: 'Python', level: 88, category: 'languages', color: 'from-blue-400 to-indigo-500' },
    { name: 'Go', level: 75, category: 'languages', color: 'from-cyan-400 to-blue-500' },
    { name: 'Rust', level: 70, category: 'languages', color: 'from-orange-500 to-red-600' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools', color: 'from-orange-500 to-red-500' },
    { name: 'VS Code', level: 95, category: 'tools', color: 'from-blue-500 to-indigo-600' },
    { name: 'Vim', level: 75, category: 'tools', color: 'from-green-500 to-emerald-600' },
    { name: 'Linux', level: 85, category: 'tools', color: 'from-gray-600 to-gray-800' }
  ];

  const filteredSkills = skills.filter(
    skill => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Technical Skills</h1>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                {label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  
                  {/* Skill Bar */}
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: hoveredSkill === skill.name ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>

                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}