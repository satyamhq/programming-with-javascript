# JavaScript Selectors

## Introduction

One of the most powerful features of JavaScript is **DOM manipulation**. For example, you can click on a button and change the color of some text or even display a pop-up message. Essentially, you're dynamically updating the HTML content in real time.

To do this, you must be able to **locate the objects in your HTML document** that you want to manipulate.

## The Document Object

JavaScript selectors work with the **document object** which you can access by typing the keyword `document`.

```js
document
```

This returns the webpage stored in the browser's memory, known as the **Document Object Model (DOM)**.

Alternatively, you can run a console log on the document keyword to get the same result:

```js
console.log(document);
```

## Common JavaScript Selectors

### 1. querySelector()

The `querySelector()` method locates specific elements inside the document object.

#### Syntax

```js
document.querySelector('selector');
```

#### Example: Selecting the First Paragraph

```js
document.querySelector('p');
```

This returns the **first** `<p>` element on the page.

You can expand this in the console to view the paragraph text contained within.

#### Example: Selecting the First Anchor Tag

```js
document.querySelector('a');
```

This returns the **first** `<a>` (anchor) element on the page.

### 2. querySelectorAll()

There is a very similarly named JavaScript selector that allows you to get **all the matches** from a webpage.

#### Syntax

```js
document.querySelectorAll('selector');
```

#### Example: Selecting All Paragraphs

```js
document.querySelectorAll('p');
```

This returns a **NodeList** containing all `<p>` elements on the page (e.g., if there are two paragraph tags, both are returned).

### 3. getElementById()

Another useful JavaScript selector is `getElementById()`, which can find objects in the DOM that match a specified HTML ID attribute.

#### Syntax

```js
document.getElementById('id');
```

#### Example: Finding an Element with ID "heading"

```js
document.getElementById('heading');
```

This returns an `<h1>` element assigned with the HTML ID attribute value of `"heading"`.

**Important Note:** The word "element" is **singular** for ID.

### 4. getElementsByClassName()

This method returns elements based on a specified **class name** rather than ID.

#### Syntax

```js
document.getElementsByClassName('className');
```

#### Example: Finding Elements with Class "txt"

```js
document.getElementsByClassName('txt');
```

This returns an **HTMLCollection** containing all elements with the class name `"txt"` (e.g., two paragraph tags).

**Important Note:** The word "elements" is **plural** for class name.

## Summary of Selector Methods

| Method | Returns | Example |
|--------|---------|---------|
| `querySelector()` | First matching element | `document.querySelector('p')` |
| `querySelectorAll()` | All matching elements (NodeList) | `document.querySelectorAll('p')` |
| `getElementById()` | Single element with matching ID | `document.getElementById('heading')` |
| `getElementsByClassName()` | All elements with matching class (HTMLCollection) | `document.getElementsByClassName('txt')` |
| `getElementsByTagName()` | All elements with matching tag (HTMLCollection) | `document.getElementsByTagName('div')` |

## Important Notes for Beginners

### Singular vs Plural

- **`getElementById()`**: The word "element" is **singular** (returns one element)
- **`getElementsByClassName()`**: The word "elements" is **plural** (returns a collection)
- **`getElementsByTagName()`**: The word "elements" is **plural** (returns a collection)

### When Elements Cannot Be Found

If the element you're looking for cannot be found:

- **For IDs**: Returns `null`
- **For class names**: Returns an empty collection represented by `HTMLCollection []`

```js
// Element not found with ID
document.getElementById('nonexistent'); // Returns: null

// Element not found with class name
document.getElementsByClassName('nonexistent'); // Returns: HTMLCollection []
```

## Advanced Selector Examples

### Using CSS Selectors with querySelector()

`querySelector()` and `querySelectorAll()` accept any valid CSS selector:

```js
// Select by class
document.querySelector('.my-class');

// Select by ID
document.querySelector('#my-id');

// Select nested elements
document.querySelector('div p');

// Select with attribute
document.querySelector('input[type="text"]');

// Select with pseudo-class
document.querySelector('li:first-child');
```

### Chaining Selectors

```js
// Find a paragraph inside a div with class "container"
document.querySelector('.container p');

// Find all links inside navigation
document.querySelectorAll('nav a');
```

## Practical Example

```js
// Select first paragraph and change its text
const firstParagraph = document.querySelector('p');
firstParagraph.innerText = 'This text has been changed!';

// Select all paragraphs and change their color
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => {
    p.style.color = 'blue';
});

// Select element by ID and hide it
const heading = document.getElementById('heading');
heading.style.display = 'none';

// Select elements by class and add border
const txtElements = document.getElementsByClassName('txt');
for (let element of txtElements) {
    element.style.border = '1px solid black';
}
```

## When to Use Which Selector?

- **`querySelector()`**: When you need the first matching element with CSS selector flexibility
- **`querySelectorAll()`**: When you need all matching elements with CSS selector flexibility
- **`getElementById()`**: When you have a unique ID (fastest for single element)
- **`getElementsByClassName()`**: When selecting multiple elements by class (faster than `querySelectorAll()` for this specific use case)

## Conclusion

You've learned how to use JavaScript selectors to speed up the process of finding specific objects in a document. These selectors are fundamental tools for DOM manipulation and are essential for creating interactive web pages.

Key takeaways:

- `querySelector()` returns the first match
- `querySelectorAll()` returns all matches
- `getElementById()` finds by ID (singular)
- `getElementsByClassName()` finds by class (plural)
- Missing elements return `null` or empty collections
