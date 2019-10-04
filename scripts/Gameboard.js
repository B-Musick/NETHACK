// Hold 2D array that represents the game
// Reads in file where first two lines is the numer of rows and columns
// The rest of the file contains the original game state
class Gameboard{
    constructor(file){
        this.board = file; // 2D array of Tiles
    }

    toString(){
        // Method that will print the board
        // Put current health at the top
        console.log(this.board)
    }
}