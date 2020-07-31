const Player = require('../src/player');
class Game{
    constructor() {
        this.player1 = new Player ('1');
        this.player2 = new Player ('2');
        this.turns = 0;
        this.courrentTurn = 'player1'
        this.gameBoard = [  //=> to check for the token being placed by the player
            '', '', '',     //=> [0] topleft position
            '', '', '',
            '', '', ''
        ];
      
        this.winningCondition = [
            [0, 1, 2], //checks for the top row
            [3, 4, 5], //checks for the middle row
            [6, 7, 8], // checks for the botton row
            [0, 3, 6], // checks for the left colum
            [1, 4, 7], // checks for the middle column 
            [2, 5, 8], // checks for the right column
            [0, 4, 8], // checks 1st cross
            [2, 4, 6] // checks 2nd cross
        ];
    }
    swapTurns() {
        console.log('hi')
    }
}
module.exports = Game;