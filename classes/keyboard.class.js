class Keyboard {
  leftKey = false;
  rightKey = false;
  upKey = false;
  downKey = false;
  spaceKey = false;
  keyF = false;

  constructor() {
    this;
    this.bindKeyBoardButtons();
    this.bindTouchButtons();
  }

  /**
   * Set a key true if we press the specfic key and to false if we dont press anymore
   */
  bindKeyBoardButtons() {
    window.addEventListener("keydown", (e) => {
      if (e.code == "ArrowLeft") {
        this.leftKey = true;
      } else if (e.code == "ArrowRight") {
        this.rightKey = true;
      } else if (e.code == "ArrowUp") {
        this.upKey = true;
      } else if (e.code == "ArrowDown") {
        this.downKey = true;
      } else if (e.code == "Space") {
        this.spaceKey = true;
      } else if (e.code == "KeyD") {
        this.keyF = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.code == "ArrowLeft") {
        this.leftKey = false;
      }
      if (e.code == "ArrowRight") {
        this.rightKey = false;
      }
      if (e.code == "ArrowUp") {
        this.upKey = false;
      }
      if (e.code == "ArrowDown") {
        this.downKey = false;
      }
      if (e.code == "Space") {
        this.spaceKey = false;
      }
      if (e.code == "KeyD") {
        this.keyF = false;
      }
    });
  }

  /**
   * set key to true for if we touch a mobileversion button and to false if we dont touch the key
   */
  bindTouchButtons() {
    document.getElementById("arrow-left").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.leftKey = true;
    });

    document.getElementById("arrow-right").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.rightKey = true;
    });

    document.getElementById("arrow-up").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.upKey = true;
    });
    document.getElementById("arrow-down").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.downKey = true;
    });
    document.getElementById("bubble-attack").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.keyF = true;
    });
    document.getElementById("fin-attack").addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.spaceKey = true;
    });

    document.getElementById("arrow-left").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.leftKey = false;
    });

    document.getElementById("arrow-right").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.rightKey = false;
    });

    document.getElementById("arrow-up").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.upKey = false;
    });
    document.getElementById("arrow-down").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.downKey = false;
    });
    document.getElementById("bubble-attack").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.keyF = false;
    });
    document.getElementById("fin-attack").addEventListener("touchend", (e) => {
      e.preventDefault();
      this.spaceKey = false;
    });
  }
}
