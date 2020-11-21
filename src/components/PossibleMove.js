import React from 'react';

function PossibleMove(props) {

  return (
    props.code ? 
      <div className='enemyOccupied'>
        {props.piece}
      </div>
      :
      <div className='empty' >
      </div>
  );
}

export default PossibleMove;