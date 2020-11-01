window.onload = () => {
    const canvas = document.getElementById('my-canvas')
    canvas.width = 578
    canvas.height = 358
    const ctx = canvas.getContext('2d')
  
  
      // -------------------- CLASS ---------------

      class BackgroundColor {
        constructor(_width, _height, _x, _y, _color){
          this.width = _width
          this.height = _height
          this.x = _x
          this.y = _y
          this.color = _color
        }
        draw = () => {
          ctx.fillStyle = this.color
          ctx.fillRect(this.x, this.y, this.width, this.height)
        }
        right = () => {
          return this.x + this.width
        }
        left = () => {
          return this.x
        }
        top = () => {
          return this.y
        }
        bottom = () => {
          return this.y + this.height
        }

      } 

    class ImageCreation {
      constructor(_width, _height, _x, _y, _src){
        this.width = _width
        this.height = _height
        this.x = _x
          this.y = _y
          this.speedX = 0
          this.speedY = 0
          this.margin = 15
          this.points = 0
          
          const img = new Image()
          img.addEventListener('load', () => {
              this.img = img
          })
          img.src = _src
      }
      draw = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
      newPos = () => {
      this.y += this.speedY
      this.x += this.speedX
      }
      hitLimits = (canvas) => {
          if(this.y + this.height > (canvas - 2)){
              this.speedY = 0
              this.gravity = 0
              return true
          }
          return false
      }
      right = () => {
        return this.x + this.width
      }
      left = () => {
        return this.x
      }
      top = () => {
        return this.y
      }
      bottom = () => {
        return this.y + this.height
      }
      collisionWith = (obstacle) => {
        return !(this.right() < obstacle.left() || 
                this.bottom() < obstacle.top() ||
                this.left() > obstacle.right() ||
                this.top() > obstacle.left()
        )
      }
      passed = (obstacle) => {
        return(this.right() === (obstacle.left()))
      }
          
      }
      
      // --------------------- CREACIÓN DE OBJETOS ----------------------
      // CREACIÓN DEL FONDO      
      const background = new ImageCreation(canvas.width, canvas.height, 0, 0, './images/background.jpg')

      // CREACIÓN DE LA CASA
      const house = new BackgroundColor(198, 132, 50, 125, 'white')
      
  
      // RELACION DE IMAGEN LINK DADA LA ANCHURA
      const kLink = 84 / 89
      const linkW = 30
      const linkH = linkW / kLink
      const linkX = Math.floor(canvas.width / 2) - Math.floor(linkW/2)
      const linkY = Math.floor(canvas.height / 2) - Math.floor(linkH/2)
      const playerArr = []
      //  CREACIÓN DEL JUGADOR LINK UP
      const linkUp0 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-up-0.png')
      const linkUp1 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-up-1.png')
      const linkUp2 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-up-2.png')
      //  CREACIÓN DEL JUGADOR LINK DOWN
      const linkDown0 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-down-0.png')
      const linkDown1 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-down-1.png')
      const linkDown2 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-down-2.png')

      //  CREACIÓN DEL JUGADOR LINK LEFT
      const linkLeft0 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-left-0.png')
      const linkLeft1 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-left-1.png')
      const linkLeft2 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-left-2.png')
      //  CREACIÓN DEL JUGADOR LINK RIGHT
      const linkRight0 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-right-0.png')
      const linkRight1 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-right-1.png')
      const linkRight2 = new ImageCreation(linkW, linkH, linkX, linkY, './images/player/link-right-2.png')
      playerArr.push(linkUp0, linkUp1, linkUp2, linkDown0, linkDown1, linkDown2)
      playerArr.push(linkLeft0, linkLeft1, linkLeft2, linkRight0, linkRight1, linkRight2)

                
      // --------------------- MOVIMIENTOS ---------------------
      const newPosAll = () => {
        for(i = 0; i < playerArr.length; i++){
          playerArr[i].newPos()
        }
      }
      const goUp = () => {
        newPosAll()
        background.draw()
        linkUp1.draw()
        background.draw()
        linkUp2.draw()
        linkUp0.draw()
      }
      const goDown = () => {
        newPosAll()
        background.draw()
        linkDown1.draw()
        background.draw()
        linkDown2.draw()
        linkDown0.draw()
      }
      const goLeft = () => {
        newPosAll()
        background.draw()
        linkLeft1.draw()
        background.draw()
        linkLeft2.draw()
        linkLeft0.draw()
      }
      const goRight = () => {
        newPosAll()
        background.draw()
        linkRight1.draw()
        background.draw()
        linkRight2.draw()
        linkRight0.draw()
      }

      //---------------------------------- JUEGO -----------------------------------
      
      
      // ------------------------- INICIACIÓN DEL JUEGO
      const startGame = () => {
        background.draw()
        linkUp0.draw()
        updateGameArea()
      }
      
      
      // -------------- GENERACIÓN DEL LOOP DEL JUEGO
      const updateGameArea = () => {
        background.draw()
        linkDown0.draw()
        if(linkUp0.speedY < 0){
          goUp()
        }else if(linkDown0.speedY > 0){
          goDown()
        }else if(linkLeft0.speedX < 0){
          goLeft()
        }else if(linkRight0.speedX > 0){
          goRight()
        }

            
        requestAnimationFrame(updateGameArea)
      }
          
          // ------------ FIN DEL JUEGO
    // const checkGameOver = () => {
    //   const collision = obstaclesArr.some((obstacle) => {
    //     return skate.collisionWith(obstacle)
    //   })
    //   if(collision){
    //     gameOver()
    //     return true
    //   }
    // }
          
    const gameOver = () => {
      const backgroundGameOver = new BackgroundColor(canvas.width, canvas.height, 0, 0, 'black')
      backgroundGameOver.draw()
      const gameOverText = 'Sorry dude... it\'s over! '
      writeText('red', '50px sans-serif', canvas.width/2, canvas.height/3, gameOverText)
      
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
    //     console.log(skate.points)
    //     console.log(skateDown.points)
    //     console.log(skateUp.points)
    //   }
    // }
    const writeText = (_color, _font, _x, _y, _text) => {
      ctx.font = _font
      ctx.fillStyle = _color
      ctx.textAlign = 'center'
      ctx.fillText(_text, _x, _y)
    }
          
          
          // ------------- KEYBOARD ------------------
          
  //   document.getElementById("start-game").onclick = () => {
    //     startGame()
    //   };
    document.getElementById("start-game").addEventListener('click', () => {
      startGame()
    })
    document.getElementById("my-canvas").addEventListener('click', () => {

    })
            
            
            
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
      console.log(linkUp0.y)
    })
              
              
  };  