# Variables in JavaScript

## Overview

When starting a JavaScript program, think of it as a blank world waiting to be built. One of the most important building blocks in this world is the **variable**.

Variables allow you to store data, reuse it, and change it over time. They make programs flexible and dynamic instead of static and repetitive.

---

## What Is a Variable?

* A variable is a **named container** for storing data
* It allows you to reuse values without rewriting them
* Variables help make code readable, reusable, and dynamic

---

## Declaring a Variable

To tell JavaScript that you want to create a variable, you use the `var` keyword.

```javascript
var person;
```

* This is called **variable declaration**
* The variable `person` exists, but it has **no value yet**
* Its value is `undefined`

---

## Assigning a Value to a Variable

To give a variable a value, use the **assignment operator (`=`)**.

```javascript
var person = "John";
```

* This is called **variable assignment**
* The value on the right (`"John"`) is stored in the variable on the left (`person`)

---

## Accessing a Variable’s Value

You can retrieve a variable’s value by typing its name:

```javascript
person;
```

**Output:**

```
John
```

---

## Using Variables with `console.log`

Variables are commonly used with `console.log` to display output.

```javascript
console.log("Hello", person);
```

**Output:**

```
Hello John
```

This combines **static text** (`"Hello"`) with a **dynamic variable** (`person`).

---

## Storing Text in Variables

You can also store text in variables:

```javascript
var greeting = "Hello";
```

Now both values can be reused:

```javascript
console.log(greeting, person);
```

**Output:**

```
Hello John
```

---

## Reassigning Variable Values

Variables are not fixed — their values can change.

```javascript
greeting = "Hi";
person = "James";
```

* No need to use `var` again
* JavaScript already knows these variables exist

---

## Using Updated Values

Running the same code again:

```javascript
console.log(greeting, person);
```

**Output:**

```
Hi James
```

The code stayed the same, but the result changed.

---

## Why Variables Are Powerful

* Allow the same code to produce different results
* Make programs flexible and reusable
* Enable dynamic behavior

Without variables, programs would be static and repetitive.

---

## Key Takeaways

* Variables store reusable data
* Declaration creates a variable
* Assignment gives it a value
* Variables can be reassigned
* Changing values changes program output

Variables are a core building block of JavaScript and essential for creating dynamic programs.
