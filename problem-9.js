/*  
Find the largest Number in an Array
*/


// without Function
let arrNumber =  [5, 8, 2, 10, 1];
let largest = arrNumber [0];

for (let i = 0; i <= arrNumber.length; i ++) {
    let crNumber = arrNumber [i];
    // console.log("crNumber is =>", i, arrNumber[i]);

    if(largest < crNumber){
        largest = crNumber;
    }
}
console.log("largest is =>", largest);

console.log('=======================')
// With Function

function largestArrayFind (arr) {
    let largestArr = arr[0];
    for (let i = 0; i < arr.length; i ++){
        if(largestArr < arr[i]) {
             largestArr = arr[i] ;
        }
    }
    return  largestArr;
};

let numberOne = (largestArrayFind([23, 7, 89, 45, 12, 67, 3]))
console.log("largest is =>",numberOne);

console.log('====================')

console.log("largest is =>",largestArrayFind([500, 1200, 75, 9999, 345, 678, 45]));