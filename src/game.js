// const Player = require('../src/player');

class Game{
    constructor(boardState) {
        this.player1 = new Player ('1');//tested
        this.player2 = new Player ('2');// tested
        this.gameBoard = boardState//=> to check for the token being placed by the player   
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

    declareWinner(player){
        console.log('the winner is ', player.name)
        player.addWins()
        player.saveWinsToStorage()
        // this.disableGame()
    }

    checkWin(){
        if(this.gameTurns >= 5){
            this.checkForVictory()
        }
        if(!this.isGameActive){
            setTimeout(function (){
                alert('5 seconds')
                // this.resetGame()
            }, 3000);
        }
    }

    // game Logic
    checkForVictory(){
        var currentTurn = this.findCurrentTurn()
        for (var i = 0; i < this.winningScenarios.length; i++) {
            for(var j = 0; j < this.winningScenarios[i].length; j++){
                var winningIndex = this.gameBoard[this.winningScenarios[i][j]]
                var secondIndex = this.gameBoard[this.winningScenarios[i][j + 1]]
                var thirdIndex = this.gameBoard[this.winningScenarios[i][j + 2]]
                if(winningIndex === secondIndex && secondIndex === thirdIndex && winningIndex !== ''){
                    this.declareWinner(currentTurn)
                    return true
                } 
            }
        }
    }
    // checkForVictory(){
    //     var firstToken = this.gameBoard[this.winningScenarios[i][j]]
    //     var secondToken = this.gameBoard[winningIndex]
    //     var thirdToken = this.gameBoard[winningIndex]
    //     console.log('first', firstToken )
    //     console.log('second', secondToken )
    //     console.log('third', thirdToken )
    //     if (firstToken === secondToken && secondToken === thirdToken){
    //         console.log( this.findCurrentTurn().name, 'has won')
    //         // this.resetGame();
    //         return true
    //     } else {
    //         return false
    //     }
    // }      

    checkForDraws() { //check for draws, if it is full it is a draw
        return this.gameBoard.includes('') ? false : true
    }

    checkForReadiness(){ //check for game readiness
        return !this.gameBoard.includes('') ? false : true
    }

    findCurrentTurn() { 
        return this.gameTurns %2 === 0 ? this.player2 : this.player1
    }


    checkForVictoriesV2(){//=> this will run at the fifth turn ad up 
        //check for readiness???
        //forloop ???
        if (this.gameBoard[0]=== this.gameBoard[1] && this.gameBoard[0] === this.gameBoard[2]){
             //     [0, 1, 2], //checks for the top row
             findWinner()
             console.log( this.findCurrentTurn(), 'has won')
            return false;
        }
        if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[3] === this.gameBoard[5]){
            console.log( this.findCurrentTurn(), 'has won')
            return false;
        }
        if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[6] === this.gameBoard[8]){
            console.log( this.findCurrentTurn(), 'has won')
            return false;
        }
        if (this.gameBoard[0]  === this.gameBoard[3]&& this.gameBoard[0] === this.gameBoard[6]){
            console.log( this.findCurrentTurn(), 'has won')
            return false;
        }
        if (this.gameBoard[1] === this.gameBoard[4]&& this.gameBoard[1]=== this.gameBoard[7]){
            console.log( this.findCurrentTurn(), 'has won')
            return false;
        }
        if (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[2] === this.gameBoard[8]){
            console.log( this.findCurrentTurn(), 'has won')
            return false;
        }
        if ( this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[0] === this.gameBoard[8]){
            console.log( this.findCurrentTurn(), 'has won')
            return false;
            
        }
        if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[2] === this.gameBoard[6]){
            console.log( this.findCurrentTurn(), 'has won')
            return false;
        }
    }

    updateHeader(player){//needs to make use of a paramter so it can interpolate the player
       if (checkForVictories()){
           this.announcement = `It's ${player.name} turn`
           return this.announcement;
       }
    }

    insertToken(position){
        this.findCurrentTurn()
        // console.log(this.findCurrentTurn())
        if (this.gameBoard[position] !== ''){ //=> makes sure not to over ride a position
            return false;
        } 
        if (this.gameBoard[position] === '' && this.findCurrentTurn() === this.player2) {
            this.gameTurns++
            this.gameBoard[position] = '🌝' ;
        } 
        if ((this.gameBoard[position] === '' && this.findCurrentTurn() === this.player1)){
            this.gameTurns++
            this.gameBoard[position] = '🌚' ;
        }
        this.printBoard() //display the updated board
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
            //reset the board
            console.log('after 5 sec')
            this.gameBoard = ['', '', '', '', '', '', '', '', ''];
            //this.announcement 
            this.announcement = 'Game will restart in 5 sec.'
            //get the information from estorage 
            this.printBoard()
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