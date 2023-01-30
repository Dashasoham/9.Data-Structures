/*

// const findMin = (...args) => Math.min(...args);
// findMin(3, 7, 14, 15);

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }); // {a:1, b:2, c:3, d:4}

// //_________________________________________
// let fruits = ['Apple', 'Orange', 'Banana'];
// let newFruitArray = [...fruits];

// // console.log(newFruitArray);

// let arr1 = ['A', 'B', 'C'];
// let arr2 = ['X', 'Y', 'Z'];
// let result = [...arr1, ...arr2];
// // console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']

// let newFruits = ['Cherry', ...fruits];
// // console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana']

// let getFruits = (f1, f2, f3) => {
//   console.log(`Fruits: ${f1}, ${f2} and ${f3}`);
// };
// getFruits(...fruits);

// let obj1 = {
//   id: 101,
//   name: 'Jhon Doe',
// };

// let obj2 = {
//   age: 25,
//   country: 'USA',
// };

// const employee = { ...obj1, ...obj2 };
// console.log(employee);

// let prices = [12, 20, 18];
// let newPrices = [...prices];
// console.log(newPrices);
// console.log(prices);

// let alphabets = ['A', ...'BCD', 'E'];
// console.log(alphabets);

// var prices2 = [12, 20, 18];
// var maxPrice = Math.max(...prices2);
// console.log(maxPrice);

// var newArray = Array(...[, ,]);
// console.log(newArray);

// var newArray2 = [...[, ,]];
// console.log(newArray2);

// Original array randomly generated

let originalArray = [3, 5, 7, 9];
console.log(originalArray);
// let clonedArray = [1, ...originalArray];
let [...clonedArray] = originalArray;
*/

// underscoreCase ✅
// firstName ✅
// someVariable ✅
// calculateAge ✅
// delayedDeparture

console.log('---STRINGS----');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  //   console.log(text);
  const rows = text.split('\n');
  //   console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
