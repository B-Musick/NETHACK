class Tile{
    // Represents elements of the 2d array thats the board
    constructor(symbol,isPassable,Content=null){
        // symbol = string that represents the tile
        // isPassable = boolean indicating player can move onto
        // If there is no content, then value should be null
        if(!symbol||isPassable === undefined){
            throw new TypeError('Didnt define something')
        }
        this.symbol = symbol; // This will represent the tile
        this.isPassable = isPassable; // This will determin if can pass this tile
        this.tileContent=Content;
        if (new.target === Tile) {
            // Will act like abstract class, where cant make class from this
            throw new TypeError("Cannot construct Tile instances directly");
        }
    }
    getSymbol(){
        // Fetches symbol that should be displayed
        if(this.tileContent){
            // If there is content attached to this tile, return the symbol 
            // of this content
            return this.tileContent.getSymbol();
        }
        // Fetch symbol to be displayed if there is no content on the tile
        return this.symbol;
    }
    getPassability(){
        // Fetch if the tile is passable or not
        console.log(`This tile is ${this.isPassable ? 'totally' : 'not'} passable`);
        return this.isPassable;
    }
    removeContent(){
        // Remove the content of the tile
        this.tileContent = null;
    }
    getContent(){
        // Retrieve the content from this tile
        
        return this.tileContent;
    }
    setContent(content){
        // Sets tile to a content object
        this.tileContent = content;
    }
}






