

// SELECCION DE ENEMIGO

// enemy.name = emojiArr[enemyRandom].name
let healthEnemyRect = new HealthRect (200, 20, canvas.width/3, canvas.height*2 / 15, false)
let healthEnemyStroke = new HealthRect (200, 20, canvas.width/3, canvas.height*2 / 15, true)

const selectEnemy = () => {
        enemyRandom = Math.floor(Math.random() * (maxEnemy - minEnemy) + minEnemy)
        console.log(enemyRandom)
        enemy = new ImageCreation(enemyW, enemyH, enemyX, enemyY, imgEmojiArr[enemyRandom])
        enemy.alive = true
        enemy.life = life
        enemy.attack = emojiArr[enemyRandom].attack
        healthEnemyRect.width = life
}




