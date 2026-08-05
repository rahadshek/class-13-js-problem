/* 
Sum and Average of on  Array
 */

// Without Function

let arrNumberOne = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arrNumberOne.length; i ++) {
    // console.log('i ==>', i, arrNumberOne[i]);
    sum += arrNumberOne[i];

    
};
console.log('total sum is =>',sum);

let average = sum/ arrNumberOne.length;
console.log('Average result is =>',average);



console.log('=======================================')

// With Function

function getAverage (number) {
    let sum = 0;
    for (let i = 0; i < number.length; i ++){
        sum += number[i];
        
    }
    let average = sum / number.length;
    return average;
};


let arrNumberTwo = getAverage ([5, 15, 25, 35, 45, 55]);
console.log('Average result is =>',arrNumberTwo);

console.log('=======================================')

console.log('Average result is =>',getAverage([100, 85, 90, 75, 95, 80, 70]));