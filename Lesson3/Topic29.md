# Logical Operators

## Introduction

Logical operators are used in JavaScript to combine conditions and perform logical operations. They allow you to create complex conditions by combining multiple expressions. JavaScript provides three logical operators: `&&` (AND), `||` (OR), and `!` (NOT). Understanding how to use these operators is essential for writing conditional statements and controlling the flow of your code.

## The AND (`&&`) Operator

The AND operator (`&&`) returns `true` if both operands are `true`. Otherwise, it returns `false`. It evaluates the operands from left to right and stops evaluating as soon as it encounters a `false` value.

Here's an example of using the AND operator:

```javascript
let num1 = 5;
let num2 = 10;
let result = (num1 < 10 && num2 > 5);
console.log(result); // Output: true
```

In the above example, the expression `(num1 < 10 && num2 > 5)` evaluates to `true` because both conditions are true: `num1` is less than `10` and `num2` is greater than `5`.

## The OR (`||`) Operator

The OR operator (`||`) returns `true` if at least one of the operands is `true`. If both operands are `false`, it returns `false`. It evaluates the operands from left to right and stops evaluating as soon as it encounters a `true` value.

Here's an example of using the OR operator:

```javascript
let num1 = 5;
let num2 = 10;
let result = (num1 > 10 || num2 < 5);
console.log(result); // Output: false
```

In the above example, the expression `(num1 > 10 || num2 < 5)` evaluates to `false` because both conditions are false: `num1` is not greater than `10` and `num2` is not less than `5`.

## The NOT (`!`) Operator

The NOT operator (`!`) is a unary operator that returns the opposite of the operand's boolean value. If the operand is `true`, it returns `false`, and if the operand is `false`, it returns `true`.

Here's an example of using the NOT operator:

```javascript
let isLogged = false;
let result = !isLogged;
console.log(result); // Output: true
```

In the above example, the expression `!isLogged` returns `true` because the value of `isLogged` is `false`.

## Operator Precedence

When using multiple logical operators in a single expression, it's important to consider their precedence. The NOT operator (`!`) has the highest precedence, followed by the AND operator (`&&`), and then the OR operator (`||`). However, it's always a good practice to use parentheses to clarify the order of evaluation and make the code more readable.

Here's an example of using parentheses to control the order of evaluation:

```javascript
let num1 = 5;
let num2 = 10;
let num3 = 15;
let result = (num1 < num2) && (num2 < num3);
console.log(result); // Output: true
```

In the above example, the expression `(num1 < num2) && (num2 < num3)` uses parentheses to ensure that the comparison between `num1` and `num2` is evaluated first, and then the result is combined with the comparison between `num2` and `num3`.

## Conclusion

Logical operators are powerful tools for combining conditions and making decisions based on multiple expressions. By using the AND (`&&`), OR (`||`), and NOT(`!`) operators, you can create complex conditions and control the flow of your JavaScript code.

Understanding how to use logical operators correctly allows you to write more flexible and robust code. By combining conditions, you can create sophisticated decision-making processes and solve complex problems in JavaScript applications.

Resources:
- [MDN Web Docs - Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [W3Schools - JavaScript Logical Operators](https://www.w3schools.com/js/js_operators.asp)