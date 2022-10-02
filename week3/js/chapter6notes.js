console.log("Chapter 6 Notes");
// THE DOCUMENT OBJECT MODEL
// the DOM represents every element of a webpage as a node. The tags, attributes, and text inside of them.
// the DOM is technically language agnostic, but Javascript uses it the most.

// IMPORTANT, any whitespace in the HTML document is treated as a text node by the DOM

const body = document.body;

console.log(typeof body); // returns "object"

// Getting Elements

body.nodeType;
console.log(body.nodeType); // returns 1

// Code : Type table
// 1    : element
// 2    : attribute
// 3    : text
// 8    : comment
// 9    : body

body.nodeName;
console.log(body.nodeName); // returns "BODY"

// Legacy DOM shortcut methods
console.log(document.body); // returns the body of the web page
console.log(document.images); // returns a node list of images
console.log(document.links); // returns a node list of all <a> and <area> with an 'href' attribute
console.log(document.anchors); // returns a node list all <a> with a 'name' attribute
console.log(document.forms); // returns a node list of all <forms>
// node lists are array-like, but are not arrays. Can be accessed with an index and have a length
// property, but that's it. They have no other methods. However! You CAN turn a node list into an
// array with Array.from()
let imageArray = Array.from(document.images);
console.log(imageArray);
// or you can use the 'spread operator'
imageArray = [...document.images];
console.log(imageArray);

// Getting elements
console.log(document.getElementById("title"));
console.log(document.getElementsByTagName("li")); // returns a node list
console.log(document.getElementsByClassName("hero")); // returns a collection of the given class
console.log(document.getElementsByClassName("hero").length); // returns the length of the collection
// document.querySelector(); // uses CSS notation, so '#' for an ID and '.' for a CLASS. NOTE, this
// only selects the FIRST item in the page that matches. This also uses pseudo-selectors
// document.querySelectorAll(); // uses CSS notation, but returns a node list of ALL elements that
// match the CSS query
// Query Selector CSS notation examples
console.log(document.querySelector("#bats"));
console.log(document.querySelector(".hero"));
const wonderWoman = document.querySelector("li:last-child"); // returns the last item in a list
const ul = document.querySelector("ul#roster");
batman = ul.querySelector("li#bats");

// Navigating the DOM
console.log("NAVIGATING THE DOM");
const heroes = document.getElementById("roster");
console.log(heroes.childNodes); // shows a NodeList of all nodes that are children of the concerned node
console.log(heroes.children); // returns only a list of any ELEMENT nodes and ignores text nodes
console.log(heroes.firstChild); // returns first child (including text nodes)
console.log(heroes.lastChild); // returns the last child (including text nodes)
console.log(wonderWoman.parentNode); // returns the parent node of an element
console.log(wonderWoman.nextSibling); // returns the next adjacent node (including text nodes)
console.log(wonderWoman.previousSibling); // returns the previous adjacent node (including text nodes)

console.log("// Finding the value of a node");
const textNode = wonderWoman.firstChild;
console.log(textNode);
console.log(textNode.nodeValue); // returns just the text
console.log(wonderWoman.textContent); // returns just the text

console.log("// Getting and Setting Attributes");
wonderWoman.setAttribute("class", "villain"); // the first argument is the attribute you want to change,
// the second is the value of that attribute. Can also be used to add a new attribute to the element
wonderWoman.setAttribute("id", "amazon");
console.log(wonderWoman.getAttribute("class"));
console.log(wonderWoman.getAttribute("id"));

console.log("// className Property");
console.log(wonderWoman.className); // shows the class name
wonderWoman.className = "hero"; // directly edits the class, overwrites all other classes.
console.log(wonderWoman.className);

console.log("// classList Property");
wonderWoman.classList.add("warrior"); // the "add" method adds another class without overwritting already
// existing classes.
console.log(wonderWoman.className);
wonderWoman.classList.remove("warrior"); // removes a specific class from the list
console.log(wonderWoman.className);
// the "toggle" method will remove a class if it exists and return false, or will add a class if it doesn't
// exist and return true
wonderWoman.classList.toggle("hero"); // removes the hero class since it is there
console.log(wonderWoman.className);
wonderWoman.classList.toggle("hero"); // adds the hero class since it isn't there
console.log(wonderWoman.className);
// the "contains" method returns true if a class exists and false if it doesn't
console.log(wonderWoman.classList.contains("hero"));
console.log(wonderWoman.classList.contains("villian"));

console.log("// creating a dynamic markup");
const flash = document.createElement("li");
const flashText = document.createTextNode("Flash");
flash.appendChild(flashText);
heroes.appendChild(flash);
console.log(heroes);

function createElement(tag, text) {
  const el = document.createElement(tag);
  el.textContent = text;
  return el;
}
const aquaman = createElement("li", "Aquaman");
heroes.insertBefore(aquaman, wonderWoman);
console.log(heroes);
heroes.appendChild(wonderWoman);
console.log(heroes);
heroes.removeChild(aquaman);
console.log(heroes);

console.log("// replacing elements on a page");
const h1 = document.getElementById("title");
const oldText = h1.firstChild;
const newText = document.createTextNode("Justice League of America");
h1.replaceChild(newText, oldText);

// use the .style property to change specific CSS styles. This is useful, but it is recommended to simply add
// or remove classes as needed and to keep the CSS styles in a separate file.
// Any CSS property names separated by dashes must instead use camelCase notation
console.log(getComputedStyle(wonderWoman)); // returns ALL style information
