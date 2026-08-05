/* 
factorial of a Number
*/

// without function
// 5!

let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i ++) {
    console.log('i =>>',i);
    factorial *=i;
}
console.log(factorial);

console.log('=====================')

// With function

function factorialNumber (num) {
    let factorial = 1;
    for (let i = 1; i <= num; i ++) {
        // console.log('i =>>',i);
        factorial *=i;
    }
    return factorial;
}
console.log(factorialNumber(7));
console.log('===================');
let faNum = factorialNumber (8);
console.log(faNum);
