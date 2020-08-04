// const Player = require('../src/player');
class Game{
    constructor() {
        this.player1 = new Player ('1');
        this.player2 = new Player ('2');
        this.gameBoard = ['', '', '', '', '', '', '', '', ''];
        this.gameTurns = 0;
        this.announcement = '';
        this.isGameActive = true;
        this.winningScenarios = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]  
        ];
    }

    deactivateGame(){
        this.isGameActive = !this.isGameActive;
    }

    declareWinner(winner){
        this.deactivateGame();
        this.announcement = `${winner.name} Wins`;
        winner.winningBoards.unshift(this.gameBoard);
        winner.saveWinsToStorage();
        this.resetGame();
    }

    checkForVictory(){ 
        this.checkForDraws() ;
        var currentTurn = this.findCurrentTurn();
        for (var i = 0; i < this.winningScenarios.length; i++) {
            for(var j = 0; j < this.winningScenarios[i].length; j++){
                var winningIndex = this.gameBoard[this.winningScenarios[i][j]];
                var secondIndex = this.gameBoard[this.winningScenarios[i][j + 1]];
                var thirdIndex = this.gameBoard[this.winningScenarios[i][j + 2]];
                if(winningIndex === secondIndex && secondIndex === thirdIndex && winningIndex !== ''){
                    currentTurn.addWins();
                    this.declareWinner(currentTurn);
                    // return true
                }
            }
        }
    }    
    
    checkWin(){
        if(this.gameTurns >= 5){
            this.checkForVictory();
        }
    }

    checkForDraws() { 
        if (!this.gameBoard.includes('') ){
            this.deactivateGame();
            this.announcement = 'It is a DRAW';
            this.resetGame();
        }
    }

    findCurrentTurn() { 
        return this.gameTurns %2 === 0 ? this.player2 : this.player1;
    }

    updateHeader(player){
       if (checkForVictories()){
           this.announcement = `It's ${player.name} turn`;
           return this.announcement;
       }
    }

    insertToken(position){
        var currentPostion = this.findCurrentTurn();
        if (this.gameBoard[position] !== ''){
            return false;
        } 
        if (this.gameBoard[position] === '' && currentPostion  === this.player2 && this.isGameActive === true) {
            this.gameTurns++
            return this.gameBoard[position] = '🐔';
        } 
        if ((this.gameBoard[position] === '' && currentPostion === this.player1 && this.isGameActive === true)){
            this.gameTurns++
            return this.gameBoard[position] = '👾';
        }
    }
    
    resetGame(){
            this.gameBoard = ['', '', '', '', '', '', '', '', ''];
            if(!this.isGameActive){
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
    }
}
// module.exports = Game;