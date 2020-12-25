import React from 'react';
import Logo from '../logo/Logo';
import ProfileIcon from '../profile/ProfileIcon';

import './Navigation.css';


const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <nav className='navbar'>
        <Logo />
        <ProfileIcon toggleModal={toggleModal} onRouteChange={onRouteChange}/>
      </nav>
    );
  }
  else {
    return (
      <nav className='navbar'>
        <Logo />
      </nav>
    )
  }
}

export default Navigation;
