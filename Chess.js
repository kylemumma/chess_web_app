let cells, white, black, pieces;
let pieceInHand;

function setup() {
    // setup code executed at start of program
    createCanvas(600, 600);

    // set up players
    black = new Player(0);
    white = new Player(1);

    /* -- set up pieces array -- */
    pieces = new Array(8);

    for(let row = 0; row < 8; row++){
        pieces[row] = new Array(8);
    }

    /* -- set up white pieces -- */

    const pieces_url = 'https://kylemumma.me/resources/chess_pieces/';

    // set up white pawns
    for(let i = 0; i < 8; i++){
        pieces[i][6] = new Pawn(i, 6, white, loadImage(pieces_url + 'WhitePawn.png'));
    }

    // set up white rooks
    for(let i = 0; i < 2; i++){
        pieces[i*7][7] = new Rook(i*7, 7, white, loadImage(pieces_url + 'WhiteRook.png'));
    }

    // set up white knights
    pieces[1][7] = new Knight(1, 7, white, loadImage(pieces_url + 'WhiteKnight.png'));
    pieces[6][7] = new Knight(6, 7, white, loadImage(pieces_url + 'WhiteKnight.png'));
    
    // set up white bishops
    pieces[2][7] = new Bishop(2, 7, white, loadImage(pieces_url + 'WhiteBishop.png'));
    pieces[5][7] = new Bishop(5, 7, white, loadImage(pieces_url + 'WhiteBishop.png'));

    //set up white queen
    pieces[3][7] = new Queen(3, 7, white, loadImage(pieces_url + 'WhiteQueen.png'));

    //set up white king
    pieces[4][7] = new King(4, 7, white, loadImage(pieces_url + 'WhiteKing.png'));

    /* -- set up black pieces -- */

    // set up black pawns
    for(let i = 0; i < 8; i++){
        pieces[i][1] = new Pawn(i, 1, black, loadImage(pieces_url + 'BlackPawn.png'));
    }

    // set up black rooks
    for(let i = 0; i < 2; i++){
        pieces[i*7][0] = new Rook(i*7, 0, black, loadImage(pieces_url + 'BlackRook.png'));
    }

    // set up black knights
    pieces[1][0] = new Knight(1, 0, black, loadImage(pieces_url + 'BlackKnight.png'));
    pieces[6][0] = new Knight(6, 0, black, loadImage(pieces_url + 'BlackKnight.png'));
    
    // set up black bishops
    pieces[2][0] = new Bishop(2, 0, black, loadImage(pieces_url + 'BlackBishop.png'));
    pieces[5][0] = new Bishop(5, 0, black, loadImage(pieces_url + 'BlackBishop.png'));

    //set up black queen
    pieces[3][0] = new Queen(3, 0, black, loadImage(pieces_url + 'BlackQueen.png'));

    //set up black king
    pieces[4][0] = new King(4, 0, black, loadImage(pieces_url + 'BlackKing.png'));

    // set up board
    cells = new Array(8);

    for(let row = 0; row < 8; row++){
        cells[row] = new Array(8);

        for(let col = 0; col < 8; col++){
            cells[row][col] = new Cell(row, col, (row+col)%2, pieces[row][col]);
        }
    }
}

function draw() {
    background(255);
  
    // show board
    for(let cellRow of cells){
        for(let cell of cellRow){
            cell.show();
            if(cell.getPiece() != null)
                cell.getPiece().show();
        }
    }

    // mouse follower
    strokeWeight(5);
    stroke(255, 0, 0);
    noFill();
    rectMode(CORNER);
    if(mouseX < 600 && mouseX > 0 && mouseY < 600 && mouseY > 0){
        rect(Math.floor(mouseX / 75) * 75, Math.floor(mouseY / 75) * 75, 75, 75);
    }
    noStroke();

    //piece in hand display
    if(pieceInHand != null){
        //show the piece in hand
        pieceInHand.freePositionShow(mouseX, mouseY);
    }
}

let x, y;
function mousePressed(event) {
    if(event['button'] == 0) { // only allow left clicks
        x = Math.floor(mouseX / 75);
        y = Math.floor(mouseY / 75);
        
        // pick up piece
        pieceInHand = cells[x][y].getPiece();
        cells[x][y].m_piece = null;
    }
}

function mouseReleased() {
    if(pieceInHand != null) {
        newX = Math.floor(mouseX / 75);
        newY = Math.floor(mouseY / 75);
    
        // change pieces position to new position
        if(mouseX < 600 && mouseX > 0 && mouseY < 600 && mouseY > 0 &&
            pieceInHand.isValidMove(newX - x, newY - y)){
            x = newX;
            y = newY;
        }
    
        // set piece down
        cells[x][y].m_piece = pieceInHand;
        cells[x][y].m_piece.position = createVector(x, y);
        pieceInHand = null;
    }
}