/* 
Find the Smallest Number in an Array
*/

// Without Funtion

let arrNum = [42, 17, 93, 58, 11, 76, 24, 89, 5];
let smallest = arrNum [0];

for (let i = 0; i < arrNum.length; i ++) {
    // console.log('i =>', i,'->'arrNum[i])
    let currentNum = arrNum[i]
    
    if (currentNum < smallest) {
       smallest = currentNum ;
    }
};
console.log("Smallest is =>> ",smallest);

console.log('======================')

// With Function 

function findSmallest (arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i ++) {
        if(smallest > arr[i]) {
            smallest = arr[i]
        }
    }
    return smallest;
};

let arrNumber = findSmallest ([150, 320, 45, 999, 12, 678, 88, 1000, 1])
console.log("Smallest is =>> ",arrNumber);

console.log('======================')
console.log("Smallest is =>> ",findSmallest([8, 15, 3, 27, 19, 42, 6, 31, 10]))