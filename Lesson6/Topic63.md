# Flexbox Basics: Creating Flexible Layouts

## Introduction

Flexbox is a powerful CSS layout module that provides a flexible and efficient way to create complex and responsive layouts. It offers a set of properties for aligning and distributing space among items in a container. In this topic, we will explore the fundamental concepts of flex containers, flex items, and the key properties used to control their behavior.

## Flex Container and Flex Items

Flexbox is a method to create flexible layouts in CSS. It operates based on the relationship between a parent element (which we call a "flex container") and its child elements ("flex items").

To create a flex container, you need to apply the `display: flex;` or `display: inline-flex;` property to the parent element. Here's an example:

```html
<style>
  .container {
    display: flex;
  }
</style>

<div class="container">
  <!-- Flex items go here -->
</div>
```

In this example, we made the `<div>` with the class `.container` a flex container. Everything inside this container are called "flex items". These flex items can now be managed in a more flexible way.

Flexbox gives us control over the alignment, direction, order, and size of these items within the container.

For example, look at this code:

```html
<style>
  .container {
    display: flex;
    justify-content: space-between;  /* This will evenly distribute items along the horizontal line */
    align-items: center;  /* This will align items vertically in the middle */
  }
  
  .item {
    flex: 1 0 0;  /* This will allow the items to grow to fill the container if there's extra space */
  }
</style>

<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

```

Here we're using some properties like `justify-content`, `align-items`, and `flex`.

- `justify-content` changes the alignment of the items along the horizontal line in the container.
- `align-items` does the same, but along the vertical line.
- `flex` is a shorthand for three properties: `flex-grow` (how much the item will grow relative to the rest of the items), `flex-shrink` (how much the item will shrink relative to the rest), and `flex-basis` (the default size of an element before it is adjusted with `flex-grow` or `flex-shrink`).

## Flex Direction and Flex Wrap

### Flex Direction

Flexbox provides two properties, `flex-direction` and `flex-wrap`, which control the direction and wrapping behavior of flex items.

The `flex-direction` property determines the main axis along which the flex items are laid out. Here are its possible values:

- `row` (default): Items are laid out in a line from left to right.
- `row-reverse`: Items are laid out from right to left.
- `column`: Items are laid out from top to bottom.
- `column-reverse`: Items are laid out from bottom to top.

For example:

```html
<style>
  .container {
    display: flex;
    flex-direction: row-reverse;
  }
</style>

<div class="container">
  <!-- Flex items go here -->
</div>
```

### Code and Sample Output

HTML File:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h2>Flex-direction: row (default)</h2>
  <div class="container row">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Flex-direction: row-reverse</h2>
  <div class="container row-reverse">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Flex-direction: column</h2>
  <div class="container column">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Flex-direction: column-reverse</h2>
  <div class="container column-reverse">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

CSS File:
```css
.container {
  display: flex;
  width: 50%;
  margin-bottom: 20px;
}

.item {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
  flex-basis: 50%;
}

.nowrap {
  flex-wrap: nowrap;
}

.wrap {
  flex-wrap: wrap;
}

.wrap-reverse {
  flex-wrap: wrap-reverse;
}
```

#### Output

![Flex](https://i.imgur.com/qSsGyRj.png)
![Flex](https://i.imgur.com/xGGGrNX.png)

In this code, `flex-direction: row-reverse;` is applied to the `.container` class, which lays out the flex items from right to left.

### Flex-Wrap

The `flex-wrap` property decides whether the flex items should wrap onto the next line when there isn't enough space in the container. Here are its possible values:

- `nowrap` (default): Items will try to fit on one line.
- `wrap`: Items will wrap onto new lines from top to bottom.
- `wrap-reverse`: Items will wrap onto new lines from bottom to top.

For example:

```html
<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<div class="container">
  <!-- Flex items go here -->
</div>
```

In this code, `flex-wrap: wrap;` is applied to the `.container` class, which allows the flex items to move to a new line when there's not enough space on the current line.

### Code and Sample Output

HTML File:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h2>Flex-wrap: nowrap (default)</h2>
  <div class="container nowrap">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>

  <h2>Flex-wrap: wrap</h2>
  <div class="container wrap">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>

  <h2>Flex-wrap: wrap-reverse</h2>
  <div class="container wrap-reverse">
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
  display: flex;
  width: 50%;
  margin-bottom: 20px;
}

.item {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
  flex-basis: 50%;
}

.nowrap {
  flex-wrap: nowrap;
}

.wrap {
  flex-wrap: wrap;
}

.wrap-reverse {
  flex-wrap: wrap-reverse;
}
```

#### Output

![Wrap](https://i.imgur.com/3KpYmFT.png)
![Wrap](https://i.imgur.com/PMmKCON.png)

## Justify Content

The `justify-content` property aligns items along the main axis of the current line of the flex container. The alignment is done after the lengths and auto margins are resolved. It means that if there is at least one flexible element, with `flex-grow` different from 0, it will have no effect as there would be no available space.

Here's what each property does:

- `flex-start` (default): Items align to the start of the container.
- `flex-end`: Items align to the end of the container.
- `center`: Items align at the center of the container.
- `space-between`: Items display with equal spacing between them.
- `space-around`: Items display with equal spacing around them.
- `space-evenly`: Items display with equal spacing around and between them.

Now, let's see examples for each `justify-content` value:

HTML File:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h2>Justify-content: flex-start</h2>
  <div class="container flex-start">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Justify-content: flex-end</h2>
  <div class="container flex-end">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Justify-content: center</h2>
  <div class="container center">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Justify-content: space-between</h2>
  <div class="container space-between">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Justify-content: space-around</h2>
  <div class="container space-around">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Justify-content: space-evenly</h2>
  <div class="container space-evenly">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

CSS File:
```css
.container {
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
}

.item {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}

.flex-start {
  justify-content: flex-start;
}

.flex-end {
  justify-content: flex-end;
}

.center {
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.space-evenly {
  justify-content: space-evenly;
}
```

In these files, I've created several containers, each applying a different `justify-content` value. The `flex-start` class represents `justify-content: flex-start;`, `flex-end` for `justify-content: flex-end;`, and so on. 

The `.item` class styles each flex item with a border, some padding, and a `flex-basis` value which helps us demonstrate the effect of each `justify-content` value.

#### Output

![Justify](https://i.imgur.com/QwWRBKA.png)
![Justify](https://i.imgur.com/5tL6pJ6.png)

## Align Items

The `align-items` property sets the default alignment for all the children's cross-axis alignments within the current flex container. It means that if the individual items do not have their `align-self` property set, they will default to the value set for `align-items` on the container.

Here's what each property does:

- `stretch` (default): Stretch to fill the container (still respect min-width/max-width)
- `flex-start`: Cross-start margin edge of the items is placed on the cross-start line
- `flex-end`: Cross-end margin edge of the items is placed on the cross-end line
- `center`: Items are centered in the cross-axis
- `baseline`: Items are aligned such as their baselines align

Now, let's see examples for each `align-items` value:

HTML File (`index.html`):
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h2>Align-items: stretch (default)</h2>
  <div class="container stretch">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Align-items: flex-start</h2>
  <div class="container flex-start">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Align-items: flex-end</h2>
  <div class="container flex-end">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Align-items: center</h2>
  <div class="container center">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>

  <h2>Align-items: baseline</h2>
  <div class="container baseline">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

CSS File (`styles.css`):
```css
.container {
  display: flex;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid black;
}

.item {
  margin: 10px;
  padding: 20px;
  border: 1px solid red;
}

.stretch {
  align-items: stretch;
}

.flex-start {
  align-items: flex-start;
}

.flex-end {
  align-items: flex-end;
}

.center {
  align-items: center;
}

.baseline {
  align-items: baseline;
}
```

In these files, I've created several containers, each applying a different `align-items` value. The `stretch` class represents `align-items: stretch;`, `flex-start` for `align-items: flex-start;`, and so on. 

The `.item` class styles each flex item with a border, some padding, and a `flex-basis` value which helps us demonstrate the effect of each `align-items` value.

#### Output

![Align](https://i.imgur.com/TfNSudE.png)
![Align](https://i.imgur.com/wKWZp3s.png)
![Align](https://i.imgur.com/SpjM8w3.png)

## Gap Property

The `gap` property is a newer addition to Flexbox. It is used to define the spacing between the flex items in a flex container along both the main and cross axes.

Here's how you can use the `gap` property:

```css
.container {
  display: flex;
  gap: 20px;
}
```

In this example, the `.container` class is a flex container, and `gap: 20px;` is applied to it. This means that there will be a 20-pixel gap between each flex item inside the container, both horizontally and vertically.

Using the `gap` property is a convenient way to add spacing between flex items without having to add margin or padding to each item individually. It also ensures that the spacing between items is consistent, making your layout more uniform and easier to manage.

## Conclusion

Flexbox provides a flexible and efficient way to create complex and responsive layouts. By understanding the concepts of flex containers and flex items, along with the key properties like `flex-direction`, `flex-wrap`, `justify-content`, and `align-items`, you can create dynamic and adaptive designs that respond to different screen sizes and devices.

References:
- [MDN Web Docs: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [W3Schools: CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)

