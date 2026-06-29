import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';
import Library from './components/Library';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('featured');

  return (
    <div className="app">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="main-content">
        {currentView === 'featured' && <Featured />}
        {currentView === 'library' && <Library />}
      </div>
    </div>
  );
}

export default App;
