function readFromLS(key) {
  // parse a value into JSON using the key
  // return an array of objects
  let storedTasks = JSON.parse(localStorage.getItem(key));

  return storedTasks;
}

function writeToLS(key, data) {
  // data is an array of objects (must be serialized)
  // key is a string
  // create an array of objects in Local Storage using the key provided
  localStorage.setItem(key, JSON.stringify(data));
}

export { readFromLS, writeToLS };
