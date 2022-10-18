import React, {useState} from 'react';
import LiftShaft1 from '../components/LiftShaft1';
import LiftShaft2 from '../components/LiftShaft2';

const LiftContainer = () => {

    const [floorLift1, setFloorLift1] = useState('0');
    const [floorLift2, setFloorLift2] = useState('0');


  return (
    <>
    <div className="lift-container">
        <div className="lift-shafts">
    <LiftShaft1 floor={floorLift1}/>
    <LiftShaft2 floor={floorLift2}/>
    </div>
    </div>
    </>
  )
}

export default LiftContainer;