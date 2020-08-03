//global variables
var gameBoard = document.querySelector('.game-board');
var gameCells = document.querySelectorAll('.cell');
var mainHeader = document.querySelector('.main-header');

var currentGame;
window.onload = startGame();
//event Listeners
gameBoard.addEventListener('click', updateBoard);

function startGame(){
  currentGame = new Game()
}

function updateBoard(event){
  var cellPosition = +event.target.id
    currentGame.insertToken(cellPosition)
    gameCells[cellPosition].innerHTML = currentGame.gameBoard[cellPosition]
    currentGame.checkWin()
    updateHeader(event)
}

function updateHeader(event){
  var currentToken = event.target.innerHTML
  var currentPlayer = currentGame.findCurrentTurn()
  // mainHeader.innerText = `${currentGame.announcement}`
  console.log(currentPlayer)
  if (currentPlayer.id ===  '1' ){
    mainHeader.innerHTML = `It's 👾's turn`
  } else {
    mainHeader.innerHTML = `It's 🐔's turn`
  }
}

