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
  settings: {
    botReact: parseInt(botReact.value),
    ballSpeed: parseInt(ballSpeed.value),
    winCondition: parseInt(winCondition.value),
  },
  displaySettings: function () {
    botReact.value = PauseView.settings.botReact;
    botReactOutput.innerHTML = PauseView.settings.botReact;
    ballSpeed.value = PauseView.settings.ballSpeed;
    ballSpeedOutput.innerHTML = PauseView.settings.ballSpeed;
    winCondition.value = PauseView.settings.winCondition;
    winConditionOutput.innerHTML = PauseView.settings.winCondition;
  },
  pauseMenu: document.getElementById("pauseMenu"),
  loadGameBtn: document.getElementById("loadGame"),
  startGameBtn: document.getElementById("startGame"),
  saveQuitBtn: document.getElementById("saveQuit"),
  resumeGameBtn: document.getElementById("resume"),
  keyboardShortcuts: function (key) {
    if (key.code === "Escape") {
      PauseView.resumeGame();
    }
  },
  pauseGame: function (gameScreen) {
    if (!gameScreen.classList.contains("hide")) {
      gameScreen.classList.toggle("hide");
    }
    if (pauseMenu.classList.contains("hide")) {
      pauseMenu.classList.toggle("hide");
      pauseBtns.classList.toggle("hide");
    }
    PauseView.displaySettings();
    return "paused";
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
      settings: PauseView.settings,
      player1Score: player1Score,
      player2Score: player2Score,
      ball_state: Ball,
      player1State: Player1Paddle,
      player2State: Player2Paddle,
    };
    localStorage.setItem("savedGame", JSON.stringify(gameData));

    // Transition views
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
  resumeGame: function () {
    // hide the pause menu and display the game board
    if (!pauseMenu.classList.contains("hide")) {
      pauseMenu.classList.toggle("hide");
      pauseBtns.classList.toggle("hide");
    }
    if (play.classList.contains("hide")) {
      play.classList.toggle("hide");
    }

    return "running";
  },
};

export default PauseView;
