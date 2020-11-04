// RELACIÓN DE IMAGEN EMOJI
const kEnemy = 136 / 129
const enemyW = 100
const enemyH = enemyW / kEnemy
const enemyX = Math.floor(canvas.width *7 / 8) - Math.floor(enemyW/2)
const enemyY = Math.floor(canvas.height / 4) - Math.floor(enemyH/2)

// SELECCION DE ENEMIGO
const minEnemy = 0
const maxEnemy = emojiArr.length
let enemyRandom = Math.floor(Math.random() * (maxEnemy - minEnemy) + minEnemy)
const enemyArr = []
const enemy = new ImageCreation(enemyW, enemyH, enemyX, enemyY, emojiArr[enemyRandom].src)
enemy.name = emojiArr[enemyRandom].name
let healthEnemyRect = new HealthRect (200, 20, canvas.width/3, canvas.height*2 / 15, false)
let healthEnemyStroke = new HealthRect (200, 20, canvas.width/3, canvas.height*2 / 15, true)
const selectEnemy = () => {
        enemyRandom = Math.floor(Math.random() * (maxEnemy - minEnemy) + minEnemy)
        enemy.img.src = emojiArr[enemyRandom].src
        enemy.name = emojiArr[enemyRandom].name
        enemy.alive = true
        enemy.life = life
        enemy.attack = emojiArr[enemyRandom].attack
        healthEnemyRect.width = life
}




