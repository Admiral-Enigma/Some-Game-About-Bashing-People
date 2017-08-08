var canvas, ctx
var playerTile = document.createElement('img')
var player = new Basher()

var assets = [
  {variable: playerTile, src: "placeHolderPlayer.png"},
  {tileType: MAP_FLOOR, src: "placeHolderTile2.png"},
  {tileType: MAP_WALL, src: "placeHolderTile1.png"},
  {tileType: MAP_ENEMY_SPAWN, src: "placeHolderTile3.png"}

]
MAP_ENEMY_SPAWN

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

  player.init(playerTile)

}

function startGame() {
  var fps = 30
  setInterval(update, 1000 / fps)

}

function update() {
  draw()
  camera.instantFollow(player)

  player.move()
}

function draw() {
  colorRect(0,0, canvas.width,canvas.height, 'black')
  colorText(Input.mouseX,Input.mouseY, Math.floor(Input.mouseX)+":"+Math.floor(Input.mouseY), "yellow")

  ctx.save()
  ctx.translate(-camera.camPanX,-camera.camPanY)
  mapHandler.draw()
  player.draw()

  ctx.restore()
}
