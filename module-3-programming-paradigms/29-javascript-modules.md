# JavaScript Modules

## Introduction

Photographers often need different camera lenses for different shooting situations. It wouldn't be very economical to have a separate camera for every need that arises. Fortunately, most systems are modular - meaning the lens can be removed and replaced with a different one as needed.

In JavaScript, complex programs can be useful for multiple applications, and it wouldn't make sense to rewrite them over and over. Thankfully, since version ES6, they can be saved and used elsewhere as **modules**.

## What are JavaScript Modules?

JavaScript modules are **standalone units of code** that you can reuse again and again.

Being standalone means that you can:

- Add them to your program
- Remove them
- Replace them with other modules
- Everything will still work

## Before Modules: The Global Scope Problem

Before modules entered the picture, in all versions of JS, all functions that are defined on the window object are global.

### The Problem

While useful for simple projects, this created some issues when third-party libraries or multiple developers became involved:

- A global function from one script could override a function from another one using the same variable name
- Techniques were developed to bypass these issues, but they were not without flaws

For a long time, **JavaScript lacked built-in, natively supported module functionality**.

## The History: CommonJS

An engineer at Mozilla named Kevin Dangoor tried to fix this through a project called **Server JS**, which was later renamed to **CommonJS**.

### What is CommonJS?

CommonJS is designed to specify how modules should work outside of the browser environment. It is mostly used on server-side JavaScript, namely **Node.js**.

### Downside of CommonJS

Browsers don't understand its syntax. Certain keywords that CommonJS relies on, such as:

- `require`
- `module.exports`

...don't work as expected in browsers.

## ES6 Modules

Now let's explore how ES6 modules work.

### The HTML Script Tag

To understand how ES6 modules work, we need to go back to the humble HTML `<script>` tag.

The script tag comes with a `type` attribute which identifies the type of content that it contains.

### Traditional Script Tag

For JavaScript, it is written as:

```html
<script type="text/javascript">
  console.log("hello from script tag");
</script>
```

You can even omit the `type` attribute and use a basic script tag - the attribute will be set to `text/javascript` by default:

```html
<script>
  console.log("hello from script tag");
  console.log("another message");
  console.log("yet another message");
</script>
```

### Using ES6 Modules in a Browser

To use ES6 modules, change the value of the `type` attribute:

```html
<script type="module">
  import { greeting } from './greeting.js';
</script>
```

Or import the module directly:

```html
<script type="module" src="./greeting.js"></script>
```

## CORS Issue with Local Files

When running files locally, access to scripts may be blocked by a built-in browser security feature called **CORS (Cross-Origin Resource Sharing)**.

### The Error

You'll receive an error message in the console tab when trying to load modules from local files.

### The Solution

To eliminate this error, you need to run the HTML file over a **server**. You can use a local server for that.

### Setting Up a Local Server

There are several options for running a local server:

- **Python**: `python -m http.server` or `python3 -m http.server`
- **Node.js**: `npx http-server` or `npx live-server`
- **VS Code**: Live Server extension

Once running over a server, the `greeting.js` module will be read in and consumed by the HTML document's script tag successfully.

## Creating and Using Modules

### Example: Creating a Module

**greeting.js**

```js
export function greet(name) {
  return `Hello, ${name}!`;
}

export const message = "Welcome to ES6 modules";
```

### Example: Importing a Module

**index.html**

```html
<!DOCTYPE html>
<html>
<head>
  <title>ES6 Modules Demo</title>
</head>
<body>
  <script type="module">
    import { greet, message } from './greeting.js';
    
    console.log(greet("World"));
    console.log(message);
  </script>
</body>
</html>
```

### Export Syntax

```js
// Named exports
export const name = "John";
export function myFunction() { }

// Default export
export default function() { }
```

### Import Syntax

```js
// Named imports
import { name, myFunction } from './module.js';

// Default import
import myDefault from './module.js';

// Import everything
import * as myModule from './module.js';
```

## Benefits of ES6 Modules

- **Encapsulation**: Code is contained within its own scope
- **Reusability**: Modules can be used across multiple projects
- **Maintainability**: Easier to organize and maintain code
- **No global namespace pollution**: Avoids naming conflicts
- **Dependency management**: Clear imports show what code depends on

## Key Takeaways

- **Modules** are standalone units of code that can be reused
- **Before ES6**, JavaScript had global scope issues and relied on solutions like CommonJS
- **CommonJS** works well for Node.js but not in browsers
- **ES6 modules** use `import` and `export` keywords
- Must use `<script type="module">` to enable module functionality in browsers
- **CORS restrictions** require running files on a server, not directly from the file system
- Modules help avoid global namespace pollution and naming conflicts

## Conclusion

You've learned about modules in JavaScript ES6. You should now have a better idea of both their uses and their limitations, and you should know how to use basic ES6 modules in a browser.
