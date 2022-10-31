import React from 'react';

const SingleDie = ({
  dieNumber,
  lockedDice,
  toggleLockDice, 
  index
  }) => {

    const handleClick = function() {
        toggleLockDice(index);
    };

  return (
    <>
    {lockedDice[index] ?
    <div className="locked" onClick={handleClick}>{dieNumber}</div>
    :
    <div className="unlocked" onClick={handleClick}>{dieNumber}</div>
    }
    </>
  );
};

export default SingleDie;