# Event Object

The Event Object is a fundamental concept in web development that allows developers to interact with and handle various events that occur within a web page. Events can include actions such as clicks, mouse movements, key presses, form submissions, and more. In this guide, we will explore two important aspects of the Event Object: accessing event information and properties, and preventing default browser behavior while propagating events.

## Introduction

When working with web development, it's essential to understand how to handle events. The Event Object provides valuable information about events and allows us to control their behavior. By accessing event information and properties, we can retrieve specific details about the events occurring on elements within a web page. Additionally, by preventing default browser behavior and propagating events, we can customize the behavior of our web applications and create more interactive user experiences.

## Accessing Event Information and Properties

To access event information and properties, we can utilize the Event Object that is automatically created when an event occurs. This object contains valuable information about the event, such as the type of event, the element that triggered the event, and other relevant details.

Here's an example of how to access event information using JavaScript:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Accessing Event Information</title>
</head>
<body>
  <button id="myButton">Click Me!</button>

  <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
document.getElementById("myButton").addEventListener("click", function(event) {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
  console.log("Mouse coordinates:", event.clientX, event.clientY);
});
```

In the above code snippet, we have an HTML file with a button element. We create an external JavaScript file called `script.js` to separate the JavaScript code. In `script.js`, we attach a click event listener to the button. When the button is clicked, the event handler function is called with the event object as the argument. We can then access various properties of the event object, such as `type`, `target`, and `clientX`/`clientY` to retrieve information about the event.

To learn more about the properties and methods available on the Event Object, refer to the [Mozilla Developer Network (MDN) documentation on the Event Object](https://developer.mozilla.org/en-US/docs/Web/API/Event).

## Preventing Default Browser Behavior and Propagating Events

There may be cases where we want to prevent the default behavior associated with an event or control how events propagate through the DOM tree.

### Preventing Default Behavior

To prevent the default behavior of an event, we can use the `preventDefault()` method of the Event Object. This allows us to stop the default action associated with the event.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Preventing Default Behavior</title>
</head>
<body>
  <form id="myForm">
    <input type="text" name="username" placeholder="Username">
    <button type="submit">Submit</button>
  </form>

  <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submitted!");
});
```

In the above example, we have a form element with an input field and a submit button. When the form is submitted, the event handler function is called with the event object as the argument. Within the event handler function, we call the `event.preventDefault()` method to prevent the default form submission behavior. Instead of the form

 being submitted and the page reloading, we can perform custom actions or handle the form data as needed.

### Propagating Events

By default, events in JavaScript follow a process called event propagation, which means that an event occurring on an element can "bubble up" to its parent elements. However, there may be cases where we want to stop the event from propagating further. This can be achieved using the `stopPropagation()` method of the Event Object.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Propagating Events</title>
</head>
<body>
  <div id="outer">
    <div id="inner">
      Click Me!
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
document.getElementById("inner").addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Clicked on inner element!");
});

document.getElementById("outer").addEventListener("click", function(event) {
  console.log("Clicked on outer element!");
});
```

In the above example, we have an outer `<div>` element and an inner `<div>` element. When the inner element is clicked, the event handler function is called with the event object as the argument. By calling `event.stopPropagation()`, we prevent the event from propagating up to parent elements. Therefore, the click event on the inner element will not trigger the click event listener attached to the outer element.

For more details on preventing default behavior and event propagation, refer to the [MDN documentation on preventing default actions](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) and [event propagation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_propagation).

## Conclusion

Understanding the Event Object and how to access event information, prevent default browser behavior, and control event propagation is crucial for effective event handling in web development. By accessing event properties, we can gather specific details about events and utilize them to enhance the functionality and interactivity of our web applications. Additionally, being able to prevent default behavior and control event propagation allows us to customize the behavior of events and create more tailored user experiences.

Experimenting with the Event Object and practicing event handling will enable you to create dynamic and interactive web applications that respond to user interactions. As you gain more experience, you'll be able to leverage the power of events to build rich and engaging web experiences.

References:
[MDN Web Docs](https://developer.mozilla.org/)
[W3Schools](https://www.w3schools.com/)