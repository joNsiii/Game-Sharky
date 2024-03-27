const level1 = new Level(
    [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
        new JellyFish()
    ],
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
        new Coin(1600, 150)
        
    ],
    [
        new PoisonBottle(),
        new PoisonBottle(),
        new PoisonBottle(),
        new PoisonBottle(),
        new PoisonBottle(),
        
    ],
    [
        new Audio('audio/bg-music.mp3'),
        new Audio('audio/boss-music-bg.mp3'),
        new Audio('audio/bottle-collected.mp3'),
        new Audio('audio/bubble-sound.mp3'),
        new Audio('audio/coin-collected.mp3'),
        new Audio('audio/underwater-swim.mp3'),
        new Audio('audio/hit.mp3'),
    ]
)