import React from 'react';
import Logo from '../logo/Logo';


const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className='pa2 mh3 v-mid' style={{display:'flex', justifyContent:'space-between'}}>
        <Logo />
        <p onClick={() => onRouteChange('signout')} className='f4 pa3 dim pointer black'>Sign Out</p>
      </nav>
    );
  }
  else {
    return (
      <div>
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f4 pa3 dim pointer black'>Sign in</p>
        </nav>
      </div>
    )
  }
}

export default Navigation;
