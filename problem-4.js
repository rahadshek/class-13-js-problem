/* 
fizzBuzz (1 to n)
 */

// Loop through numbers form 1 to n. if a number is divisible by 3,print "Fizz";  if a number is divisible by 5,print "Buzz";if a number is divisible by both,print "FizzBuzz"; otherwise ,print the number itself

// 20

// without function

let number = 20
for (let i = 1; i <= number; i ++){
    console.log('i => ',i);

    if (i % 3 === 0 && i % 5 === 0){
        console.log ('FizzBuz^^')
    } else if (i % 3 === 0) {
        console.log ('Fizz^^')
    } else if (i % 5 === 0) {
        console.log ('Buzz^^')
    } else {
        console.log(i)
    }
};

console.log ('=============================')

// With Function 

function fizzBuzz (number) {
    for (let i = 1; i <= number; i ++) {
        console.log("=>> " ,i);

       if (i % 3 === 0 && i % 5 === 0){
        console.log ('FizzBuz^^')
    } else if (i % 3 === 0) {
        console.log ('Fizz^^')
    } else if (i % 5 === 0) {
        console.log ('Buzz^^')
    } 
    
}   
};
fizzBuzz (35);