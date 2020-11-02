const canvas = document.getElementById('my-canvas')
canvas.width = 578
canvas.height = 358
const ctx = canvas.getContext('2d')
let dateRightNow = Date.now()
let battle = false
let selectedEnemy = false
const clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
let emojiPlayer = document.querySelector('button img')
