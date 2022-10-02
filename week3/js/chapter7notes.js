console.log("Chapter 7 Notes");
// EVENTS

console.log("// Event Listeners");

// document.body.addEventListener("click", doSomething); // listens for click anywhere on the body of the page
// a "click" is triggered whenever the mouse is clicked, the Enter key is pressed,
// or a tap is registered on a touch-screen

//the addEventListener() method is the recommended way of reacting to events.

// Both of the following achieve the some thing
// addEventListener("click", () => {
//   alert("You Clicked!");
// });

// function doSomething() {
//   alert("You Clicked!");
// }
// addEventListener("click", doSomething); // parenthesis are not added here. Otherwise the funciton
// would fire whenever this file is loaded, instead of when the event is triggered.

function doSomething(event) {
  console.log(event.type); // returns the type of event that occured
  console.log(event.target); // returns the node on which the event occured
  console.log(
    `screen: (${event.screenX},${event.screenY}), ` + // number of pixels from the left and top of the screen (the device)
      `page: (${event.pageX},${event.pageY}), ` + // number of pixels from the left and top of the client (the window)
      `client: (${event.screenX},${event.screenY})` // number of pixels from the left and top of the document (has the page scrolled?)
  );
}
// addEventListener("click", doSomething);

console.log("// Mouse events!");

const clickParagraph = document.getElementById("click");

clickParagraph.addEventListener("click", () => console.log("click"));
clickParagraph.addEventListener("mousedown", () => console.log("down"));
clickParagraph.addEventListener("mouseup", () => console.log("up"));

const dblclickParagraph = document.getElementById("dblclick");
dblclickParagraph.addEventListener("dblclick", highlight);

function highlight(event) {
  event.target.classList.toggle("highlight");
}

const mouseParagraph = document.getElementById("mouse");
mouseParagraph.addEventListener("mouseover", highlight);
mouseParagraph.addEventListener("mouseout", highlight);

addEventListener("keydown", highlight);
addEventListener("keyup", (event) =>
  console.log(`You stopped pressing the key on ${new Date()}`)
);
addEventListener("keydown", (event) =>
  console.log(`You pressed the ${event.key} character`)
);
addEventListener("keydown", (event) => {
  if (event.key === "c" && event.ctrlKey) {
    console.log("Action canceled!");
  }
}); // checks if control key was pressed
addEventListener("click", (event) => {
  if (event.shiftKey) {
    console.log("A Shifty Click!");
  }
}); // checks if the shift key was held down during a mouse click

console.log("// Touch events");
// List of all touch event listeners
addEventListener("touchend", () => {
  console.log("touch stopped");
});
addEventListener("touchmove", () => {
  console.log("Continuing to touch and move");
});
mouseParagraph.addEventListener("touchenter", () => {
  console.log("Touch happened elsewhere, but now is on this element.");
});
mouseParagraph.addEventListener("touchleave", () => {
  console.log("User left me :(");
});
addEventListener("touchcancel", () => {
  console.log(
    "User touch interrupted (finger moved out of window, too many fingers touching)"
  );
});
//HINT you can use a combo of touchstart, touchmove, and touchleave to
// immitate gestures like swiping
// List of all touch event listener properties
// event.touches (all touches taking place)
// event.touches.length (how many TOUCH POINTS are happening now)
// touch.screenX & touch.screenY find the coordinates
// touch.radiusX & touch.radiusY finds the area covered by the touch
// touch.force returns the amount of pressure being applied as a value between 0 and 1
// touch.identifier is unique to each iteration of a touch event, to ensure it is the same touch

console.log("// REMOVEING EVENT LISTENERS");
const onceParagraph = document.getElementById("once");
onceParagraph.addEventListener("click", remove);
function remove(event) {
  console.log("Enjoy this while it lasts!");
  onceParagraph.style.backgroundColor = "pink";
  onceParagraph.removeEventListener("click", remove);
}

// Stopping default behavior
const brokenLink = document.getElementById("broken");
brokenLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("broken Link!");
});

// Event Propagation
ulElement = document.getElementById("list");
liElement = document.querySelector("#list li");

// capturing

ulElement.addEventListener(
  "click",
  (event) => console.log("Clicked on ul"),
  true
);

liElement.addEventListener(
  "click",
  (event) => console.log("Clicked on li"),
  true
);

// bubbling

ulElement.addEventListener(
  "click",
  (event) => console.log("Clicked on ul"),
  false
);

liElement.addEventListener(
  "click",
  (event) => console.log("Clicked on li"),
  false
);

// liElement.addEventListener(
//   "click",
//   (event) => {
//     console.log("clicked on li");
//     event.stopPropagation();
//   },
//   false
// ); this stops other event listeners from firing and prevents bubbling.

// EVENT DELEGATION
// this uses the 'target' property and adds the listener to the parent element
// to avoid making multiple liElement variables
ulElement.addEventListener("click", highlight);
