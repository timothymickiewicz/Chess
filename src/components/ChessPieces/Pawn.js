import React from 'react';

function Pawn(props) {
    const [position, setPosition] = React.useState([props.rowNum, props.colNum])
    const [color, setColor] = React.useState(props.color)
    const [firstMove, setFirstMove] = React.useState(true);

    const handleMovement = () => {
        if (firstMove) {
            // move 2 or 1
            setFirstMove(false)
        }
        else {
            // move 1
        }
    }

  return (
    <div className="icon">
      {props.piece}
    </div>
  );
}

export default Pawn;
