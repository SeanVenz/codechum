# CSS Layout: Creating Layouts with CSS and Using Display Properties (block, inline, inline-block)

CSS offers a rich set of tools for creating layouts on web pages. You can control the positioning, sizing, and arrangement of elements to craft various layout designs. This topic explores creating layouts with CSS and using the display properties: block, inline, and inline-block.

## Introduction

Layout is a fundamental aspect of web design. CSS proposes a myriad of techniques for creating flexible and responsive layouts that adjust to different screen sizes and devices. By understanding CSS layout principles and using appropriate display properties, you can design visually pleasing and user-friendly web pages.

## Creating Layouts with CSS

CSS provides several methods for creating layouts. The common techniques include:

1. **Floats:** Floats position elements horizontally within their parent container. They enable elements to flow around each other, forming complex layouts. However, floats have limitations, and modern CSS techniques like Flexbox and CSS Grid are recommended for more advanced layouts.

![CSS Float](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/03/web-text-wrap.png?resize=540%2C270&ssl=1)

Here's a basic example of using floats:

HTML file:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="float-container">
  <div class="float-child">Box 1</div>
  <div class="float-child">Box 2</div>
</div>

</body>
</html>
```

CSS file (styles.css):

```css
.float-container {
  width: 200px;
  height: 200px;
  border: 1px solid;
}

.float-child {
  width: 50px;
  height: 50px;
  float: left;
  border: 1px solid;
  margin: 5px;
}
```

2. **Flexbox:** Flexbox is a robust CSS layout model offering flexible and responsive layout options. It easily arranges elements in a row or column, controls their alignment, and manages wrapping and spacing.

![CSS Flexbox](https://media.geeksforgeeks.org/wp-content/uploads/20200719214439/202007193.png)

Here's a basic example of using Flexbox:

HTML file:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="flex-container">
  <div class="flex-child">Box 1</div>
  <div class="flex-child">Box 2</div>
</div>

</body>
</html>
```

CSS file (styles.css):

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  border: 1px solid;
}

.flex-child {
  width: 50px;
  height: 50px;
  border: 1px solid;
}
```

3. **CSS Grid:** CSS Grid is a two-dimensional layout system for creating complex grid-based layouts. It defines both rows and columns, controls their sizes, and positions elements within the grid cells.

![CSS Grid](https://www.w3schools.com/css/grid_lines.png)

Here's a basic example of using CSS Grid:

HTML file:

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="grid-container">
  <div class="grid-child">Box 1</div>
  <div class="grid-child">Box 2</div>
</div>

</body>
</html>
```



CSS file (styles.css):

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  width: 200px;
  height: 200px;
  border: 1px solid;
}

.grid-child {
  width: 50px;
  height: 50px;
  border: 1px solid;
}
```

Each method has its strengths and use cases, so choose the one that best suits your layout requirements.

## Using CSS Display Properties

CSS offers three primary display properties affecting how elements are rendered within a layout:

1. **block:** The `display: block;` property turns an element into a block-level element. Block-level elements consume the full width available and create a new line before and after the element. Examples of block-level elements include `<div>`, `<p>`, and `<h1>` to `<h6>`. By default, block-level elements stack vertically.

Here's an example of `display: block;`:

HTML file:

```html
<!DOCTYPE html>
<html>
<body>

<h2>Block-level Element</h2>
<div style="display: block; background-color: lightblue;">This is a block-level element.</div>

</body>
</html>
```

2. **inline:** The `display: inline;` property transforms an element into an inline-level element. Inline-level elements do not create line breaks and only occupy as much space as necessary. Examples of inline-level elements include `<span>`, `<a>`, and `<strong>`. By default, inline-level elements flow horizontally.

Here's an example of `display: inline;`:

HTML file:

```html
<!DOCTYPE html>
<html>
<body>

<h2>Inline Element</h2>
<span style="display: inline; background-color: lightblue;">This is an inline element.</span>

</body>
</html>
```

3. **inline-block:** The `display: inline-block;` property combines characteristics of both block and inline elements. It allows elements to flow inline like inline-level elements while still allowing for setting width, height, margins, and padding like block-level elements. This display property is useful for creating layouts where elements need to have block-like properties but flow inline.

Here's an example of `display: inline-block;`:

HTML file:

```html
<!DOCTYPE html>
<html>
<body>

<h2>Inline-block Element</h2>
<div style="display: inline-block; background-color: lightblue;">This is an inline-block element.</div>

</body>
</html>
```

By using these display properties, you can control how elements interact and flow within your layout.

## Diagram: CSS Display Properties

Here's an image illustrating the CSS display properties:

![CSS Grid](https://i.stack.imgur.com/mGTYI.png)

## Additional Considerations

- It's recommended to use modern CSS layout techniques like Flexbox and CSS Grid for complex layouts, as they provide more powerful and flexible options.
- Consider the responsive design principles to ensure that your layouts adapt well to different screen sizes and devices.

## Conclusion

CSS provides various methods for creating layouts on web pages. By leveraging CSS display properties such as block, inline, and inline-block, you can control the positioning and behavior of elements within your layouts. Whether you use floats, Flexbox, CSS Grid, or a combination of these techniques, CSS layout plays a significant role in achieving visually appealing web designs.

Resources:
- [Mozilla Developer Network (MDN) - CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- [CSS-Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox

 Froggy](https://flexboxfroggy.com/)