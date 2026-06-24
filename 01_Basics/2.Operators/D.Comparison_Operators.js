                                                            // Comparison Operators 
// Less than, Less than equal
let x = 50
let y = 30
let z = 5*10

console.log(x<y)        // False
console.log(x<=y)       // False
console.log(x<z)        // False
console.log(x<=z)       // True




// Greater than, Greater than equal
let a = 50
let b = 30
let c = 5*10

console.log(a>b)        // True
console.log(a>=b)       // True
console.log(a>c)        // False
console.log(a>=c)       // True



// double equal and triple equal
let p = "10"
let q = 10

console.log(p==q)       // True  (Checks value but doesn't check the datatype)
console.log(p===q)      // False (Checks the datatype and value both)

// String Conversion to Number
let r = Number(p)

console.log(p==r)       // True
console.log(p===r)      // False 
console.log(q==r)       // True
console.log(q===r)      // True