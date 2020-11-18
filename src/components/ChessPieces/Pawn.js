import React from 'react';

function Pawn(props) {

    const setAsActivePiece = (name) => {
      if (props.activePiece !== name) {
        props.handleSetActivePiece(name);
        props.handleClearNewCoords();
      }
    }

  return (
    <div data-attr='wat' className="icon" onClick={(e) =>{
        setAsActivePiece(props.name)
    }}>
      {props.code}
    </div>
  );
}

export default Pawn;
