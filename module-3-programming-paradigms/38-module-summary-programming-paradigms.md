# Module Summary: Programming Paradigms

## Introduction

You've reached the end of this module on programming paradigms. Great work!

During this module, you explored the core features of **functional programming** and **object-oriented programming**.

Let's review the module by summarizing the major items you encountered.

## What You Learned

### Programming Paradigms Overview

The various styles of computer languages are known as **programming paradigms**.

Having studied programming paradigms in this module, you should be able to:

- Describe functional programming
- Understand how it can be used to solve problems by separating data from functions

### Functional Programming

You learned about functional programming and its key principles:

- **Separation of data and functions**: Keep data and functionality separate
- **Pure functions**: Functions that return the same output for the same input
- **First-class functions**: Functions can be assigned to variables, passed as arguments, and returned from other functions
- **Higher-order functions**: Functions that accept other functions as arguments or return functions
- **Immutability**: Variables are not modified after their initial assignment

### Object-Oriented Programming (OOP)

Having explored functional programming, you moved on to another popular paradigm: **Object-Oriented Programming**, often referred to as **OOP**.

You discovered:

- How OOP differs from functional programming
- Object-oriented programming principles
- How OOP groups data and functionality together in objects

**Key Difference:**

- **Functional Programming**: Keeps data and functionality separate
- **Object-Oriented Programming**: Groups data and functionality together in meaningful objects

## Scope in JavaScript

In programming, **scope** determines which parts of the code are accessible and which parts are inaccessible.

### What You Learned About Scope

You learned how the scope of variables changes when you use:

- The keyword `var` in **ES5 JavaScript**
- The keywords `let` and `const` in **ES6 JavaScript**

### Scope Chain

You should now be familiar with how the **scope chain** works in JavaScript.

### Types of Scope

You should also be able to identify different types of scope:

- **Global scope**: Accessible everywhere
- **Local scope** (function scope): Accessible only within the function

## Classes and Constructors

Much of the development work in JavaScript involves building objects.

### Classes

- **Classes** are essentially a blueprint that you can repeatedly use to build new objects
- You can pass parameters to class methods
- Use them the same way as with regular functions

### Constructors

**Constructors** tell JavaScript how you want your objects to be built.

You should now be able to:

- Utilize constructors on built-in JavaScript objects
- Create custom constructors for your own objects

## Inheritance and Prototypes

You learned that **inheritance** exists in JavaScript, and the inheritance model revolves around the **prototype**.

Key concepts:

- Prototype chain
- Prototypal inheritance
- How objects inherit properties and methods from other objects

## Modern JavaScript Features

You explored how JavaScript code uses modern features:

### Spread Operator

- Expands arrays, objects, or strings into individual elements
- Used for concatenation, copying, or passing arguments

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

### Rest Operator

- Gathers multiple elements into a single array or object
- Used in destructuring or collecting function arguments

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

### Template Strings

- Allow for easy string interpolation
- Support multi-line strings

```js
const name = "John";
const greeting = `Hello, ${name}!`;
```

### Modules

- Standalone units of code that can be reused
- Use `import` and `export` keywords
- Help organize and maintain code

```js
// Export
export const myFunction = () => { };

// Import
import { myFunction } from './module.js';
```

## DOM Manipulation and Event Handling

You built code that manipulates the DOM and handles events.

### DOM Manipulation

- Creating elements: `document.createElement()`
- Modifying content: `element.innerText`, `element.innerHTML`
- Setting attributes: `element.setAttribute()`
- Adding to DOM: `element.appendChild()`

### Event Handling

- Using `addEventListener()` method
- Understanding event types (click, keydown, submit, etc.)
- Creating event handler functions
- Event bubbling and propagation

## JSON in JavaScript

Finally, you used **JSON** (JavaScript Object Notation) in JavaScript.

Key concepts:

- **JSON.parse()**: Convert JSON string to JavaScript object
- **JSON.stringify()**: Convert JavaScript object to JSON string
- Understanding JSON syntax rules
- Working with APIs and data exchange

## Summary of Key Topics

1. **Programming Paradigms**
   - Functional Programming
   - Object-Oriented Programming

2. **Scope**
   - Global scope
   - Local scope
   - Scope chain
   - `var`, `let`, and `const`

3. **Classes and Constructors**
   - Building objects
   - Using constructors
   - Creating blueprints for objects

4. **Inheritance**
   - Prototypal inheritance
   - Prototype chain

5. **Modern JavaScript Features**
   - Spread operator
   - Rest operator
   - Template strings
   - Modules

6. **DOM and Events**
   - DOM manipulation
   - Event handling
   - Interactive web pages

7. **JSON**
   - Data interchange format
   - Parsing and stringifying
   - Working with APIs

## Conclusion

That was a lot to cover, but you should now be more familiar with **programming paradigms in JavaScript**.

You've gained knowledge in:

- Understanding different programming styles
- Working with scope and variables
- Building and organizing objects
- Using modern JavaScript features
- Manipulating the DOM and handling events
- Working with JSON data

**Great work!** These concepts form the foundation of modern JavaScript development and will serve you well as you continue your programming journey.
