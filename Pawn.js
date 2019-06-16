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
}