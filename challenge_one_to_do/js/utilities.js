import toDoConstructor from "./Todos.js";
import { readFromLS, writeToLS } from "./ls.js";

const taskList = document.getElementById("taskList");

function addCheckBox(id) {
  // Create the complete the task checkbox
  const completeCheck = document.createElement("input");
  completeCheck.type = "checkbox";
  // Add event listener for when the task is completed
  completeCheck.addEventListener("change", function () {
    const li = document.getElementById(id);
    li.classList.toggle("complete");
    li.classList.toggle("active");
    li.childNodes[1].classList.toggle("strikethrough");

    const toDoList = readFromLS("tasks");
    for (let toDo of toDoList) {
      if (toDo.id === id) {
        toDo.completed = true;
      }
      writeToLS("tasks", toDoList);
    }

    countNumTasks();
  });

  return completeCheck;
}

function addDeleteButton(id) {
  // Create the remove task button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  // add evenet listener to remove the task
  deleteButton.addEventListener("click", function () {
    const li = document.getElementById(id);
    li.remove();

    const toDoList = readFromLS("tasks");
    for (let toDo of toDoList) {
      if (toDo.id === id) {
        toDoList.splice(toDoList.indexOf(toDo), 1);
        writeToLS("tasks", toDoList);
      }
    }

    countNumTasks();
  });

  return deleteButton;
}

// add a new item to the task list
function addItem() {
  // get the input element
  const newTask = document.getElementById("taskEntry");
  // verify that the user actually typed something
  if (newTask.value) {
    // create a new li parent element
    const newLi = document.createElement("li");
    newLi.setAttribute("id", new Date());
    newLi.classList.add("active", "all");

    // Create the task text, populate with user input
    const newTaskSpan = document.createElement("span");
    const newTaskText = document.createTextNode(newTask.value);
    newTaskSpan.appendChild(newTaskText);

    const completeCheck = addCheckBox(newLi.id);
    const deleteButton = addDeleteButton(newLi.id);

    // append the checkbox, text, and delete button to the LI element
    newLi.appendChild(completeCheck);
    newLi.appendChild(newTaskSpan);
    newLi.appendChild(deleteButton);
    // append the LI element to the parent UL element
    taskList.appendChild(newLi);

    // Create new toDo object, append it to array of toDo objects
    createAndSaveNewToDo(newLi.id, newTask.value, false);

    // Reset the user input and re-focus on it.
    newTask.value = "";
    newTask.focus();
    countNumTasks();
  }
}

function createAndSaveNewToDo(id, content, completed) {
  const newToDo = new toDoConstructor.Todo(id, content, completed);
  let toDoList = readFromLS("tasks");
  if (toDoList) {
    toDoList.push(newToDo);
  } else {
    toDoList = [newToDo];
  }
  writeToLS("tasks", toDoList);
}

function countNumTasks() {
  let taskList = readFromLS("tasks");
  let numLeft = 0;

  for (const task of taskList) {
    if (!task.completed) {
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

export { sortBy, addItem, countNumTasks, addDeleteButton, addCheckBox };
