# Returning Values from Functions

## Introduction

Functions in JavaScript not only allow you to encapsulate blocks of code, but they can also return values. The return statement is used to specify the value that a function should send back after performing its task. By capturing and utilizing the returned value, you can leverage the results of a function's computation for further processing or output. In this topic    , we will explore how to use the return statement to return values from functions and how to capture and utilize those returned values in JavaScript.

## Understanding the Return Statement

In JavaScript, when the `return` keyword is used, it signifies that the function will immediately stop executing and produce a specified value. In essence, the `return` keyword allows a function to output a value, sending it back to the point where the function was called. This returned value can then be used in the rest of your program.

### The Structure of a Return Statement

A return statement generally looks like this:

```javascript
return expression;
```

Here, `expression` represents the value the function should output. If the `return` statement is used without an expression, the function doesn't output a value and `undefined` is returned instead. 

## Using the Return Statement

The return statement is used to explicitly specify the value that a function should return. When the return statement is encountered within a function, it immediately terminates the function's execution and sends the specified value back to the caller. Here's an example:

```javascript
function multiply(num1, num2) {
  return num1 * num2;
}
```

In this example, the `multiply` function takes two parameters, `num1` and `num2`. The function uses the `return` keyword followed by the expression `num1 * num2` to send back the product of the two numbers as the return value.

## What Happens if a Function Doesn't Have a Return Statement

If a function doesn't have a `return` statement, it doesn't output a value. Instead, it performs its operations and then finishes without producing any output. 

Here's an example:

```javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}
```

The `greet` function logs a greeting message to the console but doesn't return anything. When this function is eventually called, it will display the greeting but if you try to store its result in a variable, the value of the variable will be `undefined`.

It's crucial to note that functions in JavaScript always return a value. If you do not specify a return value using the `return` statement, the function will return `undefined`.

## More Examples

Here are a few more examples of using the return statement and capturing the returned value:

Example 1: Calculating the Square of a Number
```javascript
function square(number) {
  return number * number;
}
```
In this example, the `square` function takes a parameter `number` and returns the square of that number.

Example 2: Checking if a Number is Even
```javascript
function isEven(number) {
  if(number % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}
```
In this example, the `isEven` function takes a parameter `number` and uses the modulus operator (`%`) to check if the number is divisible by 2. The function returns `true` if the number is even and `false` otherwise. The returned value is directly used in the `console.log` statements to display whether the numbers `num1` and `num2` are even or not.

These examples demonstrate different scenarios where functions can return values, and those values can be captured and utilized in various ways within the program. By understanding how to use the return statement effectively, you can enhance the flexibility and functionality of your JavaScript functions.

## Conclusion

Returning values from functions in JavaScript allows you to send computed results back to the caller for further utilization. By using the `return` statement, you can specify the value that a function should return. Capturing and utilizing the returned value provides flexibility in handling function outputs and enables you to incorporate those results into other parts of your code.

Remember to consider the desired output and purpose of a function when deciding whether and what to return. The returned value can be used to influence program flow, store results, make decisions, or perform any other operations based on the specific requirements of your application.

References:
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [W3Schools - JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)