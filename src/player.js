class Player{
    constructor(id){
        this.id = id;
        this.name = `player ${id}`;
        this.winCount = 0;
        this.isTurn = false; 
    }

    addWins(){
        this.winCount++
    }

    victoryLost() {
        this.isTurn = !this.isTurn
    }

    saveWinsToStorage(){
        localStorage.setItem(`${this.name}`, this.winCount)
    }

    retrieveWinsFromStorage(player){
        JSON.parse(localStorage.getItem(player) || 0;
    }
}

// module.exports = Player;