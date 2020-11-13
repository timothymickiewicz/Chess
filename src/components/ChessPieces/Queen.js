import React from 'react';

function Queen(props) {
    const [position, setPosition] = React.useState([props.rowNum, props.colNum])
    const [color, setColor] = React.useState(props.color)
  return (
    <div className="icon">
      {props.piece}
    </div>
  );
}

export default Queen;