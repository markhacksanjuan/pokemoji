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
    objectCollisionWith = (player) => {
      return !(this.right() > player.left() || 
              this.bottom() > player.top() ||
              this.left() < player.right() ||
              this.top() < player.bottom()
      )
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
        this.attack = 100
        this.life = 100
        this.defense = 50
        this.alive = true
        this.src = _src
        
        const img = new Image()
        img.addEventListener('load', () => {
            this.img = img
        })
        img.src = this.src
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
              this.top() > obstacle.bottom()
      )
    }
    passed = (obstacle) => {
      return(this.right() === (obstacle.left()))
    }
    damage = (attack) => {
     this.live -= attack.attack   
    }       
}

    class HealthRect {
      constructor(_width, _height, _x, _y, _stroke){
        this.width = _width
        this.height = _height
        this.x = _x
        this.y = _y
        this.stroke = _stroke
      }
      drawFill = () => {
        if(!(this.stroke)){
          ctx.fillStyle = 'red'
          ctx.fillRect(this.x, this.y, this.width, this.height)
        }
      }
      drawStroke = () => {
        if(this.stroke){
          ctx.strokeStyle = 'black'
          ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
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