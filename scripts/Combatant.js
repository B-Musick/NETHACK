class Combatant extends Content{
    // Abstract class and is subclass of Content
    constructor(symbol,health, minAttack, maxAttack){
        super(symbol);
        this.health = health;
        this.minimumAttack = minAttack;
        this.maximumAttack = maxAttack;
        this.className = new.target;
        if (new.target === Combatant) {
            // Will act like abstract class, where cant make class from this
            throw new TypeError("Cannot construct Tile instances directly");
        }
    }
    getHP(){
        return this.health;
    }
    doAttack(){
        // Return random number between minimum and max attack values
        return Math.floor(Math.random()*(this.maximumAttack-this.minimumAttack)) +this.minimumAttack;
    }
    changeHP(hit){
        // Add the hit points to the Combatants health
        this.health+hit;
    }
    toString(){
        return `This is a ${this.className}`;
    }
}