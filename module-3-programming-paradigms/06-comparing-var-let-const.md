# Comparing var, let and const

## Overview

Different rules apply to variables declared with `var`, `let`, and `const`. Let's explore each one.

## The var Keyword (Most Lenient)

### 1. Can Be Accessed Before Initialization

A variable declared with `var` can be accessed before initialization, as long as it's eventually initialized somewhere in the code.

**Example 1: Undeclared Variable**
```js
console.log(user); // ReferenceError: user is not defined
```

**Example 2: Declared with var**
```js
console.log(user); // Output: undefined (no error!)
var user;
```

The JavaScript engine continues to run without throwing an error.

### 2. Can Be Redeclared

You can declare and redeclare the same `var` variable without errors.

```js
console.log(user); // Output: undefined

var user = "Mary";
var user = "Joanna";
var user = "Mark";

console.log(user); // Output: Mark
```

**Output:**
```
undefined
Mark
```

The latest reassignment value is used.

## The let Keyword (Stricter)

### 1. Cannot Access Before Declaration

You **cannot** access a `let` variable before declaring it.

```js
console.log(user); // ReferenceError: Cannot access 'user' before initialization
let user;
```

### 2. Can Declare Without Assignment

You can declare an unassigned variable with `let`.

```js
let user;
console.log(user); // Output: undefined
```

This works without problems.

### 3. Cannot Redeclare

Once you declare a variable with `let`, you **cannot** redeclare it.

```js
let user;
let user; // SyntaxError: Identifier 'user' has already been declared
```

### 4. Can Reassign

While you cannot redeclare a `let` variable, you **can** reassign it.

```js
let user;
console.log(user); // Output: undefined

user = "Anna";
console.log(user); // Output: Anna
```

**Output:**
```
undefined
Anna
```

## The const Keyword (Strictest)

### 1. Must Be Initialized

A `const` variable **must** be initialized when declared.

```js
const user; // SyntaxError: Missing initializer in const declaration
```

**Correct:**
```js
const user = "Anna";
```

### 2. Cannot Access Before Initialization

You cannot access a `const` variable before initialization.

```js
console.log(user); // ReferenceError: Cannot access 'user' before initialization
const user = "Anna";
```

### 3. Cannot Redeclare

A `const` variable cannot be redeclared.

```js
const user = "Anna";
const user = "John"; // SyntaxError: Identifier 'user' has already been declared
```

### 4. Cannot Reassign

A `const` variable **cannot** be reassigned.

```js
const user = "Anna";
user = "John"; // TypeError: Assignment to constant variable
```

## Summary Comparison

| Feature | var | let | const |
|---------|-----|-----|-------|
| **Access before declaration** | ✅ Yes (undefined) | ❌ No (ReferenceError) | ❌ No (ReferenceError) |
| **Declare without value** | ✅ Yes | ✅ Yes | ❌ No (Must initialize) |
| **Redeclare** | ✅ Yes | ❌ No (SyntaxError) | ❌ No (SyntaxError) |
| **Reassign** | ✅ Yes | ✅ Yes | ❌ No (TypeError) |
| **Strictness** | Most Lenient | Moderate | Strictest |

## Decision Guide

### When to Use Each

**Use `var`:**
- Avoid in modern JavaScript (legacy code only)

**Use `let`:**
- When the value will be reassigned
- When you need a variable that can change

**Use `const`:**
- When the value will never be reassigned
- Default choice in modern JavaScript

### Examples

**Use let for changing values:**
```js
let score = 0;
score = 10;      // ✅ Allowed
score = 20;      // ✅ Allowed
```

**Use const for fixed values:**
```js
const PI = 3.14159;
const MAX_USERS = 100;

PI = 3.14;       // ❌ TypeError: Assignment to constant variable
```

## Best Practice

In modern JavaScript:
1. **Use `const` by default** - prevents accidental reassignment
2. **Use `let`** when you know the value will change
3. **Avoid `var`** - it has confusing behavior with hoisting and scope

### Why This Matters

```js
// Confusing with var
console.log(x); // undefined
var x = 5;

// Clear with let/const
console.log(y); // ReferenceError (better for catching bugs!)
let y = 5;
```

Using `let` and `const` makes your code more predictable and easier to debug.

## Quick Reference

### var (Lenient)
```js
console.log(x);  // undefined
var x = 5;
var x = 10;      // Allowed
x = 15;          // Allowed
```

### let (Moderate)
```js
console.log(y);  // ReferenceError
let y = 5;
let y = 10;      // SyntaxError
y = 15;          // Allowed
```

### const (Strict)
```js
console.log(z);  // ReferenceError
const z = 5;
const z = 10;    // SyntaxError
z = 15;          // TypeError
```

## Pro Tip

**Remember it like this:**
- **var** is the most lenient
- **const** is the strictest
- **let** is in the middle

Choose based on whether the value will be reassigned or not. When in doubt, start with `const` and change to `let` only if you need to reassign.

## Try It Yourself

Practice declaring variables with `var`, `let`, and `const` in your own code to see how they behave differently!
