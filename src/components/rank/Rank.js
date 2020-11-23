import React from 'react';


const Rank = ({ name, entries }) => {
  return (
    <div className='pt2'>
      <div className='f3 black'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='f1 black'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;
