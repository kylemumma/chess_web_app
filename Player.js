class Player {
    /*
    @param pieceColor  0 for black, 1 for white
    */
    constructor(pieceColor) {
        this.m_color = pieceColor;
        this.isNext = false;

        if(pieceColor == 0)
            this.m_name = 'black';
        else
            this.m_name = 'white';
    }

    get color() {
        return color(this.m_color * 255);
    }

    get name() {
        return this.m_name;
    }
}