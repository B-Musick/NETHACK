// var Wall = require('./Wall.js');
// var OpenTile = require('./OpenTile.js');
// var Tile = require('Tile.js');

class Game{
    constructor(){
        this.board = [
            [new Wall, new Wall, new Wall, new Wall],
            [new Wall, new OpenTile(new Potion), new OpenTile, new Wall],
            [new Wall, new OpenTile(new Trap), new OpenTile, new Wall],
            [new Wall, new Wall, new Wall, new Wall]
        ]
    }
    printBoard(){
        let board = '';
        this.board.forEach((row,i)=>{
            if(i>0){
                board+='\n';
            }
            row.forEach(val=>{
                board+=val.getSymbol();
            })
        })
        console.log(board);
        return board;
    }

}

let game = new Game();
game.printBoard();


