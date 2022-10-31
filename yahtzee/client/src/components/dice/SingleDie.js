import React from 'react';

const SingleDie = ({dieNumber, toggleLockDice, index}) => {

    const handleClick = function() {
        toggleLockDice(index);
    };

  return (
    <div onClick={handleClick}>{dieNumber}</div>
  );
};

export default SingleDie;