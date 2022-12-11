const pongHistory = document.getElementById("pongHistory");

function populatePongHistory() {
  if (!localStorage.getItem("pong_history")) {
    const url =
      "https://en.wikipedia.org/api/rest_v1/page/html/pong?redirect=false";

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      console.log("loaded");
      localStorage.setItem("pong_history", this.responseText);
      pongHistory.innerHTML = this.responseText;
    };
    xhttp.open("GET", url);
    xhttp.setRequestHeader("Api-User-Agent", "hun18013@byui.edu");
    xhttp.send();
  } else {
    pongHistory.innerHTML = localStorage.getItem("pong_history");
  }
}

populatePongHistory();
