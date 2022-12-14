// imports
import PauseView from "./Pause.js";
import { saveScores, displayScores } from "./scores.js";
import Ball from "./Ball.js";
import Player1 from "./Player1.js";
import Player2 from "./Player2.js";

// Views
const pauseMenu = document.getElementById("pauseMenu");
const play = document.getElementById("play");
const gameOver = document.getElementById("gameOver");
const scores = document.getElementById("scores");
const startBtns = document.getElementById("startBtns");
const pauseBtns = document.getElementById("pauseBtns");
const title = document.getElementById("title");

let gameState = "startMenu";

// Start a new game
function gameStart() {
  // Player movement
  document.addEventListener("keydown", (key) => {
    if (key.code == "ArrowUp" || key.code == "KeyW") {
      Player1.position_y -= 10;
    } else if (key.code == "ArrowDown" || key.code == "KeyS") {
      Player1.position_y += 10;
    }

    Player1.drawPaddle();
  });
  gameState = "running";
  // Set ball speed and direction randomly
  Ball.speed = PauseView.settings.ballSpeed;
  Ball.coordinates = Ball.ball.getBoundingClientRect();
  let dx = Math.floor(Math.random() * (Ball.speed - 1) + 1);
  Ball.dx = dx;
  let dy = Ball.speed - dx;
  Ball.dy = dy;
  if (Math.random() > 0.5) {
    dy = -1;
  }
  if (Math.random() > 0.5) {
    dx = -1;
  }
  Ball.drawBallStart("500px", "350px");
  // set computer reaction time
  Player2.reactionTime = PauseView.settings.botReact;

  // Move the ball
  requestAnimationFrame(() => {
    moveBall(dx, dy);
  });
}

function moveBall(dx, dy) {
  if (gameState == "running") {
    // check top/bottom collision
    if (Ball.coordinates.top <= Ball.min_y) {
      if (!(Math.sign(dy) == 1)) {
        dy = -dy;
      }
    }
    if (Ball.coordinates.bottom >= Ball.max_y) {
      if (!(Math.sign(dy) == -1)) {
        dy = -dy;
      }
    }

    // Check for paddle collision
    if (
      Ball.coordinates.x <= Player1.max_x &&
      Ball.coordinates.x >= Player1.min_x &&
      Ball.coordinates.y <= Player1.max_y &&
      Ball.coordinates.y >= Player1.min_y
    ) {
      if (!(Math.sign(dx) == 1)) {
        dx = -dx;
      }
    }
    if (
      Ball.coordinates.x <= Player2.max_x &&
      Ball.coordinates.x >= Player2.min_x &&
      Ball.coordinates.y <= Player2.max_y &&
      Ball.coordinates.y >= Player2.min_y
    ) {
      if (!(Math.sign(dx) == -1)) {
        dx = -dx;
      }
    }

    // check left/right collision
    if (Ball.coordinates.x <= Ball.min_x || Ball.coordinates.x >= Ball.max_x) {
      if (Ball.coordinates.x <= Ball.min_x) {
        Player2.scoreGoal();
      } else {
        Player1.scoreGoal();
      }
      if (
        Player1.points == PauseView.settings.winCondition ||
        Player2.points == PauseView.settings.winCondition
      ) {
        gameState = "end";
        gameOverView();
      }
      dx = Math.floor(Math.random() * (Ball.speed - 1) + 1);
      dy = Ball.speed - dx;
      if (Math.random() > 0.5) {
        dy = -1;
      }
      if (Math.random() > 0.5) {
        dx = -1;
      }
      Ball.drawBallStart();
    }

    // move the ball
    Ball.ball.style.top = `${Ball.coordinates.y + dy}px`;
    Ball.ball.style.left = `${Ball.coordinates.x + dx}px`;
    Ball.coordinates.y = Ball.coordinates.y + dy;
    Ball.coordinates.x = Ball.coordinates.x + dx;

    Player2.moveComputer(dy, Ball.coordinates.y);
    Ball.dx = dx;
    Ball.dy = dy;
    requestAnimationFrame(() => {
      moveBall(dx, dy);
    });
  }
}

// Game Over View
function gameOverView() {
  PauseView.gameOverScreenToggle();
  let salutation = "Try Again!";
  let isWin = false;
  if (Player1.score == PauseView.settings.winCondition) {
    salutation = "You Win!";
    isWin = true;
  }
  document.getElementById("salutation").innerHTML = salutation;
  saveScores(isWin);
}

// BUTTON FUNCTIONALITY

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
  displayScores();
});

// Play Again? Button
document.getElementById("playAgain2").addEventListener("click", () => {
  window.location.replace("./playPong.html");
});
// Return to Home Button
document.getElementById("home").addEventListener("click", () => {
  window.location.replace("./index.html");
});

// Load Game button
document.getElementById("loadGame").addEventListener("click", () => {
  let gameData = JSON.parse(localStorage.getItem("savedGame"));
  PauseView.settings.botReact = gameData.settings.botReact;
  PauseView.settings.ballSpeed = gameData.settings.ballSpeed;
  PauseView.settings.winCondition = gameData.settings.winCondition;
  PauseView.displaySettings();
  Ball.setBallState(gameData.ball_state);
  Player1.setPlayerState(gameData.player1State);
  Player2.setPlayerState(gameData.player2State);
  PauseView.displaySettings();
});

// Start Game Button
document.getElementById("startGame").addEventListener("click", () => {
  title.innerHTML = "Pong";
  document.addEventListener("keydown", (key) => {
    if (key.code === "ArrowUp" || key.code === "ArrowDown") {
      // move the player paddle
    }
  });
  pauseMenu.classList.toggle("hide");
  startBtns.classList.toggle("hide");
  play.classList.toggle("hide");

  // Initialize game pieces
  Player1.drawPaddle();
  Player2.drawPaddle();
  // console.log(play.getBoundingClientRect());
  Ball.ball = document.getElementById("ball");
  Ball.coordinates = Ball.ball.getBoundingClientRect();

  gameStart();
});

document.addEventListener("keyup", (key) => {
  if (key.code === "Escape") {
    // Pause the game
    title.innerHTML = "Pause";
    if (!play.classList.contains("hide")) {
      play.classList.toggle("hide");
    }
    if (pauseMenu.classList.contains("hide")) {
      pauseMenu.classList.toggle("hide");
      pauseBtns.classList.toggle("hide");
    }
    PauseView.displaySettings();
    gameState = "paused";
  }
});
// Save and Quit Button
document.getElementById("saveQuit").addEventListener("click", () => {
  title.innerHTML = "Game Over";
  PauseView.saveAndQuit(
    Ball.saveBallState(),
    Player1.savePlayerState(),
    Player2.savePlayerState()
  );
  gameOverView();
});

// Resume Button
document.getElementById("resume").addEventListener("click", () => {
  title.innerHTML = "Pong";
  if (!pauseMenu.classList.contains("hide")) {
    pauseMenu.classList.toggle("hide");
    pauseBtns.classList.toggle("hide");
  }
  if (play.classList.contains("hide")) {
    play.classList.toggle("hide");
  }
  gameState = "running";
  requestAnimationFrame(() => {
    moveBall(Ball.dx, Ball.dy);
  });
});
