// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

// Constructor function -> It creates a function, which job it's to construct (or create) an object. 
// The name convention for constructors is different (Pascal).
function Circle(radius) {
    // *this* keyword is a reference to the object that is executing this piece of code. By adding (this/reference/name).property, you initialize that property, by changing it or creating a new one.
    this.radius = radius; //creating a new property to an empty object
    this.draw = function () {
        console.log("draw")// draw method to an empty objet
    }
    // return this; -> we don't need to add it here, but it's what's returning at the moment, happening under the hood
}

const circle = new Circle(1); // its logic is the same as "const x = {};" (it creates an object), the "new" operator will return that new object

/* Differences between factory and constructor functions
 factor
*/

// Factory:
 const myCircle = createCircle(1); // we simply call a function, and in this fuction we return a new object

 // meanwhile, in constructor functions, we used a "new" operator, and instead of returning an object, we use "this" keyword, also the name convention is different.

 /* what pattern should I use to create a new object?
the constructor function pattern is familiar to devs who have some experience in coding in languages such as c# or java.

-> Answer: Pick one pattern and just stick with that.

 */