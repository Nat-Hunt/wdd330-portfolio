// DOM Elements
const taskEntryButton = document.getElementById("taskEntryButton");
const sortRadio = document.getElementsByName("sortBy");

// module imports
import {
  addItem,
  sortBy,
  countNumTasks,
  addDeleteButton,
  addCheckBox,
} from "./utilities.js";
import { readFromLS } from "./ls.js";

// add event listener to task input
taskEntryButton.addEventListener("click", addItem);
taskEntryButton.addEventListener("touchend", addItem);
// add event listeners to each filter button
for (const filter of sortRadio) {
  filter.addEventListener("change", sortBy);
}

function populateTaskList() {
  const toDoList = readFromLS("tasks");
  for (const toDo of toDoList) {
    const savedLi = document.createElement("li");
    savedLi.setAttribute("id", toDo.id);
    savedLi.classList.add("all");
    if (!toDo.completed) {
      savedLi.classList.add("active");
    } else {
      savedLi.classList.add("complete");
    }
    const deleteButton = addDeleteButton(toDo.id);
    const checkBox = addCheckBox(toDo.id);
    const savedText = document.createTextNode(toDo.content);

    savedLi.appendChild(checkBox);
    savedLi.appendChild(savedText);
    savedLi.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(savedLi);
  }
  countNumTasks();
}

window.onload = populateTaskList();

export { taskEntryButton, sortRadio };
