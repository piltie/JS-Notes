const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  },
  myDog: "Mariazinha"
};

//const dogName = adventurer.dog?.name;
//console.log(dogName);
// expected output: undefined

//console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

let nestedProp = adventurer?.['cat']['name'];
console.log(nestedProp);