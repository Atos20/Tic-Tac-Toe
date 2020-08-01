// const Player = require('../src/player');

class Game{
    constructor(boardState) {
        this.player1 = new Player ('1');//tested
        this.player2 = new Player ('2');// tested
        this.gameBoard = boardState//=> to check for the token being placed by the player   
        this.turns = true; //tested
        this.courrentTurn = 'player1';
        this.announcement = ''; //tested => will display the title
        // this.whoseTurn = this.player1;
        this.possibleWinnings = [
            [0, 1, 2], //checks for the top row
            [3, 4, 5], //checks for the middle row
            [6, 7, 8], // checks for the botton row
            [0, 3, 6], // checks for the left colum
            [1, 4, 7], // checks for the middle column 
            [2, 5, 8], // checks for the right column
            [0, 4, 8], // checks 1st cross
            [2, 4, 6]  // checks 2nd cross
        ];
    }
    
    printBoard() {
        let formattedString = '';
        this.gameBoard.forEach((cell, index) => {
            formattedString += cell ? ` ${cell} |` : '   |';
            if((index + 1) % 3 == 0)  {
                formattedString = formattedString.slice(0,-1);
                if(index < 8) formattedString += `\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n`;
            }
        });
        console.log('%c' + formattedString, 'color: red ;font-size:20px');
        console.log(`\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n`)
    }

    takeTurn() {
        this.turns = !this.turns; 
        if (this.turns === false){
            this.courrentTurn = 'player1';
        } else {
            this.courrentTurn = 'player2';
        }
        console.log(this.courrentTurn)
    }

    checkForReadiness(){
        //check for game readiness
        return this.gameBoard.every(function (cell) {
            const isEmpty = cell === ''
            return isEmpty
        })
    }

    checkForDraws() {
        //check for draw, if it is full it is a draw
        return this.gameBoard.every(function (cell) {
            const isFull= cell !== ''
            return isFull
        })
    }

    checkForVictories(){
        //check for readiness???
        var topLeft = this.gameBoard[0];
        var topCenter = this.gameBoard[1];
        var topRight = this.gameBoard[2];
        var centerLeft = this.gameBoard[3];
        var centerCenter= this.gameBoard[4];
        var centerRigth = this.gameBoard[5];
        var buttomLeft = this.gameBoard[6];
        var buttomCenter = this.gameBoard[7];
        var buttomRigth = this.gameBoard[8];
        
        //check for win => if it meets one of the conditions is a win
        if (topLeft === topCenter && topLeft === topRight){
            console.log('the winner is =>', topLeft)
            return;
        }
        if (centerLeft === centerCenter && centerLeft === centerRigth){
            console.log('the winner is => ',centerLeft)
            return;
        }
        if (buttomLeft === buttomCenter && buttomLeft === buttomRigth){
            console.log('the winner is => ', buttomLeft)
            return;
        }
        if (centerLeft === centerCenter && centerLeft === centerRigth){
            console.log('the winner is =>', centerLeft)
            return;
        }
        if (buttomLeft === buttomCenter && buttomLeft === buttomRight){
            console.log('the winner is =>', buttomLeft)
            return;
        }
        if (topLeft  === centerCenter && topleft === buttomRigth){
            console.log('the winner is => ', centerCenter )
            return;
        }
        if (topRight === centerCenter && topRight === buttomLeft){
            console.log('the winner is =>', centerCenter)
        }
        return;
    }

    updateAnnouncement(player){//needs to make use of a paramter so it can interpolate the player
        this.announcement = `It's ${player.name} turn`
        return this.announcement;
    }

    resetGame(){
        //setTimeOut(
            //here it goes the function that resets the game
            // it clears out the board

        //, 5000)
    }
}


// module.exports = Game;