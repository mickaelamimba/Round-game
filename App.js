//start
const newGame = document.querySelector('.new-game ')
//player
const playerOne = document.querySelector('#playerOne')
const playerTow = document.querySelector('#playerTow')
// player round
const playerOneRound = document.querySelector('#playerOneRound')
const playerTowRound = document.querySelector('#playerTowRound')
 // global
const playerOneGlobal = document.querySelector('#playerOneGlobal')
const playerTowGlobal = document.querySelector('#playerTowGlobal')

const rollDice = document.querySelector('#rollDice')
const hold = document.querySelector('#hold')
let round = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let globalPlayerOne =1
let globalPlayerTow = 0

const roundNumber = (max =6, min =1) => {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1
};

const reset = ()=>{
    playerOneRound.innerText = globalPlayerOne
}
reset()