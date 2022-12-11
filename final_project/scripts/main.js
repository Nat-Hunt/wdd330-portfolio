// imports
import PauseView from "./pause.js";
import { saveScores, displayScores } from "./scores.js";
import Ball from "./Ball.js";
import Player1 from "./Player1.js";
import Player2 from "./Player2.js";

document.addEventListener("keyup", (key) => {
  determineInstruction(key);
});
// Views
const pauseMenu = document.getElementById("pauseMenu");
const play = document.getElementById("play");
const gameOver = document.getElementById("gameOver");
const scores = document.getElementById("scores");
const startBtns = document.getElementById("startBtns");

let gameState = "startMenu";
let gameData = "";

// Start a new game
function startInstructions() {
  document.getElementById("loadGame").addEventListener("click", loadGame);
  document.getElementById("startGame").addEventListener("click", () => {
    pauseMenu.classList.toggle("hide");
    startBtns.classList.toggle("hide");
    play.classList.toggle("hide");

    gameState = "running";
  });
}

// Load your last game
function loadGame() {
  gameData = JSON.parse(localStorage.getItem("savedGame"));
  PauseView.settings.botReact = gameData.settings.botReact;
  PauseView.settings.ballSpeed = gameData.settings.ballSpeed;
  PauseView.settings.winCondition = gameData.settings.winCondition;
  Ball.setBallState(gameData.ball_state);
  Player1.setPlayerState(gameData.Player1State);
  Player2.setPlayerState(gameData.Player2State);
  PauseView.displaySettings();
}

// Gameplay funcitonality
function runningInstructions(key) {
  if (key.code === "Escape") {
    gameState = PauseView.pauseGame(play);
    document.getElementById("saveQuit").addEventListener("click", () => {
      PauseView.saveAndQuit(
        Ball.saveBallState(),
        Player1.savePlayerState(),
        Player2.savePlayerState()
      );
      gameOverInstructions();
    });
    document.getElementById("resume").addEventListener("click", () => {
      gameState = PauseView.resumeGame();
    });
  } else if (key.code === "ArrowUp") {
    console.log("you pressed up arrow");
  } else if (key.code === "ArrowDown") {
    console.log("you pressed down arrow");
  }
}

// Game Over View
function gameOverInstructions() {
  saveScores();

  // Play Again? Button
  document.getElementById("playAgain1").addEventListener("click", () => {
    window.location.replace("./playPong.html");
  });

  // Continue Button
  document.getElementById("continue").addEventListener("click", () => {
    if (!gameOver.classList.contains("hide")) {
      gameOver.classList.toggle("hide");
    }
    if (scores.classList.contains("hide")) {
      scores.classList.toggle("hide");
    }
    scorecardInstructions();
  });
}

function scorecardInstructions() {
  displayScores();

  // Play Again? Button
  document.getElementById("playAgain2").addEventListener("click", () => {
    window.location.replace("./playPong.html");
  });

  // Return to Home Button
  document.getElementById("home").addEventListener("click", () => {
    window.location.replace("./index.html");
  });
}

function determineInstruction(key) {
  switch (gameState) {
    case "running":
      runningInstructions(key);
      break;
    case "paused":
      PauseView.keyboardShortcuts(key);
      break;
    default:
      break;
  }
}

startInstructions();
