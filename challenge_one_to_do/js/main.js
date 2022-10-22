// DOM Elements
const taskList = document.getElementById("taskList");
const taskEntryButton = document.getElementById("taskEntryButton");
const sortRadio = document.getElementsByName("sortBy");

// module imports
import { Todo } from "./Todos.js";

// add a new item to the task list
function addItem() {
  // get the input element
  const newTask = document.getElementById("taskEntry");
  // verify that the user actually typed something
  if (newTask.value) {
    // create a new li parent element
    const newLi = document.createElement("li");
    // set it's ID
    newLi.setAttribute("id", new Date());
    // set it's classes to active and all
    newLi.classList.add("active", "all");

    // Create the task text, populate with user input
    const newTaskSpan = document.createElement("span");
    const newTaskText = document.createTextNode(newTask.value);
    newTaskSpan.appendChild(newTaskText);

    // Create the complete the task checkbox
    const completeCheck = document.createElement("input");
    completeCheck.type = "checkbox";
    // Add event listener for when the task is completed
    completeCheck.addEventListener("change", function () {
      newLi.classList.toggle("complete");
      newLi.classList.toggle("active");
      newLi.childNodes[1].classList.toggle("strikethrough");
      countNumTasks();
    });

    // Create the remove task button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    // add evenet listener to remove the task
    deleteButton.addEventListener("click", function () {
      newLi.remove();
      countNumTasks();
    });

    // append the checkbox, text, and delete button to the LI element
    newLi.appendChild(completeCheck);
    newLi.appendChild(newTaskSpan);
    newLi.appendChild(deleteButton);
    // Create new toDo object
    const newToDo = new Todo(
      newLi.id,
      completeCheck
        .toString()
        .concat(newTaskText.toString(), deleteButton.toString()),
      false
    );

    // append the LI element to the parent UL element
    taskList.appendChild(newLi);

    // Reset the user input and re-focus on it.
    newTask.value = "";
    newTask.focus();
    countNumTasks();
  }
}

function countNumTasks() {
  let tasks = taskList.getElementsByTagName("li");
  let numLeft = 0;

  for (const task of tasks) {
    if (task.classList.contains("active")) {
      numLeft++;
    }
  }

  document.getElementById("numTasksLeft").textContent = "".concat(
    numLeft,
    " tasks left"
  );
}

// filter the task list by the value of the event target
function sortBy(event) {
  let tasks = taskList.getElementsByTagName("li");
  for (const task of tasks) {
    // check if the current LI element contains a class matching the radio button that was checked
    if (task.classList.contains(event.target.value)) {
      // check if the element is currently hidden, if it is, unhide it
      if (task.classList.contains("hide")) {
        task.classList.toggle("hide");
      }
    } else {
      // This is triggered if the current LI is supposed to be hidden
      // check if it is currently being show, if it is, hide it
      if (!task.classList.contains("hide")) {
        task.classList.toggle("hide");
      }
    }
  }
}

// add event listener to task input
taskEntryButton.addEventListener("click", addItem);
taskEntryButton.addEventListener("touch", addItem);
// add event listeners to each filter button
for (const filter of sortRadio) {
  filter.addEventListener("change", sortBy);
}

export { taskEntryButton, sortRadio };
