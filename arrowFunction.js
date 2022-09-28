/* shorter than normal functions, and it doesn't bind its own "this", best suited for non-method functions
*/

//Syntax
(parameter1, parameter2) => { statements };
(parameter1, parameter2) => expression; // this (without the curly braces)
// returns the same as this:
(parameter1, parameter2) => { return expression; }

// Parentetis are option as long as there is only one parameter
(singleParam) => { statements }
singleParam => { statements } // these two are equivalent

// If it's a function without parameters, it requires parentesis
() => { statements };
() => expression;
() => { return expression; }

(param1, param2, param3 ) => expression

// NORMAL FUNCTION
var multiply0 = function(x,y) {
    return x*y;
};
// ARROW FUNCTION VERSION
multiply1 = (x, y) => { 
    x = x+1
    return console.log(x, y);}
//or
multiply2 = (x, y) => { console.log(x*y); }
//or
multiply3 = (x, y) => console.log(x*y);

// no binding of this
// arrow function doesn't create its own "this" value
function Person() {
    this.age = 0;

    /*setInterval(() => {
        this.age++;
    }, 1000);*/ // -> work as expected

    /*function interval() {
        setInterval(() => {
            this.age++;
            console.log(this.age)
        }, 1000);
    }

    interval();*/ // -> it doesn't work (returns NaN, because "this" refers to an global object; window)
}

let p = new Person();

console.log(p.age)

// returning object literals
let func = () => ({ foo: 1 }); // always has to put that object in parenthesis, if not, it will refer to an statement

// you're not allowed to have line breaks
let func = ()
            => 1; // it doesn't work
