class Item extends Content{
    // Objects in game player can interact with
    constructor(symbol){
        super(symbol)
        if (new.target === Item) {
            // Will act like abstract class, where cant make class from this
            throw new TypeError("Cannot construct Item instances directly");
        }
    }
    getEffect(){
        // Returns how much of a players health added or removed
        return 0;
    }
}