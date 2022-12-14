const Player1 = {
  paddle: document.getElementById("player1"),
  score: document.getElementById("player1Score"),
  position_y: 350,
  min_x: 30,
  max_x: 40,
  max_y: 645,
  min_y: 0,
  points: 0,
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
  scoreGoal: function () {
    this.points += 1;
    this.score.innerHTML = this.points;
  },
  setPlayerState: function (state) {
    Player1.position_y = state.position_y;
    Player1.points = state.points;
  },
  savePlayerState: function () {
    const state = {
      position_y: this.position_y,
      points: this.points,
    };
    return state;
  },
};

export default Player1;
