
var mapGrid = [
  1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,1,
  1,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,
]
//var mapGrid = []
const MAP_FLOOR = 0
const MAP_WALL = 1
//const MAP_PLAYERSTART = 2

const MAP_W = 32
const MAP_H = 32
const MAP_COLS = 8
const MAP_ROWS = 8

var mapHandler = {
  returnTitleTypeAtColRow: function (col, row) {
    if (col >= 0 && col < MAP_COLS && row >= 0 && row < MAP_ROWS) {
      var mapIndexUnderCord = rowColToArrayIndex(col, row)
      return (mapGrid[mapIndexUnderCord])
    } else {
      return MAP_WALL
    }
  },

  getTileAtPixelCoord: function (x, y) {
    var pixelMapCol = Math.floor(x / MAP_W)
    var pixelMapRow = Math.floor(y / MAP_H)
    var mapIndex = rowColToArrayIndex(pixelMapCol, pixelMapRow)

    if (pixelMapCol >= 0 && pixelMapCol < MAP_COLS && pixelMapRow >= 0 && pixelMapRow < MAP_ROWS) {
      return mapIndex
    }else {
      return undefined
    }
  },

  rowColToArrayIndex: function (col, row) {
    return col + MAP_COLS * row
  },

  draw: function () {
    var index = 0

    var tileDrawX = 0
    var tileDrawY = 0

    for (var row = 0; row < MAP_ROWS; row++) {
      for (var col = 0; col < MAP_COLS; col++) {
        var tile = mapGrid[index]
        var tileImg = AssetLoader.tileImages[tile]

        ctx.drawImage(tileImg, tileDrawX,tileDrawY)
        tileDrawX += MAP_W
        index++
      }
      tileDrawY += MAP_H
      tileDrawX = 0
    }
  }
}
