# If-else Statements

## Introduction

Conditional execution is an essential aspect of programming that allows us to control the flow of our code based on certain conditions. JavaScript provides the `if` statement for conditional execution, allowing us to execute a block of code if a specific condition is true. We can also add an `else` statement to provide an alternative execution path when the condition is false. Furthermore, we can use the `else if` statement to specify additional conditions to be checked, and even nest `if` statements within other `if` statements. Understanding how to use `if`, `else if`, `else`, and nested `if` statements is crucial for building flexible and dynamic applications.

## Using if Statements

The `if` statement is used to perform conditional execution of code. It evaluates a condition and executes the associated code block only if the condition is true. Here's the basic syntax of an `if` statement:

```javascript
if (condition) {
  // Code block to be executed if the condition is true
}
```

Here's an example of using the `if` statement:

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
```

In the above example, the code inside the `if` block will be executed only if the `age` is greater than or equal to 18. The user is prompted to enter their age, and if the entered age meets the condition, the message "You are an adult." will be logged to the console.

## Adding else Statements

We can extend the functionality of `if` statements by adding an `else` statement. The `else` statement allows us to specify a block of code to be executed when the `if` condition is false. Here's the basic syntax of an `if-else` statement:

```javascript
if (condition) {
  // Code block to be executed if the condition is true
} else {
  // Code block to be executed if the condition is false
}
```

Here's an example of using the `if-else` statement with user input:

```javascript
let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
```

In the above example, if the entered age is less than 18, the code inside the `else` block will be executed and the message "You are not an adult." will be logged to the console.

## Adding else if Statements

In addition to `if` and `else`, we can use `else if` statements to specify additional conditions to be checked. This allows us to define multiple branches of execution based on different conditions. Here's the basic syntax of an `if-else if-else` statement:

```javascript
if (condition1) {
  // Code block to be executed if condition1 is true
} else if (condition2) {
  // Code block to be executed if condition2 is true
} else {
  // Code block to be executed if all other conditions are false
}
```

Here's an example of using the `if-else if-else` statement with user input:

```javascript
let age = prompt("Enter your age:");

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age <= 30) {
  console.log("You are a young adult.");
} else {
  console.log("You are an adult.");
}
```

In the above example, if the entered age is less than 18, the code inside the first `if` block will be executed and the message "You are a minor." will be logged to the console. If the entered age is between 18 and 30 (inclusive), the code inside the `else if` block will be executed and the message "You are a young adult." will be logged to the console. If all conditions are false, the code inside the `else` block will be executed and the message "You are an adult." will be logged to the console.

## Nested if Statements

We can also nest `if` statements within other `if` statements to create more complex conditions and execution paths. This allows us to check for multiple conditions in a hierarchical manner. Here's an example of nested `if` statements:

```javascript
let num = prompt("Enter a number:");

if (num > 0) {
  if (num % 2 === 0) {
    console.log("The number is positive and even.");
  } else {
    console.log("The number is positive but not even.");
  }
} else {
  console.log("The number is not positive.");
}
```

In the above example, the outer `if` statement checks if the entered number is greater than 0. If it is, the inner `if` statement checks if the number is divisible by 2. Depending on the conditions, different messages will be logged to the console.

## Conclusion

`if`, `else if`, `else`, and nested `if` statements provide powerful control over the flow of our code based on different conditions. They enable us to execute specific code blocks selectively, handle alternative execution paths, and check for multiple conditions in a hierarchical manner. By mastering these statements, we gain the ability to build dynamic and adaptive applications that respond to various scenarios.

References:
- [MDN Web Docs - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [W3Schools - JavaScript if...else Statement](https://www.w3schools.com/js/js_if_else.asp)