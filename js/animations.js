const battleAnimation = () => {
    clear()
    if(!(selectedEnemy)){
        selectEnemy()

        selectedEnemy = true
    }
    backgroundBattle.draw()
    enemy.draw()
    healthEnemyRect.drawFill()
    healthEnemyStroke.drawStroke()
    healthPlayerStroke.drawStroke()
    healthPlayerRect.drawFill()
    emojiPlayerBattle.draw()
}
const endBattle = () => {
    return !battle
}