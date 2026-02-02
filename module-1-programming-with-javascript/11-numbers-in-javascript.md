# Numbers in JavaScript

## Overview

The **number** data type is a fundamental part of JavaScript. It represents both **integers** and **decimal (floating‑point) numbers**. Numbers allow you to perform calculations, comparisons, and many core programming tasks.

---

## Number Data Type

In JavaScript, there is only one numeric data type: `number`.

### Examples

```javascript
123
123.456
```

* Whole numbers (integers) and decimal numbers use the same data type
* JavaScript automatically recognizes numeric values

---

## Basic Arithmetic Operations

JavaScript supports standard mathematical operators.

### Addition (`+`)

```javascript
2 + 2 // 4
```

### Subtraction (`-`)

```javascript
4 - 2 // 2
```

### Multiplication (`*`)

```javascript
4 * 4 // 16
```

### Division (`/`)

```javascript
16 / 4 // 4
```

---

## Exponentiation Operator (`**`)

Used to raise a number to a power.

```javascript
10 ** 2 // 100
```

This means:

* 10 × 10 = 100

---

## Modulus Operator (`%`)

Returns the **remainder** after division.

```javascript
9 % 8  // 1
16 % 8 // 0
```

* Useful for checking even/odd numbers
* Helps determine divisibility

---

## Order of Operations

JavaScript follows standard mathematical rules:

1. Parentheses
2. Exponents
3. Multiplication and Division
4. Addition and Subtraction

### Example Without Parentheses

```javascript
2 * 4 + 8 // 16
```

* Multiplication happens first

---

### Example With Parentheses

```javascript
2 * (4 + 8) // 24
```

* Parentheses override default order
* Expression inside parentheses is evaluated first

---

## Why Parentheses Matter

Parentheses allow you to:

* Control calculation order
* Avoid unexpected results
* Write clearer and more predictable code

---

## Common Math Operators Summary

| Operator | Description         |
| -------- | ------------------- |
| `+`      | Addition            |
| `-`      | Subtraction         |
| `*`      | Multiplication      |
| `/`      | Division            |
| `**`     | Exponentiation      |
| `%`      | Remainder (Modulus) |

---

## Key Takeaways

* JavaScript uses one number data type for integers and decimals
* Supports all common math operations
* Follows standard math order of operations
* Parentheses can change calculation results

Understanding numbers and math operators is essential for building logic, calculations, and real‑world applications in JavaScript.
