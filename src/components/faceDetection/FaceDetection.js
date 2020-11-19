import React from 'react';
import './BoundingBox.css';


const FaceDetection = ({imageUrl, boundingBox}) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' src={imageUrl} alt='' width='500px' height='auto' />
        <div className='boundingBox'
        style={{top:boundingBox.topRow, right:boundingBox.rightCol,
        bottom:boundingBox.bottomRow, left:boundingBox.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceDetection;
