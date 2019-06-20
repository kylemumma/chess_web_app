class Bishop extends Piece {
    /*
    @param x  x-position of the Bishop
    @param y  y-position of the Bishop
    @param p  player object that the Bishop belongs to
    @param img  display image for Bishop
    */
    constructor(x, y, p, img){
        super(x, y, p, img);

        this.DIAMETER = 75;
    }

    isValidPath(changeInX, changeInY) {
        return Math.abs(changeInX) == Math.abs(changeInY);
    }

    isPiecesObstructingPath(startingX, finishingX, startingY, finishingY, cellsArray) {
        // 1 if moving in position direction, -1 if moving in negative direction
        let changeInXDirection = (finishingX - startingX) / (Math.abs(finishingX - startingX));
        let changeInYDirection = (finishingY - startingY) / (Math.abs(finishingY - startingY));

        for(let i = 1; i < Math.abs(finishingX - startingX); i++){
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