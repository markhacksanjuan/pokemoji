// --------------------- MOVIMIENTOS ---------------------
const newPosAll = () => {
    for(i = 0; i < playerArr.length; i++){
        playerArr[i].newPos()
    }
  }
  const goUp1 = () => {
    if(linkUp0.top() > 0){
      
      newPosAll()
      background.draw()
      linkUp1.draw()
    }
  }
  const goUp2 = () => {
    if(linkUp0.top() > 0){
      newPosAll()
      background.draw()
      linkUp2.draw()
    }
  }
  const goDown1 = () => {
    if(linkDown0.bottom() < canvas.height){
      newPosAll()
      background.draw()
      linkDown1.draw()
    }
  }
  const goDown2 = () => {
    if(linkDown0.bottom() < canvas.height){
      newPosAll()
      background.draw()
      linkDown2.draw()
    }
  }
  const goLeft1 = () => {
    if(linkLeft0.left() > 0){
      newPosAll()
      background.draw()
      linkLeft1.draw()
    }
  }
  const goLeft2 = () => {
    if(linkLeft0.left() > 0){
      newPosAll()
      background.draw()
      linkLeft2.draw()
    }
  }
  const goRight1 = () => {
    if(linkRight0.right() < canvas.width){
      newPosAll()
      background.draw()
      linkRight1.draw()
    }

  }
  const goRight2 = () => {
    if(linkRight0.right() < canvas.width){
      newPosAll()
      background.draw()
      linkRight2.draw()
    }
  }