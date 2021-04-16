const config ={

        "1": "img/1.svg",
        "2": "img/2.svg",
        "3": "img/3.svg",
        "4": "img/4.svg",
        "5": "img/5.svg",
        "6": "img/6.svg"
}



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
const imageDe = document.querySelector('#imageDe')

const rollDice = document.querySelector('#rollDice')
const hold = document.querySelector('#hold')
let roundPlayerOne =0
let roundPlayerTow = 0
let globalPlayerOne =0
let globalPlayerTow = 0
let player =1
let one =[]
let tow =[]
const reducer =(a, b)=> a+b

const roundNumber = (max =6, min =1) => {
    return Math.floor(Math.random() * (1 + max - min)) + 1
};

const reset = ()=>{
    playerOneRound.innerText = roundPlayerOne
    playerTowRound.innerText = roundPlayerTow
    playerOneGlobal.innerText = globalPlayerOne
    playerTowGlobal.innerText = globalPlayerTow
    one =[]
    tow =[]
    let html =`<img src="img/4.svg" alt="image-4" width="196px">`
    imageDe.innerHTML = html
}
reset()

newGame.addEventListener('click', ()=>{
    reset()
})
rollDice.addEventListener('click',()=>{
    let iniRound = roundNumber()


    if (player != 1) {
        startsPlay(iniRound, playerOne, playerTowRound, tow)

        if (iniRound == 1) {

            player = 1
        }

    } else {
        startsPlay(iniRound, playerTow, playerOneRound, one)

        if (iniRound == 1) {

            player = 0

        }

    }


    console.log(player)



})
hold.addEventListener()

const startsPlay = (roundNumber,player,playerRound,number )=>{
    let id =player
    number.push(roundNumber)

    imageSettings(roundNumber)
    playerRound.innerText = number.reduce(reducer)
}

const imageSettings =(number)=>{
    for (const [key, image] of Object.entries(config) ) {
        if (number == key){
            imageDe.innerHTML= `<img src="${image}" alt="imgae${-key}" width="196px">`
        }

    }

}