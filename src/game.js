// const Player = require('../src/player');

class Game{
    constructor(boardState) {
        this.player1 = new Player ('1');//tested
        this.player2 = new Player ('2');// tested
        this.gameBoard = boardState//=> to check for the token being placed by the player   
        this.gameTurns = 0
        this.currentTurn;
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

    checkForReadiness(){ //check for game readiness
        return this.gameBoard.every(function (cell) {
            const isEmpty = cell === ''
            return isEmpty
        })
    }

    checkForDraws() { //check for draws, if it is full it is a draw
        return this.gameBoard.every((cell) => {//had to use arrow functioning 
            this.announcement = 'It\'s a draw!'
            const isFull = cell !== ''
            return isFull
        })
    }

    checkForVictories(){//=> this will run at the fifth turn ad up 
        //check for readiness???
        //forloop 
        if (this.gameBoard[0]=== this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2]){
             //     [0, 1, 2], //checks for the top row
            return true;
        }
        if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[3] === this.gameBoard[5]){
            //     [3, 4, 5], //checks for the middle row
            return true;
        }
        if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[6] === this.gameBoard[8]){
            //   [6, 7, 8], // checks for the botton row
            return true;
        }
        if (this.gameBoard[0]  === this.gameBoard[3]&& this.gameBoard[0] === this.gameBoard[6]){
            //     [0, 3, 6], // checks for the left colum
            return true;
        }
        if (this.gameBoard[1] === this.gameBoard[4]&& this.gameBoard[1]=== this.gameBoard[7]){
            //     [1, 4, 7], // checks for the middle column 
            return true;
        }
        if (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[2] === this.gameBoard[8]){
            //     [2, 5, 8], // checks for the right column
            return true;
        }
        if ( this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[0] === this.gameBoard[8]){
            //     [0, 4, 8], // checks 1st cross 
            return true;
        }
        if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[2] === this.gameBoard[6]){
            //     [2, 4, 6]  // checks 2nd cross
            return true;
        }
    }
    
    checkWin(){
        if ( this.gameTurns >= 5){
            this.checkForVictories()
        }
    }

    updateHeader(player){//needs to make use of a paramter so it can interpolate the player
       if (checkForVictories()){
           this.announcement = `It's ${player.name} turn`
           return this.announcement;
       }
    }

    insertToken(token, position){//=>hardcode the tokens :) 
        //decrements the Game turns
        
        if (position > 8 || this.gameBoard[position] > 8 || this.gameBoard[position] !== ''){//=> it checks for the length of array and overriding tokens
            return false;
        } else {
            this.gameTurns++
            console.log('turns left', 9 - this.gameTurns )
            this.gameBoard[position] = token
            this.findCourrentTurn()
            //checkForVictory
            console.log('player ' + this.findCourrentTurn() + 'has placed a ' + token + 'at position ' + this.gameBoard[position])
            this.printBoard()
            return true;
        }
    }

    findCourrentTurn() { 
        if (this.gameTurns %2 === 0){
            return this.player2.id //=> remove id's these are just for testing 
        } else {
            return this.player1.id
        }
    }


    findWinner(player){//The winner will be founf and then the winCount will incease
        var winner; //=> p1 or p2 
        console.log(player)
        //should find who has got a victory
        // if (player.lostGame){//=> true
            
        // }   
        // winner = player
        //once it finds the winner, it invokes the method that increases the win count for that specific
        // player.addWins()//=>
        // player.saveWinsToStorage()
        // how to save to LS the win
    }



    resetGame(){
        //setTimeOut(
            //reset the board
            this.gameBoard = ['', '', '', '', '', '', '', '', ''];
            //this.announcement 
            this.announcement = 'Game will restart in 5 sec.'
            //get the information from estorage 

        //, 5000)
        return this.announcement;
    }
}


// module.exports = Game;