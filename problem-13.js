/* 
Loop through an object's properties
 */
// for.......in
const student = {
  name: "Rahim",
  age: 20,
  grade: "A",
  isPassed: true
};

for (let keys in student){
    // console.log(key);
    console.log(keys, ':', student[keys]);
};

console.log('========================================');

// for..........of
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White"
};

let carKeys = Object.keys(car);
// console.log(carKeys);

for (let nameKeys of carKeys) {
    console.log (nameKeys, ':', car[nameKeys])
};

console.log('========================================');

// for

const book = {
  title: "JavaScript Basics",
  author: "John Doe",
  pages: 250,
  price: 499
};

let objKeys = Object.keys(book);
for (let i = 0; i < objKeys.length; i ++) {
    let bookKeys = objKeys[i];
    console.log(bookKeys, ':', book[bookKeys])
}