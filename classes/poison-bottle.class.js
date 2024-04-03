class PoisonBottle extends DrawableObject {
    pos_x = 350 + Math.random() * 1000;
    pos_y = Math.random() * 400;
    width = 50;
    height = 50;
    POISON_BOTTLES = [
        'img/sharkie-images/4.Marcadores/Posión/Animada/1.png',
        'img/sharkie-images/4.Marcadores/Posión/Animada/2.png',
        'img/sharkie-images/4.Marcadores/Posión/Animada/3.png',
        'img/sharkie-images/4.Marcadores/Posión/Animada/4.png',
        'img/sharkie-images/4.Marcadores/Posión/Animada/5.png',
        'img/sharkie-images/4.Marcadores/Posión/Animada/6.png',
        'img/sharkie-images/4.Marcadores/Posión/Animada/7.png',
        'img/sharkie-images/4.Marcadores/Posión/Animada/8.png'
    ];

    constructor() {
        super().loadImage('img/sharkie-images/4.Marcadores/Posión/Dark - Left.png');
        this.loadImages(this.POISON_BOTTLES);
        this.animatedPoisonBottles();
    }

    /**
     * Playing animation for poisonbottle
     */
    animatedPoisonBottles() {
        setInterval(() => {
            this.playAnimation(this.POISON_BOTTLES);
        }, 100);
    }
}