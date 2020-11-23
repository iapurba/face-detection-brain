import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
  return (
    <div className='logo-container dib'>
      <Tilt className="Tilt br2" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner">
          <img className='pa2 logo' src={brain} alt='brain-logo' />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
