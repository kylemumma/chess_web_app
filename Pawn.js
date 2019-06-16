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

    isValidMove(changeInX, changeInY) {
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
}