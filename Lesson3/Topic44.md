# Variable Declaration and Assignment within Scopes

## Introduction

In JavaScript, understanding how variables are declared and assigned values within different scopes is essential for writing clean and organized code. In this topic, we will explore the concepts of declaring variables within different scopes and assigning values to them.

## Assigning Values to Variables in Different Scopes

Once variables are declared within a scope, you can assign values to them. Assigning values to variables allows you to store and manipulate data as needed within your code.

### Global Scope

In the global scope, you can assign values to global variables directly.

```javascript
let globalVariable = "I am a global variable";
globalVariable = "Updated value";
```

In this example, the initial value of `globalVariable` is "I am a global variable." Later, the value is updated to "Updated value" by assigning a new value to it.

### Local Scope

In local scopes, you can assign values to local variables directly within the respective scopes.

```javascript
function greet() {
  let localVariable = "I am a local variable";
  localVariable = "Updated value";
}
```

In this example, the initial value of `localVariable` is "I am a local variable" within the `greet` function's scope. Later, the value is updated to "Updated value" by assigning a new value to it within the same scope.

## More Examples

```javascript
let outerVariable = "I am an outer variable";

function outerFunction() {
  let innerVariable = "I am an inner variable";
  outerVariable = "Updated value";
  console.log(innerVariable);
}

outerFunction();
console.log(outerVariable);
```

In this example, we have an `outerVariable` declared in the global scope. Inside the `outerFunction`, we have an `innerVariable` declared in the local scope. The `outerVariable` is assigned an updated value within the `outerFunction` scope. Both the `innerVariable` and the updated `outerVariable` can be accessed and logged within their respective scopes.

## Conclusion

Understanding how to declare variables within different scopes and assign values to them is crucial for writing organized and maintainable JavaScript code. By properly scoping variables and assigning values within the appropriate scopes, you can ensure the correct usage and manipulation of data throughout your program.

Resources:
- [MDN Web Docs - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#