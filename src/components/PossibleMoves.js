import React from 'react';

function PossibleMoves(props) {

  return (
    <div className="outline">
        <div className={props.piece ? 'enemyOccupied' : 'empty'}></div>
        {props.piece ? props.piece : null}
    </div>
  );
}

export default PossibleMoves;