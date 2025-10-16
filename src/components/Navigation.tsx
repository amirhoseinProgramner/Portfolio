import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-400 text-glow cursor-pointer" onClick={() => handleNavigate('home')}>
            Portfolio
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'text-blue-400 text-glow'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 glow-effect"></span>
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    : 'text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
