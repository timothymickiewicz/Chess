import React from 'react';

function Queen(props) {

    const setAsActivePiece = (name) => {
      if (props.activePiece !== name) {
        props.handleSetActivePiece(name);
        props.handleClearNewCoords();
      }
    }

  return (
    <div className="icon" onClick={(e) => {
        setAsActivePiece(props.name)
    }}>
      {props.code}
    </div>
  );
}

export default Queen;