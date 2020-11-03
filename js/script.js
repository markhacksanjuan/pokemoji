window.onload = () => {
      //---------------------------------- JUEGO -----------------------------------
      
      
      // ------------------------- INICIACIÓN DEL JUEGO
      const startGame = () => {
        background.draw()
        linkUp0.draw()
        updateGameArea()
      }
      
      
      // -------------- GENERACIÓN DEL LOOP DEL JUEGO
      const updateGameArea = () => {
        if(!(battle)){
          background.draw()
          linkDown0.draw()
          if(linkUp0.speedY < 0){
            if(linkUp0.y % 7 === 0){
              goUp1()
            }else {
              goUp2()
            }
          }else if(linkDown0.speedY > 0){
            if(linkDown0.y % 7 === 0){
              goDown1()
            }else {
              goDown2()
            }
          }else if(linkLeft0.speedX < 0){
            if(linkLeft0.x % 5 === 0){
              goLeft1()
            }else {
              goLeft2()
            }
          }else if(linkRight0.speedX > 0){
            if(linkRight0.x % 5 === 0){
              goRight1()
            }else {
              goRight2()
            }
          }
          checkCollision()
          createBattle()
        }else {
          battleAnimation()
        }
        
        requestAnimationFrame(updateGameArea)
      }
          

          // ------------ FIN DEL JUEGO
    const checkCollision = () => {
      const collision = playerArr.some((player) => {
        return house.objectCollisionWith(player)
      })
      if(collision){
        console.log('collision')
        for(i = 0; i < playerArr.length; i++){
          playerArr[i].speedY = 0
          playerArr[i].speedX = 0
        }
      }
    }
          
    const gameOver = () => {
      const backgroundGameOver = new BackgroundColor(canvas.width, canvas.height, 0, 0, 'black')
      backgroundGameOver.draw()
      const gameOverText = 'Sorry dude... it\'s over! '
      writeText('red', '50px sans-serif', canvas.width/2, canvas.height/3, gameOverText)
      
    }

    // --------------- GENERACION DE BATALLAS CADA X SEGUNDOS ------------
    let counter = 0
    const createBattle = () => {
      counter++
      if(counter % 200 === 0){
          if(!(battle)){
            battle = true
          }
      }
  }
          
          // ------------- PUNTUACIÓN ---------------
    // const checkPoints = () => {
    //   const points = obstaclesArr.some((obstacle) => {
    //     return skate.passed(obstacle) || skateDown.passed(obstacle) || skateUp.passed(obstacle)
    //   })
    //   if(points){
    //     skateDown.points++
    //     skateUp.points++
    //     skate.points++
    //   }
    // }
    const writeText = (_color, _font, _x, _y, _text) => {
      ctx.font = _font
      ctx.fillStyle = _color
      ctx.textAlign = 'center'
      ctx.fillText(_text, _x, _y)
    }



    // ---------------------- ANIMACION BATALLA -----------------------------


        startGame()
              
              
  };  