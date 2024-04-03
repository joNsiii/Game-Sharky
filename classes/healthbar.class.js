class Healthbar extends DrawableObject {
  pos_x = 20;
  pos_y = -10;
  width = 200;
  height = 60;

  /**
   * constructor
   */
  constructor() {
    super().loadImage("img/sharkie-images/4.Marcadores/green/Life/100_  copia 2.png");
    this.updateHealthBar();
  }

  /**
   * updates the health statusbar based on how much life sharky have
   */
  updateHealthBar() {
    setInterval(() => {
      if (world.sharky.health <= 80 && world.sharky.health >= 60) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/80_  copia 3.png");
      } else if (world.sharky.health <= 60 && world.sharky.health >= 40) return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/60_  copia 3.png");
      if (world.sharky.health <= 40 && world.sharky.health >= 20) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/40_  copia 3.png");
      } else if (world.sharky.health <= 20 && world.sharky.health > 0) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/20_ copia 4.png");
      } else if (world.sharky.health == 0) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/0_  copia 3.png");
      }
    }, 1000 / 60);
  }
}
