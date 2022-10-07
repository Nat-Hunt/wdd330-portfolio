// Constructor Functions
console.log("// Constructor Functions");
const Dice = function (sides = 6) {
  this.sides = sides;
  this.roll = function () {
    return Math.floor(this.sides * Math.random() + 1);
  };
};
// creating an instance of Dice.
console.log("creating new Dice object...");
const redDice = new Dice();
console.log(redDice);
console.log("redDice.sides -> " + redDice.sides);
console.log("redDice.roll() -> " + redDice.roll());
// NOTE, parenthesis are only required
// if any default arguments need to be provided

// creating a new class for Dice using the ES6 class declaration
class Dice2 {
  constructor(sides = 6) {
    this.sides = sides;
  }

  roll() {
    return Math.floor(this.sides * Math.random() + 1);
  }
  static description() {
    return "A way of choosing random numbers";
  }
}

// creating an instance of Dice2
console.log("creating an instance of Dice2...");
const blueDice = new Dice2(20);
console.log(blueDice);
console.log("blueDice instanceof Dice2 -> " + (blueDice instanceof Dice2));
console.log("blueDice.sides -> " + blueDice.sides);
console.log("blueDice.roll() -> " + blueDice.roll());
// The ES6 class declaration is preferred because it
// uses strict mode and will throw an error when called improperly

// The Constructor Property
console.log("// The Constructor Property");
console.log("blueDice.constructor -> " + blueDice.constructor);

const literalObject = {};
console.log("literalObject.constructor -> " + literalObject.constructor);

// Static Methods
console.log("// Static Methods");
// Static methods are used by the class and cannot be accessed by
// instances of the class
console.log("Dice2.description() -> " + Dice2.description());
// console.log("blueDice.description() -> " + blueDice.description());
// << TypeError: red.description is not a function

// Prototypal Inheritance
console.log("// Prototypal Inheritance");
// Every class in JavaScript uses the prototypal inheritance model.
// Every class has a "prototype" property shared by every instance
// of the class, allowing all properties/methods of the prototype to
// be accessed by every object instantiated by that class.
class Turtle {
  constructor(name) {
    this.name = name;
    this.weapon = "hands";
  }
  sayHi() {
    return `Hi dude, my name is ${this.name}`;
  }
  //   attack() {
  //     return `Feel the power of my ${this.weapon}!`;
  //   }
}

const leo = new Turtle("Leonardo");
console.log(leo);
// << Turtle { name: 'Leonardo' }
console.log(leo.name);
// << 'Leonardo'
console.log(leo.sayHi());
// << 'Hi dude, my name is Leonardo'
try {
  console.log(leo.attack());
} catch (TypeError) {
  console.log("leo.attack is not a function");
}

Turtle.prototype.weapon = "Hands";
Turtle.prototype.attack = function () {
  return `Feel the power of my ${this.weapon}!`;
};
let raph = new Turtle("Raphael");
console.log(raph);
console.log(raph.name);
console.log(raph.sayHi());
console.log(raph.attack());

// To find an unknown prototype, use the getPrototypeOf() method:
console.log(
  "Object.getPrototypeOf(raph) -> " +
    JSON.stringify(Object.getPrototypeOf(raph))
);
console.log(
  "Object.getPrototypeOf(leo) -> " + JSON.stringify(Object.getPrototypeOf(leo))
);

// When a prototype is changed, every instance of the class will receive the new property/method.
// Any instance can overwrite any properties or methods inherited by assigning a new value to them.
// The Prototype should be used to add properties and methods that will remain the same for every instance of a class

// Private Vs Public
// By default all properties and methods are public in JavaScript.
// A way to get around this is by limiting the scope of certain properties/methods. For example:
class Turtle2 {
  constructor(name, color) {
    this.name = name;
    let _color = color;
    this.setColor = (color) => {
      return (_color = color);
    };
    this.getColor = () => _color;
  }
}
// This sets a getter and setter function which prevents access to the _color attribute from being accessed directly
// and allows us to sanitize inputs before they mess with our objects
raph = new Turtle2("Raphael", "Red");
// << Turtle { name: 'Raphael', setColor: [Function], getColor: [Function] }

console.log(raph.getColor());
// << 'Red'

console.log(raph.setColor(4));
// << 4

// Inheritance
console.log("// Inheritance");

// Inheritance using extends
class RegularTurtle {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi dude, my name is ${this.name}`;
  }

  swim() {
    return `${this.name} paddles in the water`;
  }
}
class NinjaTurtle extends RegularTurtle {
  constructor(name, color) {
    super(name);
    this.weapon = "hands";
    this.food = "Pizza";
    let _color = color;
    this.setColor = (color) => {
      return (_color = color);
    };
    this.getColor = () => _color;
  }
  eat() {
    return `Mmm, this ${this.food} tastes great!`;
  }
  attack() {
    return `Feel the power of my ${this.weapon}!`;
  }
  // Polymorphism example. All objects have a "toString()" method, but it can be re-implemented with each object
  // so it works differently, here the NinjaTurtle Object will act differently.
  toString() {
    return `A turtle called ${this.name} who wields a mighty ${this.weapon} and loves to eat ${this.food}`;
  }
}

// Methods can be added to built-in objects (monkey-patching), but is generally frowned on by the JavaScript community
// the Ruby community doesn't care as much and monkey-patching is more common there

// Property Attributes and Descriptors
console.log("// Property Attributes and Descriptors");
// The Object.defineProperty() method can be used to adjust the attributes of new properties

const me = { name: "DAZ" };
Object.defineProperty(me, "eyeColor", {
  value: "blue",
  writable: false,
  enumerable: true,
});
console.log("me.eyecolor = 'purple' -> " + (me.eyecolor = "purple"));
// << { name: 'DAZ', age: 21, eyeColor: 'blue' }
console.log("me.eyecolor -> " + me.eyeColor);

me.age = 21;
me.retirementAge = 65;

Object.defineProperty(me, "yearsToRetirement", {
  get() {
    if (this.age > this.retirementAge) {
      return 0;
    } else {
      return this.retirementAge - this.age;
    }
  },
  set(value) {
    this.age = this.retirementAge - value;
    return value;
  },
});
me.yearsToRetirement;
// << 44
me.yearsToRetirement = 10;
// << 10

me.age;
// << 55

class Dice3 {
  constructor(sides = 6) {
    Object.defineProperty(this, "sides", {
      get() {
        return `This dice has ${sides} sides`;
      },
      set(value) {
        if (value > 0) {
          sides = value;
          return sides;
        } else {
          throw new Error("The number of sides must be positive");
        }
      },
    });

    this.roll = function () {
      return Math.floor(sides * Math.random() + 1);
    };
  }
}

const yellowDice = new Dice3();

yellowDice.sides;
// << "This dice has 6 sides"

yellowDice.sides = 10;
// << 10

yellowDice.sides;
// << "This dice has 10 sides"

// yellowDice.sides = 0;
// << Error: "The number of sides must be positive"

// Mixins
console.log("// Mixins");
const Human = {
  arms: 2,
  legs: 2,
  walk() {
    console.log("Walking");
  },
};
const Superhuman = Object.create(Human);

Superhuman.change = function () {
  return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};
// This function creates a deep copy of an object without linking the new object to the old object like normal inheritance
function mixin(target, ...objects) {
  for (const object of objects) {
    if (typeof object === "object") {
      for (const key of Object.keys(object)) {
        if (typeof object[key] === "object") {
          target[key] = Array.isArray(object[key]) ? [] : {};
          mixin(target[key], object[key]);
        } else {
          Object.assign(target, object);
        }
      }
    }
  }
  return target;
}
function copy(target) {
  const object = Object.create(Object.getPrototypeOf(target));
  mixin(object, target);
  return object;
}

function createSuperhuman(...mixins) {
  const object = copy(Superhuman);
  return mixin(object, ...mixins);
}

const superman = createSuperhuman({ name: "Superman", realName: "Clark Kent" });

superman.change() <<
  "Clark Kent goes into a phone box and comes out as Superman!";

const wonderwoman = createSuperhuman({
  name: "Wonderwoman",
  realName: "Diana Prince",
});

superman.change() <<
  "Diana Prince goes into a phone box and comes out as Wonderwoman!";

const flight = {
  fly() {
    console.log(`Up, up and away! ${this.name} soars through the air!`);
    return this;
  },
};

const superSpeed = {
  move() {
    console.log(`${this.name} can move faster than a speeding bullet!`);
    return this;
  },
};

const xRayVision = {
  xray() {
    console.log(`${this.name} can see right through you!`);
    return this;
  },
};

mixin(superman, flight, superSpeed, xRayVision);

mixin(wonderwoman, flight, superSpeed);

superman.xray();
// << 'Superman can see right through you!'
wonderwoman.fly();
// << 'Up, up and away! Wonder Woman soars through the air!'

// creates a new superhero object that inherits all default properties from
// Superhuman and has the correct name, details, and relevant powers
const flash = createSuperhuman(
  { name: "Flash", realName: "Barry Allen" },
  superSpeed
);

flash.change();
// << 'Barry Allen goes into a phone box and comes out as Flash!'

flash.move();
// << Flash can move faster than a speeding bullet!

// Chaining Functions can be done as long as a method returns 'this'
superman.fly().move().xray();
