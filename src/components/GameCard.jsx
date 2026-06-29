import React, { useState } from 'react';
import { FaPlay, FaCog } from 'react-icons/fa';
import './GameCard.css';

function GameCard({ game }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="game-card"
      style={{ background: game.image }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="game-overlay">
        {isHovered && (
          <div className="game-actions">
            <button className="action-btn">
              <FaPlay /> PLAY
            </button>
            <button className="action-btn">
              <FaCog /> SETTINGS
            </button>
          </div>
        )}
        <h3>{game.title}</h3>
      </div>
    </div>
  );
}

export default GameCard;
