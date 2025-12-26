const product = {

   productName : "Parker Jotter Standard CT Ball pen",
   color : "Black",
   rating : 7002,
   isOffer : true,
   price : 270,

}

console.log(product);  //For printing whole object key:value pairs

console.log(product["isOffer"]);  //For printing individual key value

console.log(product.rating);  //Another way of printing individual key value

console.log(typeof(product));
console.log(typeof(product.color));