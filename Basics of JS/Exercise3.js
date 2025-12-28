//For a given array with prices of 5 items -> 250 , 645 , 300 , 900 , 50 , All items have an offer of 10% off on them . Change the array to store final prices after applying the offer .

let items = [250 , 645 , 300 , 900 , 50];
let newItems = [];
for(let i = 0 ; i < items.length ; i++) {

  newItems[i] = items[i] - ((10/100)*( items[i]));
}

console.log(newItems);