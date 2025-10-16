import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  longDescription: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: '3D Portfolio Site',
    description: 'An immersive portfolio website with advanced 3D animations and interactive elements.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Three.js', 'WebGL'],
    demoUrl: '#',
    githubUrl: '#',
    longDescription: 'A cutting-edge portfolio website featuring real-time 3D graphics, particle systems, and immersive user interactions. Built with modern web technologies to showcase creative development skills.',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with seamless checkout and inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    longDescription: 'Full-featured e-commerce platform with real-time inventory tracking, secure payment processing, and an intuitive admin dashboard. Optimized for performance and conversion.',
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description: 'Real-time chat app powered by AI with intelligent responses and natural conversations.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'OpenAI'],
    demoUrl: '#',
    githubUrl: '#',
    longDescription: 'An intelligent chat application leveraging AI to provide context-aware responses. Features include real-time messaging, conversation history, and customizable AI personalities.',
  },
  {
    id: 4,
    title: 'Task Management System',
    description: 'Collaborative project management tool with team features and analytics.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    demoUrl: '#',
    githubUrl: '#',
    longDescription: 'Comprehensive task management platform for teams. Includes Kanban boards, Gantt charts, time tracking, and advanced reporting features to boost productivity.',
  },
  {
    id: 5,
    title: 'Fitness Tracker App',
    description: 'Mobile-first fitness application with workout plans and progress tracking.',
    image: 'https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Redux', 'Charts'],
    demoUrl: '#',
    githubUrl: '#',
    longDescription: 'A comprehensive fitness tracking solution with personalized workout plans, nutrition tracking, and detailed progress analytics. Features social sharing and community challenges.',
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts, maps, and real-time weather alerts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'API', 'Maps'],
    demoUrl: '#',
    githubUrl: '#',
    longDescription: 'Elegant weather dashboard providing detailed forecasts, interactive maps, and severe weather alerts. Features location-based recommendations and historical weather data visualization.',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-glow mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-gray-400">
            Explore my latest work and creative experiments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 card-3d preserve-3d cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-blue-400 group-hover:text-glow transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="text-white" size={20} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <h2 className="text-4xl font-bold text-blue-400 text-glow">
                {selectedProject.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.demoUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all glow-effect"
                >
                  <ExternalLink size={20} />
                  View Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
