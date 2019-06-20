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
        this.isHighlighted = 0; // 0 represents not highlighted and 1 represents highlighted

        if(cellColor == 0) {
            this.m_color = color(220); // light grey
        } else {
            this.m_color = color(34, 139, 34); // green
        }
    }

    getPiece(){
        return this.m_piece;
    }

    // sets cell state to highlighted
    setPossibleCell() {
        this.isHighlighted = 1;
    }

    // resets cell state to not highlighted
    reset() {
        this.isHighlighted = 0;
    }

    show() {
        noStroke();
        // sets tile color to red if it contains a piece and is green
        if (this.isHighlighted == 1 && this.m_piece != null && this.m_piece != undefined && this.cellColor == 1) {
            fill(color(255, 133, 102));
        }
        else {
            fill(this.m_color);
        }
        rectMode(CORNER);
        rect(this.position.x * this.SIZE, this.position.y * this.SIZE, this.SIZE, this.SIZE);
        if (this.isHighlighted == 1) {
            noStroke();
            // highlights tile red
            if (this.m_piece != null && this.m_piece != undefined ) {
                fill('rgba(255, 0, 0, 0.3)');
            }
            // highlights tile yellow
            else {
                fill('rgba(255, 255, 0, 0.3)');
            }
            rectMode(CORNER);
            rect(this.position.x * this.SIZE, this.position.y * this.SIZE, this.SIZE, this.SIZE);
        }
    }
}