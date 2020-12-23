import React from 'react';
import Logo from '../logo/Logo';
import ProfileIcon from '../profile/ProfileIcon';


const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <nav className='pa2 mh3 v-mid' style={{display:'flex', justifyContent:'space-between'}}>
        <Logo />
        <ProfileIcon toggleModal={toggleModal} onRouteChange={onRouteChange}/>
      </nav>
    );
  }
  else {
    return (
      <div>
        <nav style={{display:'flex', justifyContent:'space-between'}}>
          <Logo />
        </nav>
      </div>
    )
  }
}

export default Navigation;
