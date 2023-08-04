# Event Handling Functions

In JavaScript, event handling functions are used to define the behavior or actions that should occur in response to specific events. These functions are associated with event listeners and are executed when the corresponding event is triggered. Event handling functions play a crucial role in creating interactive and dynamic web applications by allowing you to respond to user interactions and trigger actions.

## Responding to User Interactions and Triggering Actions

Event handling functions allow you to respond to various user interactions, such as keystrokes, and form submissions. By defining the appropriate event handling functions, you can trigger actions or modify the behavior and appearance of elements in response to these interactions.

Here are some examples of how event handling functions can be used to respond to user interactions:

### Example: Submit Event

HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Submit Event</title>
</head>
<body>
  <form id="myForm">
    <input type="text" placeholder="Type something...">
    <button type="submit">Submit</button>
  </form>
  <script src="script.js"></script>
</body>
</html>
```

Javascript File:

```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted');
});
```

In this example, the event handling function is defined to prevent the default form submission behavior and log a message when the form is submitted. **`event.preventDefault();`** Within the event handling function, we call the preventDefault() method on the event object. This method prevents the default form submission behavior, which typically results in the page being refreshed or redirected. By calling `preventDefault()`, we can stop this default behavior from happening.

### Example: Click Event

HTML File:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Click Event</title>
</head>
<body>
  <button id="myButton">Click Me!</button>
  <script src="script.js"></script>
</body>
</html>
```

JavaScript File:
```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
  console.log('Button clicked');
});
```

In this example, the event handling function is triggered when the button is clicked, and it logs a message to the console. The `event` parameter can be used to access information about the click event, such as the target element or mouse coordinates.

### Example: Keydown Event

HTML File:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Keydown Event</title>
</head>
<body>
  <p>Press Enter!</p>
  <script src="script.js"></script>
</body>
</html>
```

JavaScript File:

```javascript
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  }
});
```

In this example, the event handling function is triggered when a key is pressed down anywhere on the document. It checks if the pressed key is the Enter key and logs a message to the console. The `event` parameter allows you to access information about the keydown event, such as the pressed key or modifiers.

### Example: Mousemove Event

HTML File:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>MouseMove Event Handling Example</title>
  <style>
    #myContainer {
      width: 300px;
      height: 300px;
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <h1>MouseMove Event</h1>

  <div id="myContainer"></div>

  <script src="script.js"></script>
</body>
</html>
```

JavaScript File:

```javascript
const container = document.getElementById('myContainer');
container.addEventListener('mousemove', function(event) {
  console.log(`Mouse coordinates: (${event.clientX}, ${event.clientY})`);
});
```

In this example, the event handling function is triggered when the mouse is moved over the container element. It logs the mouse coordinates (X and Y) to the console. The `event` parameter provides information about the mousemove event, including the mouse coordinates relative to the viewport.

These examples demonstrate how event handling functions can make use of the `event` parameter to access event-specific information and perform actions based on user interactions.

Please note that the `event` parameter can be named differently. It is a convention to use `event` or `e`, but you can choose any valid identifier. By defining event handling functions, you can respond to user interactions and trigger actions that enhance the interactivity and functionality of your web applications.

## Defining Event Handling Functions Separately

You can also define your event handling functions separately and then use them as second parameters inside your event listeners. This can make your code easier to read, more organized, and allow you to reuse your functions in multiple places.

Here is an example:

```javascript
function handleButtonClick(event) {
  console.log('Button clicked');
}

const button = document.getElementById('myButton');
button.addEventListener('click', handleButtonClick);
```

In this example, the event handling function `handleButtonClick` is defined separately. It logs a message to the console when the button is clicked. After defining the function, it is used as the second parameter inside the `addEventListener` method.

This pattern allows for a clear separation of responsibilities in your code. The `handleButtonClick` function only needs to know how to handle a button click event, while the code that attaches the event listener to the button does not need to know the specifics of what happens when the button is clicked.

### Another Example: Form Submission

```javascript
function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Form submitted');
}

const form = document.getElementById('myForm');
form.addEventListener('submit', handleFormSubmit);
```

In this example, the event handling function `handleFormSubmit` is defined to prevent the default form submission behavior and log a message. This function is then passed as the second argument to the `addEventListener` method on the form element.

This separation of responsibilities can make your code easier to maintain, as it's clear which parts of your code are responsible for handling events, and which parts are responsible for setting up the event listeners.

## Conclusion

Event handling functions are a fundamental aspect of web development, allowing you to respond to user interactions and trigger actions accordingly. By defining these functions, you can create interactive and engaging web experiences for your users.

References:
- [MDN Web Docs - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [JavaScript.info - Introduction to Events](https://javascript.info/introduction-browser-events)