const assert = require('chai').assert;
const Player = require('../src/player');


describe('Player', function(){

    it('it should be a function', function(){
        assert.isFunction(Player);
    });

    it('should instantiate a new Player', function(){
        const player1 = new Player();

        assert.instanceOf(player1, Player)
    });

    it('should have an id', function() {
        const player1 = new Player('1');

        assert.equal(player1.id, '1')
    });

    it('should be able to have a different id', function() {
        const player1 = new Player('1');
        const player2 = new Player('2');

        assert.equal(player1.id, '1')
        assert.equal(player2.id, '2')
    });

    it('should have a name', function() {
        const player1 = new Player('1', 'player1');

        assert.equal(player1.name, 'player1')
    });

    it('should be able to have a different name', function() {
        const player1 = new Player('1', 'player1');
        const player2 = new Player('2', 'player2');

        assert.equal(player1.name, 'player1')
        assert.equal(player2.name, 'player2')
    });

    it('should start with no wins', function() {
        const player1 = new Player('1');

        assert.equal(player1.winCount, 0)
    });

    it('should be able to keep trak of the wins', function() {
        const player1 = new Player('1', 'player1');

        player1.addWins()
        assert.equal(player1.winCount, 1)
    });

    it('should start by not losing the game', function() {
        const player1 = new Player('1', 'player1');

        assert.equal(player1.gameLost, false)
    });

    it('should be able ot loose a game', function() {
        const player1 = new Player('1', 'player1');

        player1.victoryLost()
        assert.equal(player1.gameLost, true)
    });

    it('should start by not losing the game', function() {
        const player1 = new Player('1', 'player1');

        assert.equal(player1.gameLost, false)
    });

    it('save to local storage should be a function', () => {
        const player1 = new Player('1', 'player1');
    
        assert.isFunction(player1.saveWinsToStorage, true);
      });

      it('save to local storage should be a function', () => {
        const player1 = new Player('1', 'player1');
    
        assert.isFunction(player1.retrieveWinsFromStorage, true);
      });
});
