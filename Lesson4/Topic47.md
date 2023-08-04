# Accessing Elements with JavaScript

## Introduction

When working with JavaScript and manipulating the Document Object Model (DOM), it's essential to be able to access and interact with specific elements on a webpage. JavaScript provides various methods to retrieve elements based on their attributes, tags, or class names. Additionally, navigating the DOM using parent, child, and sibling relationships allows you to traverse and manipulate the structure of the webpage. In this guide, we will explore methods like `getElementById`, `getElementsByTagName`, and `getElementsByClassName`, as well as techniques for navigating the DOM using parent, child, and sibling relationships.

## Including JavaScript in HTML

There are two primary ways to include JavaScript code in an HTML document: internal and external  .

### Internal JavaScript

You can include JavaScript code directly within the HTML document using the `<script>` tag. Here's an example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
</head>
<body>
  <!-- HTML content here -->
  
  <script>
    // JavaScript code here
  </script>
</body>
</html>
```

In this example, the JavaScript code is placed within the `<script>` tags. The code can be written directly between the opening and closing `<script>` tags, allowing you to include small snippets of JavaScript within the HTML document itself.

### External JavaScript

An external JavaScript is a separate file that contains JavaScript code. It ends with a `.js` extension, for example, `script.js`. 

You can use this file in your HTML document by adding it using a `<script>` tag. The tag has a special attribute called `src`, short for "source", that points to where the JavaScript file is located.

Let's make a simple webpage and add an external JavaScript file to it:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
  <script src="script.js"></script>
</head>
<body>
  <!-- This is where the content of your webpage goes -->
</body>
</html>
```

In this example, we have a webpage with the title "My First Web Page". We added an external JavaScript file named `script.js` using the `<script>` tag. This tag is placed inside the `<head>` part of our webpage.

When the webpage is loaded by the browser, it will also load and run the JavaScript code from the `script.js` file. The `src="script.js"` part tells the browser where to find the JavaScript file. Make sure that this file is in the same location as your HTML file, or provide the correct path to the file.

Also, sometimes, if your JavaScript code is not working when placed inside the `<head>`, you can try placing it just before the closing `</body>` tag, like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <!-- This is where the content of your webpage goes -->

  <script src="script.js"></script>
</body>
</html>
```

The reason it sometimes works better at the bottom is because the browser reads the code from top to bottom. If your JavaScript code needs to do something with the content of your webpage (like change a text or color), it's better if that content is loaded first before the JavaScript tries to do anything with it.

## Accessing Elements by Id, Tag Name, and Class Name

### getElementById

The `getElementById` method allows you to retrieve an element by its unique identifier (id). It returns the element with the specified id attribute.

```javascript
const element = document.getElementById('myElementId');
```

### getElementsByTagName

The `getElementsByTagName` method returns a collection of elements that have the specified tag name.

```javascript
const elements = document.getElementsByTagName('div');
```

### getElementsByClassName

The `getElementsByClassName` method returns a collection of elements that have the specified class name.

```javascript
const elements = document.getElementsByClassName('myClassName');
```

It's important to note that `getElementsByTagName` and `getElementsByClassName` return a collection of elements, not a single element. To access a specific element within the collection, you can use its index.

```javascript
const elements = document.getElementsByTagName('div');
const firstElement = elements[0];
```

## Navigating the DOM with Parent, Child, and Sibling Relationships

### Parent Node

The `parentNode` property allows you to access the parent node of an element.

```javascript
const element = document.getElementById('myElementId');
const parent = element.parentNode;
```

### Child Nodes

The `childNodes` property returns a collection of all child nodes of an element, including text nodes and comment nodes.

```javascript
const element = document.getElementById('myElementId');
const childNodes = element.childNodes;
```

### First Child and Last Child

The `firstChild` and `lastChild` properties provide direct access to the first and last child nodes of an element.

```javascript
const element = document.getElementById('myElementId');
const firstChild = element.firstChild;
const lastChild = element.lastChild;
```

### Next Sibling and Previous Sibling

The `nextSibling` and `previousSibling` properties allow you to access the next and previous sibling nodes of an element.

```javascript
const element = document.getElementById('myElementId');
const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;
```

## Examples

### Example 1: Accessing Elements by Id

```html
<!DOCTYPE html>
<html>
<head>
  <title>Accessing Elements by Id</title>
</head>
<body>
  <div id="myElementId">Hello, World!</div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select the element with a specific id
const element = document.getElementById('myElementId');

// Log the text content of the selected element to the console
console.log(element.textContent); // Output: "Hello, World!"
```

In this example, the `getElementById` method is used to retrieve the element with the id "myElementId". The returned element is then accessed to retrieve its text content using the `textContent` property.

### Example 2: Accessing Elements by Tag Name

```html
<!DOCTYPE html>
<html>
<head>
  <title>Accessing Elements by Tag Name</title>
</head>
<body>
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
  <script src="script.js"></script>
</body> 
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select all the elements with a specific tag name
const elements = document.getElementsByTagName('div');

// Log the total number of the selected elements to the console
console.log(elements.length); // Output: 3
```

In this example, the `getElementsByTagName` method is used to retrieve all the `<div>` elements within the body of the HTML document. The returned collection of elements is then accessed to retrieve the number of elements using the `length` property.

### Example 3: Accessing Elements By Class Name

```html
<!DOCTYPE html>
<html>
<head>
  <title>Accessing Elements by Class Name</title>
</head>
<body>
  <div class="container">
    <div class="red">Element 1</div>
    <div>Element 2</div>
    <div class="red">Element 3</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select all elements with a specific class name
const elements = document.getElementsByClassName('red');

// Loop through the selected elements and log their text content
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i].textContent);
    //OUTPUT: Element 1
    //        Element 3
}
```

In this example, we have a container `<div>` with the class "container" that contains three child `<div>` elements. Two of the child elements have the class "red". The JavaScript code retrieves all elements with the class "red" using the `getElementsByClassName` method. It then loops through the collection of elements and logs their text content to the console. The output will be the text content of the two elements with the class "red".

### Example 4: Accessing Elements By Parent Node

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Navigation</title>
</head>
<body>
  <div id="element" class="container">
    <div>Parent Node Example</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select the element with a specific id
const element = document.getElementById('element');

// Get the parent of the selected element
const parent = element.parentNode;

// Log the node name of the parent to the console
console.log(parent.nodeName); // Output: "BODY"
```

In this example, we have a container `<div>` with the id "element". The JavaScript code retrieves the parent node of the element using the `parentNode` property. The output shows the node name of the parent node, which is "BODY" in this case.

### Example 5: Accessing Elements By Child Nodes

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Navigation</title>
</head>
<body>
  <div id="container" class="container">
    <div>Child Nodes Example</div>
    <span>Text Node</span>
    <!-- Comment Node -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select the element with a specific id
const element = document.getElementById('container');

// Get all child nodes of the selected element
const childNodes = element.childNodes;

// Log the total number of child nodes to the console
console.log(childNodes.length); // Output: 5
```

In this example, we have a container `<div>` with the id "container" that contains child nodes, including a `<div>` element, a text node, and a comment node. The JavaScript code retrieves the child nodes of the container element using the `childNodes` property. The output shows the number of child nodes, which is 5 in this case.

### Example 6: Accessing Elements By First Child

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Navigation</title>
</head>
<body>
  <div id="container" class="container">
    <div>First Child Example</div>
    <div>Second Child</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select the element with a specific id
const element = document.getElementById('container');

// Get the first child element of the selected element
const firstChild = element.firstElementChild;

// Log the node name of the first child element to the console
console.log(firstChild.nodeName); // Output: "DIV"
```

In this example, we have a container `<div>` with the id "container" that contains two child `<div>` elements. The JavaScript code retrieves the first child node of the container element using the `firstChild` property. The output shows the node name of the first child node, which is "#text" in this case. Note that the first child node is a text node containing whitespace.

### Example 7: Accessing Elements By Last Child

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Navigation</title>
</head>
<body>
  <div id="container" class="container">
    <div>Last Child Example</div>
    <div>Second Child</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select the element with a specific id
const element = document.getElementById('container');

// Get the last child element of the selected element
const lastChild = element.lastElementChild;

// Log the node name of the last child element to the console
console.log(lastChild.nodeName); // Output: "DIV"
```

In this example, we have a container `<div>` with the id "container" that contains two child `<div>` elements. The JavaScript code retrieves the last child node of the container element using the `lastChild` property. The output shows the node name of the last child node, which is "DIV" in this case.

### Example 8: Accessing Elements By Next Sibling

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Navigation</title>
</head>
<body>
  <div id="element1" class="container">
    <div>Next Sibling Example</div>
  </div>
  <div id="element2" class="container">
    <div>Target Element</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select the element with a specific id
const element1 = document.getElementById('element1');

// Get the next sibling element of the selected element
const nextSibling = element1.nextSibling;

// Log the node name of the next sibling element to the console
console.log(nextSibling.nodeName); // Output: "#text"
```

In this example, we have two container `<div>` elements. The JavaScript code retrieves the next sibling node of the `element1` using the `nextSibling` property. The output shows the node name of the next sibling node, which is "#text" in this case. Note that the next sibling node is a text node containing whitespace.

### Example 9: Accessing Elements By Previous Sibling

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Navigation</title>
</head>
<body>
  <div id="element1" class="container">
    <div>Previous Sibling Example</div>
  </div>
  <div id="element2" class="container">
    <div>Target Element</div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

Create a new file named `script.js` and add the following JavaScript code:

```javascript
// Select the element with a specific id
const element2 = document.getElementById('element2');

// Get the previous sibling element of the selected element
const previousSibling = element2.previousSibling;

// Log the node name of the previous sibling element to the console
console.log(previousSibling.nodeName); // Output: "#text"
```

In this example, we have two container `<div>` elements. The JavaScript code retrieves the previous sibling node of the `element2` using the `previousSibling` property. The output shows the node name of the previous sibling node, which is "#text" in this case. Note that the previous sibling node is a text node containing whitespace.

## Conclusion

Being able to access specific elements within the DOM is a fundamental aspect of JavaScript development. The methods `getElementById`, `getElementsByTagName`, and `getElementsByClassName` provide convenient ways to retrieve elements based on their attributes. Additionally, understanding how to navigate the DOM using parent, child, and sibling relationships allows you to manipulate the structure and content of the webpage dynamically. By mastering these techniques, you can create dynamic and interactive web applications.

References:
- [MDN Web Docs - Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [W3Schools - JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)