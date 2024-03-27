class Level {
    enemies;
    coin;
    poisonBottle;
    backgrounds;
    level_end_x = 2800;
    audio;

    constructor(enemies, backgrounds, coin, poisonBottle, audio) {
        this.enemies = enemies;
        this.backgrounds = backgrounds;
        this.coin = coin;
        this.poisonBottle = poisonBottle;
        this.audio = audio;
    }
}