import React, { useEffect, useState } from 'react';
import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import Screen3 from './components/screen3';
import image from './assets/image2.png';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('screen-1');

  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        setActiveTab(targetId);
      });
    });
  }, []);

  return (
    <div className="retro-container scanline-effect">
      <header>
        <h1>Futuristic UI</h1>
        <nav role="navigation">
          <ul>
            <li><a href="#screen-1">SCREEN 1</a></li>
            <li><a href="#screen-2">SCREEN 2</a></li>
            <li><a href="#screen-3">SCREEN 3</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Screen1 activeTab={activeTab} />
        <Screen2 activeTab={activeTab} />
        <Screen3 activeTab={activeTab} />
      </main>
      <div className='holo-container'>
        <img src={image} alt="Futuristic illustration" className='holographic' />
        <div className="lattice"></div>
      </div>
      <footer>
      </footer>
    </div>
  );
};

export default App;
