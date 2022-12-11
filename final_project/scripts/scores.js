function loadScores() {
  let scores = JSON.parse(localStorage.getItem("scores"));
  return scores;
}

function saveScores() {
  let scores = loadScores();
  if (!scores) {
    scores = [];
  }
  const today = new Date();
  let win = false;

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

  for (let score of scores) {
    let tr = document.createElement("tr");

    let gameDate = document.createElement("td");
    let isWin = document.createElement("td");
    let player1Score = document.createElement("td");
    let player2Score = document.createElement("td");
    gameDate.innerText = score.gameDate;
    isWin.innerText = score.isWin;
    player1Score.innerText = score.player1Score;
    player2Score.innerText = score.player2Score;

    tr.appendChild(gameDate);
    tr.appendChild(isWin);
    tr.appendChild(player1Score);
    tr.appendChild(player2Score);
    scoreCard.append(tr);
  }
}

function buildTr(scoreObject) {}

export { saveScores, displayScores };
