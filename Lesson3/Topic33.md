# While Loop

## Introduction

Another type of loop JavaScript provides is the `while` loop for performing iteration based on a condition. The `while` loop continues executing a block of code as long as a specified condition is true. This allows you to create dynamic and flexible loops that adapt to changing conditions during runtime. In this topic, we will explore the usage of the `while` loop for condition-based iteration and controlling the loop with a boolean condition.

## Condition-Based Iteration with the while Loop

The `while` loop executes a block of code repeatedly as long as a given condition remains true. The condition is checked before each iteration, and if it evaluates to true, the code block is executed. Once the condition becomes false, the loop terminates, and the program continues with the next line of code.

Here's the basic syntax of a `while` loop:

```javascript
while (condition) {
  // Code block to be executed while the condition is true
}
```

Let's see an example of using a `while` loop for condition-based iteration:

```javascript
let i = 0;

while (i < 5) {
  // Code to be executed while the condition is true
  console.log("Iteration:", i); 
  i++;
}
```

In the above example, we have initialized the loop control variable `i` with a value of `0`. The `while` loop executes the code block as long as the condition `i < 5` is true.

Inside the loop body, we have `console.log("Iteration:", i);`. This statement logs the current value of `i` to the console. It allows us to see the iteration number as the loop progresses.

After executing the loop body, the `i++` statement increments the value of `i` by `1`. This step is crucial because it ensures that the loop will eventually terminate. If we didn't increment `i`, the condition `i < 5` would always remain true, resulting in an loop which does not end, or an infinite loop.

By incrementing `i` in each iteration, we are making progress towards the termination condition. Initially, `i` is `0`, and with each iteration, it increases by `1`. As long as `i` remains less than `5`, the loop will continue executing, and the value of `i` will increment by `1` in each iteration. Once `i` becomes equal to or greater than `5`, the condition `i < 5` becomes false, and the loop terminates.

By logging the value of `i` within the loop body, we can see the iteration number as the loop progresses. This helps in understanding the flow and behavior of the loop.

## Controlling the Loop with a Boolean Condition

The condition in a `while` loop is evaluated as a boolean expression. It can be any expression that results in a boolean value, such as a comparison or a logical operation. By controlling the loop with a boolean condition, you can customize the looping behavior based on your specific requirements.

Here's an example of using a boolean condition to control a `while` loop:

```javascript
let isRunning = true;

while (isRunning) {
  let userInput = prompt("Enter 'stop' to terminate the loop: ");
  console.log("User input:", userInput);

  if (userInput === "stop") {
    isRunning = false;
  }
}
```

In the above example, the loop will continue executing the code block as long as the boolean variable `isRunning` is `true`. It prompts the user to enter a value, and if the user enters "stop", the value of `isRunning` is set to `false`, terminating the loop.

## Conclusion

The `while` loop is a powerful construct in JavaScript that allows you to perform condition-based iteration. By defining a condition, you can repeat a block of code as long as the condition remains true. This provides flexibility and adaptability in handling different scenarios within your programs.

Remember to use caution when working with `while` loops to ensure the condition eventually becomes false. Otherwise, the loop may continue indefinitely, resulting in an infinite loop. Be mindful of the control flow and make sure to update the loop condition appropriately to avoid such situations.

Resources:
- [MDN Web Docs - while statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [W3Schools - JavaScript While Loop](https://www.w3schools.com/js/js_loop_while.asp)