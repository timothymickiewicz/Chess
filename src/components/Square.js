import React from 'react';

import Pawn from './ChessPieces/Pawn';
import Rook from './ChessPieces/Rook';
import Knight from './ChessPieces/Knight';
import Bishop from './ChessPieces/Bishop';
import Queen from './ChessPieces/Queen';
import King from './ChessPieces/King';

function Square(props) {

    const renderChessPiece = (rowIteration, colIteration) => {
        switch(rowIteration) {
            case 0:
                switch(colIteration) {
                    case 0:
                        return (
                            <Rook piece='&#9814;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 1:
                        return (
                            <Knight piece='&#9816;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 2:
                        return (
                            <Bishop piece='&#9815;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 3:
                        return (
                            <Queen piece='&#9813;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 4:
                        return (
                            <King piece='&#9812;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 5:
                        return (
                            <Bishop piece='&#9815;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 6:
                        return (
                            <Knight piece='&#9816;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 7:
                        return (
                            <Rook piece='&#9814;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    default:
                        break;
                }
                break;
            case 1:
                return (
                    <Pawn piece='&#9817;' color='white' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                )
            case 6:
                return (
                    <Pawn piece='&#9823;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                )
            case 7:
                switch(colIteration) {
                    case 0:
                        return (
                            <Rook piece='&#9820;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 1:
                        return (
                            <Knight piece='&#9822;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 2:
                        return (
                            <Bishop piece='&#9821;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 3:
                        return (
                            <Queen piece='&#9819;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions} />
                        )
                    case 4:
                        return (
                            <King piece='&#9818;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions}/>
                        )
                    case 5:
                        return (
                            <Bishop piece='&#9821;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions}/>
                        )
                    case 6:
                        return (
                            <Knight piece='&#9822;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions}/>
                        )
                    case 7:
                        return (
                            <Rook piece='&#9820;' color='black' rowNum={rowIteration} colNum={colIteration} handleSetPiecePositions={props.handleSetPiecePositions}/>
                        )
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }

  return (
    <div className={`col${props.colNum}`}>
      {renderChessPiece(props.rowNum, props.colNum)}
    </div>
  );
}

export default Square;