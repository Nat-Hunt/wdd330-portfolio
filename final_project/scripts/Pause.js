const botReact = document.getElementById("botReact");
const ballSpeed = document.getElementById("ballSpeed");
const winCondition = document.getElementById("winCondition");

const botReactOutput = document.getElementById("botReactOutput");
const ballSpeedOutput = document.getElementById("ballSpeedOutput");
const winConditionOutput = document.getElementById("winConditionOutput");

botReact.oninput = function () {
  let value = this.value;
  botReactOutput.innerHTML = value;
  PauseView.settings.botReact = parseInt(value);
};
ballSpeed.oninput = function () {
  let value = this.value;
  ballSpeedOutput.innerHTML = value;
  PauseView.settings.ballSpeed = parseInt(value);
};
winCondition.oninput = function () {
  let value = this.value;
  winConditionOutput.innerHTML = value;
  PauseView.settings.winCondition = parseInt(value);
};

window.onload = function () {
  botReactOutput.innerHTML = botReact.value;
  ballSpeedOutput.innerHTML = ballSpeed.value;
  winConditionOutput.innerHTML = winCondition.value;
};

const PauseView = {
  pauseMenu: document.getElementById("pauseMenu"),
  loadGameBtn: document.getElementById("loadGame"),
  startGameBtn: document.getElementById("startGame"),
  saveQuitBtn: document.getElementById("saveQuit"),
  resumeGameBtn: document.getElementById("resume"),
  settings: {
    botReact: parseInt(botReact.value),
    ballSpeed: parseInt(ballSpeed.value),
    winCondition: parseInt(winCondition.value),
  },
  displaySettings: function () {
    botReact.value = this.settings.botReact;
    botReactOutput.innerHTML = this.settings.botReact;
    ballSpeed.value = this.settings.ballSpeed;
    ballSpeedOutput.innerHTML = this.settings.ballSpeed;
    winCondition.value = this.settings.winCondition;
    winConditionOutput.innerHTML = this.settings.winCondition;
  },
  saveAndQuit: function (Ball, Player1Paddle, Player2Paddle) {
    // capture game data
    const player1Score = parseInt(
      document.getElementById("player1Score").innerHTML
    );
    const player2Score = parseInt(
      document.getElementById("player2Score").innerHTML
    );
    const gameData = {
      settings: this.settings,
      player1Score: player1Score,
      player2Score: player2Score,
      ball_state: Ball,
      player1State: Player1Paddle,
      player2State: Player2Paddle,
    };
    localStorage.setItem("savedGame", JSON.stringify(gameData));

    // Transition views
    this.gameOverScreenToggle();
  },
  gameOverScreenToggle: function () {
    if (!play.classList.contains("hide")) {
      play.classList.toggle("hide");
    }
    if (!pauseMenu.classList.contains("hide")) {
      pauseMenu.classList.toggle("hide");
      if (!startBtns.classList.contains("hide")) {
        startBtns.classList.toggle("hide");
      }
      if (!pauseBtns.classList.contains("hide")) {
        pauseBtns.classList.toggle("hide");
      }
    }
    if (gameOver.classList.contains("hide")) {
      gameOver.classList.toggle("hide");
    }
  },
};

export default PauseView;
