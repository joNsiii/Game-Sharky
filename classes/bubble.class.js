class Bubble extends MoveableObjects {
  width = 50;
  height = 50;
  name = "bubble";
  initialPosition;

  constructor(x, y) {
    super().loadImage(
      "img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Bubble.png"
    );
    this.travel(x, y);
    this.bubbleColor();
  }

  travel(x, y) {
    this.pos_x = x + 145;
    this.pos_y = y + 100;
    let initialPosition = x + 145;
    this.initialPosition = initialPosition;

    setInterval(() => {
      this.pos_x += 5;
    }, 50);
  }

  bubbleColor() {
    if (world.posionBar.poisonBottles >= 1) {
        this.loadImage("img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
    } else {
        this.loadImage("img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    }
  }
}
