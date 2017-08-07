var canvas, ctx
var testTile = document.createElement('img')

var assets = [
  {variable: testTile, src: "placeHolderTile1.png"},
]

window.onload = function () {
  setupCanvas()
  canvas = document.getElementById('gameCanvas')
  ctx = canvas.getContext('2d')

  ctx.webkitImageSmoothingEnabled = false
  ctx.mozImageSmoothingEnabled = false
  ctx.imageSmoothingEnabled = false

  colorRect(0,0, canvas.width,canvas.height, 'black')
  colorText("Loading...", canvas.width/2,canvas.height/2, 'white')

  AssetLoader.loadImages(assets)
}

function setupCanvas() {

}

function startGame() {
  var fps = 30
  setInterval(update, 1000 / fps)

}

function update() {
  draw()
}

function draw() {
  ctx.drawImage(testTile, 80,10, testTile.width*3,testTile.height*3)
}
