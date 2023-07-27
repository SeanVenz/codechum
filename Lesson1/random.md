Problem: Incorrect Semantic Structure

Description: The HTML document lacks proper semantic structure, leading to a loss of meaning and organization in the content. Your task is to identify the incorrect semantic structure and modify the code to ensure the correct usage of semantic tags.

Initial Code:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Incorrect Semantic Structure</title>
</head>
<body>
  <section>
    <h1>This is a header</h1>
    <p>This is the header section.</p>
  </section>
    <footer>
      <h1>Contact</h1>
      <p>This is the contact section.</p>
    </footer>
</body>
</html>
```

Expected Code:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Correct Semantic Structure</title>
</head>
<body>
  <header>
    <h1>About Us</h1>
    <p>This is the about section.</p>
  </header>
  
    <section>
        <h1>Contact</h1>
        <p>This is the contact section.</p>
    </section>
</body>
</html>
```