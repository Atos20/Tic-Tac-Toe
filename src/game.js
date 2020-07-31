// const Player = require('../src/player');

class Game{
    constructor(stateBoard) {
        this.player1 = new Player ('1');//tested
        this.player2 = new Player ('2');// tested
        this.turns = 0; //tested
        this.courrentTurn = 'player1';
        this.announcement = ''; //tested => will display the title
        this.whoseTurn = this.player1;
        this.gameBoard = stateBoard//=> to check for the token being placed by the player   //=> [0] topleft position
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


    // placeToken(player){
    //     if(player.id === '1' && currentTurn === 'player1') {
    //         //I think this method could be better use as a funtion that manipuates the data.
    // }

    //     //being able to provide tokens to the the board => this function willbe ablo to change the elements on the board
    // }

    checkForWin(){

    }

    updateAnnouncement(player){//needs to make use of a paramter so it can interpolate the player
        this.announcement = `It's ${player.name} turn`
        return this.announcement;
    }


}
// module.exports = Game;