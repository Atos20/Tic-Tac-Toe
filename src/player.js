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

    saveWinsToStorage(player){
        localStorage.setItem(JSON.stringify(player, this.winCount))
    }

    retrieveWinsFromStorage(player){
        JSON.parse(localStorage.getItem(player))
    }
}

// module.exports = Player;