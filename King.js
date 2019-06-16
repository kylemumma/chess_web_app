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

    isValidMove(changeInX, changeInY){
        return (Math.abs(changeInX) == 1 || changeInX == 0) &&
            (Math.abs(changeInY) == 1 || changeInY == 0);
    }
}