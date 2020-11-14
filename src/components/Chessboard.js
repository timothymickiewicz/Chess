import React from 'react';

import './Chessboard.css';

import Controller from './Controller';
import Row from './Row';
import Square from './Square';
import Pawn from './ChessPieces/Pawn';
import Rook from './ChessPieces/Rook';
import Knight from './ChessPieces/Knight';
import Bishop from './ChessPieces/Bishop';
import Queen from './ChessPieces/Queen';
import King from './ChessPieces/King';

function Chessboard() {
    const [piecePositions, setPiecePositions] = React.useState([
        {
            piece: <Pawn code='&#9817;' />,
            name: 'WP1',
            position: [6,0]
        },
        {
            piece: <Pawn code='&#9817;' />,
            name: 'WP2',
            position: [6,1]
        },
        {
            piece: <Pawn code='&#9817;' />,
            name: 'WP3',
            position: [6,2]
        },
        {
            piece: <Pawn code='&#9817;' />,
            name: 'WP4',
            position: [6,3]
        },
        {
            piece: <Pawn code='&#9817;' />,
            name: 'WP5',
            position: [6,4]
        },
        {
            piece: <Pawn code='&#9817;' />,
            name: 'WP6',
            position: [6,5]
        },
        {
            piece: <Pawn code='&#9817;' />,
            name: 'WP7',
            position: [6,6]
        },
        {
            piece: <Pawn code='&#9817;' />,
            name: 'WP8',
            position: [6,7]
        },
        {
            piece: <Rook code='&#9814;' />,
            name: 'WR1',
            position: [7,0]
        },
        {
            piece: <Rook code='&#9814;' />,
            name: 'WR2',
            position: [7,7]
        },
        {
            piece: <Knight code='&#9816;' />,
            name: 'WKn1',
            position: [7,1]
        },
        {
            piece: <Knight code='&#9816;' />,
            name: 'WKn2',
            position: [7,6]
        },
        {
            piece: <Bishop code='&#9815;' />,
            name: 'WB1',
            position: [7,2]
        },
        {
            piece: <Bishop code='&#9815;' />,
            name: 'WB2',
            position: [7,5]
        },
        {
            piece: <Queen code='&#9813;' />,
            name: 'WQ',
            position: [7,3]
        },
        {
            piece: <King code='&#9812;'  />,
            name: 'WK',
            position: [7,4]
        },
        {
            piece: <Pawn code='&#9823;' />,
            name: 'BP1',
            position: [1,0]
        },
        {
            piece: <Pawn code='&#9823;' />,
            name: 'BP2',
            position: [1,1]
        },
        {
            piece: <Pawn code='&#9823;' />,
            name: 'BP3',
            position: [1,2]
        },
        {
            piece: <Pawn code='&#9823;' />,
            name: 'BP4',
            position: [1,3]
        },
        {
            piece: <Pawn code='&#9823;' />,
            name: 'BP5',
            position: [1,4]
        },
        {
            piece: <Pawn code='&#9823;' />,
            name: 'BP6',
            position: [1,5]
        },
        {
            piece: <Pawn code='&#9823;' />,
            name: 'BP7',
            position: [1,6]
        },
        {
            piece: <Pawn code='&#9823;' />,
            name: 'BP8',
            position: [1,7]
        },
        {
            piece: <Rook code='&#9820;' />,
            name: 'BR1',
            position: [0,0]
        },
        {
            piece: <Rook code='&#9820;' />,
            name: 'BR2',
            position: [0,7]
        },
        {
            piece: <Knight code='&#9822;' />,
            name: 'BKn1',
            position: [0,1]
        },
        {
            piece: <Knight code='&#9822;' />,
            name: 'BKn2',
            position: [0,6]
        },
        {
            piece: <Bishop code='&#9821;' />,
            name: 'BB1',
            position: [0,2]
        },
        {
            piece: <Bishop code='&#9821;' />,
            name: 'BB2',
            position: [0,5],
            code: '&#9821;'
        },
        {
            piece: <Queen code='&#9819;' />,
            name: 'BQ',
            position: [0,3]
        },
        {
            piece: <King code='&#9818;' />,
            name: 'BK',
            position: [0,4]
        },
    ]);
    const [activePiece, setActivePiece] = React.useState('');

    // const handleSetActivePiece = (piece) => {
    //     setActivePiece(piece);
    // }

    // const handleSetPiecePositions = (piecePosition) => {
    //     console.log("running set")
    //     // setPiecePositions([...piecePositions, piecePosition])
    //     setPiecePositions(piecePosition);
    // }

    const renderChessboard = () => {
        let rows = [];
        for (let i=0;i<8;i++) {
            let squares = [];
            for (let j=0;j<8;j++) {
                let usedCol = null;
                for (let k=0;k<piecePositions.length;k++) {
                    if (piecePositions[k].position[0] === i && piecePositions[k].position[1] === j) {
                        usedCol = j;
                        squares.push(<Square colNum={j} piece={piecePositions[k].piece}></Square>)
                    }
                }
                if (usedCol !== j) {
                    squares.push(<Square colNum={j}></Square>)
                }
            }
        rows.push(<Row rowNum={i} squares={squares}></Row>)
        }
        return rows
    }

    React.useEffect(() => {
        renderChessboard();
    }, [piecePositions])

    const killPiece = () => {

    }

    const checkmate = () => {

    }

    return (
        <div className="chessboard">
            {renderChessboard()}
            <Controller piece={activePiece}/>
        </div>
    );
}

export default Chessboard;