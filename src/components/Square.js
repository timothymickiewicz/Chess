import React from 'react';

function Square(props) {

  return (
    props.possibleMove ?
        <div className={`col${props.colNum}`}>
            {props.possibleMove}
        </div>
    : props.outline ? 
        <div className={`col${props.colNum}`}>
            {props.outline}
        </div>
    :
        <div className={`col${props.colNum}`}>
            {props.piece}
        </div>
  )
}

export default Square;