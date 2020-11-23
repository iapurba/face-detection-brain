import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className='gray'>{'This magic brain will detect faces in your picture. Give it a try.'}</p>
      <div className="center">
        <div className='center form pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
          <button
            className='w-30 grow f4 link pv2 dib white bg-light-purple'
            type='button'
            onClick={onImageSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
