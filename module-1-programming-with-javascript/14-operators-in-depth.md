# Operators in Depth (JavaScript)

## Overview

Operators allow you to perform calculations, compare values, combine data, and control logic flow in JavaScript. Understanding **operator types**, **precedence**, and **associativity** helps you write correct and predictable code.

---

## 1. Additional Operators

### Logical Operators

| Operator | Name        | Description                          |            |                                            |
| -------- | ----------- | ------------------------------------ | ---------- | ------------------------------------------ |
| `&&`     | Logical AND | True if **both** conditions are true |            |                                            |
| `        |             | `                                    | Logical OR | True if **at least one** condition is true |
| `!`      | Logical NOT | Reverses a boolean value             |            |                                            |

---

### Logical AND (`&&`)

Used to check if multiple conditions are true.

```javascript
var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17); // true
```

Rules:

```javascript
true && true   // true
true && false  // false
false && true  // false
false && false // false
```

---

### Logical OR (`||`)

Used when at least one condition must be true.

```javascript
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17); // true
```

Rules:

```javascript
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

---

### Logical NOT (`!`)

Flips a boolean value.

```javascript
var petHungry = true;
console.log(!petHungry); // false
```

Reassigning the flipped value:

```javascript
petHungry = !petHungry;
```

---

### Modulus Operator (`%`)

Returns the remainder of division.

```javascript
22 % 5 // 2
16 % 8 // 0
```

---

## Equality and Inequality Operators

| Operator | Description                     |
| -------- | ------------------------------- |
| `==`     | Equal (value only)              |
| `===`    | Strict equal (value + type)     |
| `!=`     | Not equal (value only)          |
| `!==`    | Strict not equal (value + type) |

Examples:

```javascript
5 == "5"   // true
5 === "5"  // false
5 != "5"   // false
5 !== "5"  // true
```

---

## 2. Using the `+` Operator

### String Concatenation

```javascript
"inter" + "net"      // "internet"
"note" + "book"     // "notebook"
```

---

### Combining Strings and Numbers

```javascript
365 + " days"  // "365 days"
1 + "2"        // "12"
```

This happens due to **type coercion**, where JavaScript converts numbers into strings.

---

## Addition & Concatenation Assignment (`+=`)

### Numeric Accumulation

```javascript
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9
```

---

### String Accumulation

```javascript
var story = "";
story += "Once";
story += " upon";
story += " a";
story += " time";
story += "...";
console.log(story); // "Once upon a time..."
```

---

## Operator Precedence

Determines **which operator runs first**.

```javascript
1 * 2 + 3 // 5
```

Multiplication has higher precedence than addition.

---

## Operator Associativity

Determines evaluation order **when precedence is the same**.

### Types

* Left-to-right
* Right-to-left

Examples:

```javascript
var num = 10; // right-to-left associativity
5 > 4 > 3;   // false
```

Explanation:

* `5 > 4` → true
* `true > 3` → false (true coerced to 1)

---

## Key Takeaways

* Logical operators control conditional logic
* Equality operators differ by value vs type checking
* `+` works for both numbers and strings
* `+=` simplifies accumulation
* Operator precedence affects evaluation order
* Associativity matters when operators share precedence

A strong understanding of operators makes your JavaScript code more reliable, efficient, and predictable.
