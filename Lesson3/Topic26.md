# Input and Output

## Introduction

Input and output are essential aspects of programming that allow us to interact with users and display information. In JavaScript, we can collect user input, store it in variables, and use it in our programs. Additionally, we can display output using various methods, including the `console.log` statement. Understanding how to collect user input and display output is crucial for building interactive and dynamic JavaScript applications.

## Collecting User Input

Collecting user input involves prompting the user for information and storing that input in variables for further processing. JavaScript provides the `prompt` function, which displays a dialog box that allows the user to enter data.

Here's an example of collecting user input using the `prompt` function:

```javascript
let name = prompt("Please enter your name:");
```

In the above example, the `prompt` function displays a dialog box with the message "Please enter your name:" and waits for the user to enter their name. The value entered by the user is then stored in the variable `name` for further use in the program.

## Reading Data from Variables

Once we have collected user input and stored it in variables, we can access and read the data from those variables. We can use the variable name to retrieve the value.

Here's an example of reading data from variables:

```javascript
let name = "John";
let age = 25;
let city = "New York";

console.log(name);
console.log(age);
console.log(city);
```

In the above example, we have variables `name`, `age`, and `city` that store different types of data. By using `console.log` statements, we can display the values stored in these variables. Each `console.log` statement outputs the value of a specific variable to the console.

## Displaying Output with console.log

The `console.log` statement is a powerful tool for displaying output in JavaScript. It allows us to print messages and values to the console, which can help us understand the program flow and track the values of variables during runtime.

Here's an example of using `prompt` and `console.log` to ask and to display user input:

```javascript
console.log("Please enter your name:");
let name = prompt("Enter your name:");
console.log("Welcome, " + name + "!");

console.log("Please enter your age:");
let age = prompt("Enter your age:");
console.log("You are " + age + " years old.");

console.log("Please enter your city:");
let city = prompt("Enter your city:");
console.log("You live in " + city + ".");

```

In the above example, we use `console.log` statements to display messages to the console. These messages can serve as instructions or prompts for the user.

## Conclusion

Input and output are crucial for building interactive and dynamic JavaScript applications. By collecting user input and displaying output, we can create programs that interact with users and provide meaningful information. The `prompt` function allows us to collect user input, while the `console.log` statement enables us to display output and track the values of variables during runtime. Understanding how to collect user input and display output enables us to create more engaging and interactive JavaScript applications.

Resources:
- [MDN Web Docs - prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [MDN Web Docs - console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)
- [W3Schools - JavaScript Input and Output](https://www.w3schools.com/js/js_output.asp)