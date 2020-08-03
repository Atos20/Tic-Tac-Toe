// const Player = require('../src/player');

class Game{
    constructor(boardState) {
        this.player1 = new Player ('1');//tested
        this.player2 = new Player ('2');// tested
        this.gameBoard = ['', '', '', '', '', '', '', '', '']
        this.gameTurns = 0;
        this.announcement = ''; //tested => will display the title
        this.isGameActive = true;
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
    }

    deactivateGame(){
        this.isGameActive = !this.isGameActive;
    }

    declareWinner(player){
        this.announcement = `${player.name} Wins`
        // console.log(this.announcement)
        player.saveWinsToStorage()
        // this.disableGame()
        if(!this.isGameActive){
            setTimeout(() => {
                // alert('5 seconds')
                location.reload();
                // this.resetGame()
            }, 2000);
        }
    }

    checkWin(){
        if(this.gameTurns >= 5){
            console.log('check for win')
            this.checkForVictory()
        }
    }

    // game Logic
    checkForVictory(){ 
        this.checkForDraws() 
        var currentTurn = this.findCurrentTurn()
        for (var i = 0; i < this.winningScenarios.length; i++) {
            for(var j = 0; j < this.winningScenarios[i].length; j++){
                var winningIndex = this.gameBoard[this.winningScenarios[i][j]]
                var secondIndex = this.gameBoard[this.winningScenarios[i][j + 1]]
                var thirdIndex = this.gameBoard[this.winningScenarios[i][j + 2]]
                if(winningIndex === secondIndex && secondIndex === thirdIndex && winningIndex !== ''){
                    //save current board game
                    currentTurn.winningBoards.unshift(this.gameBoard)
                    // this.deactivateGame()
                    currentTurn.addWins()
                    this.deactivateGame()
                    this.declareWinner(currentTurn)
                    return true
                }
            }
        }

    }     

    checkForDraws() { //check for draws, if it is full it is a draw
        if (!this.gameBoard.includes('') ){
            this.announcement = 'It is a DRAW';
            console.log(this.announcement )
        }

    }

    // checkForReadiness(){ //check for game readiness
    //     return !this.gameBoard.includes('') ? false : true
    // }

    findCurrentTurn() { 
        return this.gameTurns %2 === 0 ? this.player2 : this.player1;
    }


    // checkForVictoriesV2(){//=> this will run at the fifth turn ad up 
    //     //check for readiness???
    //    }  //forloop ???
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
   

    updateHeader(player){//needs to make use of a paramter so it can interpolate the player
       if (checkForVictories()){
           this.announcement = `It's ${player.name} turn`
           return this.announcement;
       }
    }

    insertToken(position){
        var currentTurn = this.findCurrentTurn()
        // console.log(this.findCurrentTurn())
        if (this.gameBoard[position] !== '' ||  this.checkForVictory() === true){ //=> makes sure not to over ride a position
            return false;
        } 
        if (this.gameBoard[position] === '' && currentTurn === this.player2) {
            this.gameTurns++
            return this.gameBoard[position] = '🐔';
        } 
        if ((this.gameBoard[position] === '' && currentTurn === this.player1)){
            this.gameTurns++
            return this.gameBoard[position] = '👾';
        }
        this.checkWin() //check for a winnning condition
    }
    
    resetGame(){
            //reset the board
            this.gameBoard = ['', '', '', '', '', '', '', '', '']
            //this.announcement 
            this.announcement = 'Game will restart in 5 sec.'
            console.log(this.announcement)
            //get the information from estorage 
        return this.announcement;
    }
}
// module.exports = Game;