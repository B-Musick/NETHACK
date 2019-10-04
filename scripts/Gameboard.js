

// Hold 2D array that represents the game
// Reads in file where first two lines is the numer of rows and columns
// The rest of the file contains the original game state
class Gameboard{
    constructor(file){
        // Takes filename as string
        this.file = file; // 2D array of Tiles
        this.board;

    }

    toString=()=>{
        let boardContent = {
            '#': new Wall(),
            '.': new OpenTile()
        }
        var reader = new FileReader();

        // reader.readAsText(this.board);
        reader.readAsBinaryString(this.file);

        reader.onloadend = function () {
            // reader.result returns string with board
            
            // Save the resulting string
            let boardString = reader.result;
            // Split result into array
            let boardArray = boardString.split('');
            
            let rowArray = [];
            this.board = []; // Set constructor variable to empty array
            for(let i = 0; i<boardArray.length;i++){
                
                if (boardArray[i] === '\n' && boardArray[i+1]!=='\n'){

                    // If newline then dont add this to the array
                    // Also if multiple newlines in a row then dont add them
                    
                    let array = [...rowArray]
                    // Only after first line push the array
                    
                    this.board.push(array);
                    
                    rowArray = []; // Erase array
                    
                }
                else if(boardArray[i]!=='\n'){
                    // Push the content into the array if not a newline
                    rowArray.push(boardContent[boardArray[i]]);
                }
            };
            console.log(this.board);
        }
        // console.log(boardRead+" text")
        // Method that will print the board
        // Put current health at the top
        // console.log(this.board)
    }
}

// Select the first file in the nodes file list, returns File Object
const inputElement = document.getElementById("fileItem");
inputElement.addEventListener("change", (e)=>{
    var file = document.getElementById('fileItem').files[0];
    // const fileList = this.files; /* now you can work with the file list */
    let gameboard = new Gameboard(file);
    
    gameboard.toString();
})

// var fileInput = document.querySelector('input[type="file"]');

// function read(callback) {
//     var file = fileInput.files.item(0);
//     var reader = new FileReader();

//     reader.onload = function () {
//         console.log('hi');

//         callback(reader.result);

//     }

//     let text = reader.readAsText(file);
//     console.log('hi');
// }




