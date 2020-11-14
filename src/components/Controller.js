import React from 'react';

// Set up all possible movements, restrict them to the props.num that corresponds to the pieces. remember to invert the colors for opposite movements
function Controller(props) {

    React.useEffect(() => {
        console.log(props.piece)
    })

    const handleClick = () => {
        let movement = {
            name: props.piece,
            newPosition: [5, 5]
        }
        props.handleSetPiecePositions(movement)
    }

  return (
    <div className="controller" onClick={() => {
        handleClick();
    }}>
      {props.piece}
    </div>
  );
}

export default Controller;