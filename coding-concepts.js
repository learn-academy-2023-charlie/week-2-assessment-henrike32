// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
console.log(cohort.split(""))

// a) Your answer: ['c', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '3']
// b) Verify and explain: ['c', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '3'] was the output,
// the method .split("") is used to split a string into an array of substrings based on a specified separator, which is the double quotes signs.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:  nothing, it has no 'return' statement.
// b) Verify and explain: My answer were partially correct, the output given was 'undefined' , because the function has no 'return' 
// statement, which is used to specify a value that a function should return. When a 'return' statement is executed within a function, 
// it immediately stops the execution of the function and returns the specified value, in this case it hasn't given any output because of that. 

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: I't won't work because you are missing a { return } after the arrow function.
// b) Verify and explain: as researched, my answer were wrong, the .map method is called on the array, for each element  in the
// array, the arrow function is called with the current element as its argument. This function multiplies the number by 2 and returns
// the result. The .map creates a new array with the results of calling the arrow function on each element of the original array and the
// result is assigned to the 'multipliedByTwo' constant. The console.log logs the content of 'multipliedByTwo' to the the console.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: my answer were correct. The .filter method is being called on the array and being used in
// conjunction with the arrow function to give an output of an array with only odd numbers. The arrow function '(number)=> number % 2 !== 0'
// is called with the current element as its argument. This function checks if the number has a remainder when divisible by 2,if the number
// has a remainder when divided by 2, then the number is odd and the statement that we get is 'true' which includes the number in the resulting
// array. Else the number it isn't computed in the new array named 'onlyOdds'.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: [ "Javascript", "React", "PostgreSQL", "GitHub" ]
// b) Verify and explain: My answer were incorrect, I rushed through the code to answer quickly and didn't noticed the .languages stating
// that you were logging that part of the object 'myCodingSkills' with an index of '0'.
// After some research I can see that we have an object named 'myCodingSkills' that has several properties( the keys from line 55 to 58) ;
// the 'languages' property is an array that contains two elements "JavaScript" and "Ruby";
// the code 'myCodingSkills.languages[0]' is accessing the first element of the 'languages' array which is "JavaScript";
// the 'console.log' statement logs the result of the code mentioned above into the console.

// --------------------STRETCH:What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Charlie"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: "George"
// b) Verify and explain: The output given was  Learn { student: 'George', cohort: 'Charlie', year: 2023 } .
// This code will create a class named `Learn' with a constructor that takes in a parameter called name
// Inside the constructor it initialize 3 properties of the object : student is set to the value of name
// cohort is set to the string "Charlie" and year is set to the number 2023.
// After defining the class Learn, a new instance of the class is created and named learnStudent
// with "George" taken as an argument and passe as the name parameter.
// The output to the console will show the properties of the learnStudent object, which should include
// student set to "George", cohort set to "Charlie", and year set to 2023.



// Playing a bit with the code to try to print a statement using the class given:
class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
  description() {
    return `${this.student} is studying at ${this.cohort} in the year of ${this.year}`
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent.description())
// output : George is studying at Charlie in the year of 2023 