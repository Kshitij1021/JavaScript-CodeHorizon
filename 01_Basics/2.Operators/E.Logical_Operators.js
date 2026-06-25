                                                            // Logical Operators 
// and (&&) --> True, only when all the conditions are true
//                              OR
//          --> False, when any one condition is False
console.log(true && true && false)              // --> "False"
console.log(true && true)                       // --> "True"
console.log(2<4 && 4>1)                         // I statement - True,  II statement - True,  hence "True"
console.log(2<4 && 4<1)                         // I statement - True,  II statement - False, hence "False"
console.log(2>4 && 4<1)                         // I statement - False, II statement - False, hence "False"

// or (||)  --> True, when any of the either condition is true
console.log(true || true || false)              // --> "True"
console.log(true || true)                       // --> "True"
console.log(2<4 || 4>1)                         // I statement - True,  II statement - True,  hence "True"
console.log(2<4 || 4<1)                         // I statement - True,  II statement - False, hence "True"
console.log(2>4 || 4<1)                         // I statement - False, II statement - False, hence "False"

// not equal to (!=)
console.log(4 != 4)                             // "False"
console.log(8 != 23)                            // "True"
console.log(4 != "4")                           // "False"