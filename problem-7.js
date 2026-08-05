/*  
Check if a String is a Palindrome
*/

// Without function

let word = 'madam';
let reverseWord = '';

for (let i = word.length - 1; i >= 0;  i --) {
    // console.log("i =>", i, word[i]);
    reverseWord += word[i]; 
    
};

  if(reverseWord === word){
        console.log("I's palindrome word")   
    } else {
        console.log("I's not palindrome word")
    };
    console.log(reverseWord);

    console.log('================')

// With Function  

function palindromeFind (word) {
    let reversePalindromeWord =  '';
    for (i = word.length - 1; i >= 0; i --) {
        reversePalindromeWord += word[i];
    }
    
    if (word === reversePalindromeWord){
        return "It's palindrome, It's true";
    } else {
        return "It's not palindrome, It's flase";
    }

    return reversePalindromeWord;
};
let wordTwo = palindromeFind ("level");
console.log(wordTwo);

console.log('==============')

console.log(palindromeFind('JavaScript'))