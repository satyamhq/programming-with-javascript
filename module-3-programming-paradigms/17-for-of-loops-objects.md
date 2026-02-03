# For...of Loops and Objects in JavaScript

## Overview

The `for...of` loop is designed to iterate over iterable objects like arrays, strings, sets, and maps. However, objects are not directly iterable, which requires special techniques to loop over them.

## The Problem: Objects Are Not Iterable

You cannot use a `for...of` loop directly on an object:

```js
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
```

**Error:**
```
Uncaught TypeError: car is not iterable
```

## Arrays Are Iterable

Unlike objects, arrays work perfectly with `for...of` loops:

```js
const colors = ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color);
}
```

**Output:**
```
red
orange
yellow
```

The `for...of` loop iterates over the values in an array (or other iterable objects), providing a clean and readable way to loop through each element.

## The Solution: Built-in Object Methods

To use a `for...of` loop with objects, you first need to convert the object into an iterable form (like an array) using these three built-in methods:

### 1. Object.keys()

Returns an array of the object's property keys:

```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed', 'color']
```

### 2. Object.values()

Returns an array of the object's property values:

```js
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
```

### 3. Object.entries()

Returns an array of arrays, where each inner array contains a key-value pair:

```js
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
// [ ['speed', 400], ['color', 'magenta'] ]
```

The structure looks like this:
```js
[
    [propertyKey, propertyVal],
    [propertyKey, propertyVal],
    // ...etc
]
```

## Looping Over Objects with For...of

Now that you can convert objects to arrays, you can use `for...of` to iterate over them:

```js
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}
```

**Output:**
```
price : 50
color : beige
material : cotton
season : autumn
```

### Understanding the Bracket Notation

The key part of this syntax is `clothingItem[key]`. This uses bracket notation to dynamically access property values based on the key variable.

## Dynamic Property Access

Bracket notation allows you to access object properties dynamically using variables:

```js
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }

    var drone = {
        speed: 15,
        color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
```

This function randomly accesses either the `speed` or `color` property:
- Sometimes outputs: `15`
- Sometimes outputs: `orange`

The expression `drone[dynamicKey]` evaluates to either `drone["speed"]` or `drone["color"]` based on the random value.

## For...in Loop (Alternative)

The `for...in` loop is specifically designed to iterate over object keys:

```js
const car = { speed: 100, color: "blue" };
for (let key in car) {
    console.log(key); // Output: speed, color
}
```

### Key Differences

| Feature | for...of | for...in |
|---------|----------|----------|
| Iterates over | **Values** | **Keys** (property names) |
| Works on | Arrays, strings, sets, maps | Objects, arrays |
| Direct use on objects | ❌ No (requires conversion) | ✅ Yes |
| Best for | Iterable collections | Object properties |

## Practical Examples

### Example 1: Logging All Keys and Values

```js
const product = {
    name: 'Laptop',
    price: 999,
    brand: 'TechCo'
}

for(const key of Object.keys(product)) {
    console.log(`${key}: ${product[key]}`);
}
```

### Example 2: Using Object.entries()

```js
const user = {
    username: 'john_doe',
    age: 30,
    email: 'john@example.com'
}

for(const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}
```

### Example 3: Getting Only Values

```js
const scores = {
    math: 95,
    english: 88,
    science: 92
}

for(const score of Object.values(scores)) {
    console.log(`Score: ${score}`);
}
```

## Summary

Key takeaways from this lesson:

- Objects are not iterable and cannot be used directly with `for...of` loops
- Arrays and other iterables work naturally with `for...of` loops
- Use `Object.keys()`, `Object.values()`, or `Object.entries()` to convert objects into iterable arrays
- Bracket notation `object[key]` allows dynamic property access
- `for...in` loops are designed specifically for iterating over object keys
- Each loop type has its place and is useful in different situations

By combining these built-in methods with `for...of` loops, you can effectively iterate over any object's properties and values.
