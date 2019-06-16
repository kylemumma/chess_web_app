class Knight extends Piece {
    /*
    @param x  x-position of the knight
    @param y  y-position of the knight
    @param p  player object that the knight belongs to
    @param img  display image for knight
    */
    constructor(x, y, p, img){
        super(x, y, p, img);

        this.DIAMETER = 75;
    }
}