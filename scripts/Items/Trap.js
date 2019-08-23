class Trap extends Item {
    constructor() {
        super('^');
    }
    getEffect() {
        console.log('You fell into a trap!');
        return -5;
    }
}