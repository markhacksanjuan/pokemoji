// RELACIÓN DE IMAGEN EMOJI
const kEnemy = 136 / 129
const enemyW = 136
const enemyH = enemyW / kEnemy
const enemyX = Math.floor(canvas.width *5 / 6) - Math.floor(enemyW/2)
const enemyY = Math.floor(canvas.height / 5) - Math.floor(enemyH/2)

// SELECCION DE ENEMIGO
const minEnemy = 0
const maxEnemy = emojiArr.length
let enemyRandom = Math.floor(Math.random() * (maxEnemy - minEnemy) + minEnemy)
let enemy = new ImageCreation(enemyW, enemyH, enemyX, enemyY, emojiArr[enemyRandom].src)
const selectEnemy = () => {
    if(Date.now() - dateRightNow >= 2000){
        dateRightNow = Date.now()
        enemyRandom = Math.floor(Math.random() * (maxEnemy - minEnemy) + minEnemy)
        enemy.img.src = emojiArr[enemyRandom].src
    }
}
let healthEnemyRect = new HealthRect (200, 20, canvas.width/3, canvas.height*2 / 15, false)
let healthEnemyStroke = new HealthRect (200, 20, canvas.width/3, canvas.height*2 / 15, true)




