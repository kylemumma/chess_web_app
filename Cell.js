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
        this.cellColor = cellColor;
        this.state = 0;

        if(cellColor == 0) {
            this.m_color = color(220); // light grey
        } else {
            this.m_color = color(34, 139, 34); // green
        }
    }

    getPiece(){
        return this.m_piece;
    }

    possibleCell() {
        this.state = 1;
        // if(this.cellColor == 0) {
        //     this.m_color = color(255, 128, 128); // light grey
        // } else {
        //     this.m_color = color(255, 51, 51); // green
        // }
    }

    reset() {
        this.state = 0;
        // if(this.cellColor == 0) {
        //     this.m_color = color(220); // light grey
        // } else {
        //     this.m_color = color(34, 139, 34); // green
        // }
    }

    show() {
        noStroke();
        fill(this.m_color);
        rectMode(CORNER);
        rect(this.position.x * this.SIZE, this.position.y * this.SIZE, this.SIZE, this.SIZE);
        if (this.state == 1) {
            noStroke();
            if (this.m_piece != null && this.m_piece != undefined)
                fill('rgba(255, 0, 0, 0.4)');
            else
                fill('rgba(255, 255, 0, 0.4)');
            rectMode(CORNER);
            rect(this.position.x * this.SIZE, this.position.y * this.SIZE, this.SIZE, this.SIZE);
        }
    }
}