const canvas = document.getElementById('my-canvas')
const kCanvas = 812 / 375
canvas.width = 500
canvas.height = Math.floor(canvas.width / kCanvas)

const ctx = canvas.getContext('2d')
let dateRightNow = Date.now()
const life = 200
let battle = false
let selectedEnemy = false
const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
let playerRandom = Math.floor(Math.random() * (emojiArr.length))
let emojiPlayer

const emojiWeaponNameArr = emojiWeaponArr.map(item => {
    return item.name
})
let clickablePokemon = false

const kLink = 84 / 89
const linkW = 30
const linkH = linkW / kLink
const linkX = Math.floor(canvas.width / 2) - Math.floor(linkW/2)
const linkY = Math.floor(canvas.height / 2) - Math.floor(linkH/2)

const kEmoji = 136 / 129
const emojiW = 100
const emojiH = emojiW / kEmoji
const emojiX = Math.floor(canvas.width / 7) - Math.floor(emojiW/2)
const emojiY = Math.floor(canvas.height *2 / 3) - Math.floor(emojiH/2)

const minEnemy = 0
const maxEnemy = emojiArr.length
// RELACIÓN DE IMAGEN EMOJI
const kEnemy = 136 / 129
const enemyW = 100
const enemyH = enemyW / kEnemy
const enemyX = Math.floor(canvas.width *7 / 8) - Math.floor(enemyW/2)
const enemyY = Math.floor(canvas.height / 4) - Math.floor(enemyH/2)

