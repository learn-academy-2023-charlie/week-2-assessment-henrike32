# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: 
A parameter is raw information/data about a subject, an argument is a statement about a subject that contains parameters
that explains that statement. 

Researched answer: 
Parameter and Argument are two related but distinct concepts in coding. A parameter is a variable that is defined in the function/method signature, while an argument is the actual value that is passed to the function/method when it is called. The parameter is a placeholder for the argument and is used by the function/method to perform its operations.

2. The JavaScript built in method `.map()` takes predefined parameters. What are they? Which are required and which are optional?

Your answer:  
The `.map()` built in method iterates through an array and returns a new array of the same length.

Researched answer: 
The `.map()` method in JS takes two predefined parameters, a callback function and an optional `this` value to use when executing the callback function. The first parameter,the callback function, is required and takes in three arguments: current element or value, the index of the current element, and the array being processed. The second parameter, the `this` value, is optional and rarely used.

3. What is the difference between map and filter?

Your answer: 
The `.map()` built in method iterates through the whole array and produces another array of the same length. While the built in method `.filter()` iterates throught the array just like `.map()` with the difference that you can get a subset of the array or portion of the array that meets a specified condition.

Researched answer:  
In JS, the `.map()` method transforms each element of an array using a callback function and returns a new array of the same length. The `.filter` method, on the other hand, returns a new array containing only the elements that passa a test defined by the callback function.

1. What is iteration?

Your answer: 
Iteration is how you evaluate data with a specified parameter, so if you are iterating through something you are looking through that specified element data and evaluating its contents.

Researched answer: 
Iteration is a process of repeatedly executing a block of code for a certain number of times or until a specific condition is met. It is often used to perform a set of operations on each element of an array or object. The most common ways of performing iteration in JS are using the `for`loop, the `while`loop, and the `do...while`loop.

1. What is the difference between a function and a method?

Your answer: 
A function is a solo block of code that can be invoked by its name and can accept input parameters and return values. A method is a function that is sticked to an object and can be invoked by using the dot notation on that object.

Researched answer: 
The main difference between a function and a method in JS is that a funcion is a standalone block of code that can be called from anywhere in a program, while a method is a function that belongs to an object and is called using the object reference. So, a method is a function that is associated with a specific object, while a function is not tied to any object.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I do not know.

Researched answer: 
Hoisting is a JS behavior where variable and function declarations are moved to the top of their respective scopes. It means that you can use a variable or a function before it is declared in the code. Only declarations are hoisted, not the assignments. Hoisting can sometimes lead to unexpected behaviors and should be used with caution.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: 
Components can have their own properties and methods, which can be passed down from parent components to child components, enabling data sharing and reusability. It can be also seen as a modular and reusable piece of code that encapsulates specifict functionality and can be used in various parts of a program/software. They are used in the context of web development, where they represent individual UI elements or blocks that can be composed to create complex user interfaces.

2. Spread operator: 
The spread operator is represented by `...` and it is used to expand an iterable (such an array or object) into individual elements. Commonly used in array manipulation to concatenate or copy arrays, or to passa multiple arguments to a function. It was  introduced in ES6(2015) and it supported in modern JS environments.

3. React state: 
In React, state is a key concept and is typically used to store information that can change over time, such as user input or data fetched from a server. State also is a built-in object that represents the internal data of a component an can be used to dynamically update the content of the UI, changes to the state trigger a re-render of the component, which updates the corresponding parts of the UI to reflect the new state values.

4. React props: 
In React, props (short for "properties") are a way to exchange data between components, by passing values from a parent component to a child component, also props are a read-only object and cannot b e modified by the child component. Typically used to customize the behavior or appearance of a component, by passing parameters such as styles, text, or functiopns. It can be accessed in the hcild component using the `props` object.

5. DOM events:
Document Object Model or DOM events refer to user actions or system-generated events that can trigger JavaScript code to execute, event listeners can be attached to DOM elements to detect and respond to specific events, such as changing the text in an input field or clicking on a button

