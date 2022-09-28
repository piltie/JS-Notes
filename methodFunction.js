/* A function is a block of code written to perform some specific set of tasks. We can define a function using the function keyword, followed by Name and optional parameters. Body of function is enclosed in Curly braces.

Features:

The function is executed when something calls/invokes it.
The name may contain letters, digits, dollar signs, underscore.
Parameters are listed inside round parenthesis after the name of the function.
Arguments are values a function receives when it is invoked.
When the control reaches the return statement, js will stop executing and the value is returned to the caller.
*/

function functionName() {
    console.log("ya")
};

functionName();

/* A JavaScript method is a property of an object that contains a function definition. Methods are functions stored as object properties. Object method can be accessed with objectName.methodName()

Features:

Actions that can be performed on objects are what we term JavaScript methods.
The objects can also be called without using parenthesis.
This refers to the owner object in a method.
*/


object = {
    methodName: function() {
        // Content
        console.log("yu")
    }
};

object.methodName();

//or


object2 = {
    methodName2() {
        // Content
        console.log("yo")
    }
};

object2.methodName2();


