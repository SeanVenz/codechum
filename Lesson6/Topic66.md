# CSS Grid Fundamentals

CSS Grid is a powerful layout system that allows you to create complex grid-based designs in web development. It provides a flexible and efficient way to organize and align content on a web page. In this topic, we will talk about the key concepts of CSS Grid, including the grid container, grid items, grid lines, grid tracks, grid areas, and grid templates. By the end of this guide, you will have a solid understanding of CSS Grid and be able to use it effectively in your web projects.

## Grid Container and Grid Items

### Understanding the Grid Container and its Properties

The grid container is the parent element that contains the grid items. To create a grid container, you need to apply the `display: grid;` property to the container element. This tells the browser to treat the container as a grid.

```css
.container {
  display: grid;
}
```

Once the container is defined as a grid, you can control its layout using various properties. Some commonly used grid container properties include:

- `grid-template-columns`: Specifies the size and number of columns in the grid.
- `grid-template-rows`: Specifies the size and number of rows in the grid.
- `grid-gap`: Sets the gap between grid cells.
- `justify-items`: Aligns grid items along the horizontal axis.
- `align-items`: Aligns grid items along the vertical axis.

Here's an example that creates a grid container with three columns and two rows:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
}
```

The `fr` unit represents a fraction of the free space in the grid container. For example, `1fr` means that the column or row will take up one fraction (or share) of the available space.

#### Example

```html
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Example</title>
    <style>
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
</body>
</html>
```
CSS File:
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 200px;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
}

.item {
    background-color: #f2f2f2;
    padding: 20px;
    font-size: 20px;
    font-family: Arial, sans-serif;
}
```

##### Output

![Output](https://i.imgur.com/8OzbJBt.png)

### Defining Grid Items and their Properties

Grid items are the elements that exist inside a grid container. They are automatically placed into grid cells, which are the smallest units of the grid defined by the intersection of grid lines.

Grid items are positioned and sized using the properties `grid-column`, `grid-row`, `grid-area`, or a combination of these.

Let's understand them one by one:

#### grid-column

The `grid-column` property is a shorthand property for `grid-column-start` and `grid-column-end`. It defines a grid item's size and location in terms of grid columns. 

```css
.item {
  grid-column: 1 / 3;
}
```
In the example above, `grid-column: 1 / 3;` places the grid item to start at the first vertical grid line and end before the third vertical grid line, thus spanning two columns.

#### grid-row

Similar to `grid-column`, the `grid-row` property is a shorthand for `grid-row-start` and `grid-row-end`. It defines a grid item's size and location in terms of grid rows.

```css
.item {
  grid-row: 1 / 2;
}
```
In this example, `grid-row: 1 / 2;` places the grid item to start at the first horizontal grid line and end before the second horizontal grid line. This means the item only spans one row.

#### Using the `span` keyword

The `span` keyword allows a grid item to span multiple rows or columns. It can be used with `grid-column` and `grid-row`.

```css
.item {
  grid-column: 2 / span 2;
  grid-row: 1 / span 3;
}
```
In this example, `grid-column: 2 / span 2;` means the grid item starts at the second vertical grid line and spans two columns to the right. `grid-row: 1 / span 3;` means the grid item starts at the first horizontal grid line and spans three rows downward.

So, with these properties, you can precisely control where a grid item is placed and how much space it occupies in your grid layout.

##### Example
HTML File:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid Example</title>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item item2">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>
```
CSS File:
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
}

.item {
    background-color: #f2f2f2;
    padding: 20px;
    font-size: 20px;
    font-family: Arial, sans-serif;
}

.item2 {
    grid-column: 2 / span 2;
    grid-row: 1 / span 2;
}
```

In this example, we've added a new class `.item2` to the second item. The CSS properties `grid-column: 2 / span 2;` and `grid-row: 1 / span 2;` indicate that the second item will start at the second column and span two columns, and it will start at the first row and span two rows. This causes the second item to be larger and cover more of the grid than the other items.

##### Output

![Output](https://i.imgur.com/CMp8rKV.png)

## Grid Lines and Grid Tracks

### Grid Lines

Grid lines are the dividing lines that make up the structure of the CSS grid. They can be horizontal or vertical, and they separate the space into distinct grid areas, which can be thought of as cells in a table.

For instance, if you have a 3-column, 2-row grid, you will have 4 vertical lines and 3 horizontal lines.

### Grid Tracks

Grid tracks are the space between two grid lines. These can be either vertical (forming columns) or horizontal (forming rows). When you define the size of the grid tracks, you are, in essence, defining the width of the columns or the height of the rows.

Consider the following CSS rules:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
}
```

This code specifies a grid container with three columns (`grid-template-columns: 1fr 1fr 1fr;`) and two rows (`grid-template-rows: 100px 200px;`). 

Here's the explanation:

- The `grid-template-columns: 1fr 1fr 1fr;` rule tells the browser to create 3 columns, each with an equal share of the available space. This is because `1fr` means "one fraction of the available space". So, if there are 3 fractions (or `fr`), the available space is divided into three equal parts, one for each column.

- The `grid-template-rows: 100px 200px;` rule tells the browser to create 2 rows with the first row being 100px high and the second row being 200px high.

Now, let's create a complete HTML and CSS example to illustrate this concept.
HTML File:
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Lines and Grid Tracks</title>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
        <div class="item">Item 6</div>
    </div>
</body>
</html>
```
CSS File:
```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 200px;
    gap: 10px;
}
.item {
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
}
```
In this example, we have a div with class "container" that holds six "item" divs. In the CSS, we're styling the container to be a 3-column, 2-row grid. Each item div is styled to center its text, both vertically and horizontally. The background color of each item is set to a light grey for visibility.

#### Output

![Output](https://i.imgur.com/YQUeXg4.png)

## Grid Areas and Grid Templates

### Grid Areas

Grid areas are named regions within a grid that allow you to manage and position grid items more conveniently. You can assign a grid item to a specific grid area using the `grid-area` property.

### Grid Templates

Grid templates provide a way to define the structure of the grid using the `grid-template-areas` property. This property lets you visually see the layout of the grid areas in the CSS.

Consider the following CSS rules:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar footer footer";
}

.item1 {
  grid-area: header;
}

.item2 {
  grid-area: sidebar;
}

.item3 {
  grid-area: main;
}

.item4 {
  grid-area: footer;
}
```

Here's what this CSS does:

- The `grid-template-areas` rule sets up a 3-column and 3-row grid, with the first row being the "header", the second row consisting of a "sidebar" and the "main" content area, and the third row with the "sidebar" continuing and a "footer" area.

- The `grid-area` rules assign the grid items (`.item1`, `.item2`, `.item3`, `.item4`) to specific areas of the grid defined in the `grid-template-areas`.

Let's create a full HTML and CSS example to illustrate this concept:
HTML File:
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Areas and Grid Templates</title>
</head>
<body>
    <div class="container">
        <div class="item item1">Header</div>
        <div class="item item2">Sidebar</div>
        <div class="item item3">Main</div>
        <div class="item item4">Footer</div>
    </div>
</body>
</html>
```
CSS File:
```css
.container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "sidebar footer footer";
    gap: 10px;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}

.item1 { grid-area: header; }
.item2 { grid-area: sidebar; }
.item3 { grid-area: main; }
.item4 { grid-area: footer; }
```
In this example, we have a div with class "container" that holds four "item" divs. Each item div has an additional class (`item1`, `item2`, `item3`, `item4`) corresponding to the area names defined in the CSS `grid-template-areas`. In the CSS, each item is assigned to a specific grid area using the `grid-area` property. The items are also styled to center their text, both vertically and horizontally, and to have a light grey background color for visibility.

#### Output

![Output](https://i.imgur.com/vlft2dX.png)

## Conclusion

In summary, CSS Grid is a powerful layout system that allows for the creation of complex grid-based designs in web development. By utilizing the grid container and grid item properties, you can define the structure and placement of elements within the grid. The grid container acts as the parent element, while grid items are automatically positioned within grid cells defined by grid lines. With properties like `grid-template-columns`, `grid-template-rows`, and `grid-gap`, you can control the size, spacing, and alignment of grid items. Grid lines and tracks divide the grid into distinct areas and determine the width of columns or the height of rows. CSS Grid offers great flexibility and control, simplifying the creation of responsive and visually appealing web layouts.

References:
- [MDN Web Docs: CSS Grid Layout](https://developer.mozilla.org/en-US/docs