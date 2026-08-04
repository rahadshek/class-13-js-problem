/*
Practicing even and odd problems.
*/

// Without function

let checkNumberEvenOrOdd = 42;
if (checkNumberEvenOrOdd % 2 === 0) {
    console.log("It's even number")
} else {
    console.log ("It's odd number")
};
let checkNumberOddOrEven = 41;
if (checkNumberOddOrEven % 2 === 0) {
    console.log("It's even number")
} else {
    console.log ("It's odd number")
};

console.log("==================")

// with Function

function checkNumberEvOrOd (number) {
    if (number % 2 === 0) {
        return "It's even number"
    } else {
        return "It's odd number"
    }
};

let num = checkNumberEvOrOd (60);
console.log (num);

console.log(checkNumberEvOrOd(65))