class Queen extends Piece {
    /*
    @param x  x-position of the Queen
    @param y  y-position of the Queen
    @param p  player object that the Queen belongs to
    @param img  display image for Queen
    */
    constructor(x, y, p, img){
        super(x, y, p, img);

        this.DIAMETER = 75;
    }

    isValidPath(changeInX, changeInY) {
        return (changeInX != 0 && changeInY == 0) ||
        (changeInX == 0 && changeInY != 0) || 
        (Math.abs(changeInX) == Math.abs(changeInY));
    }

    isPiecesObstructingPath(startingX, finishingX, startingY, finishingY, cellsArray) {
        // 1 if moving in position direction, -1 if moving in negative direction
        let changeInXDirection = (finishingX - startingX) / (Math.abs(finishingX - startingX));
        let changeInYDirection = (finishingY - startingY) / (Math.abs(finishingY - startingY));

        if (finishingX - startingX == 0)
            changeInXDirection = 0;
        if (finishingY - startingY == 0)
            changeInYDirection = 0;

        for(let i = 1; i < Math.abs(finishingX - startingX) || i < Math.abs(finishingY - startingY); i++){
            if(this.pieceExistsOnCell(startingX + i*changeInXDirection,
                                        startingY + i*changeInYDirection, cellsArray)){
                return true;
            }
        }
        return false;
    }

    isValidMove(startingX, finishingX, startingY, finishingY, cellsArray){
        let changeInX = finishingX - startingX;
        let changeInY = finishingY - startingY;

        if(this.isValidPath(changeInX, changeInY) &&
        !this.isPiecesObstructingPath(startingX, finishingX, startingY, finishingY, cellsArray) && // check for pieces in the way
        this.isValidPieceTake(finishingX, finishingY, cellsArray)){ // checks if taking a piece is a valid take
            return true;
        }
        return false;
    }
}