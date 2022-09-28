// Old way of using a function inside an object

/* const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    fullName () {
        return `${person.firstName} ${person.lastName}`;
    }
}

console.log(person.fullName());
*/

// Getters and setters way
// getters -> access properties
// setters -> change (mutate) them

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get  fullName () {
        return `${person.firstName} ${person.lastName}`;
    }, // by adding get, you can now access the function like a property (only adding fullName: firstName + lastName, like a property, doesn't work, thus the function is necessary)
    set fullName(value) {
        const parts = value.toUpperCase().split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1]
    } // Runs everytime this property is set, preventing unwanted inputs - it changes the input as however you like
}


person.fullName = "twice fun";
console.log(person.fullName);