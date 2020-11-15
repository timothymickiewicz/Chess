import React from 'react';

function Row(props) {

  return (
    <div className={`row${props.rowNum}`}>
        {
            props.squares.map((square) => {
                return square
            })
        }
    </div>
  );
}

export default Row;