import React from 'react';

import Square from './Square';

function Row(props) {
    const renderSquares = (rowNum) => {
        let squares = []
        for (let j=0;j<8;j++) {
            squares.push(
                <Square colNum={j} rowNum={rowNum} handleSetPiecePositions={props.handleSetPiecePositions} />
            )
        }
        return squares
    }

  return (
    <div className={`row${props.rowNum}`}>
        {renderSquares(props.rowNum)}
    </div>
  );
}

export default Row;