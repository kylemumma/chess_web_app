class Cell {
    /*
    @param x | x position
    @param y | y position
    @param cellColor | color of cell 0 for black, 1 for white
    */
    constructor(x, y, cellColor, piece) {
        this.SIZE = 75;
        this.position = createVector(x, y);
        this.m_piece = piece;

        if(cellColor == 0) {
            this.m_color = color(34, 139, 34); // green
        } else {
            this.m_color = color(220); // light grey
        }
    }

    getPiece(){
        return this.m_piece;
    }

    show() {
        noStroke();
        fill(this.m_color);
        rectMode(CORNER);
        rect(this.position.x * this.SIZE, this.position.y * this.SIZE, this.SIZE, this.SIZE);
    }
}