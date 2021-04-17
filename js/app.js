
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
// player round
const playerOneRound = document.querySelector('#playerOneRound')
const playerTowRound = document.querySelector('#playerTowRound')
// global
const playerOneGlobal = document.querySelector('#playerOneGlobal')
const playerTowGlobal = document.querySelector('#playerTowGlobal')
const imageDe = document.querySelector('#imageDe')
const cssStyleBg = document.querySelector('.custom-bg-color')

const rollDice = document.querySelector('#rollDice')
const hold = document.querySelector('#hold')
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
  const html = '<img src="./img/4.svg" alt="image-4" width="196px">'
  imageDe.innerHTML = html
  cssStyleBg.classList.add('custom-bg-color-l')
}
reset()
const restetRound = () => {
  playerOneRound.innerText = roundPlayerOne
  playerTowRound.innerText = roundPlayerTow
  tempOne = []
  tempTow = []
}

newGame.addEventListener('click', () => {
  reset()
})
rollDice.addEventListener('click', () => {
  const iniRound = roundNumber()

  if (player !== 1) {
    startsPlay(iniRound, playerTowRound, tempTow)
    cssStyleBg.classList.add('custom-bg-color-r')
    if (iniRound === 1) {
      cssStyleBg.classList.remove('custom-bg-color-r')
      player = 1


      restetRound()
    }
  } else {
    startsPlay(iniRound, playerOneRound, tempOne)
    cssStyleBg.classList.add('custom-bg-color-l')

    if (iniRound === 1) {
      cssStyleBg.classList.remove('custom-bg-color-l')
      player = 0


      restetRound()
    }
  }
})
hold.addEventListener('click', () => {
  if (player !== 1) {
    cssStyleBg.classList.remove('custom-bg-color-r')
    tow.push(...tempTow)
    setReducers(playerTowGlobal, tow)

    winAndGameOver(playerTowGlobal, playerTow)

    player = 1
    restetRound()
  } else {
    cssStyleBg.classList.remove('custom-bg-color-l')
    one.push(...tempOne)
    setReducers(playerOneGlobal, one)
    winAndGameOver(playerOneGlobal, playerOne)

    player = 0
    restetRound()
  }
})
const winAndGameOver = (players, playerId) => {

  if (players.textContent >= 100) {
    alert(`${playerId.textContent} vous avez gagné`)
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
