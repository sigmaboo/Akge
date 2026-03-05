import React from 'react';
import { Link } from 'react-router';
import { Play, Star, Clock } from 'lucide-react';
import { Game } from '../data/games';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link 
      to={`/play/${game.id}`}
      className="group relative bg-[#222] rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        <ImageWithFallback
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-indigo-600 p-4 rounded-full shadow-xl shadow-indigo-600/30 ring-4 ring-indigo-400/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Play className="text-white w-6 h-6 fill-white" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-indigo-600/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
            {game.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-gradient-to-b from-[#222] to-[#1a1a1a]">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-indigo-400 transition-colors">
          {game.title}
        </h3>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-300">4.8</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>2.5k plays</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
