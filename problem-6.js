/* 
Count Vowels in a String
*/


//  With Function
let str = 'Programming Hero';
let vowels = 'aeiouAEIOU';
let countVowels = 0;

for (let i = 0; i < str.length; i ++) {
    
console.log ('latter=>> ', i,str[i]);

if (vowels.includes(str[i])) {
console.log ('vowel', i,'^^');
countVowels ++;
}
};
console.log ('Total vowels is =>', countVowels);

console.log('================')

// Without Function

function findVowels (santence) {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;
    for( let i = 0; i < santence.length; i ++) {
        console.log('i ==>', i, santence[i])

        if (vowels.includes(santence[i])){
        console.log('vowels is =>',i)
        vowelCount ++;
    }
    } 
    return vowelCount;
}

let vowelSan = findVowels ("I wake up early every morning");
console.log("tolat vowel is =>", vowelSan);

console.log('======================')
console.log("tolat vowel is =>",findVowels("She drinks coffee every day."))