/* Try -> Lets you test a block of code for errors
Catch -> Lets you handle the error
Throw -> Lets you create custom errors
Finally -> Lets you execute code after try and catch regardless of the result
*/

let json = '{"age": 30}';
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("INcomplete data: No name");
    }
    console.log(user.name);
} catch(err)  {
    console.log("JSON ERROR: " + err);
}

console.log('...Then the execution continues');