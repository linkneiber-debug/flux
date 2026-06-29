import React from 'react';
import GameCard from './GameCard';
import './Library.css';

function Library() {
  const installedGames = [
    { id: 1, title: 'Neon Nights' },
    { id: 2, title: 'Cyber Pulse' },
    { id: 3, title: 'Void Runner' },
    { id: 4, title: 'Flux Engine' },
    { id: 5, title: 'Echo Chamber' },
    { id: 6, title: 'Solar Flare' }
  ];

  return (
    <div className="library">
      <h1>My Library</h1>
      <div className="library-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Installed</button>
        <button className="filter-btn">Favorite</button>
      </div>
      <div className="games-grid">
        {installedGames.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Library;
