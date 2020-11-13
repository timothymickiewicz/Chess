import React from 'react';

function Bishop(props) {
    const [position, setPosition] = React.useState([props.rowNum, props.colNum])
    const [color, setColor] = React.useState(props.color)

    React.useEffect(() => {
        console.log(props.color)
    })

    const handleMovement = () => {
        let movement = {
            name: 'bishop',
            newPosition: [5, 5]
        }
        props.handleSetPiecePositions(movement)
    }

  return (
    <div className="icon" onClick={() => {
        handleMovement()
    }}>
      {props.piece}
    </div>
  );
}

export default Bishop;