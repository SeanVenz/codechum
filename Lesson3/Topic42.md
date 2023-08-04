# Function Invocation and Calling Functions

## Introduction

Functions in JavaScript are designed to be reusable blocks of code that can be executed when needed. To use a function and trigger its execution, you need to invoke or call the function. Function invocation is the process of executing the code within a function. Understanding how to invoke functions and how the code within functions is executed is crucial for utilizing functions effectively in JavaScript. In this topic, we will explore how to invoke functions by calling them and gain an understanding of the execution of function code.

## Invoking Functions by Calling Them

To invoke or call a function in JavaScript, you simply write the function name followed by a pair of parentheses `()`. The parentheses can contain arguments if the function accepts parameters. Here's an example:

```javascript
function greet() {
  console.log("Hello, world!");
}

greet(); // Function invocation
```

In the above example, the `greet` function is invoked by calling it with empty parentheses. This triggers the execution of the code within the function, resulting in the output `"Hello, world!"` being logged to the console.

When invoking a function, it's important to include the parentheses `()` after the function name. Without the parentheses, the function is treated as a reference to the function itself, rather than an invocation.

## Understanding the Execution of Function Code

When a function is invoked, the JavaScript interpreter starts executing the code within the function from top to bottom. It follows a process known as function execution or function call stack.

Here's an example to demonstrate the execution of function code:

```javascript
function multiply(num1, num2) {
  let result = num1 * num2;
  console.log(result);
}

function calculate() {
  let number1 = 5;
  let number2 = 3;
  multiply(number1, number2);
}

calculate(); // Function invocation
```

In this example, there are two functions: `multiply` and `calculate`. The `calculate` function invokes the `multiply` function by passing two arguments, `number1` and `number2`. When the `calculate` function is invoked, the JavaScript interpreter executes the code within the `calculate` function first. It declares two variables and assigns values to them. Then, it encounters the `multiply(number1, number2)` statement, which triggers the execution of the `multiply` function.

The code within the `multiply` function is executed next. It multiplies the two numbers and logs the result to the console. After the `multiply` function completes its execution, the JavaScript interpreter returns to the point where the function was called and continues executing the remaining code within the `calculate` function.

## More Examples

Here are a few more examples of invoking functions by calling them and understanding the execution of function code:

Example 1: Function with Arguments
```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!
```

In this example, the `greet` function takes a parameter `name` and logs a greeting message to the console. By passing different arguments when calling the `greet` function, you can customize the greeting message for different names.

Example 2: Function with Return Value
```javascript
function calculateSum(num1, num2) {
  return num1 + num2;
}

let result = calculateSum(5, 3);
console.log(result); // Output: 8
```

In this example, the `calculateSum` function takes two parameters `num1` and `num2` and returns their sum using the `return` statement. The returned value is then captured in the variable `result` and logged to the console.

Example 3: Nested Function Calls
```javascript
function multiply(a, b) {
  return a * b;
}

function calculateTotal(price, quantity) {
  let subtotal = multiply(price, quantity);
  let tax = multiply(subtotal, 0.1);
  let total = subtotal + tax;
  return total;
}

let totalPrice = calculateTotal(10, 5);
console.log(totalPrice); // Output: 55
```

In this example, the `calculateTotal` function calls the `multiply` function twice to calculate the subtotal and tax based on the price and quantity. It then adds the subtotal and tax to calculate the total price. The returned value is captured in the variable `totalPrice` and logged to the console.

These examples demonstrate different scenarios where functions are invoked by calling them, and the execution flows through the function code based on the order of function calls. By understanding how to invoke functions and how the execution of function code works, you can effectively utilize functions in your JavaScript programs.

## Conclusion

Invoking functions by calling them and understanding the execution of function code are essential concepts in JavaScript. By invoking functions, you trigger the execution of the code within the function, allowing you to utilize and reuse the functionality provided by the function. Understanding the execution of function code helps you grasp the flow of execution and the order in which functions are executed in your JavaScript programs.

Remember to include the parentheses `()` when invoking a function to ensure that the function is executed and to pay attention to the order of function calls in your program to achieve the desired outcome.

References:
- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [W3Schools - JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)