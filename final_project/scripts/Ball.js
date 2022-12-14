const Ball = {
  ball: document.getElementById("ball"),
  coordinates: "",
  min_x: 0,
  max_x: 1000,
  min_y: 0,
  max_y: 750,
  position_x: 500,
  position_y: 350,
  speed: 10,
  dx: 0,
  dy: 0,
  drawBallStart: function (x, y) {
    this.ball.style.top = `${this.position_y}px`;
    this.ball.style.left = `${this.position_x}px`;
    this.coordinates.y = this.position_y;
    this.coordinates.x = this.position_x;
  },
  setBallState: function (state) {
    this.position_x = state.position_x;
    this.position_y = state.position_y;
    this.speed = state.speed;
  },
  saveBallState: function () {
    let state = {
      position_x: this.coordinates.left,
      position_y: this.coordinates.right,
      speed: this.speed,
    };
    return state;
  },
};

export default Ball;
