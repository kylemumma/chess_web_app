class King extends Piece {
    /*
    @param x  x-position of the King
    @param y  y-position of the King
    @param p  player object that the King belongs to
    @param img  display image for King
    */
    constructor(x, y, p, img){
        super(x, y, p, img);

        this.DIAMETER = 75;
    }

    isValidPath(changeInX, changeInY) {
        return (Math.abs(changeInX) == 1 || changeInX == 0) &&
            (Math.abs(changeInY) == 1 || changeInY == 0);
    }

    isValidMove(startingX, finishingX, startingY, finishingY, cellsArray){
        let changeInX = finishingX - startingX;
        let changeInY = finishingY - startingY;

        if(this.isValidPath(changeInX, changeInY) && // check if piece is moving in valid path
        this.isValidPieceTake(finishingX, finishingY, cellsArray)){ // checks if taking a piece is a valid take
            return true;
        }
        return false;
    }
}