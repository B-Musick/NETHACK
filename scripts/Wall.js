// var Tile = require('./Tile.js');

class Wall extends Tile {
    constructor() {
        // Wall is not passable, symbol is #
        super('#', false); // Inherits from tile class (superclass)
    }
}