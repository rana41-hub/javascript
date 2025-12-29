//map() -> Similar to forEach() but creates a new array . 

//Ex -> Priting square of numbers in a given array .
let num1 = [4 , 5 , 7 , 9 , 2 , 6];
let output1 = num1.map((val) => {

  return (val*val);
});

console.log(output1);

// filter() -> Filters and return specific values from an array base on the condition .

//Ex -> Printing Even numbers from an array . 

let num2 = [4 , 5 , 7 , 9 , 2 , 6];
let output2 = num2.filter((val) => {

  return val % 2 === 0;
})

console.log(output2);

// reduce() -> Used in operations where there are mutiple operands but single output is desired .

//Ex -> Finding greatest number among all the numbers in an array .

let num3 = [4 , 5 , 7 , 9 , 2 , 6];
let output3 = num3.reduce((prev , curr) => {

  return prev > curr ? prev : curr;
});

console.log(output3);
