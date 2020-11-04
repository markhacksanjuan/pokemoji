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
let emojiPlayer = document.querySelector('button img')

const emojiWeaponNameArr = emojiWeaponArr.map(item => {
    return item.name
})
let clickablePokemon = false
