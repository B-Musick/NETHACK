class Amulet extends Item{
    // Picking up this Item wins you the game
    constructor(){
        super('Y');
    }
    getEffect(){
        // Doesnt have any effect, prints this out
        console.log('You picked up the Amulet of Yendor');
        return 0;
    }
}