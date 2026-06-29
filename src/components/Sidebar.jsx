import React from 'react';
import { FaHome, FaGamepad, FaCog, FaUser } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ currentView, setCurrentView }) {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="flux-logo">⚡</div>
        <h1>FLUX</h1>
      </div>
      
      <nav className="nav-menu">
        <div
          className={`nav-item ${currentView === 'featured' ? 'active' : ''}`}
          onClick={() => setCurrentView('featured')}
        >
          <FaHome /> Featured
        </div>
        <div
          className={`nav-item ${currentView === 'library' ? 'active' : ''}`}
          onClick={() => setCurrentView('library')}
        >
          <FaGamepad /> Library
        </div>
        <div className="nav-item">
          <FaUser /> Friends
        </div>
        <div className="nav-item">
          <FaCog /> Settings
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar"></div>
          <div className="user-details">
            <p className="username">Player One</p>
            <p className="status">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
