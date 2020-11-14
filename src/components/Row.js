import React from 'react';

import Square from './Square';

function Row(props) {

    React.useEffect(() => {
        console.log(props.squares.length)
    })

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