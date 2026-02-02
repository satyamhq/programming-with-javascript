# Booleans in JavaScript

## Overview

The **Boolean** data type is used to represent truth values in JavaScript. It is a foundational concept because it allows programs to make decisions based on conditions.

A Boolean value can only be one of two things:

* `true`
* `false`

---

## What Is a Boolean?

* A Boolean represents whether a statement is **true or false**
* It is commonly produced by **comparison operators**
* There are no "maybe" values—only true or false

---

## Comparing Numbers

JavaScript can compare values using comparison operators.

### Less Than (`<`)

```javascript
1 < 2 // true
```

### Greater Than (`>`)

```javascript
1 > 2 // false
```

Every comparison always results in a Boolean value.

---

## Equality Operators

### Equality (`==`)

* Checks **value only**
* Ignores data type

```javascript
1 == 2        // false
100 == "100"  // true
```

Even though `100` (number) and `"100"` (string) are different types, the result is `true` because the values match.

---

### Assignment vs Equality

* `=` → Assignment operator
* `==` → Equality comparison

```javascript
var score = 100; // assignment
score == 100;    // comparison → true
```

---

## Strict Equality Operator (`===`)

* Checks **both value and type**
* More precise and predictable

```javascript
100 === "100" // false
100 === 100    // true
```

The comparison fails when types are different.

---

## Inequality Operators

### Not Equal (`!=`)

* Opposite of `==`
* Checks value only

```javascript
1 != 1 // false
```

---

### Strict Not Equal (`!==`)

* Opposite of `===`
* Checks both value and type

```javascript
1 !== "1" // true
```

This returns `true` because a number and a string are different types.

---

## Summary of Boolean Operators

| Operator | Meaning                     |
| -------- | --------------------------- |
| `<`      | Less than                   |
| `>`      | Greater than                |
| `==`     | Equal (value only)          |
| `===`    | Strict equal (value + type) |
| `!=`     | Not equal                   |
| `!==`    | Strict not equal            |

---

## Why Booleans Matter

Booleans are used to:

* Control program flow
* Make decisions
* Validate conditions
* Compare values

They are essential for logic, conditions, and decision-making in JavaScript.

---

## Key Takeaways

* Boolean values are `true` or `false`
* Comparisons always return a Boolean
* `==` compares values only
* `===` compares value and type
* Inequality operators check when values are not the same

Booleans are a core building block of JavaScript and will appear frequently as you continue learning.
