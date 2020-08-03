class Player{
    constructor(id){
        this.id = id;
        this.name = `player ${id}`;
        this.winCount = this.retrieveWinsFromStorage().winCount || 0;
        this.isTurn = false; 
        this.winningBoards= this.retrieveWinsFromStorage().winningBoards|| [];
    }

    addWins(){
        this.winCount++
    }

    victoryLost() {
        this.isTurn = !this.isTurn
    }

    saveWinsToStorage(){
        localStorage.setItem(`${this.name}`, JSON.stringify(this));
    }

    retrieveWinsFromStorage(){
        // console.log(JSON.parse(localStorage.getItem(this.name)) || {})
        return JSON.parse(localStorage.getItem(this.name)) || {};
    }
}

// module.exports = Player;