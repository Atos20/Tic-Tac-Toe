const assert = require('chai').assert;
const Player = require('../src/player');
const Game = require('../src/game');

describe('Player', function(){

    it('it should be a function', function(){
        assert.isFunction(Player);
    })
});
