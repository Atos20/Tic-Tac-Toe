//global variables
var gameBoard = document.querySelector('.game-board');
var gameCells = document.querySelectorAll('.cell');
var mainHeader = document.querySelector('.main-header');
var oneWins = document.querySelector('.p1-win-count')
var twoWins = document.querySelector('.p2-win-count')

var currentGame;
window.onload = startGame();
//event Listeners
gameBoard.addEventListener('click', updateBoard);

function startGame(){
  currentGame = new Game()
  updateWins()
  retrievePLayerBoards(currentGame.player1)
  retrievePLayerBoards(currentGame.player2)
}

function updateBoard(event){
  var currentPlayer = currentGame.findCurrentTurn()
  var cellPosition = +event.target.id
    currentGame.insertToken(cellPosition)
    gameCells[cellPosition].innerHTML = currentGame.gameBoard[cellPosition]
    findWinner()
    gameStatus(currentPlayer)
    updateWins()
}

function updateWins(){
  oneWins.innerText = `${currentGame.player1.winCount} wins !!`;
  twoWins.innerText = `${currentGame.player2.winCount} wins !!`;
}

function retrievePLayerBoards(currentPlayer){
  var storedBoards = currentPlayer.winningBoards
  var playerBoard 
  if(+currentPlayer.id === 1){
    playerBoard = document.querySelector('.p1-games');
  } else {
    playerBoard = document.querySelector('.p2-games')
  }
  playerBoard.innerHTML = '';
  for (let i = 0; i < storedBoards.length; i++) {
    var token = storedBoards[i]
    playerBoard.innerHTML +=
    `
    <article class="player-container">
                <div class="mini-game-board">
                    <div class="one min-cell">${token[0]}</div>
                    <div class="two min-cell">${token[1]}</div>
                    <div class="three min-cell">${token[2]}</div>
                    <div class="four min-cell">${token[3]}</div>
                    <div class="five min-cell">${token[4]}</div>
                    <div class="six min-cell">${token[5]}</div>
                    <div class="seven min-cell">${token[6]}</div>
                    <div class="eigth min-cell">${token[7]}</div>
                    <div class="nine min-cell">${token[8]}</div>
                </div>
            </article>
    `
  }
}

function findWinner(){
  currentGame.checkWin()
}

function gameStatus(currentPlayer){
  console.log(currentGame.announcement)
  if (+currentPlayer.id === 1){
    mainHeader.innerHTML = `It's 🐔's turn`;
  }
  if (+currentPlayer.id === 2){
    mainHeader.innerHTML = `It's 👾's turn`;
  }
  if (!currentGame.isGameActive){
    console.log(currentPlayer)
    mainHeader.innerHTML = currentGame.announcement
  }
}