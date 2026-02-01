# Data Types in JavaScript

## Overview

Programming efficiently requires choosing the right type of data for each situation. Just like packing items into labeled boxes when moving, JavaScript provides different **data types** to store and work with information correctly.

JavaScript has **seven primitive data types**, each designed for a specific purpose.

---

## What Is Data?

* **Data** refers to the values used in a program
* Different values behave differently
* Choosing the correct data type helps programs work correctly and efficiently

---

## Primitive Data Types in JavaScript

JavaScript includes the following **seven primitive data types**:

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. BigInt
7. Symbol

---

## String Data Type

### Description

* Used to store **text values**
* Must be enclosed in **single (' ') or double (" ") quotes**

### Examples

```javascript
var name = "Best Guitar";
var description = "The best guitar around";
```

### Use Cases

* Titles
* Names
* Descriptions

Strings can store an almost unlimited combination of characters.

---

## Number Data Type

### Description

* Used to store **numerical values**
* Written without quotes

### Example

```javascript
var price = 375;
```

### Use Cases

* Prices
* Calculations
* Quantities

The number data type supports a wide range of values, sufficient for most common calculations.

---

## Boolean Data Type

### Description

* Has only **two values**: `true` or `false`

### Example

```javascript
var isAvailable = true;
```

### Use Cases

* Decision making
* Conditions and comparisons

---

## Null Data Type

### Description

* Represents the **intentional absence of a value**
* Has only one value: `null`

### Example

```javascript
var selectedItem = null;
```

### Use Cases

* Resetting values
* Indicating that a value is intentionally empty

---

## Undefined Data Type

### Description

* Indicates a variable has been declared but **not assigned a value**
* Has only one value: `undefined`

### Example

```javascript
var discount;
```

### Use Cases

* Variables waiting for a value
* Uninitialized data

---

## BigInt Data Type

### Description

* Introduced in **ES6**
* Used for very large numbers beyond the `number` data type limit

### Example

```javascript
var bigNumber = 123456789012345678901234567890n;
```

### Use Cases

* Large calculations
* High-precision numerical data

---

## Symbol Data Type

### Description

* Used to create **unique identifiers**
* Each symbol value is guaranteed to be unique

### Example

```javascript
var id = Symbol("id");
```

### Use Cases

* Unique object keys
* Avoiding naming collisions

---

## Choosing the Right Data Type

| Data Type | Best Used For                |
| --------- | ---------------------------- |
| String    | Text and descriptions        |
| Number    | Prices and calculations      |
| Boolean   | Decisions and conditions     |
| Null      | Intentional absence of value |
| Undefined | Unassigned variables         |
| BigInt    | Very large numbers           |
| Symbol    | Unique identifiers           |

---

## Key Takeaways

* JavaScript has seven primitive data types
* Each data type serves a specific purpose
* Using the correct data type improves clarity and performance
* Understanding data types is essential for writing effective JavaScript

Knowing when and how to use each data type will help you write cleaner, more reliable code.
