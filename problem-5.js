/* 
Reverse a String
*/

// Without Function

let str = 'Progamming';
let reverseStr='';

for(let i = str.length - 1; i >= 0; i --) {
    let latter = str[i];
    console.log ('i==>',i,latter);
    reverseStr += latter;
}

console.log(reverseStr);

console.log('======================')
// With Function

function strWord (santence) {
    let reverseStrWord = '';
    for (let i = santence.length -1; i >= 0; i --) {
        reverseStrWord += santence[i];
    }
    return reverseStrWord;
}

let santence = strWord ('I love Programming');
console.log(santence);

console.log('================')
console.log(strWord('I solving the problem'));