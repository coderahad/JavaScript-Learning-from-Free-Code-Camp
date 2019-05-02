//Create a basic javascript object

/**Think about things people see everyday, like cars, shops, and birds. These are all objects: 
 * Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.
 */

let dog = {
    name : "Tommy",
    numLegs : 4
  };

  //Use dot notation to access the properties of an object
  let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Add your code below this line
  
  console.log(dog.name);
  console.log(dog.numLegs);
  
  //Create a method on an object
  /**Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method: */
  let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };
  duck.sayName();
  // Returns "The name of this duck is Aflac."
  /**The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. */

  //Task
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
      return "This dog has " + dog.numLegs + " legs.";
    }
  };
  
  dog.sayLegs();

//Make code more reusable with the this keyword
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
  };
/**In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read. */
//Task
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();
//Define a constructor function
// Think of them as a blueprint for the creation of new objects.
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }
  /*This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.*/

  //Use a constructor to create objects
  let blueBird = new Bird();
  /**Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. 
   * Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name; // => Elvira
   */
// Task
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog();

//Extend constructors to receive arguments

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Fang", "white")

//Verify an object's constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);

myHouse instanceof House;

//Understand own properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary){
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

//Use prototype properties to reduce duplicate code
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

//Iterate over all properties
/*Here is how you add duck’s own properties to the array ownProps and prototype properties to the array prototypeProps:
*/
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]

//Task
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }
  else {prototypeProps.push(property);}
}

//Understand the constructor property

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog){
    return true;
  }
  else {
    return false;
  }
}
//Change the prototype to a new object

function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  numLegs: 4,
  eat: function(){
    console.log("lick lick lick");
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
};

//Remember to set the constructor property when changing the prototype

function Dog(name) {
  this.name = name; 
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

//Understand where an object's prototype comes from 
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

//Understand the prototype chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true


Object.prototype.isPrototypeOf(Dog.prototype);

// Use inheritance so that you don't repeat yourself

function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

/**This and the next challenge will cover how to reuse Animal's methods inside ( blah and slah) without defining them again. It uses a technique called inheritance.

This challenge covers the first step: make an instance of the supertype (or parent).
 * 
 */


//Inherit behaviors from supertype

function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype);  
let beagle = Object.create(Animal.prototype); 

duck.eat(); // Should print "nom nom nom" // one more thing is duck.constructor = f Animal()
beagle.eat(); // Should print "nom nom nom" // and beagle.constructor = f Animal()

/**In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Dog—to be an instance of Animal.
 * 
 */

 //Set the child's prototype to an instance of the parent

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom" //beagle.constructor =   f Animal()

// Reset an inherited constructor property
/**When an object inherits its prototype from another object, it also inherits the supertype's constructor property. */

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

//Add methods after inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){console.log("Woof!");}


// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

//Override inherited methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line

Penguin.prototype.fly = function(){
    return "Alas, this is a flightless bird.";
}

// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());


//Use a Mixin to add common behaviour between unrelated objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line
let glideMixin = function(obj){
    obj.glide = function() {
        console.log("Gliding, yeaaaaa.");
    }
}

glideMixin(bird);
glideMixin(boat);
/**
 * Normally object declared like, let dog ={ name : “Tomy” }
 *  When declared as object constructor, let Dog = function(name){ this.name = name }
 * So, equal sign and function used when constructor declared
 */

//Use closure to protect properties
// FCC example

  function Bird() {
    let hatchedEgg = 10; // private property
  
    this.getHatchedEggCount = function() { // publicly available method that a bird object can use
      return hatchedEgg;
    };
  }
  let ducky = new Bird();
  ducky.getHatchedEggCount(); // returns 10
 //Important notes from challenge

//Understand the immediately invoked function expression

(function () {
  console.log("A cozy nest is ready");
})();


//Use an IIFE to create a Module. From here to the end same lesson. 
//Important things to know from FCC challenge.
// FCC example

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

//We can group these mixins into a module as follows:

let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked

//Here is an example using it:
motionModule.glideMixin(duck);
duck.glide();

//FCC task

let funModule = (function(){
  return {
  isCuteMixin : function(obj) {
  obj.isCute = function() {
    return true;
  };
},
 singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
   };
  }
 }
}) ();
