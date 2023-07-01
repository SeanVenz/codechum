# Event Handling in JavaScript with the Event Argument

## Introduction

When users interact with a webpage, such as clicking on a button or moving the mouse, these actions trigger what we call 'events.' JavaScript allows us to define how our webpage should respond to these events using something called 'event handling functions'. The functions receive an argument—usually named 'event'—which holds details about the event. By using this event argument, we can make our webpages more dynamic and interactive.

## Using the Event Argument

The event argument is an object containing information related to the specific event. Its properties can provide useful data, such as the exact location of a mouse click or the specific key pressed on the keyboard. Let's see how this works in practice:

### Example 1: Click Event

Imagine we have a button on our webpage, and we want to display a message with the exact coordinates where the button was clicked. Here's how we might do this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Click Event Example</title>
</head>
<body>
  <button id="myButton">Click Me</button>
  <script src="script.js"></script>
</body>
</html>
```

In this case, `event.clientX` and `event.clientY` give us the horizontal and vertical coordinates, respectively, of where the click event happened.

Inside the "script.js" file:

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
  console.log(`Button was clicked at coordinates (${event.clientX}, ${event.clientY})`);
});
```

### Example 2: Keydown Event

Suppose we want to log a message to the console every time the user presses a key. We also want to display which key was pressed:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Keydown Event Example</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

Inside the "script.js" file:

```javascript
document.addEventListener('keydown', function(event) {
  console.log(`The key '${event.key}' was pressed`);
});
```

Here, `event.key` gives us the specific key that triggered the keydown event.

### Example 3: Mousemove Event

If we want to track the mouse's movement and display the exact coordinates of the mouse cursor, we could do the following:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mousemove Event Example</title>
  <style>
    #myContainer {
      width: 500px;
      height: 300px;
      background-color: #eee;
    }
  </style>
</head>
<body>
  <div id="myContainer"></div>
  <script src="script.js"></script>
</body>
</html>
```

Inside the "script.js" file:

```javascript
const container = document.getElementById('myContainer');
container.addEventListener('mousemove', function(event) {
  console.log(`Mouse coordinates: (${event.clientX}, ${event.clientY})`);
});
```

Similar to the click event, `event.clientX` and `event.clientY` give us the mouse's position when the mousemove event is fired.

### Example 4: Submit Event

```html
<!DOCTYPE html>
<html>
<head>
  <title>Submit Event Example</title>
</head>
<body>
  <form id="myForm">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Submit</button>
  </form>
  <script src="script.js"></script>
</

body>
</html>
```

Inside the "script.js" file:

```javascript
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted');
});
```

In this example, the event handling function is defined to prevent the default form submission behavior and log a message when the form is submitted. **`event.preventDefault();`** Within the event handling function, we call the preventDefault() method on the event object. This method prevents the default form submission behavior, which typically results in the page being refreshed or redirected. By calling `preventDefault()`, we can stop this default behavior from happening.

By making good use of the event argument, you can make your webpages react more specifically to user interactions. For example, you can display different responses when the user clicks different parts of a button or responds differently to different key presses.

Resources:
- [MDN Web Docs - Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [W3Schools - JavaScript Events](https://www.w3schools.com/js/js_events.asp)