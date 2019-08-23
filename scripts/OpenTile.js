// var Tile = require('./Tile.js');

class OpenTile extends Tile {
    constructor(content=null) {
        // Wall is passable, symbol is '.'
        super('.', true,content); // Inherits from tile class (superclass)
    }
}

// let dog = new OpenTile();
// console.log(dog.getSymbol());
// console.log(dog.getPassability());