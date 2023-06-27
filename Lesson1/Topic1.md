# HTML Basics: Structure of an HTML Document

HTML (Hypertext Markup Language) serves as the backbone of the web, allowing us to create stunning and interactive websites. Understanding the structure of an HTML document is crucial for anyone starting their journey into web development. In this topic, we will explore the structure of an HTML document, providing you with a solid understanding of its components.

## Introduction

An HTML document follows a specific structure that outlines the organization of its contents. By understanding this structure, you can create well-formed and semantically correct web pages. Let's dive into the key components that make up the structure of an HTML document.

## Structure of an HTML Document

An HTML document consists of several key elements that define its structure. Let's explore each of these components in detail:

### Document Declaration: `<!DOCTYPE>`

The `<!DOCTYPE>` declaration appears at the very beginning of an HTML document and specifies the version of HTML being used. For modern web pages, the HTML5 doctype declaration is commonly used:

```html
<!DOCTYPE html>
```

The doctype declaration tells the browser which version of HTML to expect, ensuring proper rendering of the web page.

### Root Element: `<html>`

The `<html>` element serves as the root element of an HTML document. It encapsulates all other elements and defines the beginning and end of the document. All other HTML elements are contained within the `<html>` tags.

```html
<!DOCTYPE html>
<html>
  <!-- Other HTML elements go here -->
</html>
```

### Document Head: `<head>`

Within the `<html>` element, we have the `<head>` section. The `<head>` section contains metadata and resources that provide information about the web page. This includes elements like the `<title>` element, which specifies the title of the page displayed in the browser's title bar.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <!-- Other HTML elements go here -->
  </head>
  <!-- Content goes here -->
</html>
```

The `<head>` section is not visible to users directly, but it includes important information for search engines, browsers, and other web services.

### Document Body: `<body>`

The `<body>` element represents the visible content of the web page. It includes all the elements that users see and interact with. The content within the `<body>` tags is what gets rendered in the browser window.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <!-- Other HTML elements go here -->
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

The `<body>` section is where you structure and organize the main content of your web page.

## Conclusion

Understanding the structure of an HTML document is essential for building well-formed and semantically correct web pages. The `<!DOCTYPE>` declaration, `<html>` root element, `<head>` section, and `<body>` element form the foundational structure of an HTML document.

By following this structure, you ensure proper rendering and accessibility of your web pages across different browsers and devices. Remember to use appropriate HTML tags and elements within the `<body>` section to structure your content effectively.

References:
- [Mozilla Developer Network (MDN) - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3Schools - HTML Introduction](https://www.w3schools.com/html/html_intro.asp)