class Player{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.winCount = 0;
        this.gameLost = false;
    }

    addWins(){
        this.winCount++
    }

    victoryLost() {
        this.gameLost = !this.gameLost
    }

    saveWinsToStorage(){

    }

    retrieveWinsFromStorage(){
        
    }
}

module.exports = Player;