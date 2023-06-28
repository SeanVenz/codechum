# CSS Layout: An Introduction to Creating Layouts with CSS and Using Display Properties

CSS offers a robust toolkit for designing layouts on web pages, allowing control over element positioning, sizing, and arrangement. This guide delves into the art of crafting layouts with CSS, focusing on three critical display properties: block, inline, and inline-block.

## What is a Layout?

A layout, in the context of web design, is the arrangement of elements on a webpage. It imparts structure to the webpage and assists users in navigation. Designers can create diverse layouts to cater to various design requirements.

## Creating Layouts with CSS

Let's explore the different methods to create layouts with CSS. We will cover three common techniques: floats, Flexbox, and CSS Grid.

### Floats 

Floats are a CSS method to move an element to the left or right, letting other elements wrap around it. Floats are typically used to wrap text around images or construct sidebars.

HTML file:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="float-left">
  <p>I'm a box floating to the left!</p>
</div>
<div class="float-right">
  <p>I'm a box floating to the right!</p>
</div>

</body>
</html>
```

CSS file (styles.css):

```css
.float-left {
  float: left;
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
}

.float-right {
  float: right;
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
}
```

This example creates two boxes that float on either side of the screen.

### Flexbox

Flexbox is a powerful layout model that aligns and distributes space among items in a container, regardless of their size. It's excellent for building flexible, responsive layouts.

HTML file:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="flex-container">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
</div>

</body>
</html>
```

CSS file (styles.css):

```css
.flex-container {
  display: flex;
  justify-content: space-between;
}

.box {
  width: 100px;
  height: 100px;
}

.box1 {
  background-color: tomato;
}

.box2 {
  background-color: dodgerblue;
}
```

This example creates a flex container (the outer div) with two boxes inside.

### CSS Grid

CSS Grid is a two-dimensional layout system, capable of handling both columns and rows, making it perfect for constructing complex grid-based layouts.

HTML file:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="grid-container">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
</div>

</body>
</html>
```

CSS file (styles.css):

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
}

.box {
  width: 100px;
  height: 100px;
}

.box1 {
  background-color: tomato;
}

.box2 {
  background-color: dodgerblue;
}
```

The CSS Grid example creates a grid container with two boxes.

 By altering the properties of the grid container, you can change the layout of the boxes inside.