class Amulet extends Item{
    constructor(){
        super('Y');
    }
    getEffect(){
        console.log('You picked up the Amulet of Yendor');
        return 0;
    }
}