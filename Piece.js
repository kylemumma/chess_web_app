//abstract class
class Piece {   
    /*
    @param x  x-position of the piece
    @param y  y-position of the piece
    @param p  player object that the piece belongs to
    @param img  display image for piece
    */
    constructor(x, y, p, img) {
      this.position = createVector(x, y);
      this.player = p;
      this.img = img;
    }
    
    show() {
      imageMode(CENTER);
      image(this.img, this.position.x * this.DIAMETER + (this.DIAMETER/2), this.position.y * this.DIAMETER + (this.DIAMETER/2), this.DIAMETER-5, this.DIAMETER-5);
    }

    freePositionShow(x, y) {
      imageMode(CENTER);
      image(this.img, x, y, this.DIAMETER-5, this.DIAMETER-5)
    }

    set x(x) {
      this.position.x = x;
    }

    set y(y) {
      this.position.y = y;
    }

    get x() {
      return this.position.x;
    }

    get y() {
      return this.position.y;
    }

    isValidMove(changeInX, changeInY){
      // abstract method
    }
  }