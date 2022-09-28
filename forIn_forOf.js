for (variable in object) {
    statements
} // loops into enumerable properties of an object. if you use it on arrays, it will return the name of your user defined properties in addition tothe numeric indexes, and it's preferable to use a traditional for loop

for (variable of object) {
    statement
} // loops into iterable objects, such as array, map and set
 
let person = {fname: "beau", lname: "carnes", arms:2} // it's not iterable, so "for" doesn't work 

let arr = [3, 5, 7, {minha: "yo"}];
arr.teste = "yo";

let text = "";

/*for (let x in person) {
    text += person[x]; // acessing the object's properties/values like this only works inside "for in"!
    console.log(x);
}
*/

console.log("teste :", arr)

for (let i in arr) {
    console.log(i) // it only gets its numeric indexes, and the user defined properties (teste)
}

for (let i of arr) {
    console.log(i) // it goes through the items in the array
}



console.log(text);