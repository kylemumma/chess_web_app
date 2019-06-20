let cells, white, black, pieces, pieceInHand;

function setup() {
    // setup code executed at start of program
    let canvas = createCanvas(600, 600);
    canvas.parent('chess-window');

    // set up players
    black = new Player(0);
    white = new Player(1);

    white.isNext = true;

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

    for(let col = 0; col < 8; col++){
        cells[col] = new Array(8);

        for(let row = 0; row < 8; row++){
            cells[col][row] = new Cell(col, row, (col+row)%2, pieces[col][row]);
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

    // display whos turn it is
    let currentPlayer;
    let currentPlayerElement = document.querySelector('#current-player');

    if(white.isNext){
        currentPlayerElement.style.backgroundColor = 'white';
        currentPlayerElement.style.color = 'black';
        currentPlayerElement.style.border = '1px solid black';
        currentPlayer = 'white';
    } else {
        currentPlayerElement.style.backgroundColor = '#181818';
        currentPlayerElement.style.color = 'white';
        currentPlayerElement.style.border = '1px solid white';
        currentPlayer = 'black';
    }

    currentPlayerElement.textContent = "It's " + currentPlayer + "'s turn";
}

let x, y;
function mousePressed(event) {
    let selectedCell = createVector(Math.floor(mouseX / 75), Math.floor(mouseY / 75));
    if(event['button'] == 0 && // only allow left clicks
        cells[selectedCell.x][selectedCell.y].getPiece().player.isNext) { // only pick up the piece if its that color's turn
        x = selectedCell.x;
        y = selectedCell.y;
        // pick up piece
        pieceInHand = cells[x][y].getPiece();
        cells[x][y].m_piece = null;
        let potentialCells = pieceInHand.potentialMoves(cells); // get an array of potential cells where piece can move
        for (let cellNumber = 0; cellNumber < potentialCells.length; cellNumber++) {
            cells[potentialCells[cellNumber][0]][potentialCells[cellNumber][1]].setPossibleCell(); // highlight all potential cells where piece can move
        }
    }
}

function mouseReleased() {
    if(pieceInHand != null) {
        let newX = Math.floor(mouseX / 75);
        let newY = Math.floor(mouseY / 75);
    
        let changeInX = newX - x;
        let changeInY = newY - y;

        // change pieces position to new position
        if(mouseX < 600 && mouseX > 0 && mouseY < 600 && mouseY > 0 &&
            pieceInHand.isValidMove(x, newX, y, newY, cells)){
            x = newX;
            y = newY;

            // switch whos turn it is
            if(!(changeInX == 0 && changeInY == 0)){
                white.isNext = !white.isNext;
                black.isNext = !black.isNext;
            }
        }
    
        // set piece down
        cells[x][y].m_piece = pieceInHand;
        cells[x][y].m_piece.position = createVector(x, y);
        pieceInHand = null;
    }

    // reset board to original colors
    for(let cellRow of cells){
        for(let cell of cellRow){
            cell.reset();
        }
    }
}