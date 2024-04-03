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

  /**
   * Set the position where the bubble is spawned
   * 
   * @param {number} x - x position on canvas
   * @param {number} y - y position on canvas
   */
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

  /**
   * CHecking in which direction the bubble need to travel
   */
  checkBubbleTravelDirection() {
    if (!this.initialDirection) {
      this.pos_x += 5;
    } else {
      this.pos_x -= 5;
    }
  }

  /**
   * 
   * @param {number} x - x - position from bubble
   */
  bubbleStartPosition(x) {
    if (!this.initialDirection) {
      this.pos_x = x + 145;
    }
    if (this.initialDirection) {
      this.pos_x = x;
    }
  }

  /**
   * Which color the bubble have based if a poisonbotttle is collected
   */
  bubbleColor() {
    if (world.posionBar.poisonBottles >= 1) {
      this.loadImage("img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png");
    } else {
      this.loadImage("img/sharkie-images/1.Sharkie/4.Attack/Bubble trap/Bubble.png");
    }
  }
}
