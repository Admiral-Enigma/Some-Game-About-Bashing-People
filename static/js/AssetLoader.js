function AssetLoader() {

  this.tileImages = []
  this.imgsToLoad = 0

  this.stringToPrint = "Hej med dig"


  this.countLoadedImages = function () {
    this.imgsToLoad--
    console.log('[DEBUG] Images left to load: ');
    console.log(this.imgsToLoad);
    if (this.imgsToLoad == 0) {
      console.log('Starting Game');
      startGame()
    }
  }

  this.loadImage = function (imgVar, src) {
    imgVar.onload = this.countLoadedImages
    imgVar.src = 'assets/'+src
    console.log(this.imgsToLoad);
  }

  this.loadTileImage = function (type, src) {
    this.tileImages[type] = document.createElement('img')
    this.loadImage(this.tileImages[type], src)
  }

  this.loadImages = function (images) {
    this.imgsToLoad = images.length
    console.log(this.imgsToLoad);
    console.log(this.stringToPrint);

    for (var i = 0; i < this.imgsToLoad; i++) {
      if (images[i].variable != undefined) {
        this.loadImage(images[i].variable, images[i].src)
      } else {
        this.loadTileImage(images[i].tileType, images[i].src)
      }
    }
  }
}
