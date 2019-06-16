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
}