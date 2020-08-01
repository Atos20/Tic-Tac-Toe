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
    }

    takeTurn() { 
        this.turns = !this.turns;
        this.turns ? this.courrentTurn = 'player1' : this.courrentTurn = 'player2';
        // console.log(this.courrentTurn)
    }

    checkForReadiness(){ //check for game readiness
        return this.gameBoard.every(function (cell) {
            const isEmpty = cell === ''
            return isEmpty
        })
    }

    checkForDraws() { //check for draw, if it is full it is a draw
        return this.gameBoard.every((cell) => {//had to use arrow functioning 
            this.announcement = 'It\'s a draw!'
            const isFull = cell !== ''
            return isFull
        })
    }

    checkForVictories(){
        //check for readiness???
        //check for win => if it meets one of the conditions is a win
        //when a game is won playes cannot place token on the grid
        if (this.gameBoard[0]=== this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2]){
             //     [0, 1, 2], //checks for the top row
            console.log('the winner is =>', this.gameBoard[0])
            // this.resetGame();
            return;
        }
        if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[3] === this.gameBoard[5]){
            //     [3, 4, 5], //checks for the middle row
            console.log('the winner is => ',this.gameBoard[3])
            // this.resetGame();
            return;
        }
        if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[6] === this.gameBoard[8]){
            //   [6, 7, 8], // checks for the botton row
            console.log('the winner is => ', this.gameBoard[6])
            // this.resetGame();
            return;
        }
        if (this.gameBoard[0]  === this.gameBoard[3]&& this.gameBoard[0] === this.gameBoard[6]){
            //     [0, 3, 6], // checks for the left colum
            console.log('the winner is => ', this.gameBoard[0])
            // this.resetGame();
            return;
        }
        if (this.gameBoard[1] === this.gameBoard[4]&& this.gameBoard[1]=== this.gameBoard[7]){
            //     [1, 4, 7], // checks for the middle column 
            console.log('the winner is =>', this.gameBoard[1])
            // this.resetGame();
            return;
        }
        if (this.gameBoard[2] === this.gameBorad[5] && this.gameBoard[2] === this.gameBoard[8]){
            //     [2, 5, 8], // checks for the right column
            console.log('the winner is =>', this.gameBoard[2])
            // this.resetGame();
            return;
        }
        
        if ( this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[0] === this.gameBoard[8]){
            //     [0, 4, 8], // checks 1st cross
            console.log('the winner is =>', this.gameBoard[0])
            // this.resetGame(); 
            return;
        }
        if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[2] === this.gameBoard[6]){
            //     [2, 4, 6]  // checks 2nd cross
            console.log('the winner is =>', this.gameBoard[2])
            // this.resetGame(); 
            return;
        }
    }


    updateAnnouncement(player){//needs to make use of a paramter so it can interpolate the player
       if (checkForVictories()){
           this.announcement = `It's ${player.name} turn`
           return this.announcement;
       }
    }


    resetGame(){
        //setTimeOut(
            //reset the board
            this.gameBoard = ['', '', '', '', '', '', '', '', ''];
            //this.announcement 
            this.announcement = 'Game will restart in 5 sec.'
            //get the information from estorage 
            
            // it clears out the board

        //, 5000)
        return this.announcement;
    }
}


// module.exports = Game;