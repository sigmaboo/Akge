import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GameCard } from './components/GameCard';
import { games } from './data/games';
import { LayoutGrid, TrendingUp, Sparkles, Zap, Award } from 'lucide-react';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(games.map(g => g.category))];

  return (
    <div className="min-h-screen bg-[#111] text-white selection:bg-indigo-500/30">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Hero / Banner Section */}
      <section className="relative h-[350px] md:h-[450px] w-full bg-gradient-to-r from-indigo-900/40 to-black overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1920')] bg-cover bg-center mix-blend-overlay opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center gap-6">
          <div className="space-y-4 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-indigo-600/20 px-4 py-2 rounded-full border border-indigo-600/40 text-indigo-400 font-bold text-sm tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              Featured Game of the Month
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
              UNLIMITED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">ARCADE</span> EXCITEMENT
            </h1>
            <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-lg">
              Explore hundreds of premium unblocked games. No downloads, no subscriptions, just pure gaming fun directly in your browser.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-600/20 transform hover:-translate-y-1 transition-all active:scale-95">
                Play Now
              </button>
              <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transform hover:-translate-y-1 transition-all">
                Browse More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        
        {/* Categories Bar */}
        <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                selectedCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'bg-[#222] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase text-xs tracking-[0.2em]">
              <TrendingUp className="w-4 h-4" />
              Popular Games
            </div>
            <h2 className="text-4xl font-black text-white tracking-tight">Trending Now</h2>
          </div>
          <a href="#" className="text-indigo-400 hover:text-indigo-300 font-bold text-sm underline-offset-4 hover:underline transition-all">
            View All Games
          </a>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))
          ) : (
            <div className="col-span-full py-24 flex flex-col items-center justify-center space-y-4 bg-[#1a1a1a] rounded-3xl border border-dashed border-gray-800">
              <LayoutGrid className="w-16 h-16 text-gray-700" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">No games found</p>
                <p className="text-gray-500 font-medium">Try searching for something else or explore a different category.</p>
              </div>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 hover:border-indigo-500/30 transition-all group">
            <div className="bg-indigo-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600/20 transition-all">
              <Zap className="text-indigo-500 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ultra Fast Loading</h3>
            <p className="text-gray-400 font-medium leading-relaxed">Our optimized game engine ensures minimal load times so you can jump straight into the action.</p>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 hover:border-purple-500/30 transition-all group">
            <div className="bg-purple-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600/20 transition-all">
              <Award className="text-purple-500 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Community Rated</h3>
            <p className="text-gray-400 font-medium leading-relaxed">Every game is hand-picked and rated by our community to ensure only the highest quality content.</p>
          </div>
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-gray-800 hover:border-emerald-500/30 transition-all group">
            <div className="bg-emerald-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600/20 transition-all">
              <Gamepad2 className="text-emerald-500 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">No Install Required</h3>
            <p className="text-gray-400 font-medium leading-relaxed">Play everything directly in your browser. Compatible with all modern desktop and mobile browsers.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-gray-800 py-16 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Gamepad2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight uppercase">UnblockedArcade</span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">The ultimate destination for unblocked gaming. Play anywhere, anytime, for free.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight uppercase">Categories</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Action Games</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Puzzle Classics</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Racing Sims</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Adventure RPGs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight uppercase">Platform</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Developer Portal</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-tight uppercase">Newsletter</h4>
            <p className="text-gray-400 font-medium mb-4">Get notified about new game releases and site updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-[#2a2a2a] border border-gray-700 rounded-xl px-4 py-2.5 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl font-bold transition-all">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm font-bold uppercase tracking-widest">
          © 2026 UNBLOCKED ARCADE • ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
};
