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
}