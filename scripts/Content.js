class Content{
    // Represents the items sitting on the tiles, abstract class
    constructor(symbol){
        // Constructor accepts string parameter
        this.symbol = symbol; // Represents the symbole drawn on the map
        if (new.target === Content) {
            // Will act like abstract class, where cant make class from this
            throw new TypeError("Cannot construct Content instances directly");
        }
    }
    getSymbol() {
        // Fetch symbol to be displayed
        return this.symbol;
    }
    
}

// Item is a subclass, where subclasses of Item are object the player can touch
// Amulet, HealthPotion, Trap