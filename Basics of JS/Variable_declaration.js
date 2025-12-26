// Using 'var' variable declaration

{
  var name = "Rana" 
  var name = "Swamini"  //Redeclaration os variable is possible with var
}

console.log(name)  //Variable declared using 'var' has Global scope

var name = "Avantika"
console.log(name)


//Using 'let' variable declaration

{
  let a = 1109
  console.log(a)
}

//console.log(a)  Not possible becase 'let' has local scope 

{
  let b = 4156
  console.log(b)
}

let b = 7862
console.log(b)  //Since b is declared outside the local block so it is treated as new variable 

//Declaration using 'const'

{
  const c = 100
  console.log(c)
  //const c = 101 not possible because const assign constant value that cannot be changed
}

console.log(c)  //not possible because const has local scope