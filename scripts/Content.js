class Content{
    // Represents the items sitting on the tiles
    constructor(symbol){
        this.symbol = symbol;
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