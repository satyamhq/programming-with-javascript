# Spread Operator

## Introduction

The spread operator is another of the many great new additions that came to the JavaScript language in its ES6 update. It is the shortest and simplest method to copy the properties of an object onto a newly created object.

Think of the spread operator as a **magical multi-purpose tool** that can spread out array items and join objects together.

**Note:** The spread operator is characterized by **three dots** (`...`)

## Basic Example Without Spread Operator

Let's first build an array and then call the items with a basic function.

### Creating the Array

```js
let top3 = [
    "Colosseum",
    "Trevi Fountain",
    "Vatican City"
];
```

### Creating a Function

```js
function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3);
}
```

### Calling the Function (The Manual Way)

```js
showItinerary(top3[0], top3[1], top3[2]);
```

### The Problem with Larger Arrays

What if I extended my function to have seven places that I want to visit?

```js
let top7 = [
    "Colosseum",
    "Trevi Fountain",
    "Vatican City",
    "Pantheon",
    "Roman Forum",
    "Spanish Steps",
    "Piazza Navona"
];
```

Now I would have to call the function like this:

```js
showItinerary(
    top7[0],
    top7[1],
    top7[2],
    top7[3],
    top7[4],
    top7[5],
    top7[6]
);
```

While this code will work, it seems a bit impractical.

## Using the Spread Operator

The spread operator simplifies things significantly!

### Syntax

```js
showItinerary(...top7);
```

That's it! 

### How It Works

I use the spread operator by placing it in front of an array which is passed to the `showItinerary` function.

The **advantage** of this approach is that you don't have to list each individual member of the array that you want to pass to your function.

The syntax is:

- Clear
- Concise
- Easy to type

### Example with the top3 Array

```js
showItinerary(...top3);
```

### Output

```
Visit Colosseum
Then visit Trevi Fountain
Finish with a visit to Vatican City
```

## Benefits of the Spread Operator

- **Simplifies code**: No need to reference each array element individually
- **More readable**: Clear intent with minimal syntax
- **Flexible**: Works with arrays of any length
- **Less error-prone**: No risk of missing or duplicating array indices

## Additional Use Cases

The spread operator can also be used for:

### Copying Arrays

```js
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
```

### Combining Arrays

```js
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
// Result: [1, 2, 3, 4, 5, 6]
```

### Copying Objects

```js
let originalObject = { name: "John", age: 30 };
let copiedObject = { ...originalObject };
```

### Combining Objects

```js
let obj1 = { name: "John" };
let obj2 = { age: 30 };
let combinedObject = { ...obj1, ...obj2 };
// Result: { name: "John", age: 30 }
```

## Summary

The spread operator (`...`) is a powerful ES6 feature that:

- Spreads out array items
- Copies properties of objects
- Simplifies function calls with array arguments
- Makes code more concise and readable

It's characterized by three dots and is one of the most useful tools in modern JavaScript development.
