
class Game {
    constructor() {
        this.board = [
            [new Wall, new Wall, new Wall, new Wall, new Wall,new Wall],
            [new Wall, new OpenTile(new Potion), new OpenTile(new Troll),new OpenTile,new OpenTile(new Player), new Wall],
            [new Wall, new OpenTile(new Trap), new OpenTile(new GreaterTroll),new OpenTile,new OpenTile, new Wall],
            [new Wall, new Wall, new Wall, new Wall, new Wall,new Wall]
        ]
    }
    printBoard() {
        let board = '';
        this.board.forEach((row, i) => {
            if (i > 0) {
                board += '\n';
            }
            row.forEach(val => {
                board += val.getSymbol();
                if(val.getContent() instanceof Item){
                    console.log("hit " + val.getContent().getEffect());
                } else if ((val.getContent() instanceof Combatant)){
                    console.log("hit " + val.getContent().getHP());
                }
                
            })
        })
        console.log(board);
        return board;
    }

}

let game = new Game();
game.printBoard();

// let body = document.querySelector('body');
// let board = game.printBoard();

// body.innerHTML = board;