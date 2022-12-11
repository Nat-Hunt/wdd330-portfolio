const Player1 = {
  position_y: 50,
  points: 0,
  setPlayerState: function (playerState) {
    Player1.position_y = playerState.position_y;
    Player1.points = playerState.points;
  },
  savePlayerState: function () {
    const state = {
      position_y: this.position_y,
      points: this.points,
    };
    return state;
  },
  moveUp: function () {
    this.position_y -= 1;
  },
  moveDown: function () {
    this.position_y += 1;
  },
};

export default Player1;
