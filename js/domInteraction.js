document.addEventListener('keydown', (event) => {
if(event.key === 'ArrowUp'){  
    for(i = 0; i < playerArr.length; i++){
          playerArr[i].speedY -= 1
      }
}else if(event.key === 'ArrowDown'){
    for(i = 0; i < playerArr.length; i++){
    playerArr[i].speedY += 1
    }
}else if(event.key === 'ArrowRight'){
    for(i = 0; i < playerArr.length; i++){
    playerArr[i].speedX += 1
    }
}else if(event.key === 'ArrowLeft'){
    for(i = 0; i < playerArr.length; i++){
    playerArr[i].speedX -= 1
    }
}
})
document.addEventListener('keyup', () => {
    for(i = 0; i < playerArr.length; i++){
    playerArr[i].speedY = 0
    playerArr[i].speedX = 0
    }
})

// -------------------- CLICK ----------------
document.addEventListener('click', (event) => {
    if(event.target.localName === 'button'){
        if(event.target.offsetParent.id === 'weapons'){
            let damage = emojiWeaponArr[emojiWeaponNameArr.indexOf(event.target.firstElementChild.getAttribute('emoji-name'))]
            enemy.damage(damage)
            healthEnemyRect.update(damage)
        }else {
            emojiPlayer = event.target.firstElementChild
            emojiPlayerBattle.img.src = emojiPlayer.src
            emojiPlayerBattle.draw()
        }
    }else if(event.target.localName === 'img'){
        if(event.target.offsetParent.offsetParent.id === 'weapons'){

        }else {
            emojiPlayer = event.target
            emojiPlayerBattle.img.src = emojiPlayer.src
        }
    }
})