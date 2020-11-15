import React from 'react';

function Pawn(props) {

    const setAsActivePiece = (name) => {
        props.handleSetActivePiece(name);
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
