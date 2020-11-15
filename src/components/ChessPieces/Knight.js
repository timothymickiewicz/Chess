import React from 'react';

function Knight(props) {

    const setAsActivePiece = (name) => {
        props.handleSetActivePiece(name);
    }

  return (
    <div className="icon" onClick={(e) => {
        setAsActivePiece(props.name)
    }}>
      {props.code}
    </div>
  );
}

export default Knight;