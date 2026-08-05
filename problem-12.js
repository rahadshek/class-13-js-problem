/* 
Filter Number Greater Than a value
 */

// up 20

// Without Function

let arrNum = [5, 12, 18, 25, 30, 7, 40, 15];
let value = 20;
let filterValueOne = [];

for (let i = 0; i <= arrNum.length; i ++) {
    if (arrNum[i] > value  ){
        filterValueOne.push(arrNum[i]);
    }
};
console.log(filterValueOne);

console.log('====================')


// With Function 

function filterValue (arr) {
    let value = 50;
    let filterValues = [];
    for (let i = 0; i <= arr.length; i ++){
        if (arr[i] > value){
            filterValues.push(arr[i]);
        }
    }
    return filterValues;
}

console.log (filterValue([10, 55, 42, 67, 89, 23, 50, 100]));

console.log('====================')

let arrNumbers = filterValue ([5, 27, 18, 42, 30, 9, 60, 25, 100]);
console.log (arrNumbers);