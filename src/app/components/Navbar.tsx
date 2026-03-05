import React from 'react';
import { Link } from 'react-router';
import { Search, Gamepad2, Menu, X } from 'lucide-react';

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Navbar = ({ searchTerm, setSearchTerm }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-gray-800 px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-500 transition-colors">
            <Gamepad2 className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight hidden sm:block">UnblockedArcade</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search for a game..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#2a2a2a] border border-gray-700 text-white pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-gray-500"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium">Home</Link>
          <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Action</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Puzzle</a>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold transition-all">
            Join Discord
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-gray-800 p-4 space-y-4">
          <Link to="/" className="block text-gray-300 hover:text-white py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#" className="block text-gray-300 hover:text-white py-2">Action</a>
          <a href="#" className="block text-gray-300 hover:text-white py-2">Puzzle</a>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">
            Join Discord
          </button>
        </div>
      )}
    </nav>
  );
};
