# Modifying Element Properties and Content

## Introduction

When creating dynamic web pages with JavaScript, it's often necessary to change the properties or content of HTML elements on the fly. This could be anything from updating the text inside an element, to changing the image source in an `img` tag, or even altering the look and feel by changing CSS styles. This topic covers how to do this by using various JavaScript methods and properties.

## Changing Text Content

Imagine you have a webpage with a welcoming message that you want to change based on the time of day. The `textContent` property allows you to manipulate the text inside an HTML element. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Welcome Message</title>
  <script src="script.js"></script>
</head>
<body>
  <div id="welcomeMessage">Welcome, visitor!</div>
</body>
</html>
```

Your `script.js` might look something like this:

```javascript
let element = document.getElementById('welcomeMessage');
element.textContent = 'Good morning, visitor!';
```

This will change the welcoming message to 'Good morning, visitor!' using the `textContent` property.

## Changing Attributes

Say you have an image gallery and want to change the displayed image based on user interaction. For this, you can use the `setAttribute` and `getAttribute` methods to change or get the value of an attribute on an element.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Image Gallery</title>
  <script src="script.js"></script>
</head>
<body>
  <img id="galleryImage" src="image1.jpg" alt="Gallery Image">
</body>
</html>
```

Your `script.js` can then be used to change the image:

```javascript
let element = document.getElementById('galleryImage');
element.setAttribute('src', 'image2.jpg');
```

This changes the `src` attribute of the image, effectively showing a different picture in your gallery.

## Changing CSS Styles

To give your webpage a dynamic feel, you might want to change the style of an element based on specific conditions or events. To do this, you can access the `style` property of an element and change its individual CSS properties.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Dynamic Styling</title>
  <script src="script.js"></script>
</head>
<body>
  <div id="dynamicElement">Watch my style change!</div>
</body>
</html>
```

Your `script.js` can then change the style of this element:

```javascript
let element = document.getElementById('dynamicElement');
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
```

This changes the color of the text inside the `dynamicElement` to blue and the background color to yellow.

## Adding, Removing, and Manipulating DOM Nodes

Sometimes, you may need to add or remove elements from the webpage dynamically. 

### Adding Elements

For instance, imagine you have a to-do list application where you want to add new items as the user inputs them. You can create new elements and append them to existing elements:

```html
<!DOCTYPE html>
<html>
<head>
  <title>To-Do List</title>
  <script src="script.js"></script>
</head>
<body>
  <ul id="todoList"></ul>
</body>
</html>
```

Then, in your `script.js`, you can add a new list item:

```javascript
let todoList = document.getElementById('todoList');
let newItem = document.createElement('li');
newItem.textContent = 'New To-Do Item';
todoList.appendChild(newItem);
```

### Removing Elements

Similarly, in the to-do list application, you might want to remove items once they're completed:

```javascript
let todoList = document.getElementById('todoList');
let firstItem = todoList.childNodes[0]; // Assuming there is at least one item in the list
todoList.removeChild(firstItem);
```

This removes the first item from the to-do list.

### Manipulating DOM Structure

In a webpage, you might need to move an element from one place to another based on user interaction:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Interactive Webpage</title>
  <script src="script.js"></script>
</head>
<body>
  <div id="sourceElement">I'm an element that can move!</div>
  <div id="destinationElement">I'm the destination!</div>
</body>
</html>
```

In your `script.js`, you can move the `sourceElement` to `destinationElement`:

```javascript
let sourceElement = document.getElementById('sourceElement');
let destinationElement = document.getElementById('destinationElement');
destinationElement.appendChild(sourceElement);
```

This will make `sourceElement` a child of `destinationElement`.

## Conclusion

Being able to change the properties, content, and structure of HTML elements is a crucial part of creating dynamic and interactive web pages with JavaScript. Practice and get comfortable with these techniques, and you'll be well on your way to creating more engaging and interactive web applications.