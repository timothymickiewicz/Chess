import React from 'react';
import $ from 'jquery';

import './Chessboard.css';

import Controller from './Controller';
import Row from './Row';
import Square from './Square';
import Outline from './Outline';
import Pawn from './ChessPieces/Pawn';
import Rook from './ChessPieces/Rook';
import Knight from './ChessPieces/Knight';
import Bishop from './ChessPieces/Bishop';
import Queen from './ChessPieces/Queen';
import King from './ChessPieces/King';

function Chessboard() {
    const [activePiece, setActivePiece] = React.useState('');
    const [clickedCoordinates, setClickedCoordinates] = React.useState([])

    const handleSetActivePiece = (pieceName) => {
        setActivePiece(pieceName);
    }

    const [piecePositions, setPiecePositions] = React.useState([
        {
            piece: <Pawn code='&#9817;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP1' />,
            name: 'WP1',
            position: [6,0],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP2' />,
            name: 'WP2',
            position: [6,1],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP3' />,
            name: 'WP3',
            position: [6,2],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP4' />,
            name: 'WP4',
            position: [6,3],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP5' />,
            name: 'WP5',
            position: [6,4],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP6' />,
            name: 'WP6',
            position: [6,5],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP7' />,
            name: 'WP7',
            position: [6,6],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP8' />,
            name: 'WP8',
            position: [6,7],
            code: '&#9817;'
        },
        {
            piece: <Rook code='&#9814;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WR1' />,
            name: 'WR1',
            position: [7,0],
            code: '&#x2656;'
        },
        {
            piece: <Rook code='&#9814;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WR2' />,
            name: 'WR2',
            position: [7,7],
            code: '&#x2656;'
        },
        {
            piece: <Knight code='&#9816;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WKn1' />,
            name: 'WKn1',
            position: [7,1],
            code: '&#9816;'
        },
        {
            piece: <Knight code='&#9816;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WKn2' />,
            name: 'WKn2',
            position: [7,6],
            code: '&#9816;'
        },
        {
            piece: <Bishop code='&#9815;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name="WB1" />,
            name: 'WB1',
            position: [7,2],
            code: '&#9815;'
        },
        {
            piece: <Bishop code='&#9815;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WB2' />,
            name: 'WB2',
            position: [7,5],
            code: '&#9815;'
        },
        {
            piece: <Queen code='&#9813;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WQ' />,
            name: 'WQ',
            position: [7,3],
            code: '&#9813;'
        },
        {
            piece: <King code='&#9812;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WK'  />,
            name: 'WK',
            position: [7,4],
            code: '&#x2654;'
        },
        {
            piece: <Pawn code='&#9823;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP1' />,
            name: 'BP1',
            position: [1,0],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP2' />,
            name: 'BP2',
            position: [1,1],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP3' />,
            name: 'BP3',
            position: [1,2],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP4' />,
            name: 'BP4',
            position: [1,3],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP5' />,
            name: 'BP5',
            position: [1,4],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP6' />,
            name: 'BP6',
            position: [1,5],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP7' />,
            name: 'BP7',
            position: [1,6],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP8' />,
            name: 'BP8',
            position: [1,7],
            code: '&#9823;'
        },
        {
            piece: <Rook code='&#9820;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BR1' />,
            name: 'BR1',
            position: [0,0],
            code: '&#9820;'
        },
        {
            piece: <Rook code='&#9820;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BR2' />,
            name: 'BR2',
            position: [0,7],
            code: '&#9820;'
        },
        {
            piece: <Knight code='&#9822;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name="BKn1" />,
            name: 'BKn1',
            position: [0,1],
            code: '&#9822;'
        },
        {
            piece: <Knight code='&#9822;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BKn2' />,
            name: 'BKn2',
            position: [0,6],
            code: '&#9822;'
        },
        {
            piece: <Bishop code='&#9821;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BB1' />,
            name: 'BB1',
            position: [0,2],
            code: '&#9821;'
        },
        {
            piece: <Bishop code='&#9821;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BB2' />,
            name: 'BB2',
            position: [0,5],
            code: '&#9821;'
        },
        {
            piece: <Queen code='&#9819;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BQ' />,
            name: 'BQ',
            position: [0,3],
            code: '&#9819;'
        },
        {
            piece: <King code='&#9818;' selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BK' />,
            name: 'BK',
            position: [0,4],
            code: '&#9818;'
        },
    ]);

    const renderChessboard = () => {
        let rows = [];
        // Assembles 8 rows on board
        for (let i=0;i<8;i++) {
            let squares = [];
            // Assembles the 8 squares that go into each row
            for (let j=0;j<8;j++) {
                let usedCol = null;
                // Determines if square should be empty or have a chess piece
                for (let k=0;k<piecePositions.length;k++) {
                    if (piecePositions[k].position[0] === i && piecePositions[k].position[1] === j) {
                        usedCol = j;
                        // Creates shadow/outline for selected pieces
                        // Second click on a piece will disable because it is getting x,y for outline which is x,null
                        if (piecePositions[k].position[0] === clickedCoordinates[0] && piecePositions[k].position[1] === clickedCoordinates[1]) {
                            squares.push(<Square outline={<Outline code={piecePositions[k].code} piece={piecePositions[k].piece} />} colNum={j} key={j}></Square>)
                        }
                        else {
                            squares.push(<Square colNum={j} piece={piecePositions[k].piece} key={j}></Square>)
                        }
                    }
                }
                if (usedCol !== j) {
                    squares.push(<Square colNum={j} key={j}></Square>)
                }
            }
        rows.push(<Row rowNum={i} squares={squares} key={i}></Row>)
        }
        return rows
    }

    React.useEffect(() => {
    }, [piecePositions, activePiece])

    const killPiece = () => {

    }

    const checkmate = () => {

    }

    return (
        <div className="chessboard" onClick={(e) => {
            // let icon = $(e.target).text()
            let y = $(e.target).parent().attr('class').slice(3)
            let x = $(e.target).parent().parent().attr('class').slice(3)
            setClickedCoordinates([parseInt(x), parseInt(y)])
        }}>
            {renderChessboard()}
            <Controller piece={activePiece}/>
        </div>
    );
}

export default Chessboard;