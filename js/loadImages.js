const imgEmojiArr = []
const imgWeaponArr = []
const playerArr = []

const backgroundImg = new Image()
backgroundImg.src = './images/background.jpg'

const linkUp0Img = new Image()
linkUp0Img.src = './images/player/link-up-0.png'
const linkUp1Img = new Image()
linkUp1Img.src = './images/player/link-up-1.png'
const linkUp2Img = new Image()
linkUp2Img.src = './images/player/link-up-2.png'
const linkDown0Img = new Image()
linkDown0Img.src = './images/player/link-down-0.png'
const linkDown1Img = new Image()
linkDown1Img.src = './images/player/link-down-1.png'
const linkDown2Img = new Image()
linkDown2Img.src = './images/player/link-down-2.png'
const linkLeft0Img = new Image()
linkLeft0Img.src = './images/player/link-left-0.png'
const linkLeft1Img = new Image()
linkLeft1Img.src = './images/player/link-left-1.png'
const linkLeft2Img = new Image()
linkLeft2Img.src = './images/player/link-left-2.png'
const linkRight0Img = new Image()
linkRight0Img.src = './images/player/link-right-0.png'
const linkRight1Img = new Image()
linkRight1Img.src = './images/player/link-right-1.png'
const linkRight2Img = new Image()
linkRight2Img.src = './images/player/link-right-2.png'



const playerSrcArr = playerArr.map(item => {
    return item.src
})




let backgound, linkUp0, linkUp1, linkUp2, linkDown0, linkDown1, linkDown2
let linkLeft0, linkLeft1, linkLeft2, linkRight0, linkRight1, linkRight2
let enemy
let emojiPlayerBattle



const emojiPlayerBattleImg = new Image()
emojiPlayerBattleImg.src = emojiArr[playerRandom].src



const loadImage = () => {

    emojiArr.forEach(emoji => {
        let imgEmoji = new Image()
        imgEmoji.src = emoji.src
        imgEmojiArr.push(imgEmoji)
    })
    emojiWeaponArr.forEach(emoji => {
        let imgEmoji = new Image()
        imgEmoji.src = emoji.src
        imgWeaponArr.push(imgEmoji)
    })

    background = new ImageCreation(canvas.width, canvas.height, 0, 0, backgroundImg)
    linkUp0 = new Player(linkW, linkH, linkX, linkY, linkUp0Img)
    linkUp1 = new Player(linkW, linkH, linkX, linkY, linkUp1Img)
    linkUp2 = new Player(linkW, linkH, linkX, linkY, linkUp2Img)
    linkDown0 = new Player(linkW, linkH, linkX, linkY, linkDown0Img)
    linkDown1 = new Player(linkW, linkH, linkX, linkY, linkDown1Img)
    linkDown2 = new Player(linkW, linkH, linkX, linkY, linkDown2Img)
    linkLeft0 = new Player(linkW, linkH, linkX, linkY, linkLeft0Img)
    linkLeft1 = new Player(linkW, linkH, linkX, linkY, linkLeft1Img)
    linkLeft2 = new Player(linkW, linkH, linkX, linkY, linkLeft2Img)
    linkRight0 = new Player(linkW, linkH, linkX, linkY, linkRight0Img)
    linkRight1 = new Player(linkW, linkH, linkX, linkY, linkRight1Img)
    linkRight2 = new Player(linkW, linkH, linkX, linkY, linkRight2Img)
    playerArr.push(linkUp0, linkUp1, linkUp2, linkDown0, linkDown1, linkDown2)
    playerArr.push(linkLeft0, linkLeft1, linkLeft2, linkRight0, linkRight1, linkRight2)
    

let enemyRandom = Math.floor(Math.random() * (maxEnemy - minEnemy) + minEnemy)
const enemyArr = []
// const enemy = new ImageCreation(enemyW, enemyH, enemyX, enemyY, emojiArr[enemyRandom].src)
enemy = new ImageCreation(emojiW, emojiH, emojiX, emojiY, imgEmojiArr[enemyRandom])
    
emojiPlayerBattle = new ImageCreation(emojiW, emojiH, emojiX, emojiY, emojiPlayerBattleImg)

    
    
}