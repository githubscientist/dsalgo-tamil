// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

// /**
//  * @param {number} totalCandies
//  * @param {number[]} candies
//  * @param {number} i
//  * @return {boolean}
//  */
// var isGreater = function(totalCandies, candies, i) {
//     // make an assumption that totalCandies is >= all the other kids from candies array except i
//     let assumption = true;

//     // loop through the candies array j<-0 to candies.length - 1
//     for(let j=0; j<candies.length; j++){
//         if(i!=j){
//             // if the totalCandies is lesser than one of the candies, update the assumption
//             if(totalCandies < candies[j]){
//                 assumption = false;
//             }
//         }
//     }

//     // return the assumption
//     return assumption;
// }

// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// var kidsWithCandies = function(candies, extraCandies) {
//     // create or initialize an empty array
//     let result = [];

//     // traverse or iterate or loop through the candies array i <- 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every kid at the index i
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies >= than all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// // time complexity: O(N)
// var isGreater = function(totalCandies, candies) {
//     for(let candy of candies)
//         if(totalCandies < candy) return false;
//     return true;
// }

// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create or initialize an empty array
//     let result = [];

//     // traverse or iterate or loop through the candies array i <- 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every kid at the index i
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies >= than all the other kids candies
//         if(isGreater(totalCandies, candies)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create or initialize an empty array
//     let result = [];

//     // traverse or iterate or loop through the candies array i <- 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every kid at the index i
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // find the greatestCandy
//         let greatestCandy = Math.max(...candies);

//         // check if the totalCandies >= than all the other kids candies
//         if(totalCandies >= greatestCandy){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create or initialize an empty array
//     let result = [];

//     // find the greatestCandy
//     let greatestCandy = Math.max(...candies);

//     // traverse or iterate or loop through the candies array i <- 0 to candies.length - 1
//     for(let i=0; i<candies.length; i++){
//         // for every kid at the index i
//         // find the totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies >= than all the other kids candies
//         if(totalCandies >= greatestCandy){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i in candies){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let candy of candies){
//         result.push(candy + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach((candy) => {
//         result.push(candy + extraCandies >= greatestCandy);
//     });
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => result.push(candy + extraCandies >= greatestCandy));
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => candy + extraCandies >= greatestCandy);
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// time complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};