import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 border border-blue-400/20 rounded-lg transform rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-blue-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-blue-400/20 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 border border-blue-400/20 rounded-lg animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-glow">
              John Doe
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent glow-effect"></div>
          </div>

          <p className="text-2xl md:text-4xl font-light text-gray-300">
            Creative Developer & Designer
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Crafting immersive digital experiences with modern technologies.
            Specializing in 3D web design, interactive animations, and cutting-edge frontend development.
          </p>

          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <button
              onClick={() => onNavigate('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 glow-effect"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="group px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-400/10 hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center pt-12">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
