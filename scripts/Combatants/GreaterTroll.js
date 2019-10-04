class GreaterTroll extends Troll {
    constructor() {
        // symbol, health, minAttack, maxAttack
        super();
        this.symbol='T';
        this.health*=2;
    }
    doAttack(){
        return super.doAttack()*2;
        
    }
}