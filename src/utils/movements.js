// Set chessboard to en passant equals false. once a pawn uses double step in this movement file, pass true to chessboard state along with the unit name identifier, after one turn, clear that unit from en passant status. Check here for unit captures eligible for en passant.
export const MovePawn = (color, unitCoords, enemiesInRange) => {
    let possibleMoves = [];
    if (color === "B") {
        // Can move forward once or twice
        if (unitCoords[0] === 1) {
            possibleMoves.push({x: (unitCoords[0] + 1), y: unitCoords[1]})
            possibleMoves.push({x: (unitCoords[0] + 2), y: unitCoords[1]})
        }
        else {
            possibleMoves.push({x: (unitCoords[0] + 1), y: unitCoords[1]})
        }
    }
    else if (color === 'W') {
        if (unitCoords[0] === 6) {
            possibleMoves.push({x: (unitCoords[0] - 1), y: unitCoords[1]})
            possibleMoves.push({x: (unitCoords[0] - 2), y: unitCoords[1]})
        }
        else {
            possibleMoves.push({x: (unitCoords[0] - 1), y: unitCoords[1]})
        }
    }
    return possibleMoves
}

export const MoveRook = (color, unitCoords) => {
    let possibleMoves = [];
    console.log(color, unitCoords)
    if (color === "B") {

    }
    else if (color === 'W') {
        
    }
}

export const MoveKnight = (color, unitCoords) => {
    let possibleMoves = [];
    console.log(color, unitCoords)
    if (color === "B") {

    }
    else if (color === 'W') {
        
    }
}

export const MoveBishop = (color, unitCoords) => {
    let possibleMoves = [];
    console.log(color, unitCoords)
    if (color === "B") {

    }
    else if (color === 'W') {
        
    }
}

export const MoveQueen = (color, unitCoords) => {
    let possibleMoves = [];
    console.log(color, unitCoords)
    if (color === "B") {

    }
    else if (color === 'W') {
        
    }
}

export const MoveKing = (color, unitCoords) => {
    let possibleMoves = [];
    console.log(color, unitCoords)
    if (color === "B") {

    }
    else if (color === 'W') {
        
    }
}