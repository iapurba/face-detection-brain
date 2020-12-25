import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './face-detect.gif'

const Logo = () => {
  return (
    <Tilt className="Tilt" options={{ max : 25 }}>
      <div className="Tilt-inner">
        <img className='logo' src={brain} alt='brain-logo' />
      </div>
    </Tilt>
  );
}

export default Logo;
