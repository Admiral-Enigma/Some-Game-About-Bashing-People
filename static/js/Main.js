var canvas, ctx
var testTile = document.createElement('img')
var player = new Basher()

var assets = [
  {variable: testTile, src: "placeHolderTile1.png"},
  {tileType: MAP_FLOOR, src: "placeholderart2.png"},
  {tileType: MAP_WALL, src: "placeHolderTile1.png"}
]

window.onload = function () {
  canvas = document.getElementById('gameCanvas')
  ctx = canvas.getContext('2d')

  ctx.webkitImageSmoothingEnabled = false
  ctx.mozImageSmoothingEnabled = false
  ctx.imageSmoothingEnabled = false

  colorRect(0,0, canvas.width,canvas.height, 'black')
  colorText("Loading...", canvas.width/2,canvas.height/2, 'white')

  AssetLoader.loadImages(assets)
  Input.initInput()

  player.init(testTile)

}

function startGame() {
  var fps = 30
  setInterval(update, 1000 / fps)

}

function update() {
  draw()
  player.move()
}

function draw() {
  colorRect(0,0, canvas.width,canvas.height, 'black')
  mapHandler.draw()
  colorText(Input.mouseX,Input.mouseY, Input.mouseX+":"+Input.mouseY, "yellow")
  player.draw()
}
