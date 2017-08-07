const PLAYER_SPEED = 4
const PLAYER_FRICTION = 0.60

function Basher() {
  this.x = 2
  this.y = 2
  this.velX = 0
  this.velY = 0

  this.img

  this.goingUp = false
  this.goingRight = false
  this.goingDown = false
  this.goingLeft = false

  this.goingUpKey
  this.goingRightKey
  this.goingDownKey
  this.goingLeftKey

  this.init = function (img) {
    this.img = img
  }

  this.setupInput = function (upKey, downKey, rightKey, leftKey) {
    this.goingUpKey = upKey
    this.goingRightKey = rightKey
    this.goingDownKey = downKey
    this.goingLeftKey = leftKey
  }

  this.move = function () {
    this.x += this.velX
    this.y += this.velY
    this.velX *= PLAYER_FRICTION
    this.velY *= PLAYER_FRICTION

    if (this.goingUp) {
      this.velY = -PLAYER_SPEED
    }
    if (this.goingRight) {
      this.velX = PLAYER_SPEED
    }
    if (this.goingDown) {
      this.velY = PLAYER_SPEED
    }
    if (this.goingLeft) {
      this.velX = -PLAYER_SPEED
    }

  }

  this.draw = function () {

    ctx.drawImage(this.img, this.x,this.y, this.img.width * 2,this.img.height *2)
  }
}
