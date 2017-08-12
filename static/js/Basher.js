const PLAYER_SPEED = 4
const PLAYER_FRICTION = 0.60
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X = 10;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y = 5;

function Basher() {
  this.x = 300
  this.y = 300
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

    var nextX = this.x
    var nextY = this.y

    if (this.goingUp) {
      nextY -= PLAYER_SPEED
    }
    if (this.goingRight) {
      nextX += PLAYER_SPEED
    }
    if (this.goingDown) {
      nextY += PLAYER_SPEED
    }
    if (this.goingLeft) {
      nextX -= PLAYER_SPEED
    }

    var walkingIntoTileIndex = mapHandler.getTileAtPixelCoord(nextX, nextY)
    var walkingIntoTileType = MAP_WALL
    if (walkingIntoTileIndex != undefined) {
      walkingIntoTileType = mapGrid[walkingIntoTileIndex]
    }

    switch (walkingIntoTileType) {
      case MAP_FLOOR:
        this.x = nextX
        this.y = nextY
        break;
      case mapHandler.isTileSoild(walkingIntoTileType):
        console.log('SOLID');
        break;
    }


  }

  this.draw = function () {

    ctx.drawImage(this.img, this.x,this.y, this.img.width * 2,this.img.height *2)
  }
}
