class Coin extends DrawableObject {
  pos_x = 350 + Math.random() * 1000;
  pos_y = Math.random() * 400;
  width = 40;
  height = 40;
  SPINNING_COINS = [
    "img/sharkie-images/4.Marcadores/1. Coins/1.png",
    "img/sharkie-images/4.Marcadores/1. Coins/2.png",
    "img/sharkie-images/4.Marcadores/1. Coins/3.png",
    "img/sharkie-images/4.Marcadores/1. Coins/4.png",
  ];

  /**
   * constructor
   */
  constructor(x, y) {
    super().loadImage("img/sharkie-images/4.Marcadores/1. Coins/1.png");
    this.pos_x = x;
    this.pos_y = y;
    this.loadImages(this.SPINNING_COINS);
    this.swimmingCoins();
  }

  /**
   * Coin floating animation
   */
  swimmingCoins() {
    setInterval(() => {
      this.playAnimation(this.SPINNING_COINS);
    }, 120);
  }
}
