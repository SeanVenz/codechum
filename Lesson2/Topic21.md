# CSS Fonts and Web Typography

Web typography plays a significant role in the overall design and aesthetics of a website. With CSS, you can control the appearance and style of text on your web pages. In this guide, we will explore how to work with web fonts and import custom fonts to enhance the typography of your website.

## Introduction to Web Fonts

Web fonts refer to custom fonts that are not commonly found on all devices or operating systems. By default, web browsers only display fonts that are installed on the user's device. However, using CSS, you can specify the fonts you want to use on your website, regardless of whether they are available on the user's device or not.

## Using Web-Safe Fonts

Web-safe fonts are fonts that are commonly found on most devices and operating systems. These fonts ensure consistent rendering across different platforms, providing a reliable fallback option if custom fonts cannot be loaded. Here are some examples of web-safe fonts:

- Arial
- Helvetica
- Times New Roman
- Georgia
- Courier New

To use a web-safe font in your CSS, you can specify the font-family property with the desired font name. Here's an example:

```css
body {
  font-family: Arial, sans-serif;
}
```

In this example, the font-family property is set to Arial as the preferred font, and if Arial is not available, the browser will use a sans-serif font as a fallback.

## Importing Custom Fonts

If you want to use custom fonts on your website, you can import them using `@font-face` rule in CSS. This allows you to load font files from your server and use them in your CSS rules.

To import a custom font, you need to have the font files in different formats (e.g., .woff, .woff2, .ttf) and add the following CSS code to your stylesheet:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('path/to/font.woff2') format('woff2'),
       url('path/to/font.woff') format('woff'),
       url('path/to/font.ttf') format('truetype');
}
```

In this code, `CustomFont` is the name you assign to the font, and `path/to/font` represents the file path to the font files on your server.

Once the font is imported, you can use it in your CSS rules by specifying the `font-family` property with the name you assigned:

```css
h1 {
  font-family: 'CustomFont', Arial, sans-serif;
}
```

In this example, the font `CustomFont` will be used for the `h1` element, and if it's not available, the browser will fall back to Arial and then a sans-serif font.

## Google Fonts

Google Fonts is a popular web font service that provides a wide range of free and open-source fonts for use on websites. It offers an extensive collection of fonts that you can easily incorporate into your CSS.

To use Google Fonts, follow these steps:

1. Visit the [Google Fonts website](https://fonts.google.com/).
2. Browse the available fonts and select the ones you want to use.
3. Click on the "+ Select this style" button for each font style you want to include.
4. Once you've made your selections, click on the "Family Selected" bar at the bottom of the screen.
5. In the "Embed" tab, you will find the HTML and CSS code snippets to include in your website.

Here's an example of how to use Google Fonts in your CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family:

 'Roboto', sans-serif;
}
```

In this example, the `@import` rule is used to import the Roboto font from Google Fonts, and the `font-family` property is set to `'Roboto', sans-serif` to use Roboto as the preferred font with a sans-serif fallback.

## Conclusion

Typography is an essential aspect of web design that can greatly impact the user experience and overall aesthetics of a website. By working with web fonts and importing custom fonts, you can enhance the visual appeal and create a unique typographic style for your web pages. Whether you choose to use web-safe fonts or import custom fonts, it's crucial to consider factors such as readability, accessibility, and cross-platform compatibility to ensure a consistent and engaging user experience.

Resources:
- [Google Fonts](https://fonts.google.com/)
- [MDN Web Docs - @font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- [CSS-Tricks - A Complete Guide to Font Loading Strategies](https://css-tricks.com/a-complete-guide-to-font-loading-strategies/)
- [W3Schools - CSS font-family Property](https://www.w3schools.com/cssref/pr_font_font-family.asp)