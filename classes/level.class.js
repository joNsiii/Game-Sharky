class Level {
  enemies;
  coin;
  poisonBottle;
  backgrounds;
  level_end_x = 2800;

  /**
   * constructor
   */
  constructor(enemies, backgrounds, coin, poisonBottle) {
    this.enemies = enemies;
    this.backgrounds = backgrounds;
    this.coin = coin;
    this.poisonBottle = poisonBottle;
  }
}
