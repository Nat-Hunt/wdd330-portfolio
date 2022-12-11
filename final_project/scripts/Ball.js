const Ball = {
  position_x: 50,
  position_y: 50,
  speed: 10,
  setBallState: function (state) {
    Ball.position_x = state.position_x;
    Ball.position_y = state.position_y;
    Ball.speed = state.speed;
  },
  saveBallState: function () {
    let state = {
      position_x: this.position_x,
      position_y: this.position_y,
      speed: this.speed,
    };
    return state;
  },
};

export default Ball;
