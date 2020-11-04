class Player {
    constructor(_width, _height, _x, _y, img){
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
        this.img = img
        
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
        
    }