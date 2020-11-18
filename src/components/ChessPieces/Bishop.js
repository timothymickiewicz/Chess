import React from 'react';
import $ from 'jquery';

function Bishop(props) {

    React.useEffect(() => {
    }, [props.selectedPiece, props.name])

    const setAsActivePiece = (name) => {
      if (props.activePiece !== name) {
        props.handleSetActivePiece(name);
        props.handleClearNewCoords();
      }
    }

  return (
    <div style={{color: props.selectedPiece === props.name ? 'red' : 'black'}} className="icon" onClick={(e) => {
        setAsActivePiece(props.name)
    }}>
      {props.code}
    </div>
  );
}

export default Bishop;