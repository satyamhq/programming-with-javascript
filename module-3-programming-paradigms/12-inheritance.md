# Inheritance

## What is Inheritance?

In the real world, **inheriting** means acquiring possession, condition, or trade from past generations.

In JavaScript, **inheritance** also exists, and the inheritance model revolves around something called the **prototype**.

## What is a Prototype?

A **prototype** is often referred to as an original model from which other forms are developed.

In JavaScript:
- The prototype is an **object** that can hold properties to be shared by multiple other objects
- This is the basis of how inheritance works in JavaScript
- JavaScript implements a **prototypal inheritance model**

## Building a Prototype

### Example: Bird Object

```js
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
};
```

This object has three properties, each set to the boolean value of `true`.

## Using Object.create()

Using the `Object.create()` method, we can construct new objects that inherit from a prototype.

### Creating eagle1

```js
var eagle1 = Object.create(bird);

console.log(eagle1); // Output: {} (empty object)
```

Notice an **empty object** is logged to the console.

### Accessing Inherited Properties

However, since we used `Object.create()` to instantiate `eagle1`, we have access to all properties of the `bird` object:

```js
console.log(eagle1.hasWings);    // Output: true
console.log(eagle1.canFly);      // Output: true
console.log(eagle1.hasFeathers); // Output: true
```

**Output:**
```
eagle1 has wings: true
eagle1 can fly: true
eagle1 has feathers: true
```

## Creating Multiple Objects

With `Object.create()`, you can build as many objects as you want, and they will all have the `bird` object as their prototype.

### Creating eagle2

```js
var eagle2 = Object.create(bird);

console.log(eagle2.hasWings); // Output: true
```

The `eagle2` object also has access to the properties stored on the `bird` object as its prototype.

## Adding Objects with Different Behaviors

You can add different objects with different behaviors.

### Example: Penguin (Flightless Bird)

```js
var penguin1 = Object.create(bird);
```

Penguins are flightless birds, so we want to set the `canFly` property to `false`.

## Property Lookup Mechanism

JavaScript follows this lookup order:

1. **First:** Looks for the property on the object itself
2. **Then:** If not found, looks up to its prototype
3. **Stops:** Doesn't look further if it finds the property on the immediate object

This makes for a simple mechanism for **overriding inherited properties**.

## Overriding Inherited Properties

### Setting a Property on penguin1

```js
var penguin1 = Object.create(bird);
penguin1.canFly = false;

console.log(penguin1); // Output: {canFly: false}
```

**Output:**
```
{canFly: false}
```

### Accessing All Properties

```js
console.log(penguin1.hasFeathers); // Output: true (from prototype)
console.log(penguin1.canFly);      // Output: false (from penguin1 itself)
```

The `canFly` property is now set on the `penguin1` object itself, so it **overrides** the `canFly` property on the prototype.

## Important: Override Only Affects That Object

This override **only affects** the `penguin1` object:
- It doesn't change the prototype
- It doesn't change other eagle objects

### Verification

```js
console.log(bird.canFly);   // Output: true (prototype unchanged)
console.log(eagle1.canFly); // Output: true (other objects unchanged)
console.log(penguin1.canFly); // Output: false (only penguin1 affected)
```

## Complete Example

```js
// Create prototype
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
};

// Create objects inheriting from bird
var eagle1 = Object.create(bird);
var eagle2 = Object.create(bird);
var penguin1 = Object.create(bird);

// Override property on penguin1
penguin1.canFly = false;

// Test inheritance
console.log(eagle1.hasWings);    // true (inherited)
console.log(eagle2.canFly);      // true (inherited)
console.log(penguin1.hasFeathers); // true (inherited)
console.log(penguin1.canFly);    // false (overridden)
```

## How Property Lookup Works

### Diagram

```
penguin1 object
    |
    | Looks here first
    v
{canFly: false}
    |
    | If not found, looks here
    v
bird prototype
{hasWings: true, canFly: true, hasFeathers: true}
```

### Step-by-Step

When accessing `penguin1.canFly`:
1. JavaScript checks `penguin1` object → **Found: false**
2. Returns `false` (stops looking)

When accessing `penguin1.hasWings`:
1. JavaScript checks `penguin1` object → Not found
2. Checks `bird` prototype → **Found: true**
3. Returns `true`

## Object.create() vs Class Syntax

While it's possible to build inheritance using `Object.create()`, it's probably better to use **class syntax** for more complex objects and inheritance.

### Why Use Classes?

- **Better developer experience** in complex scenarios
- Cleaner, more readable syntax
- Still works with prototypes under the hood

### Class Example

```js
class Bird {
    constructor() {
        this.hasWings = true;
        this.canFly = true;
        this.hasFeathers = true;
    }
}

class Penguin extends Bird {
    constructor() {
        super();
        this.canFly = false;
    }
}

var penguin1 = new Penguin();
console.log(penguin1.canFly); // false
console.log(penguin1.hasWings); // true
```

This achieves the same result with clearer syntax!

## Key Concepts

### Prototype

An object that holds properties to be shared by other objects.

### Prototypal Inheritance

JavaScript's inheritance model where objects inherit from other objects (prototypes).

### Object.create()

Creates a new object with the specified prototype.

```js
var newObject = Object.create(prototypeObject);
```

### Property Override

Setting a property on an object shadows the same property on its prototype.

### Property Lookup Chain

JavaScript looks for properties on the object first, then its prototype.

## Summary

### What We Learned

1. **Inheritance** in JavaScript is based on prototypes
2. **Prototypes** are objects that hold shared properties
3. **Object.create()** creates objects with a specified prototype
4. **Property lookup** starts at the object, then checks the prototype
5. **Overriding properties** only affects that specific object
6. **Class syntax** is preferred for complex inheritance scenarios

### Inheritance Benefits

- **Code reusability:** Share properties and methods across objects
- **Flexibility:** Override inherited properties as needed
- **Efficiency:** Don't duplicate common properties

### Best Practice

For more complex objects and inheritance, use **class syntax** instead of `Object.create()`. Although it still uses prototypes under the hood, classes improve developer experience.

## Practice Challenge

Try creating your own prototype and objects:

```js
// Create a vehicle prototype
var vehicle = {
    hasEngine: true,
    hasWheels: true
};

// Create specific vehicles
var car = Object.create(vehicle);
var boat = Object.create(vehicle);

// Override properties
boat.hasWheels = false;

// Test it out!
```
