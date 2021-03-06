const battleAnimation = () => {
    if(!(enemy.alive)){
        catchEnemy(enemy)
        endBattle()
    }
    if(!(selectedEnemy)){
        selectEnemy()
        selectedEnemy = true
    }else {
        clear()
        backgroundBattle.draw()
        healthDraw()
        enemy.draw()
        emojiPlayerBattle.draw()
        enemyAttack()
    }
}


const endBattle = () => {
    selectedEnemy = false
    return battle = false
}
const healthDraw = () => {
    healthEnemyRect.drawFill()
    healthEnemyStroke.drawStroke()
    healthPlayerRect.drawFill()
    healthPlayerStroke.drawStroke()
}

const catchEnemy = (_enemy) => {
    const div = document.getElementById('emoji')
    const button = document.createElement('button')
    button.id = _enemy.img.id
    button.setAttribute('class',"list-group-item list-group-item-action px-2")
    button.setAttribute('type', 'button')
    button.setAttribute('id', imgEmojiArr.indexOf(_enemy.img))
    const img = document.createElement('img')
    img.src = _enemy.img.src
    img.id = _enemy.img.id
    img.setAttribute('emoji-name', _enemy.name)
    button.appendChild(img)
    div.appendChild(button)
}

const enemyAttack = () => {
    if(Date.now() - dateRightNow >= 1500){
        dateRightNow = Date.now()
        emojiPlayerBattle.damage(enemy)
        healthPlayerRect.update(enemy)
    }
}