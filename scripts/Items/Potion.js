class Potion extends Item {
    constructor() {
        super('h');
    }
    getEffect() {
        console.log('You picked up a health potion');
        return 5;
    }
} 