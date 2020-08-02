// const Player = require('../src/player');

class Game{
    constructor(boardState) {
        this.player1 = new Player ('1');//tested
        this.player2 = new Player ('2');// tested
        this.gameBoard = boardState//=> to check for the token being placed by the player   
        this.gameTurns = 0;
        this.isGameActive = true;
        this.announcement = ''; //tested => will display the title
        this.winningScenarios = [
            [0, 1, 2], //checks for the top row
            [3, 4, 5], //checks for the middle row
            [6, 7, 8], // checks for the botton row
            [0, 3, 6], // checks for the left colum
            [1, 4, 7], // checks for the middle column 
            [2, 5, 8], // checks for the right column
            [0, 4, 8], // checks 1st cross
            [2, 4, 6]  // checks 2nd cross
        ];
        //loop through the.winningScenarios array

        //check 
    }
    // game Logic
    checkForVictory(){
        for (var i = 0; i < this.winningScenarios.length; i++) {
            var winningPossibility = this.winningScenarios[i]
            var firstToken = this.gameBoard[winningPossibility[0]]
            var secondToken = this.gameBoard[winningPossibility[1]]
            var thirdToken = this.gameBoard[winningPossibility[2]]

            if (firstToken === secondToken && secondToken === thirdToken){
                return true
            } else {
                return false
            }
        }
    }

    checkForDraws() { //check for draws, if it is full it is a draw
        return this.gameBoard.every((cell) => {//had to use arrow functioning 
            this.announcement = 'It\'s a draw!'
            const isFull = cell !== ''
            return isFull
        })
    }

    checkForReadiness(){ //check for game readiness
        return this.gameBoard.every(function (cell) {
            const isEmpty = cell === ''
            return isEmpty
        })
    }

    findCurrentTurn() { 
        return this.gameTurns %2 === 0 ? this.player2 : this.player1
    }


    // checkForVictories(){//=> this will run at the fifth turn ad up 
    //     //check for readiness???
    //     //forloop ???
    //     if (this.gameBoard[0]=== this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2]){
    //          //     [0, 1, 2], //checks for the top row
    //          findWinner()
    //          console.log( this.findCurrentTurn(), 'has won')
    //         return false;
    //     }
    //     if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[3] === this.gameBoard[5]){
    //         console.log( this.findCurrentTurn(), 'has won')
    //         return false;
    //     }
    //     if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[6] === this.gameBoard[8]){
    //         console.log( this.findCurrentTurn(), 'has won')
    //         return false;
    //     }
    //     if (this.gameBoard[0]  === this.gameBoard[3]&& this.gameBoard[0] === this.gameBoard[6]){
    //         console.log( this.findCurrentTurn(), 'has won')
    //         return false;
    //     }
    //     if (this.gameBoard[1] === this.gameBoard[4]&& this.gameBoard[1]=== this.gameBoard[7]){
    //         console.log( this.findCurrentTurn(), 'has won')
    //         return false;
    //     }
    //     if (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[2] === this.gameBoard[8]){
    //         console.log( this.findCurrentTurn(), 'has won')
    //         return false;
    //     }
    //     if ( this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[0] === this.gameBoard[8]){
    //         console.log( this.findCurrentTurn(), 'has won')
    //         return false;
            
    //     }
    //     if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[2] === this.gameBoard[6]){
    //         console.log( this.findCurrentTurn(), 'has won')
    //         return false;
    //     }
    // }
    
    checkWin(){
        //checking=> boolean
       //loop over the arrays => possible winning combinations

    }

    updateHeader(player){//needs to make use of a paramter so it can interpolate the player
       if (checkForVictories()){
           this.announcement = `It's ${player.name} turn`
           return this.announcement;
       }
    }

    insertToken(token, position){//=>hardcode the tokens :) 
        if (this.gameBoard[position] !== '' ){//=> it checks for the length of array and overriding tokens
            //why the position?
            return false;
        } else {
            this.gameTurns++
            //=> p1 or p2 here I Iknow which player is playin
            this.savePlayersMoves(this.findCurrentTurn(), position)//=> add the players game 
            this.gameBoard[position] = token //assign the cell to a the new token
            console.log('player ' + this.findCurrentTurn() + 'has placed a ' + token + 'at position ' + this.gameBoard[position])
            this.printBoard() //display the updated board
        }
        this.checkWin()
    }

    findWinner(){//The winner will be founf and then the winCount will incease
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
}
// module.exports = Game;