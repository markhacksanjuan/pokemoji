// RELACION DE IMAGEN LINK DADA LA ANCHURA
const kLink = 84 / 89
const linkW = 30
const linkH = linkW / kLink
const linkX = Math.floor(canvas.width / 2) - Math.floor(linkW/2)
const linkY = Math.floor(canvas.height / 2) - Math.floor(linkH/2)
const playerArr = []
//  CREACIÓN DEL JUGADOR LINK UP

const linkUp0 = new Player(linkW, linkH, linkX, linkY, './images/player/link-up-0.png')
const linkUp1 = new Player(linkW, linkH, linkX, linkY, './images/player/link-up-1.png')
const linkUp2 = new Player(linkW, linkH, linkX, linkY, './images/player/link-up-2.png')
//  CREACIÓN DEL JUGADOR LINK DOWN
const linkDown0 = new Player(linkW, linkH, linkX, linkY, './images/player/link-down-0.png')
const linkDown1 = new Player(linkW, linkH, linkX, linkY, './images/player/link-down-1.png')
const linkDown2 = new Player(linkW, linkH, linkX, linkY, './images/player/link-down-2.png')

//  CREACIÓN DEL JUGADOR LINK LEFT
const linkLeft0 = new Player(linkW, linkH, linkX, linkY, './images/player/link-left-0.png')
const linkLeft1 = new Player(linkW, linkH, linkX, linkY, './images/player/link-left-1.png')
const linkLeft2 = new Player(linkW, linkH, linkX, linkY, './images/player/link-left-2.png')
//  CREACIÓN DEL JUGADOR LINK RIGHT
const linkRight0 = new Player(linkW, linkH, linkX, linkY, './images/player/link-right-0.png')
const linkRight1 = new Player(linkW, linkH, linkX, linkY, './images/player/link-right-1.png')
const linkRight2 = new Player(linkW, linkH, linkX, linkY, './images/player/link-right-2.png')
playerArr.push(linkUp0, linkUp1, linkUp2, linkDown0, linkDown1, linkDown2)
playerArr.push(linkLeft0, linkLeft1, linkLeft2, linkRight0, linkRight1, linkRight2)
const playerSrcArr = playerArr.map(item => {
    return item.src
})
console.log(playerArr[0])

// RELACIÓN DE IMAGEN EMOJI
const kEmoji = 136 / 129
const emojiW = 136
const emojiH = emojiW / kEmoji
const emojiX = Math.floor(canvas.width / 7) - Math.floor(emojiW/2)
const emojiY = Math.floor(canvas.height *2 / 3) - Math.floor(emojiH/2)
let emojiPlayerBattle = new ImageCreation(emojiW, emojiH, emojiX, emojiY, emojiPlayer.src)

const healthPlayerStroke = new HealthRect (200, 20, canvas.width/3, canvas.height*12 / 15, true)
const healthPlayerRect = new HealthRect (200, 20, canvas.width/3, canvas.height*12/ 15, false)