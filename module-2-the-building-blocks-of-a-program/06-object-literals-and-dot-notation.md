## Object Literals and the Dot Notation

By the end of this reading, you'll be able to:
- Explain one of the three common ways to build objects (using the object literal notation)
- Outline the common way to add new properties to objects (or update existing properties) using the dot notation

## What Are Object Literals?

One of the most common ways of building an object in JavaScript is using the **object literal syntax**: `{}`.

Object literals are a simple way to store and organize data in JavaScript. They are useful for:
- **Grouping related data**: You can keep related information together in one object
- **Representing real-world things**: For example, you can use objects to store details about a user or a product
- **Easy to change**: You can add, remove, or update data in an object easily

In short, object literals help make your code cleaner and easier to work with.

## Creating an Empty Object

To access an object literal, it is very common to assign it to a variable:
```js
var user = {}; // create an object
```

Now, the variable `user` holds the object, and you can add properties and manipulate it in various ways.

## Creating Objects with Properties

You can immediately build an entire object using the object literal syntax by specifying the object's properties as key-value pairs:
```js
// creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
```

The beauty of this syntax is that it's so easily readable.

### Two Steps to Create an Object

1. Declare a new variable and assign an object literal to it: `var assistantManager = {}`
2. Assign values to each of the object's keys using the assignment operator `:`

## Example: Building a Table Object
```js
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
```

### Accessing the Object

You can console log the entire object:
```js
console.log(table); // display the object in the developer console
```

**Output:**
```js
{legs: 3, color: 'brown', priceUSD: 100}
```

### Accessing Individual Properties

You can console log any individual property using dot notation:
```js
console.log(table.color); // 'brown'
```

## Building More Objects

Using this "syntax recipe", you can build any other object in a similar way:
```js
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
```

## Alternative Approach: Dot Notation

You can first save an empty object literal to a variable, then use dot notation to declare new properties on the fly:
```js
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
```

## Combining Both Approaches

You can combine object literal syntax with dot notation:
```js
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}

house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
```

## Updating Existing Properties

This flexibility means you can update already existing properties, not just add new ones:
```js
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
```

## Summary

- **Object literals** (`{}`) are one of the most common ways to create objects in JavaScript
- You can create objects with properties all at once or start with an empty object
- **Dot notation** allows you to add new properties or update existing ones
- Objects are flexible and easy to modify after creation
