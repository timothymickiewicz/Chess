import React from 'react';
import $ from 'jquery';

import './Chessboard.css';

import { MovePawn, MoveRook, MoveKnight, MoveBishop, MoveQueen, MoveKing } from '../utils/movements';

import Controller from './Controller';
import Row from './Row';
import Square from './Square';
import Outline from './Outline';
import PossibleMove from './PossibleMove';
import Pawn from './ChessPieces/Pawn';
import Rook from './ChessPieces/Rook';
import Knight from './ChessPieces/Knight';
import Bishop from './ChessPieces/Bishop';
import Queen from './ChessPieces/Queen';
import King from './ChessPieces/King';

function Chessboard() {
    const [activePiece, setActivePiece] = React.useState('');
    const [clickedCoordinates, setClickedCoordinates] = React.useState([]);
    const [newCoords, setNewCoords] = React.useState([]);
    const [secondClick, setSecondClick] = React.useState(false);
    const [toggleTurn, setToggleTurn] = React.useState('W');

    const handleSetActivePiece = (pieceName) => {
        setActivePiece(pieceName);
    }

    const handleClearNewCoords = () => {
        setNewCoords([]);
    }

    const handleToggleTurn = () => {
        setToggleTurn("W" ? "B" : "W")
    }

    // props handle setting the active unit, clearing the possible moves so that the new unit can render its own possible moves, and the code necessary to render the correct units as well as a unique identifier name
    const [piecePositions, setPiecePositions] = React.useState([
        {
            piece: <Pawn code='&#9817;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP1' />,
            name: 'WP1',
            position: [6,0],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP2' />,
            name: 'WP2',
            position: [6,1],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP3' />,
            name: 'WP3',
            position: [6,2],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP4' />,
            name: 'WP4',
            position: [6,3],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP5' />,
            name: 'WP5',
            position: [6,4],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP6' />,
            name: 'WP6',
            position: [6,5],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP7' />,
            name: 'WP7',
            position: [6,6],
            code: '&#9817;'
        },
        {
            piece: <Pawn code='&#9817;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WP8' />,
            name: 'WP8',
            position: [6,7],
            code: '&#9817;'
        },
        {
            piece: <Rook code='&#9814;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WR1' />,
            name: 'WR1',
            position: [7,0],
            code: '&#x2656;'
        },
        {
            piece: <Rook code='&#9814;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WR2' />,
            name: 'WR2',
            position: [7,7],
            code: '&#x2656;'
        },
        {
            piece: <Knight code='&#9816;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WN1' />,
            name: 'WN1',
            position: [7,1],
            code: '&#9816;'
        },
        {
            piece: <Knight code='&#9816;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WN2' />,
            name: 'WN2',
            position: [7,6],
            code: '&#9816;'
        },
        {
            piece: <Bishop code='&#9815;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name="WB1" />,
            name: 'WB1',
            position: [7,2],
            code: '&#9815;'
        },
        {
            piece: <Bishop code='&#9815;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WB2' />,
            name: 'WB2',
            position: [7,5],
            code: '&#9815;'
        },
        {
            piece: <Queen code='&#9813;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WQ' />,
            name: 'WQ',
            position: [7,3],
            code: '&#9813;'
        },
        {
            piece: <King code='&#9812;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='WK'  />,
            name: 'WK',
            position: [7,4],
            code: '&#x2654;'
        },
        {
            piece: <Pawn code='&#9823;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP1' />,
            name: 'BP1',
            position: [1,0],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP2' />,
            name: 'BP2',
            position: [1,1],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP3' />,
            name: 'BP3',
            position: [1,2],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP4' />,
            name: 'BP4',
            position: [1,3],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP5' />,
            name: 'BP5',
            position: [1,4],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP6' />,
            name: 'BP6',
            position: [1,5],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP7' />,
            name: 'BP7',
            position: [1,6],
            code: '&#9823;'
        },
        {
            piece: <Pawn code='&#9823;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BP8' />,
            name: 'BP8',
            position: [1,7],
            code: '&#9823;'
        },
        {
            piece: <Rook code='&#9820;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BR1' />,
            name: 'BR1',
            position: [0,0],
            code: '&#9820;'
        },
        {
            piece: <Rook code='&#9820;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BR2' />,
            name: 'BR2',
            position: [0,7],
            code: '&#9820;'
        },
        {
            piece: <Knight code='&#9822;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name="BN1" />,
            name: 'BN1',
            position: [0,1],
            code: '&#9822;'
        },
        {
            piece: <Knight code='&#9822;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BN2' />,
            name: 'BN2',
            position: [0,6],
            code: '&#9822;'
        },
        {
            piece: <Bishop code='&#9821;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BB1' />,
            name: 'BB1',
            position: [0,2],
            code: '&#9821;'
        },
        {
            piece: <Bishop code='&#9821;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BB2' />,
            name: 'BB2',
            position: [0,5],
            code: '&#9821;'
        },
        {
            piece: <Queen code='&#9819;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BQ' />,
            name: 'BQ',
            position: [0,3],
            code: '&#9819;'
        },
        {
            piece: <King code='&#9818;' handleClearNewCoords={handleClearNewCoords} selectedPiece={activePiece} handleSetActivePiece={handleSetActivePiece} name='BK' />,
            name: 'BK',
            position: [0,4],
            code: '&#9818;'
        },
    ]);

    const findPieceName = (coords) => {
        console.log(coords)
        for (let i=0;i<piecePositions.length;i++) {
            if (piecePositions[i].position === coords) {
                console.log('found')
                return piecePositions[i].name
            }
        }
    }

    const renderChessboard = () => {
        let rows = [];
        let enemies = [];
        // Detect enemies of selected piece based off of the potential new coordinates
        for (let i=0;i<newCoords.length;i++) {
            for (let j=0;j<piecePositions.length;j++) {
                if (newCoords[i].x === piecePositions[j].position[0] && newCoords[i].y === piecePositions[j].position[1] && toggleTurn !== piecePositions[j].name.slice(0, 1)) {
                    enemies.push({x: piecePositions[j].position[0], y: piecePositions[j].position[1]})
                }
            }
        }
        // Assembles 8 rows on board
        for (let i=0;i<8;i++) {
            let squares = [];
            // Assembles the 8 squares that go into each row
            for (let j=0;j<8;j++) {
                // Places a highlighted enemy unit 
                for (let k=0;k<piecePositions.length;k++) {
                    if (enemies.join().trim() !== '') {
                        for (let g=0;g<enemies.length;g++) {
                            if (enemies[g].x === i && enemies[g].x === piecePositions[k].position[0] && enemies[g].y === j && enemies[g].y === piecePositions[k].position[1] && !squares[j]) {
                                squares.push(<Square possibleMove={<PossibleMove piece={piecePositions[k].piece} code={piecePositions[k].code} />} colNum={j} key={j}></Square>)
                                enemies.splice(g, 1);
                            }
                        }
                    }
                    // Places outline around selected unit
                    if (piecePositions[k].position[0] === i && piecePositions[k].position[1] === j && !squares[j]) {
                        if (piecePositions[k].position[0] === clickedCoordinates[0] && piecePositions[k].position[1] === clickedCoordinates[1]) {
                            squares.push(<Square outline={<Outline code={piecePositions[k].code} piece={piecePositions[k].piece} />} colNum={j} key={j}></Square>)
                        }
                        else {
                            squares.push(<Square colNum={j} piece={piecePositions[k].piece} key={j}></Square>)
                        }
                    }
                }
                // Places outlines for potential movements of selected unit
                newCoords.forEach((coord, index) => {
                    if (coord.x === i && coord.y === j && !squares[j]) {
                        squares.push(<Square possibleMove={<PossibleMove />} colNum={j} key={j}></Square>)
                    }
                })
                // If nothing else applies, place an empty square
                if (!squares[j]) {
                    squares.push(<Square colNum={j} key={j}></Square>)
                }
            }
            rows.push(<Row rowNum={i} squares={squares} key={i}></Row>)
        }
        return rows
    }

    React.useEffect(() => { 
    }, [activePiece, clickedCoordinates, newCoords])

    const handleMove = (x, y) => {
        let piecePositionsArray = piecePositions;
        let active = '';
        newCoords.forEach((newCoord) => {
            // finds out if piece will kill another piece, sets new coordinates for piece
            // find out if activePiece(0, 1) is another of the current player's piece, return if true
            // Might get handled in another piece of logic though
            for (let i=0;i<piecePositions.length;i++) {
                if (piecePositions[i].name === activePiece && x === newCoord.x && y === newCoord.y) {
                    active = piecePositions[i]
                    piecePositionsArray[i].position[0] = x;
                    piecePositionsArray[i].position[1] = y;
                    setPiecePositions(piecePositionsArray);
                    setActivePiece('')
                    setNewCoords([]);
                    setClickedCoordinates([]);
                }
            }
            for (let i=0;i<piecePositions.length;i++) {
                if (newCoord.x === piecePositions[i].position[0] && newCoord.y === piecePositions[i].position[1] && activePiece !== piecePositions[i].name) {
                    console.log('running splice')
                    piecePositionsArray.splice(i, 1, active);
                    setPiecePositions(piecePositionsArray);
                }
            }
        })
        setSecondClick(false)
    }

    // combine into a setting active piece function
    const handleWhichPieceToMove = () => {
        // switches on unit type
        switch(activePiece.slice(1, 2)) {
            case 'P':
                // gets possible movement coordinates as an array of objects ex: [{x: num, y: num}]
                let getCoords = MovePawn(activePiece.slice(0, 1), clickedCoordinates);
                setNewCoords(getCoords); 
                break;
            case 'R':
                MoveRook(activePiece.slice(0, 1), clickedCoordinates);
                break;
            case 'N':
                MoveKnight(activePiece.slice(0, 1), clickedCoordinates);
                break;
            case 'B':
                MoveBishop(activePiece.slice(0, 1), clickedCoordinates);
                break;
            case 'Q':
                MoveQueen(activePiece.slice(0, 1), clickedCoordinates);
                break;
            case 'K':
                MoveKing(activePiece.slice(0, 1), clickedCoordinates);
                break;
            default:
                break;
        }   
    }

    const handleClick = (x, y) => {
        // if is second click, move unit
        // if is not a number for x,y (ie empty square lacking required div), clear coords and active piece
        // if is a num for x,y then set clicked coords and ready the second click
        if (secondClick) {
            if (isNaN(Number(x)) || isNaN(Number(y))) {
                console.log('is nan')
                // setClickedCoordinates([])
                setActivePiece('')
                setNewCoords([]);
                setSecondClick(false)
            }
            else {
                console.log('is second click')
                handleMove(parseInt(x), parseInt(y));
            }
        }
        else if (isNaN(Number(x)) || isNaN(Number(y))) {
            console.log('is nan')
            setClickedCoordinates([])
            setActivePiece('')
            setNewCoords([]);
        }
        else if (!isNaN(Number(x)) && !isNaN(Number(y))) {
            setClickedCoordinates([parseInt(x), parseInt(y)])
            setSecondClick(true)
        }
    }

    const killPiece = () => {

    }

    const checkmate = () => {

    }

    return (
        <div className="chessboard" onClick={(e) => {
            // gets coordinates for click based on rowNum and colNum that it finds on the click event
            if ($(e.target).parent().attr('class') === 'enemyOccupied') {
                handleClick($(e.target).parent().parent().parent().attr('class').slice(3), $(e.target).parent().parent().attr('class').slice(3));
            } 
            else {
                handleClick($(e.target).parent().parent().attr('class').slice(3), $(e.target).parent().attr('class').slice(3));
            }
        }}>
            {newCoords.join().trim() === '' ? handleWhichPieceToMove() : null}
            {renderChessboard()}
            <Controller piece={activePiece}/>
        </div>
    );
}

export default Chessboard;