# Writing Conditional Statements in JavaScript

## Overview

In everyday life, decisions are made based on conditions that are either **true** or **false**. JavaScript follows the same principle using **conditional statements**, which allow code to run only when specific conditions are met.

Conditional logic is a core part of programming and enables applications to behave differently based on user input or data.

---

## What Are Conditional Statements?

* Conditional statements execute code based on a condition
* Conditions evaluate to a **Boolean value**: `true` or `false`
* JavaScript uses comparison and logical operators to evaluate conditions

---

## The `if` Statement

The `if` statement runs a block of code **only if** a condition is true.

### Syntax

```javascript
if (condition) {
  // code runs if condition is true
}
```

### Example

```javascript
var isRaining = true;

if (isRaining) {
  console.log("Take an umbrella");
}
```

* The code inside the block runs only when `isRaining` is `true`

---

## Conditions and Comparison Operators

Conditions are usually created using comparison operators such as:

* Equal to (`==`, `===`)
* Not equal to (`!=`, `!==`)
* Greater than (`>`)
* Less than (`<`)

These operators return Boolean values.

---

## The `if...else` Statement

The `if...else` statement handles **two possible outcomes**:

* If the condition is true → run one block
* If the condition is false → run another block

### Syntax

```javascript
if (condition) {
  // code if condition is true
} else {
  // code if condition is false
}
```

---

## Example: Driving Test Result

A learner passes the test if their score is greater than 40.

```javascript
var score = 45;

if (score > 40) {
  console.log("You passed the exam");
} else {
  console.log("You failed the exam");
}
```

* Only one block will run
* The decision is based on the value of `score`

---

## The `else if` Statement

Sometimes, you need to test **multiple conditions**.

### Syntax

```javascript
if (condition1) {
  // code for condition1
} else if (condition2) {
  // code for condition2
} else {
  // code if none of the conditions are true
}
```

### Example

```javascript
var score = 75;

if (score >= 80) {
  console.log("Excellent result");
} else if (score >= 40) {
  console.log("You passed");
} else {
  console.log("You failed");
}
```

---

## Why Conditional Statements Matter

Conditional statements allow you to:

* Control program flow
* Handle different scenarios
* Make decisions based on data
* Build interactive and responsive applications

---

## Key Takeaways

* Conditions evaluate to true or false
* `if` runs code only when a condition is true
* `if...else` handles two outcomes
* `else if` handles multiple conditions
* Conditional logic is fundamental in JavaScript

Mastering conditional statements is essential for writing meaningful and dynamic JavaScript programs.
