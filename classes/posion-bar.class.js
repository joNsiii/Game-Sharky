class PosionBar extends DrawableObject {
    pos_x = 20;
    pos_y = 70;
    width = 200;
    height = 60;
    POISON_BAR = [
        'img/sharkie-images/4.Marcadores/green/poisoned bubbles/poison_0.png',
        'img/sharkie-images/4.Marcadores/green/poisoned bubbles/poison_20.png',
        'img/sharkie-images/4.Marcadores/green/poisoned bubbles/poison_40.png',
        'img/sharkie-images/4.Marcadores/green/poisoned bubbles/poison_60.png',
        'img/sharkie-images/4.Marcadores/green/poisoned bubbles/poison_80.png',
        'img/sharkie-images/4.Marcadores/green/poisoned bubbles/poison_100.png' 
    ];

    constructor() {
        super().loadImage('img/sharkie-images/4.Marcadores/green/poisoned bubbles/poison_0.png');
        this.loadImages(this.POISON_BAR);
        this.updateStatusBar();
    }

    /**
     * update the statusbar for poisonbottles
     */
    updateStatusBar() {
        setInterval(() => {
            if (this.poisonBottles == 0) {
                return this.loadImage(this.POISON_BAR[0]);
            } else if (this.poisonBottles == 1) {
                return this.loadImage(this.POISON_BAR[1]);
            } else if (this.poisonBottles == 2) {
                return this.loadImage(this.POISON_BAR[2]);
            } else if (this.poisonBottles == 3) {
                return this.loadImage(this.POISON_BAR[3]);
            } else if (this.poisonBottles == 4) {
                return this.loadImage(this.POISON_BAR[4]);
            } else if (this.poisonBottles == 5) {
                return this.loadImage(this.POISON_BAR[5]);
            } 
        }, 100);
        
    }
}