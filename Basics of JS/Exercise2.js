//For a given array with marks of students -> 85,97,44,37,76,60 , find the average marks of entire class .

let marks = [85 , 97 , 44 , 37 , 76 , 60];
let sum = 0;
for(let i = 0 ; i < marks.length ; i++) {

  sum = sum + marks[i];
}

let average;

average = sum / (marks.length);

console.log("Average marks of entire class = ",average);