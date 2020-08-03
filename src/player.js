class Player{
    constructor(id){
        this.id = id;
        this.name = `player ${id}`;
        this.winCount =  this.retrieveWinsFromStorage();
        this.isTurn = false; 
         this.winningBoards= [];
    }

    addWins(){
        this.winCount++
    }

    victoryLost() {
        this.isTurn = !this.isTurn
    }

    saveWinsToStorage(){
        localStorage.setItem(`${this.name}`, JSON.stringify(this.winCount));
    }

    retrieveWinsFromStorage(){
        return JSON.parse(localStorage.getItem(this.name)) || 0;
    }
}

// module.exports = Player;