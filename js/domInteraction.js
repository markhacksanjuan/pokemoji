

document.addEventListener('keydown', (event) => {
if(event.key === 'ArrowUp'){  
    moveUp(-1)
}else if(event.key === 'ArrowDown'){
    moveDown(1)
}else if(event.key === 'ArrowRight'){
    moveRight(1)
}else if(event.key === 'ArrowLeft'){
    moveLeft(-1)
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
        }else if (event.target.offsetParent.id === 'arrows'){
            if(event.target.innerHTML === 'Up'){
                moveUp(-1)
                setTimeout(() => {
                    moveUp(0)
                },300)
            }
            if(event.target.innerHTML === 'Down'){
                moveDown(1)
                setTimeout(() => {
                    moveDown(0)
                },300)
            }
            if(event.target.innerHTML === 'Right'){
                moveRight(1)
                setTimeout(() => {
                    moveRight(0)
                },300)
            }
            if(event.target.innerHTML === 'Left'){
                moveLeft(-1)
                setTimeout(() => {
                    moveLeft(0)
                },300)
            }
        }else {
            emojiPlayer = event.target.firstElementChild
            emojiPlayerBattle.img.src = emojiPlayer.src
            emojiPlayerBattle.cure()
            healthPlayerRect.cure()
            let selectedTag = event.target
            selectedTag.remove()
        }
    }else if(event.target.localName === 'img'){
        if(event.target.offsetParent.offsetParent.id === 'weapons'){
            let damage = emojiWeaponArr[emojiWeaponNameArr.indexOf(event.target.getAttribute('emoji-name'))]
            enemy.damage(damage)
            healthEnemyRect.update(damage)
        }else {
            emojiPlayer = event.target
            emojiPlayerBattle.img.src = emojiPlayer.src
        }
    }else if(event.target.innerHTML[3] === 'E' && clickablePokemon){
        clickablePokemon = false
        battle = false
        emojiPlayerBattle.alive = true
        emojiPlayerBattle.life = life
        healthPlayerRect.width = life
        weaponsArr.length = 0
        // startGame()
    }
})