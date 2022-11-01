import React from 'react';

import Ones from './upper/Ones';
import Twos from './upper/Twos';
import Threes from './upper/Threes';
import Fours from './upper/Fours';
import Fives from './upper/Fives';
import Sixes from './upper/Sixes';
import TotalUpper from './upper/TotalUpper';
import Bonus from './upper/Bonus';

import ThreeOfAKind from './lower/ThreeOfAKind';
import FourOfAKind from './lower/FourOfAKind';
import FullHouse from './lower/FullHouse';
import SmallStraight from './lower/SmallStraight';
import LargeStraight from './lower/LargeStraight';
import Chance from './lower/Chance';
import Yahtzee from './lower/Yahtzee';
import TotalLower from './lower/TotalLower';
import GrandTotal from './lower/GrandTotal';

const ScoreCard = ({
  currentRoll,
  score,

  pushScore,
  addNumbers,
  endTurn
  }) => {

  return (
    <>
    <Ones currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <Twos currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <Threes currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <Fours currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <Fives currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <Sixes currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <Bonus score={score} pushScore={pushScore} addNumbers={addNumbers}/>
    <TotalUpper score={score} pushScore={pushScore} addNumbers={addNumbers}/>
    
    <ThreeOfAKind currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <FourOfAKind currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <FullHouse currentRoll={currentRoll} score={score} pushScore={pushScore} endTurn={endTurn}/>
    <SmallStraight currentRoll={currentRoll} score={score} pushScore={pushScore} endTurn={endTurn}/>
    <LargeStraight currentRoll={currentRoll} score={score} pushScore={pushScore}  endTurn={endTurn}/>
    <Chance currentRoll={currentRoll} score={score} pushScore={pushScore} addNumbers={addNumbers} endTurn={endTurn}/>
    <Yahtzee currentRoll={currentRoll} score={score} pushScore={pushScore} endTurn={endTurn}/>
    <TotalLower score={score} pushScore={pushScore} addNumbers={addNumbers}/>
    <GrandTotal score={score} pushScore={pushScore} addNumbers={addNumbers}/>
    <br />
    </>
    );
};

export default ScoreCard;