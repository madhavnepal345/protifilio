import React from 'react';
import { User, Coffee } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <User className="text-blue-400" size={24} />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly applications. With over 5 years of experience in web development, I specialize in building modern web applications using cutting-edge technologies.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new technologies. I believe in continuous learning and sharing knowledge with the developer community.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Coffee className="text-orange-400" size={24} />
                <span>Fueled by coffee and passion for code</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}