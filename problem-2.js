/* sum of a Range of Number (1 to n) */

// Without function
let number = 9;
let sum = 0;

for(let i = 1; i <= number; i ++) {
    console.log('i=>>',i)
    sum +=i 
}
console.log (sum);

console.log('==================')

// with function

function sumRange (number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        
        sum +=i;
    }
    return sum;
}

console.log(sumRange(10));
console.log(sumRange(100));