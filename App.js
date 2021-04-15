//start
const newGame = document.querySelector('#newGame ')
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
let roundPlayerOne =0
let roundPlayerTow = 0
let globalPlayerOne =0
let globalPlayerTow = 0
let total =[]

const roundNumber = (max =6, min =1) => {
    return Math.floor(Math.random() * (1 + max - min)) + 1
};

const reset = ()=>{
    playerOneRound.innerText = roundPlayerOne
    playerTowRound.innerText = roundPlayerTow
    playerOneGlobal.innerText = globalPlayerOne
    playerTowGlobal.innerText = globalPlayerTow
    total =[]
}
reset()

newGame.addEventListener('click', ()=>{
    reset()
})
rollDice.addEventListener('click',()=>{
    let iniRound = roundNumber()
    let ext =[]
    let next = []

    if (iniRound != 1){
        ext.push(iniRound)
            next = ext
        total.push(next)

        console.log(total)
        playerOneRound.innerText = total
    }

})