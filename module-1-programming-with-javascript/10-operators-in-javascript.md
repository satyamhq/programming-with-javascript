# Operators in JavaScript

## Overview

Operators are symbols used to perform operations on values and variables. They allow you to manipulate data, compare values, and control the flow of a program.

In JavaScript, operators are essential for calculations, decision-making, and logic.

---

## What Is an Operator?

* An operator performs an **operation** on one or more values
* It returns a result
* Used for math, comparisons, assignments, and logic

---

## Arithmetic Operators

Arithmetic operators work like a calculator and are used for numerical calculations.

| Operator       | Symbol | Description       |
| -------------- | ------ | ----------------- |
| Addition       | `+`    | Adds values       |
| Subtraction    | `-`    | Subtracts values  |
| Multiplication | `*`    | Multiplies values |
| Division       | `/`    | Divides values    |

### Examples

```javascript
console.log(2 + 2);   // 4
console.log(5 + 4 + 6); // 15
console.log(20 - 18); // 2
console.log(2 * 3);  // 6
console.log(8 / 1);  // 8
```

---

## Assignment Operator

The assignment operator (`=`) assigns a value to a variable.

```javascript
var number = 10;
```

* Takes the value on the right
* Stores it in the variable on the left

---

## Comparison Operators

Comparison operators compare values and return a **Boolean** result (`true` or `false`).

| Operator | Description  |
| -------- | ------------ |
| `>`      | Greater than |
| `<`      | Less than    |
| `==`     | Equal to     |
| `!=`     | Not equal to |

### Examples

```javascript
console.log(3 > 2);   // true
console.log(2 > 3);   // false
console.log(10 == 10); // true
```

### Important Note

* Use `==` for comparison
* Use `=` for assignment

---

## Logical Operators

Logical operators are used to work with **Boolean values** and conditions.

| Operator | Name | Description                 |    |                                     |
| -------- | ---- | --------------------------- | -- | ----------------------------------- |
| `&&`     | AND  | All conditions must be true |    |                                     |
| `        |      | `                           | OR | At least one condition must be true |
| `!`      | NOT  | Reverses a Boolean value    |    |                                     |

### Examples

```javascript
var a = 7;

console.log(a > 5 && a < 10); // true
console.log(a > 10 || a > 5); // true
console.log(!(a > 5));        // false
```

---

## Boolean Values

* `true` and `false` are Boolean values
* Often returned by comparison and logical operators
* Used to control program flow

---

## Operators and Program Flow

Operators are used to:

* Perform calculations
* Compare values
* Make decisions
* Control how code executes

They are fundamental to writing meaningful and dynamic JavaScript programs.

---

## Key Takeaways

* Operators perform actions on values and variables
* Arithmetic operators handle calculations
* Assignment operators store values
* Comparison operators return true or false
* Logical operators combine conditions

Understanding operators is a core skill and a critical part of every JavaScript developer’s toolkit.
