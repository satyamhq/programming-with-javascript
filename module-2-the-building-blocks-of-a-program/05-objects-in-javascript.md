# Introduction to Objects in JavaScript

## What Are Objects?

In programming, when you have groups of data that you would like to relate, you can assign them to something known as an **object**.

Objects help us:
- Group related data together
- Organize code more efficiently
- Make relationships between data clear to JavaScript

## Example: Building a Game Character

Let's say you're building a cookie-selling business game. You need to create a store manager character with certain traits.

### Initial Approach (Without Objects)

You might start by creating individual variables:
```js
var storeManagerMovementRange = 5;
var storeManagerSocialSkills = 8;
var storeManagerStreetSmarts = 7;
var storeManagerHelp = 10;
```

### Problems with This Approach

- Variable names are too long
- JavaScript doesn't understand these variables are related
- Code is not well-organized

## Building Objects with Dot Notation

You can create an empty object and add properties using dot notation:
```js
var storeManager = {};

storeManager.movementRange = 5;
storeManager.socialSkills = 8;
storeManager.streetSmarts = 7;
storeManager.help = 10;
```

Now JavaScript recognizes these traits as properties of the same object.

## Building Objects with Object Literals

You can also create objects by listing key-value pairs inside curly braces:
```js
var assistantManager = {
  movementRange: 3,
  socialSkills: 6,
  streetSmarts: 5,
  help: 8
};
```

### Key Points

- Each property is a **key-value pair**
- Properties are separated by commas
- Keys are followed by colons (`:`)
- The entire object is wrapped in curly braces (`{}`)

## Adding Properties to Existing Objects

After creating an object, you can add new properties using dot notation:
```js
storeManager.nextAchievement = "Sell 100 cookies";
assistantManager.nextAchievement = "Master the cash register";
```

## Summary

Objects are collections of related properties where each property is represented as a key-value pair:
- **Property key** = what was previously a variable name
- **Property value** = what was previously a variable's value

You can build objects in two ways:
1. **Dot notation** - create empty object, then add properties
2. **Object literals** - specify all properties at once with comma-delimited key-value pairs

Both methods allow you to organize related data efficiently and make your code more maintainable.
