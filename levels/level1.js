let level1;


/**
 * Initalizing level 1
 */
function initLevel() {
  level1 = new Level(
    [new PufferFish(), new PufferFish(), new PufferFish(), new PufferFish(), new PufferFish(), new JellyFish(), new JellyFish(), new JellyFish(), new JellyFish(), new JellyFish()],
    new Background(),
    [
      new Coin(400, 250),
      new Coin(500, 150),
      new Coin(600, 250),
      new Coin(500, 350),
      new Coin(500, 250),
      new Coin(1000, 330),
      new Coin(1100, 230),
      new Coin(1200, 330),
      new Coin(1100, 430),
      new Coin(1100, 330),
      new Coin(1500, 150),
      new Coin(1600, 50),
      new Coin(1700, 150),
      new Coin(1600, 250),
      new Coin(1600, 150),
    ],
    [new PoisonBottle(), new PoisonBottle(), new PoisonBottle(), new PoisonBottle(), new PoisonBottle()],

  );
}
