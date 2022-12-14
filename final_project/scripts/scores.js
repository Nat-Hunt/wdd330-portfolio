// Retrieve and display past games

function loadScores() {
  let scores = JSON.parse(localStorage.getItem("scores"));
  return scores;
}

function saveScores(isWin) {
  let scores = loadScores();
  if (!scores) {
    scores = [];
  }
  const today = new Date();
  let win = isWin;

  const player1Score = parseInt(
    document.getElementById("player1Score").innerHTML
  );
  const player2Score = parseInt(
    document.getElementById("player2Score").innerHTML
  );
  const gameDate = today.toLocaleDateString();
  if (player1Score > player2Score) {
    win = true;
  }
  let scoreCardEntry = {
    gameDate: gameDate,
    isWin: win,
    player1Score: player1Score,
    player2Score: player2Score,
  };

  scores.push(scoreCardEntry);
  localStorage.setItem("scores", JSON.stringify(scores));
}

function displayScores() {
  let scores = loadScores();
  let scoreCard = document.getElementById("scoreCard");

  for (let i = scores.length - 1; i >= 0; i--) {
    let tr = document.createElement("tr");

    let gameDate = document.createElement("td");
    let isWin = document.createElement("td");
    let player1Score = document.createElement("td");
    let player2Score = document.createElement("td");
    gameDate.innerText = scores[i].gameDate;

    if (scores[i].isWin) {
      isWin.innerText = "Win";
    } else {
      isWin.innerText = "Loss";
    }
    player1Score.innerText = scores[i].player1Score;
    player2Score.innerText = scores[i].player2Score;

    tr.appendChild(gameDate);
    tr.appendChild(isWin);
    tr.appendChild(player1Score);
    tr.appendChild(player2Score);
    scoreCard.append(tr);
  }
}

export { saveScores, displayScores };
