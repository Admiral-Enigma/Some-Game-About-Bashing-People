const PLAYER_SPEED = 4
const PLAYER_FRICTION = 0.60
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X = 10;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y = 5;

function Basher() {
  this.x = 30
  this.y = 30
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

    var nextX = 0
    var nextY = 0

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

    nextX = this.x += this.velX
    nextY = this.y += this.velY
    var walkingIntoTileIndex = mapHandler.getTileAtPixelCoord(nextX, nextY)
    var walkingIntoTileType = MAP_WALL
    if (walkingIntoTileIndex != undefined) {
      walkingIntoTileType = mapGrid[walkingIntoTileIndex]
    }

    switch (walkingIntoTileType) {
      case MAP_FLOOR:
        this.x = nextX
        this.y = nextY
        this.velX *= PLAYER_FRICTION
        this.velY *= PLAYER_FRICTION
        break;
      case mapHandler.isTileSoild(walkingIntoTileType):
        console.log('SOLID');
        this.velX = 0
        this.velY = 0
        break;
    }


  }

  this.draw = function () {

    ctx.drawImage(this.img, this.x,this.y, this.img.width * 2,this.img.height *2)
  }
}
