/*
-> A class is used to create one or more object

You can defined in a class:

-> Instance properties: What they have
    - name
    - age
    - height
(Are unique to each object created) (usually created inside the constructor)

-> Instance methods: What they do
    - talk
    - run
    - jump
(Typically they will use an instance property to achieve their result)

-> every class has a constructor

CONSTRUCTOR: Method that is ran only once during the life of the objects, when the object is being created
*/

class Rectangle {
    // Setup your object (it behaves like a normal method or normal function)
    constructor(width, height, color) {
        console.log("The Rectangle is Being created");

        this.width = width;
        this.height = height;
        this.numOfRequestsForArea = 0;
    }

    get area() {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }

    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }
};

let myRectangle1 = new Rectangle(3, 5, "blue");
myRectangle1.area = 25;
console.log(myRectangle1.area);
console.log(myRectangle1.area);
console.log(myRectangle1.area);
console.log(myRectangle1.numOfRequestsForArea);

/*
-> Static Method: A method which you define on a class, but it's not part of te instantiated object for what's being created. (Helper methods)

*/
class Square {
    constructor (width) {
        this.width = width;
        this.height = width;
    }

    static equals(a, b) {
        // by "there's no instance bonded to this method", it doesn't need that instance to work, it means there's no use of ".this" keyword here, and the arguments doesn't need to be an actual object created only by the Square class
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimensions(width, height) {
        return width === height;
    }
}

let square1 = new Square(8);
let square2 = new Square(8);


console.log(Square.isValidDimensions(square2, square1));

/*
    Inheritance & Extends: Parent and child class. Creates a child class that maintains its features and behavior, but a little bit extra.

    Super -> Calls the parent constructor, assigning the required parameters.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    describe() {
        console.log(`I'm ${this.name} and I'm ${this.age} years old.`)
    };
};

class Programmer extends Person {
    constructor(name, age, yearsOfExperience) {
        super(name, age);

        // Custom behaviour of Programmer
        this.yearsOfExperience = yearsOfExperience;
    };

    code() {
        console.log(`${this.name} is coding.`)
    }
}

const programmers = [
    new Programmer("Dom", 56, 12),
    new Programmer("Jeff", 24, 4)
]

function developSoftware(programmers) {
    // Develop software
    for (let programmer of programmers) {
        programmer.code();
    }
}

developSoftware(programmers);

/* Polymorphism: Is the act of redefining a method inside a derived child class of a parent.

*/

class Animal {
    constructor(name) {
        this.name = name;
    };

    makeSound() {
        console.log("Generic Animal Sound!");
    }
};

class Dog extends Animal {
    constructor(name) {
        super(name);
    };

    makeSound() {
        super.makeSound(); // calls and executes the parent method
        console.log("Woof! Woof!")
    };
};

// make a new instance of animal
const a1 = new Animal("Dom");
const a2 = new Dog("Jeff");
a1.makeSound();
a2.makeSound();

/*
    ##CLASSES IN PRACTICE
*/

