import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ChevronLeft, Maximize2, RotateCcw, Share2, Heart, Flag } from 'lucide-react';
import { games } from '../data/games';

export const GamePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === id);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#1a1a1a] text-white">
        <h2 className="text-3xl font-bold mb-4">Game Not Found</h2>
        <Link to="/" className="text-indigo-400 hover:text-indigo-300 font-semibold underline">
          Go back home
        </Link>
      </div>
    );
  }

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  const handleReload = () => {
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="min-h-screen bg-[#111] p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Navigation */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-xl bg-[#222] border border-gray-800"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Games</span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="bg-indigo-600/20 text-indigo-400 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-600/30 uppercase tracking-widest">
              {game.category}
            </span>
          </div>
        </div>

        {/* Game Container */}
        <div className="relative aspect-video w-full bg-black rounded-3xl overflow-hidden shadow-2xl shadow-indigo-600/10 border border-gray-800">
          <iframe
            id="game-iframe"
            src={game.iframeUrl}
            className="w-full h-full border-none"
            allowFullScreen
            title={game.title}
            scrolling="no"
          />
          
          {/* Custom Controls (Floating bottom) */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handleReload}
              className="bg-black/60 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/80 transition-all"
              title="Reload Game"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleFullscreen}
              className="bg-indigo-600/80 backdrop-blur-md p-3 rounded-full text-white hover:bg-indigo-600 transition-all"
              title="Fullscreen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Game Details & Controls Bar */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{game.title}</h1>
              <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">{game.description}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all border ${
                  isLiked 
                    ? 'bg-red-500/10 border-red-500/50 text-red-500 shadow-lg shadow-red-500/20' 
                    : 'bg-[#2a2a2a] border-gray-700 text-gray-300 hover:border-gray-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500' : ''}`} />
                <span>{isLiked ? 'Liked!' : 'Favorite'}</span>
              </button>
              
              <button className="p-4 bg-[#2a2a2a] border border-gray-700 rounded-2xl text-gray-300 hover:text-white hover:border-gray-500 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              
              <button className="p-4 bg-[#2a2a2a] border border-gray-700 rounded-2xl text-gray-300 hover:text-red-400 hover:border-red-500/50 transition-all">
                <Flag className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-xl text-gray-400">
              <span className="text-xs uppercase font-bold text-gray-500">Version</span>
              <span className="text-sm font-semibold text-gray-200">1.2.4</span>
            </div>
            <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-xl text-gray-400">
              <span className="text-xs uppercase font-bold text-gray-500">Developer</span>
              <span className="text-sm font-semibold text-gray-200">ArcadeLab</span>
            </div>
            <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-xl text-gray-400">
              <span className="text-xs uppercase font-bold text-gray-500">Rating</span>
              <span className="text-sm font-semibold text-indigo-400 underline cursor-pointer">4.8 (1,200 votes)</span>
            </div>
          </div>
        </div>

        {/* Recommended Section (Simplified) */}
        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-bold text-white px-2">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {games.filter(g => g.id !== id).slice(0, 4).map(recommendedGame => (
              <Link 
                key={recommendedGame.id}
                to={`/play/${recommendedGame.id}`}
                className="group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={recommendedGame.thumbnail} alt={recommendedGame.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-bold text-white line-clamp-1">{recommendedGame.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
