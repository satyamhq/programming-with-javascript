# Writing Your First JavaScript Code

## Overview

This section introduces the basics of writing JavaScript code. You will learn about **comments**, the **semicolon**, and how to run JavaScript using the **browser console**. You will also write your first JavaScript output using `console.log`.

---

## Comments in JavaScript

Comments are ignored by the browser and are used to explain, document, or temporarily disable code.

### Why Comments Matter

* Help explain what code does
* Improve communication with teammates
* Serve as notes for your future self
* Allow you to mark code as *to-do* or *to-improve*
* Enable debugging by commenting out code without deleting it

---

## Types of Comments

### Single-Line Comments

* Created using two forward slashes

```javascript
// this is a comment
```

* Everything after `//` on that line is ignored

---

### Multi-Line Comments

* Created using `/*` and `*/`

```javascript
/*
this is a
multi-line
comment
*/
```

* Can also be written on a single line

```javascript
/* this is a multi-line comment on one line */
```

---

## The Semicolon in JavaScript

* The semicolon `;` is used to separate statements
* Similar to a period in written language

### Automatic Semicolon Insertion (ASI)

* JavaScript can automatically insert semicolons when missing
* Most code works with or without semicolons
* Using semicolons is largely a **style choice**

**Best practice:** Be consistent in your code style

---

## Using the Browser Console

JavaScript is easy to start because every modern browser includes a JavaScript engine.

### Opening the Console (Chrome)

1. Right-click on a webpage
2. Click **Inspect**
3. Open the **Console** tab

**Shortcut:** Press `ESC` to toggle the console

---

### Running Code in the Console

* Type JavaScript directly into the console
* Press `ENTER` to run the code
* Press `SHIFT + ENTER` to move to a new line without running

---

## Your First JavaScript Output

### Basic Example

```javascript
console.log("Hello, World");
```

* Outputs text to the console
* Commonly used for testing and debugging

---

### Styling Console Output

```javascript
console.log("%cHello, World", "color: blue; font-size: 40px;");
```

* `%c` allows CSS styling
* Styles are passed as a second argument

---

## Outputting Multiple Words

### Using Concatenation (`+`)

```javascript
console.log("Hello " + "there, " + "World");
```

**Output:**

```
Hello there, World
```

---

### Using Commas (`,`) in `console.log`

```javascript
console.log("Hello", "there,", "World");
```

**Output:**

```
Hello there, World
```

### Difference Between `+` and `,`

* `+` joins text into one string
* `,` outputs values separately with automatic spacing

---

## How to Practice

You can write JavaScript in two ways:

* Using **VS Code** with the **Code Runner** extension
* Using the **browser DevTools console**

Both are valid ways to practice and learn.

---

## Key Takeaways

* Comments help explain and control code
* JavaScript supports single-line and multi-line comments
* Semicolons are mostly optional due to ASI
* The browser console is a powerful learning tool
* `console.log` is used to display output

You have now written your first JavaScript code and are ready to continue learning.
