const Player2 = {
  position_y: 50,
  points: 0,
  reactionTime: 50,
  setPlayerState: function (playerState) {
    Player2.position_y = playerState.position_y;
    Player2.points = playerState.points;
    Player2.reactionTime = playerState.reactionTime;
  },
  savePlayerState: function () {
    const state = {
      position_y: this.position_y,
      points: this.points,
      reactionTime: this.reactionTime,
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

export default Player2;
