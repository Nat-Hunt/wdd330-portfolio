// Higher-Order Functions
import {
  characterScript,
  countBy,
  textScripts,
} from "./chatper5_providedFunctions.js";
// Exercise 1: Flattening
// Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elements of the original arrays
function ex1() {
  let arrays = [[1, 2, 3], [4, 5], [6]];
  // The reduce method does not change the original array, so in order to store the new reduced arrays in memory, it has to be placed in a new variable.
  let reducedArrays = arrays.reduce((a, b) => a.concat(b), []);
  console.log(reducedArrays);

  return reducedArrays;
}

// Exercise 2: Your Own Loop
// Write a higher-order function loop that provides something like a for loop statement.
// @params: It takes a value, a test function, an update function, and a body function.
// 1. Each iteration, it first runs the test function on the current loop value and stops if that returns false.
// 2. Then it calls the body function, giving it the current value.
// 3. Finally, it calls the update function to create a new value and starts from the beginning.
// When defining the function, you can use a regular loop to do the actual looping.
function ex2() {
  function loop(loopValue, testFunction, updateFunction, bodyFunction) {
    for (
      loopValue;
      testFunction(loopValue);
      loopValue = updateFunction(loopValue)
    ) {
      bodyFunction(loopValue);
    }
  }
  loop(
    3,
    (n) => n > 0,
    (n) => n - 1,
    console.log
  );
}

// Exercise 3: Everything
// Analogous to the some method, arrays also have an every method.
// This one returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters.
// Write two versions, one using a loop and one using the some method.
function ex3() {
  function everyLoop(array, test) {
    for (let ele of array) {
      if (!test(ele)) return false;
    }
    return true;
  }
  function everySome(array, test) {
    if (array.some((ele) => !test(ele))) return false;
    return true;
  }
  function every(array, test) {
    console.log("As a loop: " + everyLoop(array, test));
    console.log("Using the 'some' method: " + everySome(array, test));
    let returnValue = "Using the 'every' method: " + array.every(test);
    return returnValue;
  }

  console.log(every([1, 3, 5], (n) => n < 10));
  // → true
  console.log(every([2, 4, 16], (n) => n < 10));
  // → false
  console.log(every([], (n) => n < 10));
  // → true
}

// Exercise 4: Dominant Writing Direction
// Write a function that computes the dominant writing direction in a string of text.
// Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them.
// The 'characterScript' and 'countBy' functions defined earlier in the chapter are probably useful here.
function ex4() {
  // I had to go with the provided answer on this one.
  function dominantDirection(text) {
    // Count how many languages each character in a string of text corresponds to.
    let counted = countBy(text, (char) => {
      let script = characterScript(char.codePointAt(0)); // check which languages correspond to a given character
      return script ? script.direction : "none"; // return script.direction if script exists, else return "none"
    }).filter(({ name }) => name != "none"); // filter the script array into 2 arrays within the counted array. One for rtl, one for ltr.

    if (counted.length == 0) return "ltr"; // if there is nothing in the array, then the text is read left-to-right

    return counted.reduce((a, b) => (a.count > b.count ? a : b)).name; // check if there is more characters read ltr than rtl, return accordingly
  }
  console.log("dominantDirection('Hello!')");
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log("dominantDirection('Hey, مساء الخير')");
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
  console.log("dominantDirection(' ')");
  console.log(dominantDirection(" "));
  // ltr
}

document.getElementById("ch5ex1").addEventListener("click", ex1);
document.getElementById("ch5ex2").addEventListener("click", ex2);
document.getElementById("ch5ex3").addEventListener("click", ex3);
document.getElementById("ch5ex4").addEventListener("click", ex4);
