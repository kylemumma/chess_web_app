class Pawn extends Piece {
    /*
    @param x  x-position of the pawn
    @param y  y-position of the pawn
    @param p  player object that the pawn belongs to
    @param img  display image for the pawn
    */
    constructor(x, y, p, img){
        super(x, y, p, img);

        this.DIAMETER = 75;
    }

    isPiecesObstructingPath(x, startingY, finishingY, cellsArray){
        for(let row = Math.min(startingY, finishingY); row <= Math.max(startingY, finishingY); row++){
            if(this.pieceExistsOnCell(x, row, cellsArray))
                return true;
        }
        return false;
    }

    isValidPath(changeInX, changeInY){
        if(this.player.name == "black") { // black
            // first time moving pawn
            if(this.position.y == 1)
                return ((changeInY == 1 || changeInY == 2) && changeInX == 0);

            return (changeInY == 1 && changeInX == 0);
        } else { // white
            // first time moving pawn
            if(this.position.y == 6)
                return ((changeInY == -1 || changeInY == -2) && changeInX == 0);

            return (changeInY == -1 && changeInX == 0);
        }
    }

    isValidMove(startingX, finishingX, startingY, finishingY, cellsArray) {
        let changeInX = finishingX - startingX;
        let changeInY = finishingY - startingY;

        if(this.isValidPath(changeInX, changeInY) && // valid movement path
            !this.isPiecesObstructingPath(finishingX, startingY, finishingY, cellsArray) && // check for pieces in the way
            this.isValidPieceTake(finishingX, finishingY, cellsArray)){ // checks if taking a piece is a valid take
                return true;
        }
        return false;
    }
}