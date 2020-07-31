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
    
    });