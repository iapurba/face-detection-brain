import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f3 pa3 dim underline pointer black'>Sign Out</p>
      </nav>
    );
  }
  else {
    return (
      <div>
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 pa3 dim underline pointer black'>Sign in</p>
        </nav>
      </div>
    )
  }
}

export default Navigation;
