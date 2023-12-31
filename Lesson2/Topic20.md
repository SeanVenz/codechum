# CSS Text Styling: Modifying Font Properties and Changing Text Color, Alignment, and Decoration

CSS provides powerful tools for styling text on web pages. By modifying font properties and changing text color, alignment, and decoration, you can enhance the visual appeal and readability of your content. In this topic, we will explore how to modify font properties such as font-size, and font-weight, as well as how to change text color, alignment, and decoration.

## Introduction

Text styling is an important aspect of web design. CSS offers a wide range of properties and values to control the appearance of text, allowing you to customize sizes, weights, colors, alignments, and more. By using these properties, you can create visually appealing and engaging text content on your web pages.

## Modifying Font Properties

CSS provides several properties to modify font properties:

### Font Size

The `font-size` property is used to specify the size of the text. You can use different units of measurement such as pixels, percentages, or ems (). Here's an example:

```css
p {
  font-size: 24px; /*measure the font size by pixels*/
  font-size: 100%; /*measure the font size by percentage*/
  font-size: 2em; /*measure the font size by em */
  /* The em unit in CSS scales in size based on the parent's font size. */
}
```

The above example sets the font size of `<p>` elements to the desired font size.

### Font Weight

The `font-weight` property allows you to specify the thickness or boldness of the text. You can use values like `normal`, `bold`, or numeric values such as `200` or `700`, with a minimum value of `100` and a maximum value of `900`. The default value of font-weight is `400` for normal text. Here's an example:

```css
p {
  font-weight: bold;
}

/* or */

p{
  font-weight: 300;
}
```

The first example above sets the font weight of `<p>` elements to bold, while the second example sets the font weight weight that is lighter than normal.

## Changing Text Color, Alignment, and Decoration

CSS also provides properties to change text color, alignment, and decoration:

### Text Color

The `color` property is used to specify the color of the text. You can use color names, hexadecimal values, or RGB values. Here's an example:

```css
p {
  color: #FF0000;
}

/* or */

p{
  color: red;
}
```

The above example sets the text color of `<p>` elements to red.

### Text Alignment

The `text-align` property is used to specify the horizontal alignment of the text within its container. You can use values like `left`, `right`, `center`, or `justify`. Here's an example:

```css
p {
  text-align: center;
}
```

The above example aligns the text within `<p>` elements to the center.

### Text Decoration

The `text-decoration` property is used to add decorative styling to text, such as underlines, overlines, or line-through. Here's an example:

```css
a {
  text-decoration: underline;
}
```

The above example adds underlines to all anchor `<a>` elements.

## Diagram: CSS Text Styling Properties

Here's a diagram illustrating the CSS text styling properties:

HTML File:
```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Text Styling Properties</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Some paragraph text.</p>
</body>
</html>
```

CSS File:
```css
p {
  font-size: 24px;
  font-weight: bold;
  color: #FF0000;
  text-align: center;
  text-decoration: underline;
}
```

## Output

![Font-Properties](https://i.imgur.com/GfXGxrV.png)

## Additional Considerations

Consider using a combination of different text styling properties to create visually appealing and readable content.

## Conclusion

CSS provides powerful tools for modifying font properties and changing text color, alignment, and decoration. By using these properties, you can enhance the visual appeal, readability, and overall user experience of your web pages. Understanding and utilizing text styling techniques are essential skills for web designers and developers.

References:
- [Mozilla Developer Network (MDN) - CSS Typography](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- [W3Schools - CSS Text Formatting](https://www.w3schools.com/css/css_text.asp)