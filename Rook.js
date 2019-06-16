class Rook extends Piece {
    /*
    @param x  x-position of the rook
    @param y  y-position of the rook
    @param p  player object that the rook belongs to
    @param img  display image for the rook
    */
    constructor(x, y, p, img){
        super(x, y, p, img);

        this.DIAMETER = 75;
    }

    isValidMove(changeInX, changeInY){
        return (changeInX != 0 && changeInY == 0) ||
            (changeInX == 0 && changeInY != 0);
    }
}