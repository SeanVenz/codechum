# Event Object

The Event Object in JavaScript provides information about an event that has occurred, such as a user action or a system event. It allows developers to access important details about the event, including its type, target element, and other properties. Additionally, the Event Object can be used to prevent the default browser behavior and control the propagation of events.

In this topic, we will explore how to access event information and properties and demonstrate how to prevent default browser behavior and propagate events using the Event Object.

## Accessing Event Information and Properties

When an event is triggered, an Event Object is automatically created and passed to the event handler function. This object contains valuable information about the event, which can be accessed using the event parameter within the event handler.

Here's an example of accessing event information and properties:

```javascript

const button = document.getElementById("myButton");
button.addEventListener("click", function(event) {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
  console.log("Mouse coordinates:", event.clientX, event.clientY);
});
```

In this example, we have added a click event listener to a button element with the ID "myButton." When the button is clicked, the event object is passed to the function expression as the `event` parameter. We can then access various properties of the event object using dot notation. The code above logs the event type, target element, and mouse coordinates to the console.

## Preventing Default Browser Behavior and Propagating Events

The Event Object also provides methods to prevent the default behavior of the browser associated with a specific event. For example, when a user clicks on a link, the browser navigates to the URL specified in the `href` attribute by default. However, you can use the Event Object to override this behavior and perform custom actions instead.

Here's an example that demonstrates preventing the default browser behavior:

```javascript
const link = document.getElementById("myLink");
link.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Link clicked, but default behavior prevented.");
});
```

In this code snippet, we have added a click event listener to a hyperlink element with the ID "myLink." When the link is clicked, the event object is passed to the anonymous function as the `event` parameter. By calling the `preventDefault()` method on the event object, we prevent the browser from following the link and display the message in the console instead.

In addition to preventing default browser behavior, the Event Object allows developers to control event propagation. Event propagation, also known as event bubbling and event capturing, refers to the process by which events are triggered and propagated through the DOM (Document Object Model) hierarchy.

When an event occurs on an element, such as a click event, the event is initially triggered on that specific element. However, the event doesn't stop there. By default, the event continues to propagate through the DOM, triggering event handlers on the element's ancestors (parent elements) until it reaches the root element (usually the `<html>` element).

There are two phases of event propagation:

1. **Capture Phase**: In this phase, the event starts from the root element and moves down through the DOM hierarchy, triggering event handlers on the ancestors of the target element. This phase is not commonly used in practice.

2. **Bubbling Phase**: After the capture phase, the event enters the bubbling phase, where it starts from the target element and moves up through the DOM hierarchy, triggering event handlers on the ancestors of the target element. This is the default behavior of event propagation and the one most frequently used.

By default, event handlers are executed in the bubbling phase. However, you can use the `stopPropagation()` method of the Event Object to prevent further propagation of the event. When `stopPropagation()` is called within an event handler, it halts the event from triggering event handlers on ancestor elements. This allows you to control where the event stops propagating and which event handlers are executed.

### Example:

Here's a code example that demonstrates event propagation and the use of `stopPropagation()`:

HTML File:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      padding: 20px;
      background-color: #eaeaea;
    }

    .nested {
      padding: 10px;
      background-color: #ffffff;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="nested" id="nestedElement">
      <button id="innerButton">Click me!</button>
    </div>
  </div>

  <script src = "script.js"></script>
</body>
</html>
```
JavaScript File:
```javascript
const nestedElement = document.getElementById("nestedElement");
nestedElement.addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Event stopped propagating at the nested element.");
});

const innerButton = document.getElementById("innerButton");
innerButton.addEventListener("click", function(event) {
  console.log("Inner button clicked.");
});
```
In this example, we have a nested structure of HTML elements. The outer `<div>` with the class "container" represents an ancestor element, and the inner `<div>` with the class "nested" represents the target element where the click event is handled. Inside the inner `<div>`, there is a `<button>` element with the ID "innerButton."

When you click the inner button, the click event is triggered. However, the event propagation is stopped at the nested element due to the `stopPropagation()` method call in its event handler. As a result, the event does not propagate further to the ancestor container element.

## Examples

### Example 1: Changing Background Color on Hover

Let's consider a scenario where we want to change the background color of an element when the user hovers over it. We can achieve this by using the `mouseover` and `mouseout` events and manipulating the `style` property of the target element.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #myElement {
      width: 200px;
      height: 200px;
      background-color: #eaeaea;
    }
  </style>
</head>
<body>
  <div id="myElement"></div>
  <script src = "script.js"></script>
</body>
</html>
```

JavaScript File:
```javascript
const element = document.getElementById("myElement");

element.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "blue";
});

element.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = "#eaeaea";
});
```

In this example, we select an element with the class "myElement" and attach event listeners for `mouseover` and `mouseout` events. When the mouse hovers over the element, the background color is changed to blue, and when the mouse moves out, the background color is reset to the default color.

### Example 2: Keydown Event for Keyboard Input

Suppose we want to capture and display the key that the user presses while focusing on an input field. We can achieve this by using the `keydown` event and accessing the `key` property of the event object.

HTML File:

```html
<!DOCTYPE html>
<html>
<body>
  <input id="myInput" type="text" placeholder="Type something...">
  <script src = "script.js"></script>
</body>
</html>
```

JavaScript File:
```javascript
const inputField = document.getElementById("myInput");

inputField.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});
```

In this example, we attach a `keydown` event listener to an input field. Whenever a key is pressed while the input field is in focus, the event object is passed to the anonymous function, and the pressed key is logged to the console.

## Conclusion

Understanding and utilizing the Event Object is crucial for handling events effectively in JavaScript. It allows developers to access event information, manipulate properties, prevent default browser behavior, and control event propagation. By harnessing the power of the Event Object, you can create interactive and dynamic web applications that respond to user actions precisely.

Remember to refer to the official documentation and authoritative resources for in-depth learning and exploration of the Event Object and its capabilities. Happy coding!

References:
- [MDN Web Docs - Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN Web Docs - Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [MDN Web Docs - Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)