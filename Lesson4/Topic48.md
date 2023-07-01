# Modifying Element Properties and Content

## Introduction

When working with the Document Object Model (DOM) in JavaScript, it's common to need to modify the properties, content, and structure of HTML elements dynamically. This allows you to update text content, change attributes, apply CSS styles, add or remove elements, and manipulate the DOM structure to create interactive and dynamic web applications. In this topic, we will explore various techniques for modifying element properties and content, including changing text content, attributes, and CSS styles, as well as adding, removing, and manipulating DOM nodes.

## Changing Text Content, Attributes, and CSS Styles

### Changing Text Content

To change the text content of an element, you can manipulate the `textContent` property. It allows you to set or retrieve the text content of an element. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Changing Text Content</title>
</head>
<body>
  <div id="myElementId">Initial Text Content</div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
const element = document.getElementById('myElementId');
element.textContent = 'New Text Content';
```

In this example, the `textContent` property is used to change the text content of the element with the id "myElementId" from "Initial Text Content" to "New Text Content".

### Changing Attributes

To change the value of an attribute on an element, you can access and modify the attribute using the `setAttribute` and `getAttribute` methods. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Changing Attributes</title>
</head>
<body>
  <img id="myImage" src="image.jpg" alt="Old Image">
  <script src="script.js"></script>    
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
const element = document.getElementById('myImage');
element.setAttribute('src', 'new-image.jpg');
const altValue = element.getAttribute('alt');
console.log(altValue); // Output: "Old Image"
```

In this example, the `setAttribute` method is used to change the `src` attribute of the image element with the id "myImage" to "new-image.jpg". The `getAttribute` method is then used to retrieve the value of the `alt` attribute, which remains unchanged as "Old Image".

### Changing CSS Styles

To modify CSS styles of an element, you can access the `style` property of the element and manipulate its individual CSS properties. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Changing CSS Styles</title>
  <style>
    .myElement {
      background-color: blue;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <div id="myElementId" class="myElement">Styled Element</div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
const element = document.getElementById('myElementId');
element.style.backgroundColor = 'red';
element.style.fontSize = '30px';
```

In this example, the background color of the element with the id "myElementId" is changed to red, and the font size is set to 30 pixels by manipulating the `style` property.

## Adding, Removing, and Manipulating DOM Nodes

### Adding Elements

To add new elements to the DOM, you can create new elements using the `createElement` method, set their properties, and append them to existing elements using methods like `appendChild` or `insertBefore`. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Adding Elements</title>
</head>
<body>
  <div id="parentElementId">
    <p>Existing Element</p>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
const parentElement = document.getElementById('parentElementId');
const newElement = document.createElement('div');
newElement.textContent = 'New Element';
parentElement.appendChild(newElement);
```

In this example, a new `<div>` element is created and assigned the text content "New Element". The new element is then appended as a child to the element with the id "parentElementId" using the `appendChild` method.

### Removing Elements

To remove elements from the DOM, you can use the `removeChild` method on the parent element, passing the element you want to remove as the argument. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Removing Elements</title>
</head>
<body>
  <div id="parentElementId">
    <p id="childElementId">Child Element</p>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
const parentElement = document.getElementById('parentElementId');
const childElement = document.getElementById('childElementId');
parentElement.removeChild(childElement);
```

In this example, the element with the id "childElementId" is removed from the DOM by calling the `removeChild` method on its parent element, which is obtained using the `getElementById` method.

### Manipulating DOM Structure

You can also manipulate the structure of the DOM by moving elements, replacing elements, or cloning elements. Here's an example of moving an element:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Manipulating DOM Structure</title>
</head>
<body>
  <div id="sourceElementId">Source Element</div>
  <div id="destinationElementId">Destination Element</div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
const sourceElement = document.getElementById('sourceElementId');
const destinationElement = document.getElementById('destinationElementId');
destinationElement.appendChild(sourceElement);
```

In this example, the element with the id "sourceElementId" is moved from its current parent and appended as a child to the element with the id "destinationElementId" using the `appendChild` method.

## Conclusion

Modifying element properties and content is crucial for creating dynamic and interactive web applications. JavaScript provides powerful methods and properties to change text content, attributes, and CSS styles of elements. Additionally, adding, removing, and manipulating DOM nodes allows you to modify the structure and composition of the webpage dynamically. By mastering these techniques, you can create engaging user experiences and build sophisticated web applications.

Resources:
- [MDN Web Docs - Manipulating documents](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [W3Schools - JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)