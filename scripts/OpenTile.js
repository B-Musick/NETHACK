// var Tile = require('./Tile.js');

class OpenTile extends Tile {
    constructor(content=null) {
        // OpenTile is passable, symbol is '.'
        // Accepts content, if no content passed then content = null
        super('.', true,content); // Inherits from tile class (superclass)
    }
}

// let dog = new OpenTile();
// console.log(dog.getSymbol());
// console.log(dog.getPassability());