import React, { useState } from 'react';
import GameCard from './GameCard';
import { FaPlay, FaDownload } from 'react-icons/fa';
import './Featured.css';

function Featured() {
  const [featuredGame] = useState({
    title: 'Stellar Quest',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    description: 'Embark on an epic journey through the cosmos'
  });

  const games = [
    { id: 1, title: 'Neon Nights', image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { id: 2, title: 'Cyber Pulse', image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { id: 3, title: 'Void Runner', image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { id: 4, title: 'Flux Engine', image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }
  ];

  return (
    <div className="featured">
      <div className="featured-banner" style={{ background: featuredGame.image }}>
        <div className="featured-overlay">
          <h1>{featuredGame.title}</h1>
          <p>{featuredGame.description}</p>
          <div className="featured-buttons">
            <button className="btn-primary">
              <FaPlay /> PLAY NOW
            </button>
            <button className="btn-secondary">
              <FaDownload /> INSTALL
            </button>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <h2>Popular Games</h2>
        <div className="games-grid">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
