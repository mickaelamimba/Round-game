const newGame = document.querySelector('.new-game ')
const roundPlayerOne = document.querySelector('.round-player-1')
const roundPlayerTow = document.querySelector('.round-player-2')
let round = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let global =''


newGame.addEventListener('click', startNewGames)


function startNewGames() {


    console.log(round)
}