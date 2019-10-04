

// Hold 2D array that represents the game
// Reads in file where first two lines is the numer of rows and columns
// The rest of the file contains the original game state
class Gameboard{
    constructor(board){
        // Takes filename as string
        
        this.board = board;
        this.screenBody = d3.select('body');
        this.boardDisplay =d3.select('svg');
        // this.boardContent = {
        //     '#': new Wall(),
        //     '.': new OpenTile(),
        //     'T': new GreaterTroll(),
        //     't': new Troll(),
        //     '@': new Player(),
        //     'Y': new Amulet(),
        //     'h': new Potion(),
        //     '^': new Trap()
        // }

    }

    toString(){
        console.log(this.board)
    }
    setScreenBoard(){
        // console.log(this.board)
        this.boardDisplay.append('text')
            .text(this.board[0][0].getSymbol())
            .attr('x', 10 + "")
            // Need to add 3 so in center of block vertically
            .attr('y', 10 + "")
            .style('fill', 'black')
            .style('text-align', 'center');
    }
}

// Select the first file in the nodes file list, returns File Object
const inputElement = document.getElementById("fileItem");
inputElement.addEventListener("change", (e)=>{
    var file = document.getElementById('fileItem').files[0];
    // const fileList = this.files; /* now you can work with the file list */
    
    createGameBoard(file);
    // gameboard.toString();
    // gameboard.setScreenBoard();
})

createGameBoard=(file)=>{
    // Take in the file when it is input and create a board
    let boardContent = {
        '#': new Wall(),
        '.': new OpenTile(),
        'T': new GreaterTroll(),
        't': new Troll(),
        '@': new Player(),
        'Y': new Amulet(),
        'h': new Potion(),
        '^': new Trap()

    }
    var reader = new FileReader();

    reader.readAsBinaryString(file);
    let board = []; // Set constructor variable to empty array
    reader.onloadend = function () {
        // reader.result returns string with board

        // Save the resulting string
        let boardString = reader.result;
        // Split result into array
        let boardArray = boardString.split('');

        let rowArray = [];
        
        for (let i = 0; i < boardArray.length; i++) {

            if (boardArray[i] === '\n' && boardArray[i + 1] !== '\n') {

                // If newline then dont add this to the array
                // Also if multiple newlines in a row then dont add them
                let array = [...rowArray]
                // Only after first line push the array

                board.push(array);

                rowArray = []; // Erase array

            }
            else if (boardArray[i] !== '\n') {
                // Push the content into the array if not a newline
                rowArray.push(boardContent[boardArray[i]]);


            }
        };

    let gameboard = new Gameboard(board);
    gameboard.toString();
    gameboard.setScreenBoard();
        
    }
    console.log(reader)
}





