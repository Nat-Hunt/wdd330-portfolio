// HTTP and Forms

// Exercise 1: Content Negotiation
function ex1() {
  const url = "https://eloquentjavascript.net/author";
  // get text/plain
  fetch(url, { headers: { accept: "text/plain" }, mode: "cors" }).then(
    (response) => {
      console.log(response.status);
      console.log(response.headers.get("Content-Type"));
    }
  );
  // get text/html
  fetch(url, { headers: { accept: "text/html" }, mode: "cors" }).then(
    (response) => {
      console.log(response.status);
      console.log(response.headers.get("Content-Type"));
    }
  );
  // get application/json
  fetch(url, {
    headers: { accept: "application/json" },
    mode: "cors",
  }).then((response) => {
    console.log(response.status);
    console.log(response.headers.get("Content-Type"));
  });
  // get application/rainbows+unicors, this should return code 406
  fetch(url, {
    headers: { accept: "application/rainbows+unicors" },
    mode: "cors",
  }).then((response) => {
    console.log(response.status);
    console.log(response.headers.get("Content-Type"));
  });
}

// Exercise 2: A Javascript Workbench
function ex2() {
  let codeInput = document.getElementById("code").value;
  let result = Function(codeInput)();
  document.getElementById("output").innerText = String(result);
}

// Exercise 3: Conway's Game of Life
function countNeighbors(grid, x, y) {
  let count = 0;
  for (let y1 = Math.max(0, y - 1); y1 <= Math.min(height - 1, y + 1); y1++) {
    for (let x1 = Math.max(0, x - 1); x1 <= Math.min(width - 1, x + 1); x1++) {
      if ((x1 != x || y1 != y) && grid[x1 + y1 * width]) {
        count++;
      }
    }
  }
  return count;
}

function nexGeneration(grid) {
  let newGrid = new Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let neighbors = countNeighbors(grid, x, y);
      let offset = x + y * width;
      if (neighbors < 2 || neighbors > 3) {
        newGrid[offset] = false;
      } else if (neighbors == 2) {
        newGrid[offset] = grid[offset];
      } else {
        newGrid[offset] = true;
      }
    }
  }
  return newGrid;
}

// define the example 3 grid dimensions
const width = 30;
const height = 15;

let gridNode = document.getElementById("grid");
let checkboxes = [];
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    let box = document.createElement("input");
    box.type = "checkbox";
    gridNode.appendChild(box);
    checkboxes.push(box);
  }
  gridNode.appendChild(document.createElement("br"));
}

function randomGrid() {
  let result = [];
  for (let i = 0; i < width * height; i++) {
    result.push(Math.random() < 0.3);
  }
  return result;
}
function checkboxesFromGrid(grid) {
  grid.forEach((value, i) => (checkboxes[i].checked = value));
}
function gridFromCheckboxes() {
  return checkboxes.map((box) => box.checked);
}
function turn() {
  checkboxesFromGrid(nexGeneration(gridFromCheckboxes()));
}

checkboxesFromGrid(randomGrid());

document.getElementById("ch18ex1").addEventListener("click", ex1);
document.getElementById("button").addEventListener("click", ex2);
document.getElementById("next").addEventListener("click", turn);
