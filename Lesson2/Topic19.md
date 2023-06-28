# CSS Layout: Creating Layouts with CSS and Using Display Properties (block, inline, inline-block)

CSS offers a rich set of tools for creating layouts on web pages. You can control the positioning, sizing, and arrangement of elements to craft various layout designs. This topic explores creating layouts with CSS and using the display properties: block, inline, and inline-block.

## Introduction

Layout is a fundamental aspect of web design. By understanding CSS layout principles and using appropriate display properties, you can design visually pleasing and user-friendly web pages.

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
```
This part of the CSS file is styling the `.float-container` class. It sets the width and height of the container to 200 pixels and surrounds it with a border that is 1 pixel wide and solid.

```css
.float-child {
  width: 50px;
  height: 50px;
  float: left;
  border: 1px solid;
  margin: 5px;
}
```
This part of the CSS file is styling the `.float-child` class. It sets the width and height of the child elements to 50 pixels, surrounds them with a border that is 1 pixel wide and solid, and gives them a margin of 5 pixels. The crucial part here is the `float: left;` style.

`float: left;` is the CSS property that applies the float layout technique. When an element is floated, it is taken out of the normal flow of the document (though still remaining a part of the flow) and shifted to the left or right until it touches the edge of its containing box, or another floated element. Other content then flows around the floated item.

In this example, `float: left;` causes each child box to be placed to the left of the next box in the line, stacking them horizontally instead of vertically. If there isn't enough horizontal space in the container for all boxes, they will wrap to the next line, just like words in a text.

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

Sure, let's break down the CSS part of the Flexbox example.

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  border: 1px solid;
}
```

This part of the CSS file is styling the `.flex-container` class. It sets the width and height of the container to 200 pixels and surrounds it with a border that is 1 pixel wide and solid.

Here, `display: flex;` is the key CSS property that applies the Flexbox layout technique. The Flexbox model is designed for one-dimensional layouts and can manage space distribution and alignment between items in a container, even when their sizes are unknown or dynamic. The `display: flex;` declaration turns the container into a flex container and its children into flex items.

`justify-content: space-between;` is another powerful feature of Flexbox. This property defines how the browser distributes space between and around content items along the main-axis of a flex container, and it helps align the flex items. `space-between` means items display with equal space between them. Other options include `flex-start`, `flex-end`, `center`, `space-around`, and `space-evenly`.

```css
.flex-child {
  width: 50px;
  height: 50px;
  border: 1px solid;
}
```

This part of the CSS file is styling the `.flex-child` class. It sets the width and height of the child elements to 50 pixels and surrounds them with a border that is 1 pixel wide and solid. Since their parent container is a flex container, these child elements become flex items and follow the flex rules defined in their parent container.

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
```

In this part, the `.grid-container` class is being styled. The dimensions of the container are set to 200 pixels in width and height and a 1 pixel solid border is set.

Here, `display: grid;` is the essential CSS property that applies the CSS Grid layout technique. This display value turns the container into a grid container and its direct children into grid items. It enables two-dimensional layouts where you can control both rows and columns.

Sure, let's extend the explanation of the `grid-template-columns` property. 

`grid-template-columns: auto auto;` is an important feature of CSS Grid. This property defines the structure of the grid by specifying the number and size of the columns. In our example, `auto auto` specifies the creation of two columns with widths determined automatically by the browser, based on the content of the grid cells. 

The `auto` keyword in CSS means the browser calculates the size based on other properties, such as the size of the grid container or the size of the content within the grid items. So, if the grid items have content of varying sizes, each column would adjust its size to fit its largest item.

However, `grid-template-columns` can take a variety of other values to control the grid layout with precision. For example:

- `grid-template-columns: 1fr 2fr;` would create two columns where the second column is twice as wide as the first. `fr` stands for fractional units, and it allows you to divide the grid container into a certain number of equally sized parts. 

- `grid-template-columns: repeat(3, 1fr);` would create three equal-width columns. The `repeat()` function helps to keep your CSS clean and concise when you want to create many columns or rows of the same size.

- `grid-template-columns: 80px auto 80px;` would create three columns. The first and third columns would have a width of 80px, and the middle column would have its width automatically adjusted to take up the remaining space.

Through these settings, you can create a flexible and responsive grid layout that suits your content and design needs.

```css
.grid-child {
  width: 50px;
  height: 50px;
  border: 1px solid;
}
```

This part is styling the `.grid-child` class. It sets the width and height of the child elements (i.e., grid items) to 50 pixels and surrounds them with a 1 pixel solid border. Since their parent container is a grid container, these child elements become grid items and follow the grid rules defined in their parent container. It's worth noting that in a real-world CSS Grid layout, you often do not need to set explicit width and height on the child items as the grid container controls their sizing.

Each method has its strengths and use cases, so choose the one that best suits your layout requirements.

## Using CSS Display Properties

CSS offers three primary display properties affecting how elements are rendered within a layout:

1. **block:** The `display: block;` property turns an element into a block-level element. Block-level elements consume the full width available and create a new line before and after the element. Examples of block-level elements include `<div>`, `<p>`, and `<h1>` to `<h6>`. By default, block-level elements stack vertically.

Here's an example of `display: block;`:

HTML file (block.html):

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<h2>Block-level Element</h2>
<div class="block-element">This is a block-level element.</div>

</body>
</html>
```

CSS file (styles.css):

```css
.block-element {
  display: block;
  border: 1px solid black;
}
```

In this example, the `.block-element` selector in the CSS file targets the `<div>` element with the class "block-element" in the HTML file. The `display: block;` rule applies a block-level display property to the element. This means the `<div>` will take up the full width available and create a new line before and after itself, as block-level elements do. The `border: 1px solid black;;` rule applies a border to the element, making it easier to visualize its block-level behavior.

2. **inline:** The `display: inline;` property transforms an element into an inline-level element. Inline-level elements do not create line breaks and only occupy as much space as necessary. Examples of inline-level elements include `<span>`, and `<a>`. By default, inline-level elements flow horizontally.

Here's an example of `display: inline;`:

HTML file (inline.html):

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<h2>Inline Element</h2>
<span class="inline-element">This is an inline element.</span>

</body>
</html>
```

CSS file (styles.css):

```css
.inline-element {
  display: inline;
  border: 1px solid black;
}
```

In this example, the `.inline-element` selector in the CSS file targets the `<span>` element with the class "inline-element" in the HTML file. The `display: inline;` rule applies an inline-level display property to the element. This means the `<span>` will not create line breaks before and after itself and will only take up as much space as necessary, as inline-level elements do. The `border: 1px solid black;` rule applies a border to the element, making it easier to visualize its inline-level behavior.

Sure, here's the revised section with explanations and separated CSS:

3. **inline-block:** The `display: inline-block;` property combines characteristics of both block and inline elements. It allows elements to flow inline like inline-level elements while still allowing for setting width, height, margins, and padding like block-level elements. This display property is useful for creating layouts where elements need to have block-like properties but flow inline.

Here's an example of `display: inline-block;`:

HTML file (inline-block.html):

```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<h2>Inline-block Element</h2>
<div class="inline-block-element">This is an inline-block element.</div>

</body>
</html>
```

CSS file (styles.css):

```css
.inline-block-element {
  display: inline-block;
  border: 1px solid black;
}
```

In this example, the `.inline-block-element` selector in the CSS file targets the `<div>` element with the class "inline-block-element" in the HTML file. The `display: inline-block;` rule applies an inline-block-level display property to the element. This means the `<div>` will flow inline like an inline-level element but will still accept settings for width, height, margins, and padding like a block-level element. The `border: 1px solid black` rule applies a border to the element, making it easier to visualize its inline-block-level behavior.

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
- [FlexboxFroggy](https://flexboxfroggy.com/)