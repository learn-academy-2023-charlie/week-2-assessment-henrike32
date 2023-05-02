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
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
// b) Create the function that makes the test pass.

// ------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// pseudo code -> 
// input - object.
// output - check if a number is divisible by three or not.
// process -> create function named `diviThree` with the conditionals that state that if the number is divisible by three return - "number 
// is  divisible by three" and that states if the number is not divisible by three  to return - "number is not  divisible by three".
// create a class named Divider with the constructor as a number and the number is the value in a key value pair within the object that 
// is being passed in.
// a) Create a test with expect statements for each of the variables provided.

// describe(`diviThree`, () => {
//     it(`check if a number is divisible by three or not`, () => {
//           expect(diviThree(object1)).toEqual("15 is divisible by three");
//           expect(diviThree(object2)).toEqual("0 is divisible by three");
//           expect(diviThree(object3)).toEqual("-7 is not divisible by three");
//     });
// });

// output:     ReferenceError: diviThree is not defined  <- good error

// const object1 = { number: 15 } ;
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.

class Divider {
    constructor (number) {
    this.number = number;
    }
    answer() {
        return this.number % 3 === 0;
    }  
};

const diviThree = (obj) => {
    if (obj.answer()) {
        return `${obj.number} is divisible by three`;
    } else {
        return `${obj.number} is not divisible by three`;
    }
};
const object1 = new Divider(15);
const object2 = new Divider(0);
const object3 = new Divider(-7);

console.log(diviThree(object1));
console.log(diviThree(object2));
console.log(diviThree(object3));


// output:  It took me a while but now the test passed.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code -> 
// input - array of words
// output - an array with all the words capitalized
// process ->
// create a function named `capWords` that takes in an array and return an array with the first index with the toUpperCase() method and
// using the `.substring()` method that removes one character at a specific position in a string and returns the remainder, in this case the first 
// character will be removed from the strings inside the array and using the `+` to concatenate the whole result. 

// a) Create a test with expect statements for each of the variables provided.

// describe(`capWords`, () => {
//     it(` an array with all words capitalized`, () => {
//           expect(capWords(randomNouns1)).toEqual(expectedOutput1);
//           expect(capWords(randomNouns2)).toEqual(expectedOutput2);
//     });
// });

// output:     ReferenceError: capWords is not defined <- good error

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
const expectedOutput1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
const expectedOutput2 = ["Temperature", "Database", "Chopsticks", "Mango"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// function capWords(array) {
//     return array.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//   }
// Comment: To be honest I was stuck at the function part, whenever I tried to use `randomNouns1.charAt(0).toUpperCase()` it would
// always say that `randomNouns1.charAt(0) was not a function. I think I am mixing all the concepts and trying too much to guess instead of research the concepts.

// research -> The capWords function takes an array of words as its parameter and uses the map method to iterate over the array and apply the capitalization logic to each word. The test cases use the toEqual matcher to check if the function returns the expected output for each input array.  -> Quick note, the `word` parameter and the `.charAt()` method is new to me.
// I've gave it some time since last night and came back to code and found that the solution was simpler than I thought, here is the code I've
//  created for this problem:

const capWords = (array) => {
    return array.map((array) => {
        return array[0].toUpperCase() + array.substring(1)
    });
};
console.log(capWords(randomNouns1));
console.log(capWords(randomNouns2));


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code -> 
// input - function that takes in a string 
// output - index of the first vowel
// process - >
// create a function named `firstV`  add the describe statement "index of the first vowel"
// with your it statement "returns something" and a callback function with the expected output.
// using the method toEqual, also creating new variables with the expected outputs to add to this expect statement.
// that takes in an array named `vowels` and make an iteration going through the array checking if they have vowels.
// console.log the function 'firstV' with the variables you want to test.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
const expO1 = 1
// Expected output: 1
const vowelTester2 = "academy"
const expO2 = 0
// Expected output: 0
const vowelTester3 = "challenges"
const expO3 = 2
// Expected output: 2

// describe ( "index of the first vowel", () =>{
//     it("returns something", () =>{
//         expect(firstV).toEqual(expO1)
//         expect(firstV).toEqual(expO2)
//         expect(firstV).toEqual(expO3)
//     })
// })

//output:     ReferenceError: firstV is not defined <- good error

// b) Create the function that makes the test pass.

function firstV(array){
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
    for (let i = 0; i < array.length ; i++) {
        if (vowels.includes(array[i])) {
            return i;
        }
    }
    return -1;
}

console.log(firstV(vowelTester1));
console.log(firstV(vowelTester2));
console.log(firstV(vowelTester3));