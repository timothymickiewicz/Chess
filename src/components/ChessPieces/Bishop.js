import React from 'react';
import $ from 'jquery';

function Bishop(props) {

    React.useEffect(() => {
        console.log(props.selectedPiece)
    }, [props.selectedPiece, props.name])

    const setAsActivePiece = (name) => {
        props.handleSetActivePiece(name);
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