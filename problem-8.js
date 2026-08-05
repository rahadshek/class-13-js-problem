/* 
Count Words in a String
*/

// without function
let arrWords =  'Objects store data in key-value pairs';

let difWords = arrWords.split(' ');
// console.log(difWords);
let arrWordLen = difWords.length;
console.log('their words is =>',arrWordLen);

console.log ('==================')
// with function

function countWords (str) {
    str.split(' ');
    return str.split(' ').length;

    // or

    // let difWords = str.split(' ');
    // return difWords.length;
    

}

let sentence = countWords ('Functions perform specific tasks.')
console.log ('this sentence word is =>',sentence);

console.log('this sentence word is =>',countWords("Practice makes you a better programmer"))