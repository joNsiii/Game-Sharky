class CoinBar extends DrawableObject {
  pos_x = 20;
  pos_y = 30;
  width = 200;
  height = 60;
  world;
  COIN_BAR = [
    "img/sharkie-images/4.Marcadores/green/Coin/coins_0.png",
    "img/sharkie-images/4.Marcadores/green/Coin/coins_20.png",
    "img/sharkie-images/4.Marcadores/green/Coin/coins_40.png",
    "img/sharkie-images/4.Marcadores/green/Coin/coins_60.png",
    "img/sharkie-images/4.Marcadores/green/Coin/coins_80.png",
    "img/sharkie-images/4.Marcadores/green/Coin/coins_100.png",
  ];

  /**
   * constructor
   */
  constructor() {
    super().loadImage("img/sharkie-images/4.Marcadores/green/Coin/coins_0.png");
    this.loadImages(this.COIN_BAR);
    this.updateStatusBar();
  }

  /**
   * Updates the coin statusbar
   */
  updateStatusBar() {
    setInterval(() => {
      if (this.coins == 0) {
        return this.loadImage(this.COIN_BAR[0]);
      } else if (this.coins == 3) {
        return this.loadImage(this.COIN_BAR[1]);
      } else if (this.coins == 6) {
        return this.loadImage(this.COIN_BAR[2]);
      } else if (this.coins == 9) {
        return this.loadImage(this.COIN_BAR[3]);
      } else if (this.coins == 12) {
        return this.loadImage(this.COIN_BAR[4]);
      } else if (this.coins == 15) {
        return this.loadImage(this.COIN_BAR[5]);
      }
    }, 100);
  }
}
