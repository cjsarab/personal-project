import React, { useState, useEffect } from 'react';

import RollDiceButton from '../components/dice/RollDiceButton';
import DiceDisplay from '../components/dice/DiceDisplay';
import ScoreCard from '../components/scorecard/ScoreCard';

const MainContainer = () => {

    const [currentRoll, setCurrentRoll] = useState([null, null, null, null, null])
    const [lockedDice, setLockedDice] = useState([false, false, false, false, false])



    const rollUnlockedDice = function() {

        const roll = 1 + Math.floor(Math.random() * 6);

        setCurrentRoll([roll, roll, roll, roll, roll])
        console.log(currentRoll);
        console.log("Rolled Dice")
        return
    };



  return (
    <>
    <RollDiceButton
    rollUnlockedDice={rollUnlockedDice}/>
    <DiceDisplay
     currentRoll={currentRoll}/>
    <ScoreCard />
    </>
  );
};

export default MainContainer;