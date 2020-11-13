import React from 'react';

import './Chessboard.css';

import Row from './Row';

function Chessboard() {
    const [piecePositions, setPiecePositions] = React.useState([]);

    const handleSetPiecePositions = (piecePosition) => {
        setPiecePositions([...piecePositions, piecePosition])
    }

    React.useEffect(() => {
        renderChessboard();
    })

    const renderChessboard = () => {
        let rows = [];
        for (let i=0;i<8;i++) {
            rows.push(
                <Row rowNum={i} handleSetPiecePositions={handleSetPiecePositions} />
            )
        }
        return rows
    }

    const killPiece = () => {

    }

    const movePiece = (piece) => {

    }

    const checkmate = () => {

    }

    return (
        <div className="chessboard">
            {renderChessboard()}
        </div>
    );
}

export default Chessboard;