// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function findIndex(words) {
    for (let index = 0; index < words.length-1; index++){
        if (words[index] == words[index + 1]) {
            return index;
        }
    }
    return -1;
}

inp.on("close", () => {
    let words = userInput[0].split(' ');
    let dIndex;
    // traverse or loop through the array of words
    do {
        // for every word, find the indices of two adjacent equal words
        dIndex = findIndex(words);

        // if there exists such a index, delete the words at those indices
        if (dIndex != -1) {
            // delete the words
            words.splice(dIndex, 2);
        }
    } while (dIndex != -1);
    // console the string form of the resulting array if array is not empty
    if (words.length > 0) {
        console.log(words.join(' '));
    } else {
        console.log(-1);
    }
    

});