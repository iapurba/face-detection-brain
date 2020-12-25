import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className='desc'>{'This magic brain will detect faces in your picture. Give it a try.'}</p>
      <div className="center">
        <div className='form-container shadow-1'>
          <input
            className='image-url-field f4 pa2 w-70'
            type='text'
            placeholder='Insert an image url here'
            onChange={onInputChange}
          />
          <button
            className='image-submit-btn w-30 grow f4 link pv2 dib'
            type='button'
            onClick={onImageSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
