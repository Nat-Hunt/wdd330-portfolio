console.log("Chapter 5 Notes");
// Defining an Object
const superman = {
  name: "Superman",
  "real name": "Clark Kent",
  height: 75,
  weight: 235,
  hero: true,
  villain: false,
  allies: ["Batman", "Supergirl", "Superboy"],
  fly() {
    return "Up, up and away!";
  },
};

// Creating an object
const spiderman = {}; // option 1
const batman = new Object(); // option 2. This isn't recommended though, option 1 is better and uses less lines of code
// Creating an object: shorthand
let heroName = "Iron Man";
let realName = "Tony Stark";
const ironMan = { heroName, realName }; // This is the short way
const feMan = { name: heroName, realName: realName }; // This is the long way

// Accessing Object Properties
console.log(superman.name); // returns 'Superman'
console.log(superman["name"]); // also returns 'Superman'
// dot notation is more common, but brackets can be used to access property
// and method names that don't follow variable naming rules. It can also
// be employed when using the result of an expression as a property key
// ie: superman[2+2]
console.log(superman.city); // returns undefined since the property doesn't exist

// Computed Properties
const hulk = { name: "Hulk", ["catch" + "Phrase"]: "Hulk Smash!" }; // same as const hulk = {name: 'Hulk', 'catchPhrase': 'Hulk Smash!'};
let bewitched = true;
const captainBritain = {
  name: "Captain Britain",
  hero: bewitched ? false : true,
}; // the value of a property can be an expression.
console.log(captainBritain.hero); // returns false
heroName = Symbol("heroName");
const supergirl = { [heroName]: "Supergirl" }; // the new Symbol data type can be used, must be accessed with bracket notation
console.log(supergirl[heroName]); // returns 'Supergirl
realName = Symbol("real name");
supergirl[realName] = "Kara Danvers"; // the Symbol data type can be used to add a new property to an object if you use bracket notation
console.log(supergirl.realName); // returns 'kara Danvers'
// Symbols can be reused by any other object.
// every symbol has a unique value. When using them as property keys, this avoids naming conflicts.
const daredevil = { [heroName]: "Daredevil", [realName]: "matt Murdoch" };

// Calling Methods
superman.fly();
superman["fly"](); // dot or brackets, but parenthesis must be used after the method name
// Checking if properties or methods exist
console.log("city" in superman); // returns false. the IN operator can be used to check if an object has a property
console.log(superman.city !== undefined); // returns false, same as line above.
console.log(superman.hasOwnProperty("city")); // returns false
console.log(superman.hasOwnProperty("name")); // returns true

// Finding all the properties of an object
for (const key in superman) {
  if (superman.hasOwnProperty(key)) {
    console.log(key + ": " + superman[key]);
  }
} // this loops through all keys and prints them to the console after checking the the property is returned
// The next 3 do not require a check since thy only loop through the object in question.
for (const key of Object.keys(superman)) {
  console.log(key);
}
for (const value of Object.values(superman)) {
  console.log(value);
}
for (const [key, value] of Object.entries(superman)) {
  console.log(`${key}: ${value}`);
}

// Adding properties
// at any point in the program, a new method or property can be attached by assigning a value to the new property
superman.city = "Metropolis";
console.log(superman.city);
console.log(superman);
// Changing properties
superman["real name"] = "Kal-El";
for (const [key, value] of Object.entries(superman)) {
  console.log(`${key}: ${value}`);
}

// removing properties
delete superman.fly;
console.log(" ");
for (const [key, value] of Object.entries(superman)) {
  console.log(`${key}: ${value}`);
}
// nested objects
const jla = {
  superman: { realName: "Clark Kent" },
  batman: { realName: "Bruce Wayne" },
  wonderWoman: { realName: "Diana Prince" },
  flash: { realName: "Barry Allen" },
  aquaman: { realName: "Arthur Curry" },
};
console.log(jla.wonderWoman.realName);
console.log(jla["flash"]["realName"]);
console.log(jla.aquaman["realName"]);

// Objects are passed by reference
const thor = { name: "Thor" };
const cloneThor = thor; // This simply adds another name by which we can call the same spot in memory.
// cloneThor and thor reference the same object, not different iterations of it.
cloneThor.name = "Clor";
console.log(cloneThor.name);
console.log(thor.name);
// this doesn't occur with primitive values example:
let a = 1;
let b = a;
b = 2;
console.log(a);

//Objects as parameters to Functions
function greet({ greeting = "Hello", name, age }) {
  return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
console.log(greet({ greeting: `What's up dude`, age: 10, name: `Bart` })); // returns 'What\'s up dude! My name is Bart and I am 10 years old.'
console.log(greet({ name: "Lisa", age: 8 })); // returns 'Hello! My name is Lisa and I am 8 years old.'

// THIS
const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  },
};
