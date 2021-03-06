
const config = {

  1: 'img/1.svg',
  2: 'img/2.svg',
  3: 'img/3.svg',
  4: 'img/4.svg',
  5: 'img/5.svg',
  6: 'img/6.svg'
}

// start
const newGame = document.querySelector('#newGame ')
// player
const playerOne = document.querySelector('#playerOne')
const playerTow = document.querySelector('#PlayerTow')
const playerOnPoint = document.querySelector('#playerOnPoint')
const  playerTowPoint = document.querySelector('#playerTowPoint')
// player round
const playerOneRound = document.querySelector('#playerOneRound')
const playerTowRound = document.querySelector('#playerTowRound')
// global
const playerOneGlobal = document.querySelector('#playerOneGlobal')
const playerTowGlobal = document.querySelector('#playerTowGlobal')
const imageDe = document.querySelector('#imageDe')
const cssStyleBg = document.querySelector('.custom-bg-color')
// button
const rollDice = document.querySelector('#rollDice')
const hold = document.querySelector('#hold')
const info = document.querySelector('#info')
const roundPlayerOne = 0
const roundPlayerTow = 0
const globalPlayerOne = 0
const globalPlayerTow = 0
let player = 1
let tempOne = []
let tempTow = []
let one = []
let tow = []
const reducer = (a, b) => a + b
const addAndRemove =(point,block ='block',hidden ='hidden')=>{
  point.classList.remove(block)
  point.classList.add(hidden)
}

const roundNumber = (max = 6, min = 1) => {
  return Math.floor(Math.random() * (1 + max - min)) + 1
}

const reset = () => {
  playerOneRound.innerText = roundPlayerOne
  playerTowRound.innerText = roundPlayerTow
  playerOneGlobal.innerText = globalPlayerOne
  playerTowGlobal.innerText = globalPlayerTow
  one = []
  tow = []
  tempOne=[]
  tempTow =[]
  const html = '<img class="transition-opacity duration-200 ease-in-out shadow"  src="./img/4.svg" alt="image-4" width="196px">'
  imageDe.innerHTML = html
  cssStyleBg.classList.add('custom-bg-color-l')
  if (playerTowPoint.className.valueOf().match(/block/)) {
    addAndRemove(playerTowPoint)
    addAndRemove(playerOnPoint,'hidden','block')
  }



}
reset()

const restetRound = () => {
  playerOneRound.innerText = roundPlayerOne
  playerTowRound.innerText = roundPlayerTow
  tempOne = []
  tempTow = []
}

info.addEventListener('click',()=>{
  alert(`Le jeu comprend 2 joueurs sur un seul et m??me ??cran.
Chaque joueur poss??de un score temporaire (ROUND) et un score global (GLOBAL).
?? chaque tour, le joueur a son ROUND initialis?? ?? 0 et peut lancer un d?? autant de fois qu'il le souhaite. Le
r??sultat d???un lancer est ajout?? au ROUND.
Lors de son tour, le joueur peut d??cider ?? tout moment de:
- Cliquer sur l???option ???Hold???, qui permet d???envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l???autre joueur.
- Lancer le d??. S???il obtient un 1, son score ROUND est perdu et c???est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.`)
})
newGame.addEventListener('click', () => {
  reset()
})
rollDice.addEventListener('click', () => {
  const iniRound = roundNumber()

  if (player !== 1) {
    startsPlay(iniRound, playerTowRound, tempTow)
    addAndRemove(playerTowPoint,'hidden','block')
    cssStyleBg.classList.add('custom-bg-color-r')
    if (iniRound === 1) {
      cssStyleBg.classList.remove('custom-bg-color-r')
      addAndRemove(playerTowPoint)
      player = 1
      restetRound()
    }
  } else {
    startsPlay(iniRound, playerOneRound, tempOne)
    cssStyleBg.classList.add('custom-bg-color-l')
    addAndRemove(playerOnPoint,'hidden','block')

    if (iniRound === 1) {
      cssStyleBg.classList.remove('custom-bg-color-l')
      addAndRemove(playerOnPoint)

      player = 0


      restetRound()
    }
  }
})
hold.addEventListener('click', () => {
  if (player !== 1) {
    cssStyleBg.classList.remove('custom-bg-color-r')
    addAndRemove(playerTowPoint)
    if (tempTow != 0){
      tow.push(...tempTow)
      setReducers(playerTowGlobal, tow)
    }


    winAndGameOver(playerTowGlobal, playerTow)

    player = 1
    restetRound()
  } else {
    cssStyleBg.classList.remove('custom-bg-color-l')
    addAndRemove(playerOnPoint)
    if (tempOne !=0){
      one.push(...tempOne)
      setReducers(playerOneGlobal, one)
    }

    winAndGameOver(playerOneGlobal, playerOne)

    player = 0
    restetRound()
  }
})

const winAndGameOver = (players, playerId) => {

  if (players.textContent >= 100) {
    alert(`${playerId.textContent} vous avez gagn??`)
    reset()
  }
}

const startsPlay = (roundNumber, playerRound, arrayValue) => {
  arrayValue.push(roundNumber)

  imageSettings(roundNumber)
  setReducers(playerRound, arrayValue)
}

const setReducers = (playerRound, arrayValue) => {
  playerRound.innerText = arrayValue.reduce(reducer)
}
const imageSettings = (number) => {
  for (const [key, image] of Object.entries(config)) {
    if (number === parseInt(key)) {
      imageDe.innerHTML = `<img class="transition-opacity duration-200 ease-in-out shadow" src="${image}" alt="imgae${-key}" width="196px">`
    }
  }
}
