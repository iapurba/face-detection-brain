import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className='gray'>{'This magic brain will detect faces in your picture. Give it a try.'}</p>
      <div className="center">
        <div className='center form pa4 br3 shadow-5'>
          <input
            className='image-url-field f4 pa2 pl3 w-70 center'
            type='text'
            placeholder='Insert an image url here'
            onChange={onInputChange}
          />
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
