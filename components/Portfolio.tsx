import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  data: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const featuredProjects = data.filter(item => item.featured);
  const otherProjects = data.filter(item => !item.featured);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Portfolio</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Featured Projects</h3>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all hover:border-blue-200">
              <div className="aspect-video bg-slate-100 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900">Other Projects</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all hover:border-blue-200">
                  <div className="aspect-video bg-slate-100 rounded-xl mb-4 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;