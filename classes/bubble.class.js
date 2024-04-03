class Bubble extends MoveableObjects {
  width = 50;
  height = 50;
  name = "bubble";
  initialPosition;
  initialDirection;

  constructor(x, y) {
    super().loadImage("img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    this.travel(x, y);
    this.bubbleColor();
  }

  travel(x, y) {
    this.pos_x = x;
    this.pos_y = y + 100;
    let initialPosition = x;
    this.initialPosition = initialPosition;
    this.initialDirection = world.sharky.otherDirection;
    this.bubbleStartPosition(x);

    setInterval(() => {
      this.checkBubbleTravelDirection();
    }, 50);
  }

  checkBubbleTravelDirection() {
    if (!this.initialDirection) {
      this.pos_x += 5;
    } else {
      this.pos_x -= 5;
    }
  }

  bubbleStartPosition(x) {
    if (!this.initialDirection) {
      this.pos_x = x + 145;
    }
    if (this.initialDirection) {
      this.pos_x = x;
    }
  }

  bubbleColor() {
    if (world.posionBar.poisonBottles >= 1) {
      this.loadImage("img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
    } else {
      this.loadImage("img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    }
  }
}
