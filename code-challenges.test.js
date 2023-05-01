// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.
// a) Create a test with expect statements for each of the variables provided.
// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
// b) Create the function that makes the test pass.

// ------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// pseudo code -> 
// input - none
// output - check if a number is divisible by three or not
// function name - `diviThree`
// if the number is divisible by three return - "number is evenly divisible by three"
// if the number is not divisible by three return - "number is not evenly divisible by three"

// a) Create a test with expect statements for each of the variables provided.

// describe(`diviThree`, () => {
//     it(`check if a number is divisible by three or not`, () => {
//           expect(diviThree(object1)).toEqual("15 is divisible by three");
//           expect(diviThree(object2)).toEqual("0 is divisible by three");
//           expect(diviThree(object3)).toEqual("-7 is not divisible by three");
//     });
// });

// output:     ReferenceError: diviThree is not defined

// const object1 = { number: 15 } ;
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.

// class Divider {
//     constructor (number) {
//     this.number = number;
//     }
//     answer() {
//         return this.number % 3 === 0;
//     }  
// };

// const diviThree = (obj) => {
//     if (obj.answer()) {
//         return `${obj.number} is divisible by three`;
//     } else {
//         return `${obj.number} is not divisible by three`;
//     }
// };
// const object1 = new Divider(15);
// const object2 = new Divider(0);
// const object3 = new Divider(-7);


// output:  It took me a while but now the test passed.


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code -> 
// input - none
// output - an array with all the words capitalized
// function name - `capWords`

// a) Create a test with expect statements for each of the variables provided.

// describe(`capWords`, () => {
//     it(` an array with all words capitalized`, () => {
//           expect(capWords(randomNouns1)).toEqual(expectedOutput1);
//           expect(capWords(randomNouns2)).toEqual(expectedOutput2);
//     });
// });
// output:     ReferenceError: capWords is not defined <- good.
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
const expectedOutput1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
const expectedOutput2 = ["Temperature", "Database", "Chopsticks", "Mango"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// function capWords(arr) {
//     return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   }


// Comment: To be honest I was stuck at the function part, whenever I tried to use `randomNouns1.charAt(0).toUpperCase()` it would
// always say that `randomNouns1.charAt(0) was not a function. I think I am mixing all the concepts and trying too much to guess instead of research the concepts.

// research -> The capWords function takes an array of words as its parameter and uses the map method to iterate over the array and apply the capitalization logic to each word. The test cases use the toEqual matcher to check if the function returns the expected output for each input array.  -> Quick note, the `word` parameter and the `.charAt()` method is new to me.


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code -> 
// input - none
// output - an array with all the words capitalized
// function name - `capWords`
// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
