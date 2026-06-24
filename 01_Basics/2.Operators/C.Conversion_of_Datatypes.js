// Conversion of a string(numbers only) to number
let x = "20"                    // String
let y = Number(x)               // Number


console.log(typeof x)          // Output : String
console.log(typeof y)          // Output : Number

console.log(x)
console.log(y)


// Conversion of a string(including characters) to number
let a = "132ar"
let b = Number(a)
console.log(b)                  // Output : NaN (Not a Number)


// When any undefined number is output --> NaN
console.log(0/0)



// Conversion different datatypes into number
console.log(Number(true))                           // Output : 1
console.log(Number(false))                          // Output : 0
console.log(Number(undefined))                      // Output : Nan
console.log(Number(null))                           // Output : 0