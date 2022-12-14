const Player2 = {
  paddle: document.getElementById("player2"),
  score: document.getElementById("player2Score"),
  position_y: 350,
  min_x: 960,
  max_x: 970,
  max_y: 645,
  min_y: 0,
  points: 0,
  reactionTime: 50,
  drawPaddle: function () {
    if (this.position_y <= this.min_y) {
      this.paddle.style.top = `${this.min_y}px`;
      this.position_y = this.min_y;
    }
    if (this.position_y >= this.max_y) {
      this.paddle.style.top = `${this.max_y}px`;
      this.position_y = this.max_y;
    }
    this.paddle.style.top = `${this.position_y}px`;
  },
  moveComputer: function (isUp, ballY) {
    let movement = this.reactionTime;
    if (!(Math.sign(isUp) == 1)) {
      movement = -movement;
    }

    let paddleBottom = this.position_y + 100;
    let paddleTop = this.position_y;
    if (ballY <= paddleBottom && ballY >= paddleTop) {
      movement = 0;
    }
    if (ballY <= paddleTop) {
      if (!(Math.sign(movement) == -1)) {
        movement = -movement;
      }
    }
    if (ballY >= paddleBottom) {
      if (!(Math.sign(movement) == 1)) {
        movement = -movement;
      }
    }

    this.position_y = this.position_y + movement;
    this.drawPaddle();
  },
  scoreGoal: function () {
    this.points += 1;
    this.score.innerHTML = this.points;
  },
  setPlayerState: function (state) {
    Player2.position_y = state.position_y;
    Player2.points = state.points;
    Player2.reactionTime = state.reactionTime;
  },
  savePlayerState: function () {
    const state = {
      position_y: this.position_y,
      points: this.points,
      reactionTime: this.reactionTime,
    };
    return state;
  },
};

export default Player2;
