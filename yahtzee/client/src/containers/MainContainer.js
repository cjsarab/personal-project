import React from 'react';
import RollDiceButton from '../components/dice/RollDiceButton';
import DiceDisplay from '../components/dice/DiceDisplay';
import ScoreCard from '../components/scorecard/ScoreCard';

const MainContainer = () => {
  return (
    <>
    <RollDiceButton />
    <DiceDisplay />
    <ScoreCard />
    </>
  );
};

export default MainContainer;