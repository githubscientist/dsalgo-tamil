/*
    Arrays and Strings

    - Built-in objects or data structures
    - Arrays are used to store multiple values in a single variable
    - Strings are used to store text
    - Both uses zero-based indexing
    - Arrays are mutable, strings are immutable
*/

// // create a new array
// let numbers = [1, 2, 3, 4, 5];
// // let numbers = new Array(1, 2, 3, 4, 5);

// // console.log(numbers);

// // array uses indexing
// // console.log(numbers[4]);

// numbers[0] = 10;

// console.log(numbers);

// let word = 'apple';

// word[1] = 'm';

// console.log(word);


// let word = 'apple';

// let index = 1;
// let char = 'm';

// // let newWord = word.split('');
// // newWord[index] = char;
// // console.log(newWord.join(''));

// word = word.slice(0, index) + char + word.slice(index + 1,);
// console.log(word);

// traversal or iteration or looping through
let numbers = [5, 2, 6, 3, 1, 4];

// // for loop
// for (let index = 0; index < numbers.length; index++){
//     console.log(numbers[index]);
// }

// // for loop
// let index = 0
// for (; index < numbers.length; ){
//     console.log(numbers[index]);
//     index++
// }

// // while loop
// let index = 0
// while (index < numbers.length){
//     console.log(numbers[index]);
//     index++
// }

// // do...while loop
// let index = 0
// do {
//     console.log(numbers[index]);
//     index++
// } while (index < numbers.length);

// numbers.forEach((value, index, array) => {
//     console.log(value);
// });

// introduced in ES6
// for...in loop

// for (let index in numbers){
//     console.log(numbers[index]);
// }

// for...of loop
// for (let number of numbers){
//     console.log(number);
// }

let word = 'apple';

// for (let index = 0; index < word.length; index++){
//     console.log(word[index]);
// }

// let index = 0
// for (; index < word.length; ){
//     console.log(word[index]);
//     index++
// }

// let index = 0
// while (index < word.length){
//     console.log(word[index]);
//     index++
// }

// let index = 0
// do {
//     console.log(word[index]);
//     index++
// } while (index < word.length);

// for (let index in word){
//     console.log(word[index]);
// }


for (let char of word){
    console.log(char);
}