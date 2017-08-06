var canvas, ctx
var assetLoader = new AssetLoader()
var testTile = document.createElement('img')



window.onload = function () {
  canvas = document.getElementById('gameCanvas')
  ctx = canvas.getContext('2d')
  var assets = [
    {variable: testTile, src: "placeHolderTile1.png"}
  ]

  colorRect(0,0, canvas.width,canvas.height, 'black')
  colorText("Loading...", canvas.width/2,canvas.height/2, 'white')

  assetLoader.loadImages(assets)

}

function startGame() {
  var fps = 30
  setInterval(update, 1000 / fps)

}

function update() {
  draw()
  console.log(assetLoader.imgsToLoad);
}

function draw() {
  ctx.drawImage(testTile, 0,0)
}
