# Global Scope and Local Scope

## Introduction

In JavaScript, scope refers to the visibility and accessibility of variables, functions, and objects in a particular part of your code. Understanding scope is crucial for writing clean and maintainable code as it determines where variables are accessible and how they interact with each other. JavaScript has two main types of scope: global scope and local scope. In this topic, we will explore the concepts of global and local scope, understand the scope hierarchy, and learn how to access variables within different scopes.

## Global Scope

Variables declared outside of any function or block have global scope. Global scope means that these variables are accessible from anywhere within the JavaScript program, including inside functions, blocks, and other scopes. Global variables have the broadest scope in your code, but it's important to use them judiciously to avoid naming conflicts and unintended modifications.

Here's an example of a variable with global scope:

```javascript
let globalVariable = "I am a global variable";

function greet() {
  console.log(globalVariable);
}

greet(); // Output: "I am a global variable"
```

In this example, `globalVariable` is declared outside of any function, making it accessible globally. The `greet` function can access and use `globalVariable` because it is within the global scope. Invoking the `greet` function logs the value of `globalVariable` to the console.

## Local Scope

Variables declared inside a function or block have local scope. Local scope means that these variables are only accessible within the function or block in which they are defined. They cannot be accessed from outside the function or block. Local variables protect the variable names from conflicting with other variables in different scopes.

Here's an example of a variable with local scope:

```javascript
function greet() {
  let localVariable = "I am a local variable";
  console.log(localVariable);
}

greet(); // Output: "I am a local variable"

console.log(localVariable); // Error: localVariable is not defined
```

In this example, `localVariable` is declared inside the `greet` function. It is only accessible within the function's scope. Invoking the `greet` function logs the value of `localVariable` to the console successfully. However, trying to access `localVariable` outside of the function results in an error because it is not defined in the global scope.

## Scope Hierarchy and Access to Variables

JavaScript follows a hierarchical structure when it comes to scope. Each new function or block creates a new scope, nested within the enclosing scope. This hierarchical structure allows variables to have different values in different scopes without interfering with each other.

Here's an example demonstrating scope hierarchy and variable access:

```javascript
let globalVariable = "I am a global variable";

function myFunction() {
  let outerVariable = "I am an outer variable";
  console.log(globalVariable);
  console.log(outerVariable);
}

myFunction();


// Output:
// Output: "I am an outer variable"
// Output: "I am an outer variable"
```

In this example, we have a global variable `globalVariable` that can be accessed from anywhere within the program. Inside the `outerFunction`, we declare a local variable `outerVariable` which is accessible within the `outerFunction` scope.

Both `globalVariable` and `outerVariable` can be accessed and logged within the `outerFunction` because they are in the same or higher scope.

Executing the code will output the values of both variables, demonstrating the hierarchical nature of scope and the ability to access variables from higher scopes within functions.

## Shadowing Variables in Nested Scopes

In JavaScript, when a variable with the same name is defined in an inner scope, it can "shadow" or temporarily hide the variable with the same name in an outer scope. This means that the inner variable takes precedence over the outer variable within that inner scope.

Here's an example illustrating variable shadowing:

```javascript
let x = 10;

function outer() {
  let x = 20;

  function inner() {
    let x = 30;
    console.log("Inner: " + x); // Output: 30
  }
  inner();
  console.log("Outer: " + x); //Output: 20
}
outer();
console.log("Global: " + x); //Output 10;
```

In this example, a variable `x` is initially declared in the global scope with a value of `10`. However, within the function `outer`, another variable `x` is declared, this time with a value of `20`. This instance of `x` shadows the `x` from the global scope within the confines of the `outer` function. The same phenomenon occurs within the `inner` function, where yet another variable `x` is declared, now with a value of `30`. Here, this `x` shadows both the `x` from the `outer` function and the `x` from the global scope within the `inner` function.

When the `console.log(x)` statement is executed inside the `inner` function, it refers to and outputs the value of the innermost `x` (which is `30`), as this is the `x` it has access to due to the variable shadowing. Likewise, when `console.log(x)` is executed inside the `outer` function but outside the `inner` function, it outputs `20`, and when executed in the global scope, it outputs `10`.

This demonstrates the concept of variable shadowing in JavaScript, wherein variables with the same name in different scopes can coexist without influencing each other, with the closest scoped variable taking precedence within its respective block or function scope.

## Conclusion

Understanding global and local scope is crucial for writing maintainable and bug-free JavaScript code. Global scope allows variables to be accessed from anywhere within the program, while local scope provides encapsulation and protects variable names from conflicts. By understanding the scope hierarchy and variable access rules, you can effectively manage and utilize variables in different scopes, leading to cleaner and more modular code.

References:
- [MDN Web Docs - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [W3Schools - JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)
