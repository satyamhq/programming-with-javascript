# JavaScript DOM Manipulation

## Introduction

Did you ever think of the functions your TV remote does for you? It allows you to make changes to your TV. You can think of the **DOM** like a TV remote that lets you change the webpage content on the screen. It even allows you to replace only certain parts of the page, such as an image or the heading, or both.

### The Limitation of a TV Remote

A remote has certain limitations - you can only change the channel, contrast, brightness, and volume.

### The Power of the DOM

The DOM gives you much finer-grained control than a TV remote ever could. For example, imagine you can change what characters in a TV movie look like with a few simple commands while the movie is playing.

**The DOM allows you to change properties of objects on a webpage.**

You can think of the DOM as a **superpower remote for websites**. It gives developers power in how they can manipulate and update webpages.

## What is the DOM?

The **DOM (Document Object Model)** is in the form of a JavaScript object with nested objects for different parts of the page. These objects have nested objects of their own until the entire HTML file is mapped out in what looks like a **tree structure**.

**The DOM is the model of the HTML file saved as a JavaScript object in your browser's memory.**

### How the Browser Creates the DOM

The browser automatically builds the DOM for every webpage that it downloads.

For example:

1. You type a URL into your browser's address bar
2. The browser fetches the webpage that exists on this domain
3. If the browser connects to the server and it allows the browser to download the page, it will receive all the HTML code and save it in its memory
4. The browser will then show the downloaded page
5. It would also build that webpage's DOM - a model of the HTML document your browser has just downloaded

As a developer, you can interact with the page's DOM to make changes to the webpage.

## Interacting with the DOM

There are two main ways to interact with the DOM:

### 1. Using the Elements Tab (GUI)

To interact with the DOM, you can use the **Elements tab** inside the browser's **DevTools**.

**How to access DevTools:**

- Right-click anywhere in a browser window
- Click "Inspect"

The Elements tab allows you to interact with the DOM of the currently active webpage using a **graphical user interface (GUI)**.

### 2. Using JavaScript (Console)

The browser also allows you to interact with the DOM using JavaScript.

**How to access the Console:**

- Click the Console tab in the browser's DevTools
- You can focus on the Console panel by pressing the **Escape key** on your keyboard

Once done, you can start typing JavaScript commands to view and manipulate the DOM. This is similar to how you interact with the DOM using the Elements panel, only this time you're using code to do it.

**The entire DOM object is saved inside the `document` variable and accessible via the console.**

## DOM Manipulation Demo

Using the Document Object Model allows us to manipulate live websites.

### Important Note

Any changes you make to the DOM are **relative to your browser's local copy** of the webpage. You're not updating the content of the live website, so don't worry - you're not going to break it.

**If you reload the webpage, all changes you make to the DOM will be lost** as it will reset to the page that was downloaded from the server.

### Step 1: Create an Element

Let's create an `h2` element and add it to the webpage.

```js
const h2 = document.createElement('h2');
```

**What this does:**

- `document.createElement()` creates a new HTML element
- The tag name (`'h2'`) is passed as a JavaScript string
- The element is assigned to a `const` variable named `h2`

### Step 2: Add Text to the Element

Although we've created the `h2` element, it's not yet part of the DOM structure and has no text. Let's fix that.

```js
h2.innerText = 'This is an h2 heading';
```

### Step 3: Add Attributes

Next, let's add an `id` and a `class` HTML attribute using the `setAttribute` method.

#### Adding an ID

```js
h2.setAttribute('id', 'sub-heading');
```

**Note:** Inside the parentheses, the name and the value are wrapped in quotes and separated by a comma.

#### Adding a Class

```js
h2.setAttribute('class', 'secondary');
```

### Step 4: Verify the Element

Before adding to the DOM, you can test that your code is correct:

```js
h2
```

This will output the HTML structure in the console.

### Step 5: Append to the DOM

Finally, append the `h2` object to the DOM by running the `appendChild` method on the document body:

```js
document.body.appendChild(h2);
```

**Success!** The object is appended to the body of the webpage and the heading 2 text displays in the browser.

## Common DOM Manipulation Methods

### Creating Elements

```js
document.createElement('tagName')
```

### Modifying Content

```js
element.innerText = 'text content';
element.innerHTML = '<strong>HTML content</strong>';
```

### Setting Attributes

```js
element.setAttribute('attributeName', 'value');
element.id = 'myId';
element.className = 'myClass';
```

### Getting Attributes

```js
element.getAttribute('attributeName');
```

### Adding to the DOM

```js
parentElement.appendChild(childElement);
parentElement.append(childElement); // Can append multiple elements
```

### Removing from the DOM

```js
element.remove();
parentElement.removeChild(childElement);
```

### Selecting Elements

```js
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('selector');
document.getElementsByClassName('class');
document.getElementsByTagName('tag');
```

## Complete Example

Here's a complete example putting it all together:

```js
// Create element
const h2 = document.createElement('h2');

// Add text
h2.innerText = 'This is an h2 heading';

// Add attributes
h2.setAttribute('id', 'sub-heading');
h2.setAttribute('class', 'secondary');

// Verify (optional)
console.log(h2);

// Append to DOM
document.body.appendChild(h2);
```

## Key Takeaways

- The **DOM** is a tree-like structure representing the HTML document
- The DOM is saved as a JavaScript object in the browser's memory
- You can interact with the DOM through the **Elements tab** (GUI) or **Console** (JavaScript)
- The entire DOM is accessible via the `document` variable
- DOM changes are **local** to your browser and are **lost on page reload**
- Common methods include `createElement()`, `setAttribute()`, `innerText`, and `appendChild()`

## Conclusion

You should now be able to explain the basics of DOM manipulation and use some of the most common DOM manipulation methods. The DOM gives you powerful control over webpage content, allowing you to dynamically create, modify, and remove elements as needed.
