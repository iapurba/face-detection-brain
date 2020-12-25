import React from 'react';


const Rank = ({ name, entries }) => {
  return (
    <div className='pt-3' style={{color:'#FEFFFF'}}>
      <h4>
        {`${name}, your current entry count is...`}
      </h4>
      <div className='f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;
