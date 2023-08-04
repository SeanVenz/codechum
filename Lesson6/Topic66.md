# Building Grid-based Layouts with CSS Grid

CSS Grid is a powerful layout system available in CSS. It's a two-dimensional system, meaning it can handle both columns and rows. This makes it ideal for web page layout design. In this guide, we will cover the creation of grid columns and rows, item placement and alignment, spanning items, and responsive grid layouts. 

## Creating Grid Columns and Rows

In CSS Grid, you can easily define the number and size of grid columns and rows using the `grid-template-columns` and `grid-template-rows` properties.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px 100px;
}
```
This code creates a grid with 3 columns and 3 rows. Each column is 200px wide, and each row is 100px tall.

For more flexibility, we can use the `fr` unit which represents a fraction of the available space.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
}
```

This code creates a grid with 3 columns and 2 rows. The middle column will take twice as much available space as the other two columns.

[Further reading on grid-template-columns and grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)

## Placing Items on the Grid using Grid Properties

### Positioning grid items on the grid

Grid items can be placed in the grid using `grid-column` and `grid-row` properties. 

```css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

This code positions the first item to start at the first grid line and end before the third grid line of the columns and start at the first grid line and end before the second grid line of the rows.

### Using grid-area and grid-template-areas for placement

The `grid-area` property provides a shorthand for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, in that order.

```css
.item1 {
  grid-area: 1 / 1 / 2 / 3;
}
```

`grid-template-areas` offers a more visual approach to place items.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "header header"
    "sidebar content";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}
```
This grid has two columns and two rows, with the header spanning both columns.

[Further reading on grid-column, grid-row, and grid-area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Items)

## Grid Alignment and Spanning Items

### Aligning items within grid cells

You can align items within their cells using `align-self` and `justify-self` properties.

```css
.item1 {
  align-self: start;
  justify-self: center;
}
```
This will align the item to the start of the row axis and center of the column axis.

### Spanning items across multiple grid cells

To span an item across multiple grid cells, you can use the `span` keyword.

```css
.item1 {
  grid-column: span 2;
  grid-row: span 1;
}
```



This item will span across two columns and one row.

[Further reading on aligning and justifying items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)

## Responsive Grid Layouts

CSS Grid makes it easy to create responsive layouts using media queries and the `auto-fill` and `auto-fit` keywords.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

@media (max-width: 600px) {
  .container {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
```

This code creates a responsive grid that automatically adjusts the number of columns based on the viewport size.

[Further reading on responsive grid layouts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)

## More Examples

Let's have a look at a more complex example of a CSS Grid layout. This layout includes a header, main content area, sidebar, and footer.

```html
<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}
```
In this example, the header and footer span across the full width of the grid while the sidebar and content fill the middle row.

## Conclusion

CSS Grid is a powerful tool for web developers to create complex and responsive grid-based layouts. The syntax can seem complex at first, but with practice, it can drastically simplify your layout code and make it easier to manage. Try out these examples in your own projects to see the potential of CSS Grid!

References
[CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) is a great resource to further your understanding.
