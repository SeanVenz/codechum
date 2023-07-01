# Accessing Variables within Different Scopes

## Introduction

In JavaScript, variables can be declared in different scopes, such as the global scope, function scope, or block scope. Each scope defines the accessibility and visibility of variables within specific parts of your code. Understanding how to access variables defined in different scopes is crucial for writing reliable and maintainable JavaScript programs. In this guide, we will explore how to access variables in different scopes and discuss the concept of variable shadowing within nested scopes.

## Accessing Variables in Different Scopes

JavaScript follows a hierarchical structure when it comes to scope. Each new function or block creates a new scope nested within the enclosing scope. To access a variable defined in a particular scope, you need to refer to it within that scope or within any nested scopes.

Here's an example demonstrating the access of variables in different scopes:

```javascript
let globalVariable = "I am a global variable";

function outerFunction() {
  let outerVariable = "I am an outer variable";

  function innerFunction() {
    let innerVariable = "I am an inner variable";
    console.log(globalVariable);
    console.log(outerVariable);
    console.log(innerVariable);
  }

  innerFunction();
}

outerFunction();

// Output:
// "I am a global variable"
// "I am an outer variable"
// "I am an inner variable"
```

In this example, we have three variables: `globalVariable`, `outerVariable`, and `innerVariable`. `globalVariable` is defined in the global scope and is accessible from any part of the code. `outerVariable` is defined within the `outerFunction` and is accessible within the function as well as any nested scopes, such as the `innerFunction`. Similarly, `innerVariable` is defined within the `innerFunction` and is accessible only within that function's scope.

By referencing the variables within their respective scopes, you can access and utilize their values as needed.

## Shadowing Variables in Nested Scopes

In JavaScript, when a variable with the same name is defined in an inner scope, it can "shadow" or temporarily hide the variable with the same name in an outer scope. This means that the inner variable takes precedence over the outer variable within that inner scope.

Here's an example illustrating variable shadowing:

```javascript
let x = 10;

function outer() {
  let x = 20;

  function inner() {
    let x = 30;
    console.log(x); // Output: 30
  }

  inner();
}

outer();
```

In this example, we have a variable `x` declared in the global scope with a value of `10`. Within the `outer` function, there's another variable `x` declared with a value of `20`. Inside the `inner` function, there's yet another variable `x` declared with a value of `30`. When we log `x` within the `inner` function, it references the innermost variable `x`, which is `30`. This demonstrates the concept of variable shadowing, where variables with the same name in different scopes can have different values.

## More Examples

### Example 1: Accessing Variables in Nested Scopes

```javascript
function outer() {
  let x = 10;

  function inner() {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }

  inner();
}

outer();
```

In this example, we have a variable `x` defined in the `outer` function's scope and a variable `y` defined in the `inner` function's scope. The `inner` function can access both `x` and `y` variables, as they are defined in an outer scope and the same scope, respectively.

### Example 2: Variable Shadowing

```javascript
let x = 10;

function outer() {
  let x = 20;
  console.log(x); // Output: 20
}

outer();
console.log(x); // Output: 10
```

In this example, we have a global variable `x` with a value of `10`. Inside the `outer` function, there's a local variable `x` with a value of `20`. When we log `x` within the `outer` function, it references the local variable `x`, which is `20`. Outside the function, when we log `x` again, it references the global variable `x`, which is `10`. This showcases the concept of variable shadowing, where the inner variable temporarily hides the outer variable within its scope.

### Example 3: Error

```javascript
function outerFunction() {
  let outerVariable = "I am an outer variable";

  function innerFunction() {
    let innerVariable = "I am an inner variable";
    console.log(outerVariable);
    console.log(innerVariable);
    console.log(notDefinedVariable); // Error: notDefinedVariable is not defined
  }

  innerFunction();
}

outerFunction();
```

In this example, the `outerFunction` has an `innerFunction` nested within it. Inside the `innerFunction`, we have access to the `outerVariable` and `innerVariable` because they are defined within the enclosing scopes. However, when we try to access `notDefinedVariable`, which is not declared in any of the accessible scopes, it results in an error: `notDefinedVariable is not defined`. This error occurs because the variable is not accessible within the current scope or any outer scopes.

It's important to note that accessing variables outside of their defined scope will result in an error. Make sure to define variables in the appropriate scope to ensure proper access and avoid such errors.

## Conclusion

Understanding how to access variables in different scopes is fundamental to writing effective JavaScript code. By correctly referencing variables within their respective scopes, you can access and utilize their values as needed. Additionally, being aware of variable shadowing in nested scopes helps you avoid potential naming conflicts and ensures that you're accessing the intended variables.

Remember to consider the scope hierarchy and visibility when accessing variables. Practice working with variables in different scopes and pay attention to any shadowing effects that may occur. This knowledge will enhance your ability to write clean, organized, and maintainable JavaScript code.

Resources:
- [MDN Web Docs - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [W3Schools - JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)