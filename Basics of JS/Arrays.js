let items = ["Stellar" , "Architect" , "Rosemerry" , "Princess"];

let student = ["Rhea" , 1 , 98 , "JK Road"];  //Arrays can store values of different datatypes too.

//Array methods ->

// Push() -> Adds element or value to the end of array . Returns array size until and unless changed array is stored in another array variable . Adds a string not individual values as given in the example . If you want to add seprate values , you need to call push() again and again .

let newNames = [];

items.push("Babe , Sweetheart , Baby girl");

console.log(items);

// Pop() -> Removes element from the end and return the deleted value . 

let deletedVal = items.pop();
console.log(deletedVal);
console.log(items);

//toString() -> converts an array to string . It does change original array .

let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
console.log(numbers.toString());

console.log(numbers);

//concat() -> Concatenates 2 arrays .

let marvels = ["Thor" , "Hulk" , "Ironman"];
let dcs = ["Superman" , "Batman"];

let concatenated_array = marvels.concat(dcs);
console.log(concatenated_array);

//unshift() -> Adds element to the start .

items.unshift("Sweetheart");
console.log(items);

//shift() -> Removes element from start and returns the removed element .

items.shift();
console.log(items);

