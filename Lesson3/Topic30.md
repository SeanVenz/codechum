# if-else Statements

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
let age = 18;

if (age >= 18) {
  // Code to be executed if the condition is true
}
```

In the above example, the code inside the `if` block will be executed only if the `age` is greater than or equal to 18. If the condition is true, code blocks inside the `if` statement will be executed.

## Adding else Statements

We can extend the functionality of `if` statements by adding an `else` statement. The `else` statement allows us to specify a block of code to be executed when the `if` condition is false. Here's the basic syntax of an `if-else` statement:

```javascript
if (condition) {
  // Code block to be executed if the condition is true
} else {
  // Code block to be executed if the condition is false
}
```

Here's an example of using the `if-else` statement:

```javascript
let age = 16;

if (age >= 18) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
```

In the above example, if the `age` is less than 18, the code inside the `else` block will be executed.

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

Here's an example of using the `if-else` statement:

```javascript
let age = 20;

if (age < 18) {
  // Code to be executed if the condition1 is true
} else if (age >= 18 && age <= 30) {
  // Code to be executed if the condition2 is true
} else {
  // Code to be executed if all other conditions are false
}
```

In the above example, if the `age` is less than 18, the code inside the first `if` block will be executed. If the `age` is between 18 and 30 (inclusive), the code inside the `else if`

 block will be executed. If all conditions are false, the code inside the `else` block will be executed.

## Nested if Statements

We can also nest `if` statements within other `if` statements to create more complex conditions and execution paths. This allows us to check for multiple conditions in a hierarchical manner. Here's an example of nested `if` statements:

```javascript
let num = 10;

if (num > 0) {
  if (num % 2 === 0) {
    // Code to be executed if num is positive and even
  } else {
    // Code to be executed if num is positive but not even
  }
} else {
  // Code to be executed if num is not positive
}
```

In the above example, the outer `if` statement checks if `num` is greater than 0. If it is, the inner `if` statement checks if `num` is divisible by 2. Depending on the conditions, different code blocks will be executed.

## Conclusion

`if`, `else if`, `else`, and nested `if` statements provide powerful control over the flow of our code based on different conditions. They enable us to execute specific code blocks selectively, handle alternative execution paths, and check for multiple conditions in a hierarchical manner. By mastering these statements, we gain the ability to build dynamic and adaptive applications that respond to various scenarios.

Resources:
- [MDN Web Docs - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [W3Schools - JavaScript if...else Statement](https://www.w3schools.com/js/js_if_else.asp)