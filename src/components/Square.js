import React from 'react';

import Pawn from './ChessPieces/Pawn';
import Rook from './ChessPieces/Rook';
import Knight from './ChessPieces/Knight';
import Bishop from './ChessPieces/Bishop';
import Queen from './ChessPieces/Queen';
import King from './ChessPieces/King';

function Square(props) {

    React.useEffect(() => {
        console.log(props.piece)
    })

    const renderPiece = () => {
        return (
            props.piece
        )
    }

  return (
    <div className={`col${props.colNum}`}>
      {props.piece}
    </div>
  );
}

export default Square;