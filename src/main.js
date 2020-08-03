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

function findWinner(){
  currentGame.checkWin()
}

function gameStatus(currentPlayer){
  // var currentPlayer = currentGame.findCurrentTurn()
  // return +currentPlayer.id === 1 ? mainHeader.innerText = `It's 👾's turn`: mainHeader.innerText = `It's 🐔's turn`;
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
  console.log(currentGame)
  // if(){
  //   mainHeader.innerHTML = currentGame.announcement
  // }
}
