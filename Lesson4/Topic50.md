## Event Handling Functions

In JavaScript, event handling functions are used to define the behavior or actions that should occur in response to specific events. These functions are associated with event listeners and are executed when the corresponding event is triggered. Event handling functions play a crucial role in creating interactive and dynamic web applications by allowing you to respond to user interactions and trigger actions.

## Responding to User Interactions and Triggering Actions

Event handling functions allow you to respond to various user interactions, such as keystrokes, and form submissions. By defining the appropriate event handling functions, you can trigger actions or modify the behavior and appearance of elements in response to these interactions.

Here are some examples of how event handling functions can be used to respond to user interactions:

### Example: Submit Event

```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted');
});
```

In this example, the event handling function is defined to prevent the default form submission behavior and log a message when the form is submitted. **`event.preventDefault();`** Within the event handling function, we call the preventDefault() method on the event object. This method prevents the default form submission behavior, which typically results in the page being refreshed or redirected. By calling `preventDefault()`, we can stop this default behavior from happening.

### Example: Click Event

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
  console.log('Button clicked');
});
```

In this example, the event handling function is triggered when the button is clicked, and it logs a message to the console. The `event` parameter can be used to access information about the click event, such as the target element or mouse coordinates.

### Example: Keydown Event

```javascript
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  }
});
```

In this example, the event handling function is triggered when a key is pressed down anywhere on the document. It checks if the pressed key is the Enter key and logs a message to the console. The `event` parameter allows you to access information about the keydown event, such as the pressed key or modifiers.

### Example: Mousemove Event

```javascript
const container = document.getElementById('myContainer');
container.addEventListener('mousemove', function(event) {
  console.log(`Mouse coordinates: (${event.clientX}, ${event.clientY})`);
});
```

In this example, the event handling function is triggered when the mouse is moved over the container element. It logs the mouse coordinates (X and Y) to the console. The `event` parameter provides information about the mousemove event, including the mouse coordinates relative to the viewport.

These examples demonstrate how event handling functions can make use of the `event` parameter to access event-specific information and perform actions based on user interactions.

Please note that the `event` parameter can be named differently. It is a convention to use `event` or `e`, but you can choose any valid identifier. By defining event handling functions, you can respond to user interactions and trigger actions that enhance the interactivity and functionality of your web applications.

Resources:
- [MDN Web Docs - Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [W3Schools - JavaScript Events](https://www.w3schools.com/js/js_events.asp)