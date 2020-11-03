const emojiWeaponNameArr = emojiWeaponArr.map(item => {
    return item.name
})

const battleAnimation = () => {
    if(!(enemy.alive)){
        console.log(enemy.src)
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
    }
}


const endBattle = () => {
    selectedEnemy = false
    return battle = false
}
const healthDraw = () => {
    healthEnemyRect.drawFill()
    healthEnemyStroke.drawStroke()
    healthPlayerStroke.drawStroke()
    healthPlayerRect.drawFill()
}

const catchEnemy = (_enemy) => {
    console.log(enemy.name)
    console.log(enemy.src)
    const div = document.getElementById('emoji')
    const button = document.createElement('button')
    button.setAttribute('class',"list-group-item list-group-item-action")
    button.setAttribute('type', 'button')
    const img = document.createElement('img')
    img.src = enemy.img.src
    img.setAttribute('emoji-name', enemy.name)
    button.appendChild(img)
    div.appendChild(button)
}