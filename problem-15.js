/* 
Return All Even Number,Then Their Sum
 */

// Without function

let arrNumber = [10, 15, 20, 25, 30];
let evenNumber = [];

for (let i = 0; i < arrNumber.length; i ++) {
    if(arrNumber[i] % 2 === 0) {
        evenNumber.push(arrNumber[i]);     
    };
};
console.log(evenNumber);

// sum of even number
let evenNumberSum = 0;
for (let num of evenNumber) {
    evenNumberSum += num;
}
console.log("All even number some =>",evenNumberSum);

// With Function,,,

function evenSum (arr) {
    let allEvenNum = [];
    let evenNumSum = 0;

    // find even number
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] % 2 === 0) {
            allEvenNum.push(arr[i])
            
        }
    }
    console.log(allEvenNum);

    // sum all even number
    for (let i = 0; i < allEvenNum.length; i ++){
        evenNumSum += allEvenNum[i];
    }
    return evenNumSum;
};

console.log("All even number some =>",evenSum([9, 12, 18, 21, 32, 45]));