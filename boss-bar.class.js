class Bossbar extends DrawableObject {
  pos_x = 500;
  pos_y = 50;
  width = 200;
  height = 60;
  endBoss;

  /**
   * constructor
   */
  constructor() {
    super().loadImage("img/sharkie-images/4.Marcadores/green/Life/100_  copia 2.png");
    this.checkBossSpawn();
  }

  checkBossSpawn() {
    setInterval(() => {
      this.updateHealthBar();
      if (world.sharky.bossObject) {
        this.endBoss = world.level.enemies[10].enemieHealth;
      }
    }, 500);
  }

  updateHealthBar() {
    setInterval(() => {
      if (this.endBoss <= 400 && this.endBoss >= 300) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/80_  copia 3.png");
      } else if (this.endBoss <= 300 && this.endBoss >= 200) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/60_  copia 3.png");
      } else if (this.endBoss <= 200 && this.endBoss >= 100) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/40_  copia 3.png");
      } else if (this.endBoss <= 100 && this.endBoss > 0) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/20_ copia 4.png");
      } else if (this.endBoss <= 0) {
        return this.loadImage("img/sharkie-images/4.Marcadores/green/Life/0_  copia 3.png");
      }
    }, 1000 / 60);
  }
}
