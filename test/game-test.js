const assert = require('chai').assert;
const Player = require('../src/player');
const Game = require('../src/game');

describe('Game', () => {
    it('should be a function', () => {
        assert.isFunction(Game);
    
      });
    
    it('should be able to instantiate only two player', () => {
        const game = new Game();
    
        assert.equal(game.player1.id,  "1");
        assert.equal(game.player2.id, "2");
        assert.typeOf(game.player1, 'object');
        assert.typeOf(game.player2, 'object');
      });

      it('should be able to announce who\'s turn it is', () => {
        const game = new Game();
        const player1 = new Player('1', 'player 1') 
        const player2 = new Player('2', 'player 2') 

        game.updateAnnouncement(player1)
        assert.equal(game.announcement, 'It\'s player 1 turn');
        
        game.updateAnnouncement(player2)
        assert.equal(game.announcement, 'It\'s player 2 turn');
      });

    it('it should include an array of all possible winnigs', () => {
        const game = new Game();
    
        assert.deepEqual(game.gameBoard.length, 9);
        assert.deepEqual(game.gameBoard[0], '');
        
      });

      it('it should include an array of all possible winnigs', () => {
        const game = new Game();
    
        assert.deepEqual(game.possibleWinnings.length, 8);
        assert.deepEqual(game.possibleWinnings[0].length, 3);
        assert.deepEqual(game.possibleWinnings[7].length, 3);
      });
});