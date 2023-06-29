# Defining Functions and Function Syntax

## Introduction

Functions are an essential component of programming languages. They allow you to encapsulate a block of code that performs a specific task and reuse it throughout your program. In JavaScript, functions are declared using the `function` keyword and follow a specific syntax and structure. In this guide, we will explore how to declare functions using the `function` keyword and understand the syntax and structure of functions in JavaScript.

## Declaring Functions with the `function` Keyword

In JavaScript, functions are declared using the `function` keyword, followed by the function name, a pair of parentheses `()`, and a pair of curly braces `{}` that enclose the function body. Here's an example of declaring a simple function:

```javascript
function greet() {
    console.log("Hello, world!");
}
```

In the above example, we declare a function called `greet` using the `function` keyword. The function body, enclosed in curly braces, contains the code that will be executed when the function is called. In this case, the function simply logs the string `"Hello, world!"` to the console.

## More Examples

Here's another example of a declaring a function:

```javascript
function addNumbers() {
    let num1 = 5;
    let num2 = 7;
    let sum = num1 + num2;
}
```

In this example, we define a function called `addNumbers`. The function body defines two variables, `num1` and `num2`, assigns them values, calculates their sum.

Here's another one:

```javascript
function hiStranger(){
    console.log("Hi, Stranger!");
}
```

In this example, we define a function called `hiStranger`. The function body logs the strong `"Hi, Stranger!"` to the console.

## Conclusion

Understanding how to declare functions with the `function` keyword and the syntax and structure of functions is fundamental in JavaScript programming. Functions provide a way to organize and reuse code, making your programs more modular and maintainable.

By declaring functions, you can encapsulate specific tasks into reusable blocks of code and improve the efficiency and readability of your programs.
Resources:
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [W3Schools - JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)