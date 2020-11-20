import React from 'react';

function PossibleMove(props) {

  return (
    props.code ? 
      <div className='enemyOccupied'>
        <div dangerouslySetInnerHTML={{ __html: props.code }} className='shadow'></div>
        {props.piece}
      </div>
      :
      <div className='empty' >
      </div>
  );
}

export default PossibleMove;