
const createPlayerTag = () => {
    
    const div = document.getElementById('emoji')
    const button = document.createElement('button')
    button.setAttribute('class',"list-group-item list-group-item-action")
    button.setAttribute('type', 'button')
    button.setAttribute('id', playerRandom)
    const img = document.createElement('img')
    setTimeout(() => {
        img.src = emojiArr[playerRandom].src
        img.setAttribute('emoji-name', emojiArr[playerRandom].name)
        button.appendChild(img)
        div.appendChild(button)
    },200)
}



const healthPlayerRect = new HealthRect (200, 20, canvas.width/3, canvas.height*12/ 15, false)
const healthPlayerStroke = new HealthRect (200, 20, canvas.width/3, canvas.height*12 / 15, true)